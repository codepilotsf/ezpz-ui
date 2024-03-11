<script>
	import { Button } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
</script>

# Button

Button components are rendered as a `button` element by default or if an `href` property is passed,
it will be rendered as a regular `a` anchor link element. Styling will be the same in either case.

### Example

The default button uses `--ui-accent` value or `royalblue` for color and `md` size.

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

### Color and Background

Pass in arbitrary color and background values to change the button's appearance.

```svelte
<Button background="mistyrose" color="darkviolet">
  Click Me
</Button>
```
<Button background="mistyrose" color="darkviolet">
  Click Me
</Button>

---

### Color Schemes

Color schemes defined in `style.css` can be used to set the button background color to the dark
color defined for that scheme (or default colors will be used). Text will be white by default.

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

If an `href` property is passed, the button will be rendered as a regular `a` anchor link element.
All other props can still be used and styling will be the same in either case.

```svelte
<Button href="https://svelte.dev">
  Explore Svelte
</Button>
```
<Button href="https://svelte.dev">Explore Svelte</Button>

---

<Table name="Button" type="props">
  <tr>
    <td><code>scheme</code></td>
    <td>String: 'info', 'success', 'warning', 'danger'</td>
    <td>&nbsp;</td>
    <td>Color scheme to use as button color with white text</td>
  </tr>
  <tr>
    <td><code>color</code></td>
    <td>String</td>
    <td>'#ffffff'</td>
    <td>Color to be used for button text</td>
  </tr>
  <tr>
    <td><code>background</code></td>
    <td>String</td>
    <td class="text-nowrap">'var(--ui-accent)'</td>
    <td>Color to be used for button background</td>
  </tr>
  <tr>
    <td><code>size</code></td>
    <td>String: 'xs', 'sm', 'md', 'lg', or 'xl'</td>
    <td>'md'</td>
    <td>Size of button</td>
  </tr>
  <tr>
    <td><code>href</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td
      >If present, <code>a</code> (anchor tag) is used to style a link as a button</td
    >
  </tr>
  <tr>
    <td><code>target</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td
      >Used with <code>href</code> to set the anchor tag's <code>target</code>
      attribute</td
    >
  </tr>
  <tr>
    <td><code>type</code></td>
    <td>(todo)</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><code>active</code></td>
    <td>Boolean</td>
    <td>false</td>
    <td>Display as active button (brighter)</td>
  </tr>
  <tr>
    <td><code>loading</code></td>
    <td>(todo)</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><code>variant</code></td>
    <td>(todo)</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><code>class</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td
      >CSS classes declared in global scope can be applied to the outermost
      element</td
    >
  </tr>
  <tr>
    <td><code>...</code></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td
      >Additional props will be passed through to the HTML element enabling
      support for things like
      <code>disabled</code>, <code>on:click</code>,
      <code>target="_blank"</code>, etc</td
    >
  </tr>
</Table>

<Table name="Button" type="slots">
  <tr>
    <td><code>icon</code></td>
    <td>(todo)</td>
  </tr>
  <tr>
    <td><code>iconTrailing</code></td>
    <td>(todo)</td>
  </tr>
</Table>


