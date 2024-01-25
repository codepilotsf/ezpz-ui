<script>
	import { Checkbox, CheckboxGroup } from '$lib/ui';
  import Tables from './Tables.svelte';
  import { Martini } from 'lucide-svelte';

  let toppings = ['olives', 'tomatoes'];
</script>

# CheckboxGroup

Use a CheckboxGroup to group multiple Checkbox components for a predictable layout and the ability to two-way bind a
`selected` array value coupled to which radio button is selected. Additionally, you can  set a `scheme` or `color` as a single
property to be inherited by all child Checkboxs.

### Example

Use `bind:selected` to bind an array of selected values to the CheckboxGroup. This eliminates the need to use
`bind:checked` or `bind:group` on each individual Checkbox.

```svelte
<script>
  import { CheckboxGroup, Checkbox } from '$lib/ui';
  let toppings = [];
</script>

<CheckboxGroup bind:selected={toppings}>
  <Checkbox label="Pepperoni" value="pepperoni" />
  <Checkbox label="Olives" value="olives" />
  <Checkbox label="Tomatoes" value="tomatoes" />
</CheckboxGroup>

<p>Toppings: {toppings}</p>
```
<CheckboxGroup bind:selected={toppings}>
  <Checkbox label="Pepperoni" value="pepperoni" />
  <Checkbox label="Olives" value="olives" />
  <Checkbox label="Tomatoes" value="tomatoes" />
</CheckboxGroup>

<p>Toppings: {toppings}</p>

---

### Legend

Use the `legend` prop to set a legend for the CheckboxGroup. This will be rendered as a `<legend>` element and will be
styled like the `label` elements on other form components.

```svelte
<CheckboxGroup legend="Beer Options">
  <Checkbox label="Pilsner" />
  <Checkbox label="India Pale Ale" />
  <Checkbox label="Stout" />
</CheckboxGroup>
```
<CheckboxGroup legend="Beer Options">
  <Checkbox label="Pilsner" />
  <Checkbox label="India Pale Ale" />
  <Checkbox label="Stout" />
</CheckboxGroup>

---

### Color Scheme

If all of the Checkbox components in a CheckboxGroup should have the same color scheme, use the `scheme` prop on the
CheckboxGroup instead of on each individual Checkbox.

```svelte
<CheckboxGroup scheme="error">
  <Checkbox label="Delete Database" checked />
  <Checkbox label="Launch Missiles" checked />
  <Checkbox label="Call Mother In Law" checked />
</CheckboxGroup>
```
<CheckboxGroup scheme="error">
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

### Legend Named Slot

Instead of using the `legend` prop which can only be a String, a `legend` named slot can be used for a legend with more
complex content.

```svelte
<CheckboxGroup>
  <legend slot="legend"><CocktailIcon /> Cocktails</legend>
  <Checkbox label="Martini" />
  <Checkbox label="Gimlet" />
</CheckboxGroup>
```
<CheckboxGroup>
  <legend slot="legend" class="flex items-center pb-2"><Martini size={20} /> Cocktails</legend>
  <Checkbox label="Martini" />
  <Checkbox label="Gimlet" />
</CheckboxGroup>

---
<Tables />