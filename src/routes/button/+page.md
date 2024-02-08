<script>
	import { Button } from '$lib/ui';
  import Tables from './Tables.svelte';
</script>

# Button

Button components are rendered as a `button` element by default or if an `href` property is passed, it will be rendered
as a regular `a` anchor link element. Styling will be the same in either case. By default, buttons are `md` size and use
the `ui-brand` with white text.

### Example

The default button uses the `brand` scheme for color and `md` size.

```svelte
<script>
  import { Button } from '$lib/ui';
</script>

<Button>
  Click Me
</Button>
```
<Button>
  Click Me
</Button>

---

### Color Schemes

Color schemes defined in `theme.css` can be used to set the button color. Text will be white by default.

```svelte
<Button scheme="info">
  Click Me
</Button>
```
<Button scheme="info">Click Me</Button>

---

```svelte
<Button scheme="warning">
  Click Me
</Button>
```
<Button scheme="warning">Click Me</Button>

---

```svelte
<Button scheme="success">
  Click Me
</Button>
```
<Button scheme="success">Click Me</Button>

---

```svelte
<Button scheme="danger">
  Click Me
</Button>
```
<Button scheme="danger">Click Me</Button>

---

### Sizes

The `size` property can be used to select other button sizes. The default size is `md` (medium). 

```svelte
<Button size="xs">
  Click Me
</Button>
```
<Button size="xs">Click Me</Button>

---

```svelte
<Button size="sm">
  Click Me
</Button>
```
<Button size="sm">Click Me</Button>

---

```svelte
<Button size="md">
  Click Me
</Button>
```
<Button size="md">Click Me</Button>

---

```svelte
<Button size="lg">
  Click Me
</Button>
```
<Button size="lg">Click Me</Button>

---

```svelte
<Button size="xl">
  Click Me
</Button>
```
<Button size="xl">Click Me</Button>

---

### Anchor Tag

If an `href` property is passed, the button will be rendered as a regular `a` anchor link element. All other props can
still be used and styling will be the same in either case.

```svelte
<Button href="https://svelte.dev">
  Explore Svelte
</Button>
```
<Button href="https://svelte.dev">Explore Svelte</Button>

---

<Tables />