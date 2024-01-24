<script>
	import { Spinner } from '$lib/ui';
  import Tables from './Tables.svelte';
</script>

# Spinner

Spinners are used to indicate to the user that the interface is waiting for an action to complete such as a server-side
operation that is taking a long time. There options for different variants of spinners and sizes. This component is also
used within other components such as `Button` to indicate `loading` state.

### Example

A default Spinner will render a `dots-circle` variant with the `brand` color scheme.

```svelte
<script>
  import { Spinner } from '$lib/ui';
</script>

<Spinner />
```

<Spinner />

---

### Dots Circle Variant

The default variant is `dots-circle`.

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

### Dots Row Variant

The `dots-row` variant is a horizontal row of dots.

```svelte
<Spinner variant="dots-row" size="xs" />
<Spinner variant="dots-row" size="sm" />
<Spinner variant="dots-row" size="md" />
<Spinner variant="dots-row" size="lg" />
<Spinner variant="dots-row" size="xl" />
```
<div class="flex flex-col items-start">
	<Spinner variant="dots-row" size="xs" />
	<Spinner variant="dots-row" size="sm" />
	<Spinner variant="dots-row" size="md" />
	<Spinner variant="dots-row" size="lg" />
	<Spinner variant="dots-row" size="xl" />
</div>

---

### Color Schemes

Color schemes defined in `theme.css` can be used to set the color of the spinner.

```svelte
<Spinner scheme="brand" />
<Spinner scheme="info" />
<Spinner scheme="warning" />
<Spinner scheme="success" />
<Spinner scheme="error" />
```
<div class="flex items-center gap-5">
	<Spinner scheme="brand" />
	<Spinner scheme="info" />
	<Spinner scheme="warning" />
	<Spinner scheme="success" />
	<Spinner scheme="error" />
</div>

---

### Custom Color

Set an arbitrary color to use for the spinner (only `color` will used).
  
```svelte
<Spinner color="#999" />
```
<Spinner color="#999" />

---

<Tables />
