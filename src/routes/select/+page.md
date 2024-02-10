<script>
    import { Select, Option, Button } from "$lib/ui";
    import Tables from './Tables.svelte';
    let pet = $state();
</script>

# Select

Standard select input field which expects child `<Option>` components.

### Example

Select option from the list of options

```svelte
<script>
  import { Select } from "$lib/ui";
  let pet = $state();
</script>

<Select bind:selected={pet}>
  <Option label="Dog" value="dog" />
  <Option label="Hamster" value="hamster" />
  <Option label="Parrot" value="parrot" />
</Select>

```
<Select bind:selected={pet}>
  <Option label="Dog" value="dog" />
  <Option label="Hamster" value="hamster" />
  <Option label="Parrot" value="parrot" />
</Select>

Pet: {pet}
---

<Tables />
