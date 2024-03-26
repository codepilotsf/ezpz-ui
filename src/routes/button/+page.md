<script>
	import { Button } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
</script>

# Button

Button components are rendered as a `button` element by default or if an `href` property is passed,
it will be rendered as a regular `a` anchor link element. Styling will be the same in either case.

### Example

The default button uses `--ui-focus` value or `#3b82f6` for color and `md` size.

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
    <td>String: 'button', 'submit', 'reset</td>
    <td>&nbsp;</td>
    <td>Sets the button <code>type</code> attribute</td>
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

<Table name="Button" type="css">
  <tr>
    <td><code>--ui-button-color</code></td>
    <td>Color</td>
    <td><code>#fff</code></td>
    <td>Color used for text and icons</td>
  </tr>
  <tr>
    <td><code>--ui-button-background</code></td>
    <td>Color</td>
    <td><code>#3b82f6</code></td>
    <td>Color used for Button background color</td>
  </tr>
  <tr>
    <td><code>--ui-button-width</code></td>
    <td>Numeric</td>
    <td><code>auto</code></td>
    <td>Button component width</td>
  </tr>
  <tr>
    <td><code>--ui-button-height</code></td>
    <td>Numeric</td>
    <td><code>auto</code></td>
    <td>Button component height</td>
  </tr>
  <tr>
    <td><code>--ui-button-padding</code></td>
    <td>Padding shorthand</td>
    <td>&nbsp;</td>
    <td>CSS padding shorthand</td>
  </tr>
  <tr>
    <td><code>--ui-button-font-size</code></td>
    <td>Numeric</td>
    <td><code>14px</code></td>
    <td>Font size of Button text</td>
  </tr>
  <tr>
    <td><code>--ui-button-border</code></td>
    <td>Border shorthand</td>
    <td><code>none</code></td>
    <td>CSS border shorthand</td>
  </tr>
  <tr>
    <td><code>--ui-button-radius</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-radius</code> or <code>3px</code></td>
    <td>Button border radius</td>
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


