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



---



### Major revelation --- Override with Svelte Style Props!!

Svelte supports a shorthand for wrapping a component in a div with style props set like this:
```Svelte
<Form --ui-border-color="#fff">
  ...
</Form>
```

This will output the following:

```svelte
<div style="--ui-border-color=#fff">
  <Form>
    ...
  </Form>
</div>
```

...and that means that everything inside that form will use the new value. 

This opens a lot of doors! Instead of using props like `color` or `background` or targeting inner things like `labelColor`, etc – these can all just be CSS variables which can be set globally or overridden locally. 

For example, to set the text color of an avatar, instead of `<Avatar color="blue">`, we can just override the CSS variable with `<Avatar --ui-avatar-color="blue">` .  Even though it's slightly more verbose, the tradeoff is that the overall system is much simpler and more flexible. For example, if I have a bunch of buttons and I want all of them to have a purple background and yellow text, instead of sending those as props to every button individually, I can just set the CSS vars on a parent:

```Svelte
<div style="--ui-button-background: purple; --ui-button-color: yellow;">
	<Button label="1" />
  <Button label="2" />
  <Button label="3" />
  <Button label="4" />
  <Button label="5" />
</div>
```

...this also means you could define global styles to be applied to LIB/UI components. For example, your default forms might be light. But there may be a couple instances of dark forms with light color labels, borders, etc.

```css
// app.pcss
form.dark {
  --ui-border-color: white;
  --ui-label-color: white;
  --ui-error-color: orange;
  --ui-note-color: white;
  --ui-input-background: darkgray;
  --ui-input-color: white;
}
```



Then wheneven you want a dark form...

```svelte
<Form class="dark">
  ...
</Form>
```



### This is so good!

Okay so let's make a hard and fast rule: **All style modifications are declared with CSS variables – not props!** 

The only sort of exception to this rule is alert types which will by default use for example `ui-info-light` and `ui-info-dark` for `type="info"`. But actually, this still doesn't really break the rule because those too are set as CSS variables which could be overridden ad hoc.

The main change to the current implementation is totally getting rid of all `color` and `background` props. 

### But there's a problem

I *really* want to use a standard set of CSS props which can be overridden with specificity. 

So instead of:

```css
--ui-button-background: blue;
```

I'd rather just use CSS to set that as:

```css
.lib-ui.button {
  --ui-background: blue;
}
```

Oh crap!!!

But then my editor thing is no longer editing pure CSS variables – it has to write CSS too. Maybe that's okay? Definitely not as simple. Hmm....

### The compromise...

Okay so most of the time, we'll just want to set globals and component level stuff. For that, let's go with the longer names which can be declared at the `:root` level. For custom classes, I think we just need to document that due to the nature of how Svelte style-props work, they won't override class-level specificity – but this should be pretty rare anyway. I think it's unlikely that you'll create a special class for example for your own custom button, then override one instance of your special class. You could instead just make another special class.

1. Set global level like `:root { --ui-radius: 3px }`
2. Set component level like `:root { --ui-alert-radius: 10px }`
3. Set class level like `.lib-ui.alert.square { --ui-alert-radius: 0 }`
4. Set one-off styles like `<Alert --ui-alert-radius="1px" />`
5. ...but remember that class-level declarations will override one-offs due to the nature of Svelte style-props. So the above example is guaranteed to work. But if you had already declared a `square` class like in #3, then `<Alert class="square" --ui-alert-radius="100%" />` – In this case, the class declartion beats out the style-prop.

For docs, I think this can be handled pretty simply.

- Global level
- Component level
- Instance level

I can also highlight the ability to create custom classes with the important caveat that these have higher specificity than inline style-props.

