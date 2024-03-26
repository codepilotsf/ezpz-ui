<script>
    import { Select, Option, Button } from "$lib/ui";
    import Table from '$lib/components/Table.svelte';
    let pet = $state();
</script>

# Select

Standard select menu which expects child `<Option>` components.

### Example

Select option from the list of options. Use `bind:value` to bind the selected value to a variable.

```svelte
<script>
  import { Select } from "$lib/ui";
  let pet = $state();
</script>

<Select label="Pet" name="pet" bind:value={pet}>
  <Option label="Dog" value="dog" />
  <Option label="Hamster" value="hamster" />
  <Option label="Parrot" value="parrot" />
</Select>

<p>Pet: {pet}</p>

```
<Select label="Pet" bind:value={pet}>
  <Option label="Dog" value="dog" />
  <Option label="Hamster" value="hamster" />
  <Option label="Parrot" value="parrot" />
</Select>

<p>Pet: {pet}</p>

---

### Name

Name of the select element which will be used as the key in the form data.

```svelte
<Select name="direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select name="direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Label

Label for the select element.

```svelte
<Select label="Direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select label="Direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Init

Initial option shown for the select element. Default is "Select". Set the value to `"false"` or
`{false}` to remove the initial option.

```svelte
<Select init="Choose up or down">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select init="Choose up or down">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Disabled

Disable the select element.

```svelte
<Select name="direction" disabled>
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select name="direction" disabled>
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Error

Display error message below the select element. Also adds error styles to the select element.

```svelte
<Select label="Color" error="Must select a color">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

```
<Select label="Color" error="Must select a color">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

---

### Note

Display note message below the select element.

```svelte
<Select note="We'd like to know">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

```
<Select note="We'd like to know">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

---

<Table name="Select" type="props">
  <tr>
    <td><code>name</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>name of the input field</td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text label appears above the input field</td>
  </tr>
  <tr>
    <td><code>init</code></td>
    <td>String</td>
    <td><code>Select</code></td>
    <td>The non-selectable option shown by default</td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>Disables the user from selecting</td>
  </tr>
  <tr>
    <td><code>note</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text note appears below select field</td>
  </tr>
  <tr>
    <td><code>error</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Error message for the select field</td>
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

<Table name="Select" type="css">
  <tr>
    <td><code>--ui-select-font-size</code></td>
    <td>Numeric</td>
    <td><code>--ui-font-size</code>, <code>1rem</code></td>
    <td>Font size for value of field</td>
  </tr> 
  <tr>
    <td><code>--ui-select-color</code></td>
    <td>Color</td>
    <td><code>--ui-dark</code>, <code>#1e293b</code></td>
    <td>Text color for value of field</td>
  </tr> 
  <tr>
    <td><code>--ui-select-border-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-width</code>, <code>1px</code></td>
    <td>Border width</td>
  </tr> 
  <tr>
    <td><code>--ui-select-border-color</code></td>
    <td>Color</td>
    <td><code>--ui-border-color</code>, <code>--ui-midtone</code>, <code>#94a3b8</code></td>
    <td>Border color</td>
  </tr> 
  <tr>
    <td><code>--ui-select-border-radius</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-radius</code>, <code>3px</code></td>
    <td>Border radius</td>
  </tr> 
  <tr>
    <td><code>--ui-select-padding</code></td>
    <td>Numeric</td>
    <td><code>--ui-padding</code>, <code>4px 6px</code></td>
    <td>CSS padding shorthand</td>
  </tr> 
  <tr>
    <td><code>--ui-select-outline-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-outline-width</code>, <code>1px</code></td>
    <td>Outline width for <code>:focus</code> and <code>.error</code></td>
  </tr>
  <tr>
    <td><code>--ui-select-outline-offset</code></td>
    <td>Numeric</td>
    <td><code>--ui-outline-offset</code>, <code>none</code></td>
    <td>Outline offset for <code>:focus</code> and <code>.error</code></td>
  </tr>
  <tr>
    <td><code>--ui-select-focus</code></td>
    <td>Color</td>
    <td><code>--ui-focus</code>, <code>--ui-midtone</code>, <code>#94a3b8</code></td>
    <td>Focus color applied to border and outline</td>
  </tr> 
  <tr>
    <td><code>--ui-select-error</code></td>
    <td>Color</td>
    <td><code>--ui-error</code>, <code>--ui-error</code>, <code>#b91c1c</code></td>
    <td>Error color for border, text, error note</td>
  </tr>
</Table>
