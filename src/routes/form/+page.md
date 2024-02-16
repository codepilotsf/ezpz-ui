<script>
  import { Form, Input, Button } from '$lib/ui';
  import Tables from './Tables.svelte';
</script>

# Form

Use `Form` as a convenient shorthand for creating a form with a `form` tag and useful defaults. By
default, the form will be submitted using the `POST` method and `use:enhance` to prevent the default
form submission. The `Form` component also accepts a `superform` prop to which you can pass form
data to be validated with the SuperForms and shared through context with child form elements
(requires the `superforms` package to be installed).

### Example

```svelte
<script>
  import { Form } from '$lib/ui';
</script>

<Form>
  <!-- Form elements here -->
</Form>
```

#### Output

```html
<form class="lib-ui" method="POST" use:enhance>
  <!-- Form elements here -->
</form>
```
---

### SuperForms

[SuperForms](https://superforms.rocks) is a form validation library for SvelteKit that provides a
simple and flexible way to validate form data in a very SvelteKit-friendly way. It does not get
involed at all in the rendering of the form. Instead, SuperForms validates your form data against a
schema using a standard validation library like Zod and returns store objects including `$form` (the
form data), `$errors` (validation errors), and `$constraints` (HTML5 constraints such as
`required`). Each of these stores is an object with key value pairs for each form field. For
example, if you have a form field named `email`, you can access the value of that field with
`$form.email`, the errors with `$errors.email`, and the constraints with `$constraints.email`.

You can use SuperForms directly with LIB/UI components by following the SuperForms documentation and
that will work fine. But if you're using SuperForms with a `Form` component, you can pass the
superform result from the SvelteKit loader or form action to the `superform` prop and the `Form`
component will take care of getting all the form data, errors, and constraints into context for you.

#### Understanding SuperFormas Backend and Frontend Integration

Starting on the backend, for example a `+page.server.js` file, you can use the `superValidate`
function to validate your form data against a Zod schema. The `superValidate` function returns a
SuperForms object which you can return to the frontend as usual and then receive it in the `data`
prop of the page.

#### Backend Example

```js
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

// Zod Schema
const schema = z.object({
  name: z.string(),
  email: z.string().email()
});

export const actions = {
  default: async (event) => {
  const form = await superValidate(zod(schema));
  // If the form is not valid, return a 400 error with the form data
  if (!form.valid) {
    return fail(400, { form });
  }
  // Otherwise just return the form data
  return { form };
  }
};

---

<Tables />


