<script>
	import { Button } from '$lib/ui';
  import Tables from './Tables.svelte';
</script>

# Button

Button components are rendered as a `button` element by default or if an `href` property is passed, it will be rendered
as a regular `a` anchor link element. Styling will be the same in either case. By default, buttons are full-width and
color themes set in `style.css` are inversed.

### Import

```svelte
<script>
  import { Button } from '$lib/ui';
</script>
```

---

### Themes

```svelte
<Button>
  Click Me
</Button>
```
<Button>Click Me</Button>

---

```svelte
<Button theme="info">
  Click Me
</Button>
```
<Button theme="info">Click Me</Button>

---

```svelte
<Button theme="warning">
  Click Me
</Button>
```
<Button theme="warning">Click Me</Button>

---

```svelte
<Button theme="success">
  Click Me
</Button>
```
<Button theme="success">Click Me</Button>

---

```svelte
<Button theme="error">
  Click Me
</Button>
```
<Button theme="error">Click Me</Button>

---

```svelte
<Button theme="brand">
  Click Me
</Button>
```
<Button theme="brand">Click Me</Button>

---

### Sizes

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

```svelte
<Button href="https://svelte.dev">
  Check Out Svelte
</Button>
```
<Button href="https://svelte.dev">Check Out Svelte</Button>

---

<Tables />