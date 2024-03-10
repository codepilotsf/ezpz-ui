### Rethinking Styles

My new thinking is that there's no style.css to be imported. Instead, I'll set local styles in each component which will have lower CSS specificity than `.lib-ui { ... }`. Then the docs will show you how to override these hardcoded defaults by simply defining CSS vars in your global CSS. 

~~I'm also not loving the concept of `scheme` anymore. Instead of `scheme="danger"`, let's use the more verbose but less magical, `color="danger"`~~ – oh wait! The alerts use scheme to determine icons too. Okay so only the Alert and Button components use schemes right now – let's change that to *only* Alerts. This might later be extended to include modals or dialogs. But for Buttons, it's simple enough to pass in `class="bg-danger"` – if we're going to embrace Tailwind, then let's do that!

Actually, that's another thing I was thinking about. How to style internal elements – like the style of Label text of an Input. If we want to allow Tailwind classes, those have to be in a `class=""` attribute or Tailwind won't generate the classes. One idea worth considering would be to allow slots to be passed in just for style.

```svelte
<Input label="Full name">
  <Style slot="labelStyle" class="text-red-500" />
</Input>
```

Yuck. It's an interesting idea but it's verbose and would require wrapping the Label in a Label style.

Okay it turns out, you can actually pass in tw classes as props and the *do* get generated. But it's not idea. For one thing, when the prop name isn't `class`, you don't get any tw autocomplete stuff. Tailwind Fold won't work. And classes without an important flag may get clobbered by the regular css variables.

##### So what now?

Let's go back to basics. Each component has its own styles like default colors, border radius, etc. So basically we'll apply the default settings as hard-coded (not DRY) values across all components. If you want to override those, you do so by setting CSS variables within the `.lib-ui` scope. Hmm... there's also opportunity for overriding individual components styles by using more specific scope. 

Whoa... maybe the whole schemes concept is literally just CSS with no component-level JS logic needed at all?

```css
.lib-ui.button[scheme='danger'] {
  background-color: var(--ui-danger);
  color: #fff;
}
```

This also means you can extend stuff like creating your own scheme.

```css
.lib-ui.button[scheme='feminine'] {
  backround-color: pink;
  color: #fff;
}
```

Okay this is pretty wonderful actually. It means that `theme.css` is no longer just variables. But it opens up a world of customization. I can style however I want for defaults within the component. But as long as there are rules that start with `.lib-ui`, those will always take precedence. This also solves for targeting internal components like Input labels.

The great thing about this is that we don't have to make a CSS variable for every single imaginable property that the dev might ever need. Use any CSS you want and it will be applied (overriding defaults if they exist).

It really simplifies the components too. For example, the sizes available for buttons or avatars or whatever. Maybe those sizes aren't exactly what you want. No problem. Just edit the CSS. Another hugely cool aspect of this is that it favors global changes instead of per instance. If I want a button which has an unusual bg-color and is fully rounded – it's likely that I'll want to use that button throughout my app. So I can just give it custom scheme name and write my own styles – then it's available everywhere with a single prop like `scheme="razzle".`

### So maybe this *actually is* an NPM installable?

If there are CSS hooks to kinda go nuts with tweaking stuff, you could – no actually maybe not. I still prefer the transparency. This new approach will definitely make it less likely that you'll need to edit components directly though – which is awesome.

### CSS Variable FALLBACK!!

Turns out I don't need to use specificity at all for CSS variables! So we can just set component level values *only if* no CSS variable has been set like this:

```css
border-radius: var(--ui-border-radius, 3px);
```

### Okay but maybe the CSS stuff should stay in the component?

Even though it means we'll be editing components directly more often, it definitely keeps things tidier to not have all the different schemes for Alert and Button and all the different sizes for Avatar and Spinner *all* at the top level in a separate (required) CSS file. It's better to put those in the component. And still so much cleaner to implement as CSS instead of JS logic.



Okay got it!!



---

### SuperForms integration

I just went through the basic tutorial and I feel like I have a good understanding of the basics and an idea for how to kind of beautifully integrate it with LIB/UI.

##### Basic concepts

###### Back-end

1. In a `+page.server.js` file, create a zod schema at the top level *outside* of any `load()` or `actions` functions.
2. Pass in an optional first arg with default data (like for an edit page), along with the schema to `superValidate()`.
3. Return the parsed result as `{ form }`.

###### Front-end

1. `export let data` to get the loader or actions data
2. Pass `form.data` into `superForm()` and destructure the result into:
   `{ form, errors, constraints, enhance }` 
3. `$form`, `$errors`, and `$constraints` are stores which can be passed into form fields
4. `enhance` is the SuperForms modified version of the Svelte version

So basically, we validate against a schema on the back-end, and pass a superform object to the front-end either on load or on a form submission (action). This object gets destructured and tells us whether our data is valid against the schema, and gives us all our form data and errors as separate objects.



##### How to make this even Super-er.

```svelte
<script>
  import { Form, Input } from '$lib/ui';
  let { data } = $props();
</script>

<Form superform={data.form} action="?/foo">
  <Input label="Name" name="name" />
  <Input label="Email" name="email" />
  <Button label="Submit" />
</Form>
```

The idea is to let the `<Form>` component use `data.form` to set `superform` to context. Then any child form elements can check to see if `superform` is available as context and if so, it will look for its own `name` value as properties of `$form`, `$errors`, and `$constraints` and will user those values by default.

The back-end `+page.server.js` would look like this:

```js
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

const schema = z.object({
  name: z.string(),
  email: z.string().email()
});

export const load = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

export const actions = {
  foo: async ({ request }) => {
    const form = await superValidate(request, zod(schema));

    if (!form.valid) {
      return fail(400, { form });
    }
    // Do something with form.data (save to db? send to API? etc.)
    return { form };
  }
};
```

