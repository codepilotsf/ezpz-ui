<script>
	import { Hamburger } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
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

<Table name="Hamburger" type="props">
  <tr>
    <td><code>active</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>Typically used with <code>bind:active</code> to bind the active state to parent component</td>
  </tr> 
</Table>

<Table name="Hamburger" type="css">
  <tr>
    <td><code>--ui-hamburger-width</code></td>
    <td>Numeric</td>
    <td><code>30px</code></td>
    <td>Overall width of Hamburger component</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-height</code></td>
    <td>Numeric</td>
    <td><code>--ui-hamburger-width * .75</code></td>
    <td>Overall height of Hamburger component</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-padding</code></td>
    <td>Numeric</td>
    <td><code>--ui-hamburger-width * .3</code></td>
    <td>Padding and negative margin value (for larger clickable area)</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-background</code></td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td>Background color of Hamburger</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-border</code></td>
    <td>Border shorthand</td>
    <td><code>none</code></td>
    <td>CSS shorthand for border width/style/color</td>
  </tr>
  <tr>
    <td><code>--ui-hamburger-border-radius</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-radius</code> or <code>3px</code></td>
    <td>Border radius Hamburger component</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-line-color</code></td>
    <td>Color</td>
    <td><code>--ui-dark</code> or <code>#222</code></td>
    <td>Color of Hamburger lines</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-line-thickness</code></td>
    <td>Numeric</td>
    <td><code>2px</code></td>
    <td>Thickness (height) of Hamburger lines</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-line-radius</code></td>
    <td>Numeric</td>
    <td><code>2px</code></td>
    <td>Border radius of Hamburger lines</td>
  </tr> 
  <tr>
    <td><code>--ui-hamburger-spins-number</code></td>
    <td>Integer (odd)</td>
    <td><code>5</code></td>
    <td>Number of spins on animation. Must be an odd number!</td>
  </tr>
  <tr>
    <td><code>--ui-hamburger-spins-duration</code></td>
    <td>Time (<code>s</code> or <code>ms</code>)</td>
    <td><code>150ms</code></td>
    <td>Duration of spin animation</td>
  </tr>
</Table>
