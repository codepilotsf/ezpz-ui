<script>
	import { Hamburger } from '$lib/ui';
  import Tables from './Tables.svelte';
  let isMenuOpen = $state(false);
</script>

# Hamburger

Use a hamburger button to toggle a menu or other content. The button can be styled with global
classes such as Tailwind utility classes and other configuration options. Bind the `active` prop to
a boolean value to control the button state. Clicking the button will toggle the state of `active`.

### Example

```svelte
<script>
  import { Hamburger } from '$lib/ui';
  let isMenuOpen = $state(false);
</script>

<Hamburger bind:active={isMenuOpen} />
<p>isMenuOpen: {isMenuOpen}</p>
```
<Hamburger bind:active={isMenuOpen} />
<p>isMenuOpen: {isMenuOpen}</p>

---

<Tables />