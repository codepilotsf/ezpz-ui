<script>
	import { Spinner } from '$lib/ui';
  import Tables from './Tables.svelte';
</script>

# Spinner

Spinners are used to indicate to the user that the interface is waiting for an action to complete such as a server-side
operation that is taking a long time. There options for different types of spinners and sizes. This component is also
used within other components such as `Button` to indicate `loading` state.

### Import

```svelte
<script>
  import { Spinner } from '$lib/ui';
</script>
```

---

### Dots Circle (default type)

```svelte
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />
```
<div class="flex items-center gap-6">
	<Spinner size="xs" />
	<Spinner size="sm" />
	<Spinner size="md" />
	<Spinner size="lg" />
	<Spinner size="xl" />
</div>

---

### Dots Row

```svelte
<Spinner type="dots-row" size="xs" />
<Spinner type="dots-row" size="sm" />
<Spinner type="dots-row" size="md" />
<Spinner type="dots-row" size="lg" />
<Spinner type="dots-row" size="xl" />
```
<div class="flex flex-col items-start">
	<Spinner type="dots-row" size="xs" />
	<Spinner type="dots-row" size="sm" />
	<Spinner type="dots-row" size="md" />
	<Spinner type="dots-row" size="lg" />
	<Spinner type="dots-row" size="xl" />
</div>

---

### Themes

```svelte
<Spinner scheme="info" />
<Spinner scheme="warning" />
<Spinner scheme="success" />
<Spinner scheme="error" />
<Spinner scheme="brand" />
```
<div class="flex items-center gap-5">
	<Spinner scheme="default" />
	<Spinner scheme="info" />
	<Spinner scheme="warning" />
	<Spinner scheme="success" />
	<Spinner scheme="error" />
	<Spinner scheme="brand" />
</div>

---

### Color
  
```svelte
<Spinner color="#999" />
```
<Spinner color="#999" />

---

<Tables />
