<script>
	import { ButtonGroup, Button } from '$lib/ui';
  import Tables from './Tables.svelte';

  let name = '';
</script>

# ButtonGroup

A ButtonGroup is used to group child Button components together as a single element.

### Import

```svelte
<script>
  import { ButtonGroup, Button } from '$lib/ui';
</script>
```

---

### Simple

```svelte
<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>
```
Value: {name}
<ButtonGroup bind:value={name}>
  <Button name="left">Left</Button>
  <Button name="middle">Middle</Button>
  <Button  name="right">Right</Button>
</ButtonGroup>

---

```svelte
<ButtonGroup>
  <Button color="#b91c1c">Red Pill</Button>
  <Button color="#1d4ed8">Blue Pill</Button>
</ButtonGroup>
```
<ButtonGroup>
  <Button color="#b91c1c">Red Pill</Button>
  <Button color="#1d4ed8">Blue Pill</Button>
</ButtonGroup>

---

<Tables />