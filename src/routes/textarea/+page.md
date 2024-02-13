<script>
	import { Input, Button } from '$lib/ui';
  import Tables from './Tables.svelte';
  let name = '';
</script>

# Textarea

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

A `label` prop let's you define a simple String to be used as the input label.

```svelte
<Input label="Name" />
```
<Input label="Name" />

---

### PlaceHolder

A `placeholder` prop let's you define a simple String to be used as a simple descriptor for the input value.

```svelte
<Input placeholder="Jane Doe" />
```
<Input label="Name" placeholder="Jane Doe" />

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={user.isSpammable}`.

```svelte
<Input label="Name" disabled />
```
<Input label="Name" disabled />

---

### Error

Display error message below the field. Also adds error styles.

```svelte
<Input error="Email is not valid" />
```
<Input value="jane@doe" error="Email is not valid" />

---

### Note

A `note` prop let's you define a note displayed below the field.

```svelte
<Input note="This is a note" />
```
<Input note="This is a note" />

---

<Tables />