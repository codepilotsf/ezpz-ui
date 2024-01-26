<script>
	import { Input } from '$lib/ui';
  import Tables from './Tables.svelte';
  let name = '';
</script>

# Input

Use Input for form inputs including text, password, email, url, and search.

---

### Example

Type in the field to see the value change.

```svelte
<script>
  import { Input } from '$lib/ui';
  let name = '';
</script>

<Input 
  name="name" 
  label="Name" 
  placeholder="Jane Doe"
  bind:value={name} 
/>
```
<Input 
  name="name" 
  label="Name" 
  placeholder="Jane Doe"
  bind:value={name} 
/>

---

### Label

A `label` prop let's you define a simple String to be used as the checkbox label.

```svelte
<Checkbox label="I agree to the terms." />
```

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={user.isSpammable}`.

```svelte
<Checkbox label="Spam me" disabled />
```

---

### Value

When used within a [CheckboxGroup](/checkbox-group), this is the value that will be assigned to the CheckboxGroup's
`selected` array when checked.

```svelte
<Checkbox label="Spam me" value="spamMe" />
```

---

### Label Named Slot

Since the `label` prop can only be a String, you can use the `label` slot instead to pass in a more complex label.

```svelte
<Checkbox>
  <span slot="label">
    Don't you just <HeartIcon /> spam?
  </span>
</Checkbox>
```

---

<!-- <Tables /> -->