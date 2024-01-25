<script>
	import { ButtonGroup, Button } from '$lib/ui';
  import Tables from './Tables.svelte';

  let name = '';
  let align = undefined;

  function handleClick(val) {
    align = val;
  }
</script>

# ButtonGroup

A ButtonGroup is used to group child Button components together as a single element. They can be used to create a
segmented control for plain buttons with an `on:click` directive.

### Example

```svelte
<script>
  import { ButtonGroup, Button } from '$lib/ui';
  let align = '';

  function handleClick(val) {
    align = val;
  }
</script>

<ButtonGroup>
  <Button
    on:click={() => handleClick('left')}
    active={align === 'left'}
  >
    Left
  </Button>
  <Button
    on:click={() => handleClick('middle')}
    active={align === 'middle'}
  >
    Middle
  </Button>
  <Button
    on:click={() => handleClick('right')}
    active={align === 'right'}
  >
    Right
  </Button>
</ButtonGroup>

<p>Alignment: {align}</p>
```
<ButtonGroup>
  <Button
    on:click={() => handleClick('left')}
    active={align === 'left'}
  >
    Left
  </Button>
  <Button
    on:click={() => handleClick('middle')}
    active={align === 'middle'}
  >
    Middle
  </Button>
  <Button
    on:click={() => handleClick('right')}
    active={align === 'right'}
  >
    Right
  </Button>
</ButtonGroup>

<p>Alignment: {align}</p>

---

### Color Scheme

If all of the Button components in a ButtonGroup should have the same color scheme, use the `scheme` prop on the
ButtonGroup instead of on each individual Button.

```svelte
<ButtonGroup scheme="error">
  <Button>Dangerous</Button>
  <Button>Hazardous</Button>
  <Button>Perilous</Button>
</ButtonGroup>
```
<ButtonGroup scheme="error">
  <Button>Dangerous</Button>
  <Button>Hazardous</Button>
  <Button>Perilous</Button>
</ButtonGroup>

---

### Custom Color

If all of the Button components in a ButtonGroup should have the same color, use the `color` prop on the
ButtonGroup instead of on each individual Button.


```svelte
<ButtonGroup color="sienna">
  <Button>Herp</Button>
  <Button>Derp</Button>
</ButtonGroup>
```
<ButtonGroup color="sienna">
  <Button>Herp</Button>
  <Button>Derp</Button>
</ButtonGroup>

---

### Size

If all of the Button components in a ButtonGroup should have the same size, use the `size` prop on the
ButtonGroup instead of on each individual Button.

```svelte
<ButtonGroup size="sm" color="gray">
  <Button>A</Button>
  <Button>B</Button>
  <Button>C</Button>
</ButtonGroup>
```
<ButtonGroup size="sm" color="gray">
  <Button>A</Button>
  <Button>B</Button>
  <Button>C</Button>
</ButtonGroup>

---

<Tables />