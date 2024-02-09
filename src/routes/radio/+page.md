<script>
	import { RadioGroup, Radio } from '$lib/ui';
  import Tables from './Tables.svelte';
  import { Pizza } from 'lucide-svelte';

  let make = 'tesla';
</script>

# Radio

Radio components are used to select one of multiple options. Because they have no useful purpose on their own, they are
*only* intended to be used within a [RadioGroup](/radio-group) wrapper component.

### Example

As mentioned above, a single radio button isn't very useful – but here's one anyway. The default color scheme is `brand`.

```svelte
<script>
  import { Radio } from '$lib/ui';
</script>

<Radio label="Your only option" />
```
<Radio label="Your only option" />

---

### Checked

Not normally used because the RadioGroup `selected` prop will set which Radio is checked (and overrides this property).

```svelte
<Radio label="Your choice is made" checked />
```
<Radio label="Your choice is made" checked />

---

### Label

A `label` prop let's you define a simple String to be used as the radio label.

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

### Color Scheme

Individual radios can be styled with a `scheme` prop. More often, you'll want to set the scheme for all radios in a group
by setting the `scheme` prop on the [RadioGroup](/radio-group) wrapper component.

```svelte
<Radio scheme="neutral" label="Neutral" checked />
```
<Radio scheme="neutral" label="Neutral" checked />

---

```svelte
<Radio scheme="info" label="Info" checked />
```
<Radio scheme="info" label="Info" checked />

---

```svelte
<Radio scheme="warning" label="Warning" checked />
```
<Radio scheme="warning" label="Warning" checked />

---

```svelte
<Radio scheme="success" label="Success" checked />
```
<Radio scheme="success" label="Success" checked />

---

```svelte
<Radio scheme="danger" label="Danger" checked />
```
<Radio scheme="danger" label="Danger" checked />

---

### Custom Color

Set an arbitrary color to use for the radio when checked.

```svelte
<Radio label="Spam me" color="deeppink" checked />
```
<Radio label="Spam me" color="deeppink" checked />

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
`selected` value when checked.

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

<Tables />