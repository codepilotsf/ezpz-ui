<script>
	import { ButtonGroup } from '$lib/ui';
  import Tables from './Tables.svelte';
</script>

# Button

Button components are rendered as a `button` element by default or if an `href` property is passed, it will be rendered
as a regular `a` anchor link element. Styling will be the same in either case. By default, buttons are `md` size and use
the `ui-brand-color` with white text.

### Import

```svelte
<script>
  import { Button } from '$lib/ui';
</script>
```

---

### Themes

```svelte
<Button scheme="brand">
  Click Me
</Button>
```
<Button scheme="brand">Click Me</Button>

---

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
<Button scheme="error">
  Click Me
</Button>
```
<Button scheme="error">Click Me</Button>

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
  Explore Svelte
</Button>
```
<Button href="https://svelte.dev">Explore Svelte</Button>

---

<Tables />