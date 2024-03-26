<script>
	import { Spinner } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
</script>

# Spinner

Spinners are used to indicate to the user that the interface is waiting for an action to complete
such as a server-side operation that is taking a long time. There options for different variants of
spinners and sizes. This component is also used with the `Button` component to indicate `loading`
state.

### Example

A default Spinner will render a `circle-bars` variant with the `brand` color scheme.

```svelte
<script>
  import { Spinner } from '$lib/ui';
</script>

<Spinner />
```

<Spinner />

---

### Circle Bars Variant

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

### Circle Strip Variant

```svelte
<Spinner variant="circle-strip" size="xs" />
<Spinner variant="circle-strip" size="sm" />
<Spinner variant="circle-strip" size="md" />
<Spinner variant="circle-strip" size="lg" />
<Spinner variant="circle-strip" size="xl" />
```
<div class="flex items-center gap-6">
	<Spinner variant="circle-strip" size="xs" />
	<Spinner variant="circle-strip" size="sm" />
	<Spinner variant="circle-strip" size="md" />
	<Spinner variant="circle-strip" size="lg" />
	<Spinner variant="circle-strip" size="xl" />
</div>

---

### Circle Dots Variant

```svelte
<Spinner variant="circle-dots" size="xs" />
<Spinner variant="circle-dots" size="sm" />
<Spinner variant="circle-dots" size="md" />
<Spinner variant="circle-dots" size="lg" />
<Spinner variant="circle-dots" size="xl" />
```
<div class="flex items-center gap-6">
	<Spinner variant="circle-dots" size="xs" />
	<Spinner variant="circle-dots" size="sm" />
	<Spinner variant="circle-dots" size="md" />
	<Spinner variant="circle-dots" size="lg" />
	<Spinner variant="circle-dots" size="xl" />
</div>

---

### Dots Bounce Variant

```svelte
<Spinner variant="dots-bounce" size="xs" />
<Spinner variant="dots-bounce" size="sm" />
<Spinner variant="dots-bounce" size="md" />
<Spinner variant="dots-bounce" size="lg" />
<Spinner variant="dots-bounce" size="xl" />
```
<div class="flex items-center gap-6">
	<Spinner variant="dots-bounce" size="xs" />
	<Spinner variant="dots-bounce" size="sm" />
	<Spinner variant="dots-bounce" size="md" />
	<Spinner variant="dots-bounce" size="lg" />
	<Spinner variant="dots-bounce" size="xl" />
</div>

---

### Dots Fade Variant

```svelte
<Spinner variant="dots-fade" size="xs" />
<Spinner variant="dots-fade" size="sm" />
<Spinner variant="dots-fade" size="md" />
<Spinner variant="dots-fade" size="lg" />
<Spinner variant="dots-fade" size="xl" />
```
<div class="flex items-center gap-6">
	<Spinner variant="dots-fade" size="xs" />
	<Spinner variant="dots-fade" size="sm" />
	<Spinner variant="dots-fade" size="md" />
	<Spinner variant="dots-fade" size="lg" />
	<Spinner variant="dots-fade" size="xl" />
</div>

---

### Dots Scale Variant

```svelte
<Spinner variant="dots-scale" size="xs" />
<Spinner variant="dots-scale" size="sm" />
<Spinner variant="dots-scale" size="md" />
<Spinner variant="dots-scale" size="lg" />
<Spinner variant="dots-scale" size="xl" />
```
<div class="flex items-center gap-6">
	<Spinner variant="dots-scale" size="xs" />
	<Spinner variant="dots-scale" size="sm" />
	<Spinner variant="dots-scale" size="md" />
	<Spinner variant="dots-scale" size="lg" />
	<Spinner variant="dots-scale" size="xl" />
</div>

---

### Dots Shuffle Variant

```svelte
<Spinner variant="dots-shuffle" size="xs" />
<Spinner variant="dots-shuffle" size="sm" />
<Spinner variant="dots-shuffle" size="md" />
<Spinner variant="dots-shuffle" size="lg" />
<Spinner variant="dots-shuffle" size="xl" />
```
<div class="flex items-center gap-6">
	<Spinner variant="dots-shuffle" size="xs" />
	<Spinner variant="dots-shuffle" size="sm" />
	<Spinner variant="dots-shuffle" size="md" />
	<Spinner variant="dots-shuffle" size="lg" />
	<Spinner variant="dots-shuffle" size="xl" />
</div>

---

<Table name="Spinner" type="props">
  <tr>
    <td><code>variant</code></td>
    <td
      >String: 'circle-bars', 'circle-strip', 'circle-dots', 'dots-bounce', 'dots-fade',
      'dots-scale', 'dots-shuffle'</td
    >
    <td>'circle-bars'</td>
    <td>Spinner style variant</td>
  </tr>
  <tr>
    <td><code>size</code></td>
    <td>String: 'xs', 'sm', 'md', 'lg', 'xl'</td>
    <td>'md'</td>
    <td>Spinner size</td>
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

<Table name="Spinner" type="css">
  <tr>
    <td><code>--ui-spinner-color</code></td>
    <td>Color</td>
    <td><code>--ui-focus</code> or <code>#3b82f6</code></td>
    <td>Color of spinner</td>
  </tr>
</Table>