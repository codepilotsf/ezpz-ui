<script>
	import { Input, Button } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
  let name = '';
</script>

# Input

Use Input for form inputs including text, password, email, url, and search.

---

### Example

Type in the field to see the value change.

```svelte
<script>
  import { Input } from '$lib/ui';
  let name = '';
</script>

<Input
  name="name"
  label="Name"
  placeholder="Jane Doe"
  bind:value={name}
/>

<p>Name: {name}</p>
```
<Input
  name="name"
  label="Name"
  placeholder="Jane Doe"
  bind:value={name}
/>

<p>Name: {name}</p>

---

### Label

A `label` prop let's you define a simple String to be used as the input label.

```svelte
<Input label="Name" />
```
<Input label="Name" />

---

### PlaceHolder

A `placeholder` prop let's you define a simple String to be used as a simple descriptor for the input value.

```svelte
<Input placeholder="Jane Doe" />
```
<Input label="Name" placeholder="Jane Doe" />

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={user.isSpammable}`.

```svelte
<Input label="Name" disabled />
```
<Input label="Name" disabled />

---

### Error

Display error message below the field. Also adds error styles.

```svelte
<Input label="Email" error="Email is not valid" />
```
<Input label="Email" value="jane@doe" error="Email is not valid" />

---

### Note

A `note` prop let's you define a note displayed below the field.

```svelte
<Input note="This is a note" />
```
<Input note="This is a note" />

---

<Table name="Input" type="props">
  <tr>
    <td><code>name</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>name of the input field</td>
  </tr>
  <tr>
    <td><code>placeholder</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Input value description</td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>String</td>
    <td><code>Input</code></td>
    <td>Text label appears above the input field</td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td>String</td>
    <td><code>text</code></td>
    <td>Input field types</td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>Disables the input field</td>
  </tr>
  <tr>
    <td><code>note</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text appears below input field</td>
  </tr>
  <tr>
    <td><code>error</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Error message for the input field</td>
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

<Table name="Input" type="css">
  <tr>
    <td><code>--ui-input-font-size</code></td>
    <td>Numeric</td>
    <td><code>--ui-font-size</code>, <code>1rem</code></td>
    <td>Font size for value of field</td>
  </tr> 
  <tr>
    <td><code>--ui-input-color</code></td>
    <td>Color</td>
    <td><code>--ui-dark</code>, <code>#1e293b</code></td>
    <td>Text color for value of field</td>
  </tr> 
  <tr>
    <td><code>--ui-input-border-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-width</code>, <code>1px</code></td>
    <td>Border width</td>
  </tr> 
  <tr>
    <td><code>--ui-input-border-color</code></td>
    <td>Color</td>
    <td><code>--ui-border-color</code>, <code>--ui-midtone</code>, <code>#94a3b8</code></td>
    <td>Border color</td>
  </tr> 
  <tr>
    <td><code>--ui-input-border-radius</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-radius</code>, <code>3px</code></td>
    <td>Border radius</td>
  </tr> 
  <tr>
    <td><code>--ui-input-padding</code></td>
    <td>Numeric</td>
    <td><code>--ui-padding</code>, <code>4px 6px</code></td>
    <td>CSS padding shorthand</td>
  </tr> 
  <tr>
    <td><code>--ui-input-outline-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-outline-width</code>, <code>1px</code></td>
    <td>Outline width for <code>:focus</code> and <code>.error</code></td>
  </tr>
  <tr>
    <td><code>--ui-input-outline-offset</code></td>
    <td>Numeric</td>
    <td><code>--ui-outline-offset</code>, <code>none</code></td>
    <td>Outline offset for <code>:focus</code> and <code>.error</code></td>
  </tr>
  <tr>
    <td><code>--ui-input-focus</code></td>
    <td>Color</td>
    <td><code>--ui-focus</code>, <code>--ui-midtone</code>, <code>#94a3b8</code></td>
    <td>Focus color applied to border and outline</td>
  </tr> 
  <tr>
    <td><code>--ui-input-error</code></td>
    <td>Color</td>
    <td><code>--ui-error</code>, <code>--ui-error</code>, <code>#b91c1c</code></td>
   <td>Error color for border, text, error note</td>
  </tr> 
</Table>