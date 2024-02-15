<script>
  import { Checkbox } from '$lib/ui';
  import Tables from './Tables.svelte';
  import { Heart } from 'lucide-svelte';

  let name = '';
  let isChecked = $state(false);
  let wantsSpam = $state(false);
</script>

# Checkbox

Checkbox components are used to toggle a single boolean value. They can also be used within a [CheckboxGroup](/checkbox-group) to toggle
multiple values.

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

### Leading Label

Labels normally appear to the right of the checkbox. Use the `leadingLabel` prop instead to place it on the left.

```svelte
<Checkbox leadingLabel="I agree to the terms." />
```
<Checkbox leadingLabel="I agree to the terms." />

---

### Color Scheme

Color schemes defined in `style.css` can be used to set the color of the checkbox when checked.

```svelte
<Checkbox scheme="neutral" label="Neutral" checked/>
<Checkbox scheme="info" label="Info" checked/>
<Checkbox scheme="warning" label="Warning" checked/>
<Checkbox scheme="success" label="Success" checked/>
<Checkbox scheme="danger" label="Danger" checked/>
```
<div class="flex flex-col gap-2">
  <Checkbox scheme="neutral" label="Neutral" checked/>
  <Checkbox scheme="info" label="Info" checked/>
  <Checkbox scheme="warning" label="Warning" checked/>
  <Checkbox scheme="success" label="Success" checked/>
  <Checkbox scheme="danger" label="Danger" checked/>
</div>

---

### Custom Color

Set an arbitrary color to use for the checkbox when checked.

```svelte
<Checkbox label="Spam me" color="deeppink" checked />
```
<Checkbox label="Spam me" color="deeppink" checked />

---

### Checked

Not normally used because the CheckboxGroup `value` prop will set which Checkboxes are checked (and overrides this
property). If using outside of a CheckboxGroup, then use with the `bind:checked` directive as shown in the example at
the top of this page. The `checked` prop can also be assigned a Boolean value like `checked={user.wantsSpam}`.

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

When used within a [CheckboxGroup](/checkbox-group), this is the value that will be assigned to the CheckboxGroup's
`value.value` array when checked.

```svelte
<Checkbox label="Spam me" value="spamMe" />
```
<Checkbox label="Spam me" value="spamMe" />

---

### Label Named Slot

Since the `label` prop can only be a String, you can use the `label` slot instead to pass in a more complex label.

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


---

### Leading Label Named Slot

Since the `leadingLabel` prop can only be a String, you can use the `leadingLabel` slot instead to pass in a more
complex leading label.

```svelte
<Checkbox>
  <span slot="leadingLabel">
    I hereby confirm that I <HeartIcon /> spam.
  </span>
</Checkbox>
```
<Checkbox>
  <span class="flex items-center gap-1" slot="leadingLabel">I hereby confirm that I <Heart size={18} /> spam.</span>
</Checkbox>

---

<Tables />
