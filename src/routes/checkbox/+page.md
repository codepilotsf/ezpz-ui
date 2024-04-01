<script>
  import { Checkbox } from '$lib/ui';
    import Table from '$lib/components/Table.svelte';
  import { Heart } from 'lucide-svelte';

  let name = '';
  let isChecked = $state(false);
  let wantsSpam = $state(false);
</script>

# Checkbox

Checkbox components are used to toggle a single boolean value. They can also be used within a
[CheckboxGroup](/checkbox-group) to toggle multiple values.

---

### Example

Check the checkbox to see the value change.

```svelte
<script>
  import { Checkbox } from '$lib/ui';
  let isChecked = $state(false);
</script>

<Checkbox bind:checked={isChecked} />

<p>Checked: {isChecked}</p>
```
<Checkbox
  bind:checked={isChecked}
/>

<p>Checked: {isChecked}</p>


---

### Label

A `label` prop let's you define a simple String to be used as the checkbox label.

```svelte
<Checkbox label="I agree to the terms." />
```
<Checkbox label="I agree to the terms." />

---

### Name

Use the `name` prop for a single checkbox to specify the FormData key.

```svelte
<Checkbox label="I agree to the terms." name="approveTerms" />
```
<Checkbox label="I agree to the terms." name="approveTerms" />

---

### Error

Display error message below the checkboxes. Also adds error styles.

```svelte
<Checkbox label="Bauhaus" error="You must like bauhaus" />
```
<Checkbox label="Bauhaus" error="You must like Bauhaus" />
---

### Note

A `note` prop let's you define a note displayed below the field.

```svelte
<Checkbox label="Bauhaus" note="Check above to indicate good taste" />
```
<Checkbox label="Bauhaus" note="Check above to indicate good taste" />

---

### Leading Label

Labels normally appear to the right of the checkbox. Use the `leadingLabel` prop instead to place it
on the left.

```svelte
<Checkbox leadingLabel="I agree to the terms." />
```
<Checkbox leadingLabel="I agree to the terms." />

---

### Checked

Not normally used because the CheckboxGroup `value` prop will set which Checkboxes are checked (and
overrides this property). If using outside of a CheckboxGroup, then use with the `bind:checked`
directive as shown in the example at the top of this page. The `checked` prop can also be assigned a
Boolean value like `checked={user.wantsSpam}`.

```svelte
<Checkbox label="Spam me" checked />
```
<Checkbox label="Spam me" checked />

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={user.isSpammable}`.

```svelte
<Checkbox label="Spam me" disabled />
```
<Checkbox label="Spam me" disabled />

---

### Value

When used within a [CheckboxGroup](/checkbox-group), this is the value that will be assigned to the
CheckboxGroup's `value` array when checked.

```svelte
<Checkbox label="Spam me" value="spamMe" />
```
<Checkbox label="Spam me" value="spamMe" />

---

### Label Named Slot

Since the `label` prop can only be a String, you can use the `label` slot instead to pass in a more
complex label.

```svelte
<Checkbox>
  <span slot="label">
    Don't you just <HeartIcon /> spam?
  </span>
</Checkbox>
```
<Checkbox>
  <span class="flex items-center gap-1" slot="label">Don't you just <Heart size={18} /> spam?</span>
</Checkbox>

---

### Leading Label Named Slot

Since the `leadingLabel` prop can only be a String, you can use the `leadingLabel` slot instead to
pass in a more complex leading label.

```svelte
<Checkbox>
  <span slot="leadingLabel">
    I hereby confirm that I <HeartIcon /> spam.
  </span>
</Checkbox>
```
<Checkbox> <span class="flex items-center gap-1" slot="leadingLabel">I hereby confirm that I <Heart
  size={18} /> spam.</span> </Checkbox>

---

<Table name="Checkbox" type="props">
  <tr>
    <td><code>label</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text label appears trailing the checkmark</td>
  </tr>
  <tr>
    <td><code>name</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>The <code>name</code> property for this Checkbox</td>
  </tr>
  <tr>
    <td><code>error</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>The error note displayed</td>
  </tr>
  <tr>
    <td><code>note</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>The help note displayed</td>
  </tr>
  <tr>
    <td><code>leadingLabel</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td>Text label appears leading the checkmark</td>
  </tr>
  <tr>
    <td><code>checked</code></td>
    <td>Boolean</td>
    <td><code>false</code></td>
    <td>Normally used with <code>bind:checked</code> directive. Not needed within a CheckboxGroup</td>
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

<Table name="Checkbox" type="css">
  <tr>
    <td><code>--ui-checkbox-small-font-size</code></td>
    <td>Numeric</td>
    <td><code>--ui-small-font-size</code>, <code>0.875rem</code></td>
    <td>Font size for checkbox label</td>
  </tr>
  <tr>
    <td><code>--ui-checkbox-gap</code></td>
    <td>Numeric</td>
    <td><code>0.5rem</code></td>
    <td>Font size for checkbox label</td>
  </tr>
  <tr>
    <td><code>--ui-checkbox-border-width</code></td>
    <td>Numeric</td>
    <td><code>--ui-border-width</code>, <code>1px</code></td>
    <td>Border width</td>
  </tr>
  <tr>
    <td><code>--ui-checkbox-border-color</code></td>
    <td>Color</td>
    <td><code>--ui-border-color</code>, <code>--ui-midtone</code>, <code>#94a3b8</code></td>
    <td>Border color</td>
  </tr>
  <tr>
    <td><code>--ui-checkbox-background</code></td>
    <td>Color</td>
    <td><code>--ui-focus</code>, <code>#3b82f6</code></td>
    <td>Background color of checked checkbox</td>
  </tr>
</Table>

<Table name="Checkbox" type="slots">
  <tr>
    <td><code>label</code></td>
    <td>Content to be used for label after checkbox (supercedes <code>label</code> property)</td>
  </tr>
  <tr>
    <td><code>labelLeading</code></td>
    <td
      >Content to be used for label preceding checkbox (supercedes <code>leadingLabel</code> property)</td
    >
  </tr>
</Table>