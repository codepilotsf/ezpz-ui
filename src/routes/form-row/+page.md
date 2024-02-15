<script>
  import { Checkbox, CheckboxGroup, FormRow, Textarea, Input } from '$lib/ui';
  import Tables from './Tables.svelte';
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
<FormRow>
  <Textarea label="Bio" />

  <CheckboxGroup label="Preferences">
    <Checkbox label="Likes Spam" />
    <Checkbox label="Welcomes Telemarketers" />
  </CheckboxGroup>
</FormRow>

---

<Tables />


