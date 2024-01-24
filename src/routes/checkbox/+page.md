<script>
	import { Checkbox } from '$lib/ui';
  import Tables from './Tables.svelte';
  import { Heart } from 'lucide-svelte';

  let name = '';
  let wantsSpam = false;
</script>

# Checkbox

Checkbox components are used to toggle a single boolean value. They can also be used within a CheckboxGroup to toggle
multiple values.

### Import

```svelte
<script>
  import { Checkbox } from '$lib/ui';
</script>
```

---

### Label

```svelte
<Checkbox label="Spam me" />
```
<Checkbox label="Spam me" />

---

### Leading Label

```svelte
<Checkbox leadingLabel="I agree to the terms." />
```
<Checkbox leadingLabel="I agree to the terms." />

---

### Scheme

```svelte
<Checkbox scheme="info" label="Info" checked/>
<Checkbox scheme="warning" label="Warning" checked/>
<Checkbox scheme="success" label="Success" checked/>
<Checkbox scheme="error" label="Error" checked/>
<Checkbox scheme="brand" label="Brand" checked/>
```
<div class="flex flex-col gap-2">
  <Checkbox scheme="info" label="Info" checked/>
  <Checkbox scheme="warning" label="Warning" checked/>
  <Checkbox scheme="success" label="Success" checked/>
  <Checkbox scheme="error" label="Error" checked/>
  <Checkbox scheme="brand" label="Brand" checked/>
</div>

---

### Color

```svelte
<Checkbox label="Spam me" color="deeppink" checked />
```
<Checkbox label="Spam me" color="deeppink" checked />

---

### Checked

```svelte
<Checkbox label="Spam me" checked />
```
<Checkbox label="Spam me" checked />

---

### Disabled

```svelte
<Checkbox label="Spam me" disabled />
```
<Checkbox label="Spam me" disabled />

---

### Value

```svelte
<Checkbox label="Spam me" value="spamMe" />
```
<Checkbox label="Spam me" value="spamMe" />

---

### Binding Checked Value

```svelte
<script>
  import { Checkbox } from '$lib/ui';
  let wantsSpam = false;
</script>

<Checkbox 
  label="Spam me"
  bind:checked={wantsSpam} 
/>

<p>Wants spam: {wantsSpam}</p>
```
<Checkbox 
  label="Spam me"
  bind:checked={wantsSpam}
/>

<p>Wants spam: {wantsSpam}</p>

---

### Label Named Slot

```svelte
<Checkbox>
  <span slot="label">
    Don't you just <HeartIcon /> Svelte?
  </span>
</Checkbox>
```
<Checkbox>
  <span class="flex items-center gap-1" slot="label">Don't you just <Heart size={18} /> Svelte?</span>
</Checkbox>

---


---

### Leading Label Named Slot

```svelte
<Checkbox>
  <span slot="leadingLabel">
    I hereby confirm that I <HeartIcon /> Svelte.
  </span>
</Checkbox>
```
<Checkbox>
  <span class="flex items-center gap-1" slot="leadingLabel">I hereby confirm that I <Heart size={18} /> Svelte.</span>
</Checkbox>

---

<Tables />