<script>
	import { Checkbox, CheckboxGroup } from '$lib/ui';
  import Tables from './Tables.svelte';
  import { Martini } from 'lucide-svelte';

  let toppings = [];
</script>

# CheckboxGroup

Use a CheckboxGroup to group multiple Checkbox components for a predictable layout and the ability to set `scheme`
or `color` as a single property to be inherited by all children.

### Import

```svelte
<script>
  import { CheckboxGroup, Checkbox } from '$lib/ui';
</script>
```

---

### Bind Selected

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


### Legend

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

### Scheme

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

### Color

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