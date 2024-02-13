New plan for themes, colors, variants, etc.

You can pass a `theme` as one of the following:
'default', 'accent', 'info', 'warning', 'success, 'error'

Alternatively, `color` can be passed as an arbitrary color name or hex value to set the foreground color and `bg-color`
can also be passed for those components that have a background color.

Trying to pass both a `theme` and `color` or `bg-color` will throw an error.

These makes `type` now available to be used for other purposes like `type="button"` or `type="dot-row"`.

The `variant` prop is also now available should we need yet another prop like that.



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
3. `$form`, `$errors`, and `$contraints` are stores which can be passed into form fields
4. `enhance` is the SuperForms modified version of the Svelte version

So basically, we validate against a schema on the backend, and pass a superform object to the front-end either on load or on a form submission (action). This object gets destructured and tells us whether our data is valid against the schema, and gives us all our form data and errors as separate objects.



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

The backend `+page.server.js` would look like this:

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
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return { form };
  }
};
```

