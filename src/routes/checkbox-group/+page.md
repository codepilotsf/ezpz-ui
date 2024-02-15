<script>
	import { Checkbox, CheckboxGroup } from '$lib/ui';
  import Tables from './Tables.svelte';
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

### Custom Color

If all of the Checkbox components in a CheckboxGroup should have the same color, use the `color` prop on the
CheckboxGroup instead of on each individual Checkbox.

```svelte
<CheckboxGroup color="#777">
  <Checkbox label="Boring" />
  <Checkbox label="Equally Boring" checked />
</CheckboxGroup>
```
<CheckboxGroup color="#777">
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
<Tables />