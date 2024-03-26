<script>
	import { Textarea, Button } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
  let message = $state('');
</script>

# Textarea

Use Textarea for form text fields. By default, the Textarea will grow to contain the text entered by
the user.

---

### Example

Type in the field to see the value change.

```svelte
<script>
  import { Textarea } from '$lib/ui'
  let message = $state('');
</script>

<Textarea bind:value={message} />

<p>Message: {message}</p>
```
<Textarea bind:value={message} />
<p>Message: {message}</p>

---

### Label

Label for the textarea element.

```svelte
<Textarea label="Message" />
```
<Textarea label="Message" />

---

### Name

Name of the textarea for form submission.

```svelte
<Textarea name="message" label="Message" />
```
<Textarea name="message" label="Message" />

---

### Height

Use `height` to set the initial height of the textarea. If using CSS utility classes (like
Tailwind), you can also set the height with something like `class="!h-48"` (using the Tailwind `!`
important flag to override default style).

```svelte
<Textarea height="10rem" />
```
<Textarea height="10rem" />

---

### Placeholder

A `placeholder` prop let's you define a simple String to be used as a simple descriptor for the input value.

```svelte
<Textarea placeholder="Jane Doe" />
```
<Textarea label="Name" placeholder="Jane Doe" />

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={user.isSpammable}`.

```svelte
<Textarea label="Name" disabled />
```
<Textarea label="Name" disabled />

---

### Fixed

Use `fixed` to disable the auto-expanding feature and show regular scrollbars as necessary.

```svelte
<Textarea fixed />
```
<Textarea fixed />

---

### Error

Display error message below the field. Also adds error styles.

```svelte
<Textarea error="Must be at least 40 million characters" />
```
<Textarea value="Herp derp." error="Must be at least 40 million characters" />

---

### Note

A `note` prop let's you define a note displayed below the field.

```svelte
<Textarea note="This is a note" />
```
<Textarea note="This is a note" />

---

<Table name="Textarea" type="props">
  <tr>
    <td><code>name</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>name of the textarea</td>
  </tr>
  <tr>
    <td><code>placeholder</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Textarea value description</td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>String</td>
    <td><code>Textarea</code></td>
    <td>Text label appears above the textarea</td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td>String</td>
    <td><code>text</code></td>
    <td>Textarea field types</td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>Disables the textarea</td>
  </tr>
  <tr>
    <td><code>note</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text appears below textarea</td>
  </tr>
  <tr>
    <td><code>error</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Error message for the textarea</td>
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

<Table name="Textarea" type="css">
  <tr>
    <td><code>--ui-textarea-font-size</code></td>
    <td>Numeric</td>
    <td><code>--ui-font-size</code>, <code>1rem</code></td>
    <td>Font size for value of field</td>
  </tr> 
  <tr>
    <td><code>--ui-textarea-color</code></td>
    <td>Color</td>
    <td><code>--ui-dark</code>, <code>#1e293b</code></td>
    <td>Text color for value of field</td>
  </tr> 
  <tr>
    <td><code>--ui-textarea-border-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-width</code>, <code>1px</code></td>
    <td>Border width</td>
  </tr> 
  <tr>
    <td><code>--ui-textarea-border-color</code></td>
    <td>Color</td>
    <td><code>--ui-border-color</code>, <code>--ui-midtone</code>, <code>#94a3b8</code></td>
    <td>Border color</td>
  </tr> 
  <tr>
    <td><code>--ui-textarea-border-radius</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-radius</code>, <code>3px</code></td>
    <td>Border radius</td>
  </tr> 
  <tr>
    <td><code>--ui-textarea-padding</code></td>
    <td>Numeric</td>
    <td><code>--ui-padding</code>, <code>4px 6px</code></td>
    <td>CSS padding shorthand</td>
  </tr> 
  <tr>
    <td><code>--ui-textarea-outline-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-outline-width</code>, <code>1px</code></td>
    <td>Outline width for <code>:focus</code> and <code>.error</code></td>
  </tr>
  <tr>
    <td><code>--ui-textarea-outline-offset</code></td>
    <td>Numeric</td>
    <td><code>--ui-outline-offset</code>, <code>none</code></td>
    <td>Outline offset for <code>:focus</code> and <code>.error</code></td>
  </tr>
  <tr>
    <td><code>--ui-textarea-focus</code></td>
    <td>Color</td>
    <td><code>--ui-focus</code>, <code>#94a3b8</code></td>
    <td>Focus color applied to border and outline</td>
  </tr> 
  <tr>
    <td><code>--ui-textarea-error</code></td>
    <td>Color</td>
    <td><code>--ui-textarea-error</code>, <code>--ui-error</code>, <code>#b91c1c</code></td>
   <td>Error color for border, text, error note</td>
  </tr> 
</Table>
