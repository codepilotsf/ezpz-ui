<script>
	import { Radio, RadioGroup } from '$lib/ui';
  import Tables from './Tables.svelte';
  import { Martini } from 'lucide-svelte';

  let make = $state();
  let hand = $state();
  let level = $state();
  let color = $state();
  let cocktail = $state();
</script>

# RadioGroup

Use a RadioGroup to group multiple Radio components for a predictable layout and the ability to two-way bind a
`selected` value coupled to which radio button is selected. Additionally, you can  set a `scheme` or `color` as a single
property to be inherited by all child Radios.

### Example

Use `bind:selected` to two-bind the reactive value of the selected item.

```svelte
<script>
  import { RadioGroup, Radio } from '$lib/ui';
  let make = $state();
</script>

<RadioGroup bind:selected={make}>
  <Radio label="Ford" value="ford" />
  <Radio label="Dodge" value="dodge" />
  <Radio label="Tesla" value="tesla" />
</RadioGroup>

<p>Make: {make}</p>
```
<RadioGroup bind:selected={make}>
  <Radio label="Ford" value="ford" />
  <Radio label="Dodge" value="dodge" />
  <Radio label="Tesla" value="tesla" />
</RadioGroup>

<p>Make: {make}</p>

---

### Legend

Use the `label` prop to set a label for the RadioGroup. This will be rendered as a `<label>` element and will be
styled like the `label` elements on other form components.

```svelte
<RadioGroup label="Dominant Hand">
  <Radio label="Left" value="left" />
  <Radio label="Right" value="right" />
</RadioGroup>
```
<RadioGroup label="Dominant Hand">
  <Radio label="Left" value="left" />
  <Radio label="Right" value="right" />
</RadioGroup>

---

### Color Scheme

If all of the Radio components in a RadioGroup should have the same color scheme, use the `scheme` prop on the
RadioGroup instead of on each individual Radio.

```svelte
<RadioGroup scheme="danger">
  <Radio label="Hazardous" value="1" checked />
  <Radio label="Dangerous" value="2" />
  <Radio label="Perilous" value="3" />
</RadioGroup>
```
<RadioGroup scheme="danger">
  <Radio label="Hazardous" value="1" checked />
  <Radio label="Dangerous" value="2" />
  <Radio label="Perilous" value="3" />
</RadioGroup>

---

### Custom Color

If all of the Radio components in a RadioGroup should have the same color, use the `color` prop on the
RadioGroup instead of on each individual Radio.

```svelte
<RadioGroup color="#777">
  <Radio label="Boring" value="gray" />
  <Radio label="Equally Boring" value="alsoGray" checked />
</RadioGroup>
```
<RadioGroup color="#777">
  <Radio label="Boring" value="gray" />
  <Radio label="Equally Boring" value="alsoGray" checked />
</RadioGroup>

---

### Legend Named Slot

Instead of using the `label` prop which can only be a String, a `label` named slot can be used for a label with more
complex content.

```svelte
<RadioGroup bind:selected={cocktail}>
  <label slot="label"><CocktailIcon /> Cocktails</label>
  <Radio label="Martini" value="m" />
  <Radio label="Gimlet" value="g" />
</RadioGroup>
```
<RadioGroup bind:selected={cocktail}>
  <label slot="label" class="flex items-center pb-2"><Martini size={20} /> Cocktails</label>
  <Radio label="Martini" value="m" />
  <Radio label="Gimlet" value="g" />
</RadioGroup>

---
<Tables />