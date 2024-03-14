<script>
  import { Form, Input, Button } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';

  let { data } = $props();  
</script>

# Form

Use `Form` to create a `<form>` element which expects a `superform` object. By default, the form
will be submitted using the `POST` method and SuperForm's custom `use:enhance` to prevent the
default form submission. The `superform` prop makes it easy to get form data, errors, and
constraints which are shared through context with child form elements.

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

[SuperForms](https://superforms.rocks) is a form validation library for SvelteKit created by Andreas
Söderlund. It provides a simple and flexible way to validate form data in a very SvelteKit-friendly
way without getting involved at all in the *rendering* of the form. Instead, SuperForms validates
your form *data* against a schema using a standard validation library like Zod and returns store
objects including `$form` (the form data), `$errors` (validation errors), and `$constraints` (HTML5
constraints such as `required`). Each of these stores is an object with key/value pairs for each
form field. For example, if you have a form field named `email`, you can access the value of that
field with `$form.email`, the errors with `$errors.email`, and the constraints with
`$constraints.email`.

You can use SuperForms directly with LIB/UI components by following the SuperForms documentation and
that will work fine. But if you're using SuperForms with a `Form` component, you can simply pass the
superform object returned from the SvelteKit loader or form action to the `superform` prop and the
`Form` component will take care of getting all the form data, errors, and constraints into context
for you.

#### Understanding SuperForms Back-end and Front-end Integration

Starting on the back-end, for example a `+page.server.js` file, you can use the `superValidate`
function to validate your form data against a Zod schema. The `superValidate` function returns a
SuperForms object which you can return to the front-end as usual and then receive it in the `data`
prop of the page.

On the front-end, it's helpful to understand how SuperForms works with a standard form element
before using it with the `Form` component. 

So let's first look at how that works.

#### `+page.svelte` (using SuperForms with a plain `<form>` element)
  
```svelte
<script>
  // First, import your form widgets and the superForm function
  import { Form, Input, Button } from '$lib/ui';
  import { superForm } from 'sveltekit-superforms';

  // Then, get the form data from +page.server.js
  let { data } = $props();

  // Now, use the superForm function to get the form, errors, and constraints
  const { form, errors, constraints } = superForm(data.form);
</script>

<form method="POST">
  <Input 
    label="Name" 
    name="name" 
    bind:value={$form.name} 
    error={$errors.name}
    {...$constraints.name}
  />
  <Input
    label="Email" 
    name="email" 
    bind:value={$form.email} 
    error={$errors.email}
    {...$constraints.email}
  />
  <Button>Submit</Button>
</form>
```
As we can see, we're expecting the `data` prop to contain a `form` object which we pass to the
`superForm` function. This function returns an object with `$form`, `$errors`, and `$constraints` as
Svelte stores. We can then use these stores to bind the form data to values, display errors, and
apply constraints. And that works just fine. But it's a bit verbose and repetitive. So let's see how
we can use the `Form` component to make this a bit simpler.


#### `+page.svelte` (using the Form component)
  
```svelte
<script>
  import { Form, Input, Button } from '$lib/ui';
  let { data } = $props();
</script>

<Form superform={data.form}>
  <Input label="Name" name="name" />
  <Input label="Email" name="email" />
  <Button>Submit</Button>
</Form>

```

By simply passing the `superform` object to the `Form` component, the `$values`, `$errors`, and
`$constraints` are set to context, making them available to child components. LIB/UI form elements
such as `Input`, `Select`, and so on will look for these values in context and apply them to the
element if present. This means that on failed validation for example, your LIB/UI form elements will
automatically be bound to their respective form data, errors, and constraints.

So how does this work on the back-end? Let's take a look at that.

#### Backend Example: `+page.server.js`

```js
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

// Define our Zod Schema at the top level
// (outside of load or actions)
const schema = z.object({
  name: z.string(),
  email: z.string().email()
});

// Export a load function to supply initial form data.
export const load = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

// Export a default action (or named actions if needed) 
// to handle form submissions.
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));
    // If the form is not valid, return a 400 error with the form data.
    if (!form.valid) {
      return fail(400, { form });
    }
    // Form is valid. So here you can log the user in, save data to db, 
    // redirect to a success page, or whatever you need to do.
    // ...
  }
};
```

---

### Example Form with Failed SuperForms Validation

Here's how it looks in action. With the `+page.server.js` from above, if we submit the form with
invalid data, we'll get the form data, errors, and constraints automatically applied to the form
elements.

```svelte
<Form superform={data.form}>
  <Input label="Name" name="name" />
  <Input label="Email" name="email" />
  <Button>Submit</Button>
</Form>
```

<Form superform={data.form} --ui-border-color="yellow";>
  <Input label="Name" name="name" />
  <Input label="Email" name="email" />
  <Button>Submit</Button>
</Form>

---

<!-- Properties Table -->
<h3>Form Properties</h3>
<Table name="Form" type="props">
  <tr>
    <td><code>superform</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>A SuperForm object typically passed from `+page.server.js`</td>
  </tr>
  <tr>
    <td><code>class</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>CSS classes declared in global scope can be applied to the outermost element</td>
  </tr>
  <tr>
    <td><code>...</code></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td
      >Additional props will be passed through to the HTML element enabling support for things
      like
      <code>on:click</code>, etc</td
    >
  </tr>
</Table>


