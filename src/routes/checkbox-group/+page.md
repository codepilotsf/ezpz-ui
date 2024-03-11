<script>
	import { Checkbox, CheckboxGroup } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
  import { Martini } from 'lucide-svelte';

  let toppings = $state(['pepperoni']);
</script>

# CheckboxGroup

Use a CheckboxGroup to group multiple Checkbox components for a predictable layout and the ability to two-way bind a
`value` array value coupled to which radio button is value. Additionally, you can  set a `scheme` or `color` as a single
property to be inherited by all child Checkboxs.

### Example

Use `bind:value` to two-way bind a reactive array of value items.

```svelte
<script>
  import { CheckboxGroup, Checkbox } from '$lib/ui';
  let toppings = $state(['pepperoni']);
</script>

<CheckboxGroup bind:value={toppings}>
  <Checkbox label="Pepperoni" value="pepperoni" />
  <Checkbox label="Olives" value="olives" />
  <Checkbox label="Tomatoes" value="tomatoes" />
</CheckboxGroup>

<p>Toppings: {toppings}</p>
```
<CheckboxGroup bind:value={toppings}>
  <Checkbox label="Pepperoni" value="pepperoni" />
  <Checkbox label="Olives" value="olives" />
  <Checkbox label="Tomatoes" value="tomatoes" />
</CheckboxGroup>

<p>Toppings: {toppings}</p>

---

### Legend

Use the `label` prop to set a label for the CheckboxGroup. This will be rendered as a `<label>` element and will be
styled like the `label` elements on other form components.

```svelte
<CheckboxGroup label="Beer Options">
  <Checkbox label="Pilsner" />
  <Checkbox label="India Pale Ale" />
  <Checkbox label="Stout" />
</CheckboxGroup>
```
<CheckboxGroup label="Beer Options">
  <Checkbox label="Pilsner" />
  <Checkbox label="India Pale Ale" />
  <Checkbox label="Stout" />
</CheckboxGroup>

---

### Name

If a `name` prop is set, it will be applied to all child Checkbox components for proper form submission.

```svelte
<CheckboxGroup name="beer">
  <Checkbox label="Pilsner" value="pilsner" />
  <Checkbox label="India Pale Ale" value="ipa" />
  <Checkbox label="Stout" value="stout" />
</CheckboxGroup>
```
<CheckboxGroup name="beer">
  <Checkbox label="Pilsner" value="pilsner" />
  <Checkbox label="India Pale Ale" value="ipa" />
  <Checkbox label="Stout" value="stout" />
</CheckboxGroup>

---

### Color Scheme

If all of the Checkbox components in a CheckboxGroup should have the same color scheme, use the `scheme` prop on the
CheckboxGroup instead of on each individual Checkbox.

```svelte
<CheckboxGroup scheme="danger">
  <Checkbox label="Delete Database" checked />
  <Checkbox label="Launch Missiles" checked />
  <Checkbox label="Call Mother In Law" checked />
</CheckboxGroup>
```
<CheckboxGroup scheme="danger">
  <Checkbox label="Delete Database" checked />
  <Checkbox label="Launch Missiles" checked />
  <Checkbox label="Call Mother In Law" checked />
</CheckboxGroup>

---

### Custom Background Color

If all of the Checkbox components in a CheckboxGroup should have the same background color, use the
`background` prop on the CheckboxGroup instead of on each individual Checkbox.

```svelte
<CheckboxGroup background="#777">
  <Checkbox label="Boring" />
  <Checkbox label="Equally Boring" checked />
</CheckboxGroup>
```
<CheckboxGroup background="#777">
  <Checkbox label="Boring" />
  <Checkbox label="Equally Boring" checked />
</CheckboxGroup>

---

### Error

Display error message below the checkboxes. Also adds error styles.

```svelte
<CheckboxGroup error="You must select at least two">
  <Checkbox label="Bauhaus" />
  <Checkbox label="The Cure" />
  <Checkbox label="The Smiths" />
</CheckboxGroup>
```
<CheckboxGroup error="You must select at least two">
  <Checkbox label="Bauhaus" />
  <Checkbox label="The Cure" />
  <Checkbox label="The Smiths" />
</CheckboxGroup>

---

### Note

A `note` prop let's you define a note displayed below the field.

```svelte
<CheckboxGroup label="Favorite Band" note="Choose as many as you like">
  <Checkbox label="Bauhaus" />
  <Checkbox label="The Cure" />
  <Checkbox label="The Smiths" />
</CheckboxGroup>
```
<CheckboxGroup label="Favorite Band" note="Choose as many as you like">
  <Checkbox label="Bauhaus" />
  <Checkbox label="The Cure" />
  <Checkbox label="The Smiths" />
</CheckboxGroup>

---

### Legend Named Slot

Instead of using the `label` prop which can only be a String, a `label` named slot can be used for a label with more
complex content.

```svelte
<CheckboxGroup>
  <label slot="label"><CocktailIcon /> Cocktails</label>
  <Checkbox label="Martini" />
  <Checkbox label="Gimlet" />
</CheckboxGroup>
```
<CheckboxGroup>
  <label slot="label" class="flex items-center pb-2"><Martini size={20} /> Cocktails</label>
  <Checkbox label="Martini" />
  <Checkbox label="Gimlet" />
</CheckboxGroup>

---

<!-- Properties Table -->
<Table name="CheckboxGroup" type="props">
  <tr>
    <td><code>bind:value</code></td>
    <td>Array</td>
    <td>&nbsp;</td>
    <td>Two-way binded array of value items</td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text label appears before CheckmarkGroup</td>
  </tr>
  <tr>
    <td><code>name</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>The <code>name</code> property to be inherited by all child Checkbox components</td>
  </tr>
  <tr>
    <td><code>scheme</code></td>
    <td>String: 'neutral', 'warning', 'info', 'success', 'danger'</td>
    <td>&nbsp;</td>
    <td>Scheme defining color used for checked state of all child Checkboxes</td>
  </tr>
  <tr>
    <td><code>background</code></td>
    <td>String</td>
    <td>'brand'</td>
    <td>Background color used for checked state of all child Checkboxes</td>
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

<!-- Named Slots Table -->
<Table name="CheckboxGroup" type="slots">
  <tr>
    <td><code>label</code></td>
    <td
      >Content to be used for label before CheckboxGroup (supercedes <code>label</code> property)</td
    >
  </tr>
</Table>

