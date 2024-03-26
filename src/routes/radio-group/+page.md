<script>
	import { Radio, RadioGroup } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
  import { Martini } from 'lucide-svelte';

  let make = $state();
  let hand = $state();
  let level = $state();
  let color = $state();
  let cocktail = $state();
</script>

# RadioGroup

Use a RadioGroup to group multiple Radio components for a predictable layout and the ability to two-way bind a
`value` value coupled to which radio button is value. Additionally, you can  set a `scheme` or `color` as a single
property to be inherited by all child Radios.

### Example

Use `bind:value` to two-bind the reactive value of the value item.

```svelte
<script>
  import { RadioGroup, Radio } from '$lib/ui';
  let make = $state();
</script>

<RadioGroup bind:value={make}>
  <Radio label="Ford" value="ford" />
  <Radio label="Dodge" value="dodge" />
  <Radio label="Tesla" value="tesla" />
</RadioGroup>

<p>Make: {make}</p>
```
<RadioGroup bind:value={make}>
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

### Name

If a `name` prop is set on the RadioGroup, it will be inherited by all child Radio components. This
is useful for grouping Radio components together in a form.

```svelte
<RadioGroup label="Dominant Hand" name="hand">
  <Radio label="Left" value="left" />
  <Radio label="Right" value="right" />
</RadioGroup>
```
<RadioGroup label="Dominant Hand" name="hand">
  <Radio label="Left" value="left" />
  <Radio label="Right" value="right" />
</RadioGroup>

---

### Legend Named Slot

Instead of using the `label` prop which can only be a String, a `label` named slot can be used for a label with more
complex content.

```svelte
<RadioGroup bind:value={cocktail}>
  <label slot="label"><CocktailIcon /> Cocktails</label>
  <Radio label="Martini" value="m" />
  <Radio label="Gimlet" value="g" />
</RadioGroup>
```
<RadioGroup bind:value={cocktail}>
  <label slot="label" class="flex items-center pb-2"><Martini size={20} /> Cocktails</label>
  <Radio label="Martini" value="m" />
  <Radio label="Gimlet" value="g" />
</RadioGroup>

---


<Table name="RadioGroup" type="props">
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
    <td>Text label appears before radio</td>
  </tr>
  <tr>
    <td><code>name</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>The <code>name</code> property to be inherited by all child radio components</td>
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

<Table name="Radio" type="css">
  <tr>
    <td><code>--ui-checkbox-background</code></td>
    <td>Color</td>
    <td><code>--ui-focus</code> or <code>#3b82f6</code></td>
    <td>Background color of checked checkbox</td>
  </tr>
</Table>

<Table name="RadioGroup" type="slots">
  <tr>
    <td><code>label</code></td>
    <td
      >Content to be used for label before RadioGroup (supercedes <code>label</code> property)</td
    >
  </tr>
</Table>