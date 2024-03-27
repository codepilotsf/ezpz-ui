<script>
	import { RadioGroup, Radio } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
  import { Pizza } from 'lucide-svelte';

  let make = 'tesla';
</script>

# Radio

Radio components are used to select one of multiple options. Because they have no useful purpose on their own, they are
*only* intended to be used within a [RadioGroup](/radio-group) wrapper component.

### Example

As mentioned above, a single radio button isn't very useful – but here's one anyway. The default color is `--ui-focus`.

```svelte
<script>
  import { Radio } from '$lib/ui';
</script>

<Radio label="Your only option" />
```
<Radio label="Your only option" />

---

### Checked

Not normally used because the RadioGroup `value` prop will set which Radio is checked (and overrides this property).

```svelte
<Radio label="Your choice is made" checked />
```
<Radio label="Your choice is made" checked />

---

### Label

A `label` prop let's you define a string to be used as the radio label.

```svelte
<Radio label="Choose wisely" />
```
<Radio label="Choose wisely" />

---

### Leading Label

Labels normally appear to the right of the radio. Use the `leadingLabel` prop instead to place it on the left.

```svelte
<Radio leadingLabel="No going back" />
```
<Radio leadingLabel="No going back" />

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={user.isSignedIn}`.

```svelte
<Radio label="Not an option" disabled />
```
<Radio label="Not an option" disabled />

---

### Value

This is the value that will be assigned to the [RadioGroup](/radio-group)'s
`value` value when checked.

```svelte
<Radio label="Spam me" value="spamMe" />
```
<Radio label="Spam me" value="spamMe" />


---

### Label Named Slot

Since the `label` prop can only be a String, you can use the `label` slot instead to pass in a more complex label.

```svelte
<Radio>
  <span slot="label">
    <PizzaIcon /> Pizza
  </span>
</Radio>
```
<Radio>
  <span class="flex items-center gap-1" slot="label">
    <Pizza size={18} /> Pizza</span>
</Radio>


---

### Leading Label Named Slot

Use the `leadingLabel` slot to pass in a more complex leading label that precedes the radio.

```svelte
<Radio>
  <span slot="leadingLabel">
    <PizzaIcon /> Pizza
  </span>
</Radio>
```
<Radio>
  <span class="flex items-center gap-1" slot="leadingLabel">
    <Pizza size={18} /> Pizza</span>
</Radio>

---

<Table name="Radio" type="props">
  <tr>
    <td><code>label</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text label appears trailing the radio</td>
  </tr>
  <tr>
    <td><code>leadingLabel</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text label appears leading the radio</td>
  </tr>
  <tr>
    <td><code>checked</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>Normally used with <code>bind:checked</code> directive. Not needed within a RadioGroup</td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>&nbsp;</td>
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
    <td><code>--ui-radio-small-font-size</code></td>
    <td>Numeric</td>
    <td><code>--ui-small-font-size</code>, <code>0.875rem</code></td>
    <td>Font size for radio label</td>
  </tr>
  <tr>
    <td><code>--ui-radio-gap</code></td>
    <td>Numeric</td>
    <td><code>0.5rem</code></td>
    <td>Font size for radio label</td>
  </tr>
  <tr>
    <td><code>--ui-radio-border-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-width</code>, <code>1px</code></td>
    <td>Border width</td>
  </tr>
  <tr>
    <td><code>--ui-radio-border-color</code></td>
    <td>Color</td>
    <td><code>--ui-border-color</code>, <code>--ui-midtone</code>, <code>#94a3b8</code></td>
    <td>Border color</td>
  </tr>
  <tr>
    <td><code>--ui-radio-background</code></td>
    <td>Color</td>
    <td><code>--ui-focus</code>, <code>#3b82f6</code></td>
    <td>Background color of checked radio</td>
  </tr>
</Table>

<Table name="Radio" type="slots">
  <tr>
    <td><code>label</code></td>
    <td>Content to be used for label after radio (supercedes <code>label</code> property)</td>
  </tr>
  <tr>
    <td><code>labelLeading</code></td>
    <td
      >Content to be used for label preceding radio (supercedes <code>leadingLabel</code> property)</td
    >
  </tr>
</Table>