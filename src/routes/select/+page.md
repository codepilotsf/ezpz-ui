<script>
    import { Select, Option, Button } from "$lib/ui";
    import Tables from './Tables.svelte';
    let pet = $state();
</script>

# Select

Standard select menu which expects child `<Option>` components.

### Example

Select option from the list of options

```svelte
<script>
  import { Select } from "$lib/ui";
  let pet = $state();
</script>

<Select label="Pet" name="pet" bind:selected={pet}>
  <Option label="Dog" value="dog" />
  <Option label="Hamster" value="hamster" />
  <Option label="Parrot" value="parrot" />
</Select>

<p>Pet: {pet}</p>

```
<Select label="Pet" bind:selected={pet}>
  <Option label="Dog" value="dog" />
  <Option label="Hamster" value="hamster" />
  <Option label="Parrot" value="parrot" />
</Select>

<p>Pet: {pet}</p>

---

### Name

Name of the select element which will be used as the key in the form data.

```svelte
<Select name="direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select name="direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Label

Label for the select element.

```svelte
<Select label="Direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select label="Direction">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Placeholder

Placeholder for the select element. Default is "Select". Set the value to `"false"` or `{false}` to remove the placeholder.

```svelte
<Select placeholder="Choose up or down">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select placeholder="Choose up or down">
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Disabled

Disable the select element.

```svelte
<Select name="direction" disabled>
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

```
<Select name="direction" disabled>
  <Option label="Up" value="up" />
  <Option label="Down" value="down" />
</Select>

---

### Error

Display error message below the select element. Also adds error styles to the select element.

```svelte
<Select error="Must select a color">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

```
<Select error="Must select a color">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

---

### Note

Display error message below the select element. Also adds error styles to the select element.

```svelte
<Select note="We'd like to know">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

```
<Select note="We'd like to know">
  <Option label="Blue" value="blue" />
  <Option label="Red" value="red" />
  <Option label="Green" value="green" />
  <Option label="Yellow" value="yellow" />
</Select>

---

<Tables />
