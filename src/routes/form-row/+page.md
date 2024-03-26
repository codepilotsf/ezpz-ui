<script>
  import { Checkbox, CheckboxGroup, FormRow, Textarea, Input } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
</script>

# FormRow

A `FormRow` is a simple wrapper for placing multiple form elements in a row within a form.

### Example

```svelte
<script>
  import { 
    Checkbox, 
    CheckboxGroup, 
    FormRow, 
    Input, 
    Textarea 
  } from '$lib/ui';
</script>

<FormRow>
  <Input label="First Name" />
  <Input label="Last Name" />
</FormRow>

<FormRow>
  <Textarea label="Bio" />
  <CheckboxGroup label="Preferences">
    <Checkbox label="Likes Spam" />
    <Checkbox label="Welcomes Telemarketers" />
  </CheckboxGroup>
</FormRow>
```
<FormRow>
  <Input label="First Name" />
  <Input label="Last Name" />
</FormRow>

  <Input label="Last Name" />
<FormRow>
  <Textarea label="Bio" />
  <CheckboxGroup label="Preferences">
    <Checkbox label="Likes Spam" />
    <Checkbox label="Welcomes Telemarketers" />
  </CheckboxGroup>
</FormRow>

---

<Table name="FormRow" type="props">
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

<Table name="FormRow" type="css">
  <tr>
    <td><code>--ui-form-row-gap</code></td>
    <td>Numeric</td>
    <td><code>3px</code></td>
    <td>Flex gap between child elements of FormRow</td>
  </tr>
</Table>





