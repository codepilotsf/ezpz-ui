<script>
	import { ButtonGroup, Button } from '$lib/ui';
  import Table from '$lib/components/Table.svelte';
  import HeadsUp from '$lib/components/HeadsUp.svelte';

  let name = '';
  let whichway = $state();

  function handleClick(val) {
    whichway = val;
  }
</script>

# ButtonGroup

A ButtonGroup is used to group child Button components together as a single element. They can be
used to create a segmented control for plain buttons with an `on:click` directive.

### Example

```svelte
<script>
  import { ButtonGroup, Button } from '$lib/ui';
  let whichway = $state();

  function handleClick(val) {
    whichway = val;
  }
</script>

<ButtonGroup>
  <Button
    on:click={() => handleClick('left')}
    active={whichway === 'left'}
  >
    Left
  </Button>
  <Button
    on:click={() => handleClick('middle')}
    active={whichway === 'middle'}
  >
    Middle
  </Button>
  <Button
    on:click={() => handleClick('right')}
    active={whichway === 'right'}
  >
    Right
  </Button>
</ButtonGroup>

<p>whichway: {whichway}</p>
```
<ButtonGroup>
  <Button
    on:click={() => handleClick('left')}
    active={whichway === 'left'}
  >
    Left
  </Button>
  <Button
    on:click={() => handleClick('middle')}
    active={whichway === 'middle'}
  >
    Middle
  </Button>
  <Button
    on:click={() => handleClick('right')}
    active={whichway === 'right'}
  >
    Right
  </Button>
</ButtonGroup>

<p>whichway: {whichway}</p>

---

### Size

Use the `size` prop on the ButtonGroup to set the size for all child Buttons.

```svelte
<ButtonGroup size="sm">
  <Button>A</Button>
  <Button>B</Button>
  <Button>C</Button>
</ButtonGroup>
```
<ButtonGroup size="sm">
  <Button>A</Button>
  <Button>B</Button>
  <Button>C</Button>
</ButtonGroup>

---

<Table name="ButtonGroup" type="props">
  <tr>
    <td><code>size</code></td>
    <td>String: 'xs', 'sm', 'md', 'lg', or 'xl'</td>
    <td>'md'</td>
    <td>Size to be used for all child Button components</td>
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
      <code>disabled</code>, <code>on:click</code>, <code>target="_blank"</code>, etc</td
    >
  </tr>
</Table>

<Table name="ButtonGroup" type="css">
  <tr>
    <td><code>--ui-button-group-border</code></td>
    <td>Border shorthand</td>
    <td><code>none</code></td>
    <td>CSS border shorthand</td>
  </tr>
  <tr>
    <td><code>--ui-button-group-radius</code></td>
    <td>Numeric</td>
    <td><code>--ui-button-radius</code>, <code>--ui-border-radius</code>, <code>3px</code></td>
    <td>CSS border shorthand</td>
  </tr>
  <tr>
    <td><code>--ui-button-group-shadow</code></td>
    <td>Box shadow shorthand</td>
    <td><code>--ui-button-shadow</code>,<br><code>0 2px 2px 0 rgba(0, 0, 0, 0.2)</code></td>
    <td>CSS box shadow shorthand</td>
  </tr>
</Table>

<HeadsUp>Remember that because the ButtonGroup component is a wrapper for Button components, you
can also set style-props for Buttons like <code>--ui-button-background</code> and the Buttons 
contained within the group will be styled accordingly.</HeadsUp>

