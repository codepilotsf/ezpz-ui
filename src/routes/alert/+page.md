<script>
	import { Alert } from '$lib/ui';
	import { IceCream } from 'lucide-svelte';
	import Table from '$lib/components/Table.svelte';
</script>

# Alert

Alerts can be used to provide user feedback for things like successful operations and errors. By
default, alerts are displayed at full-width. Use `bind:active` two-way binding so that the parent
template can trigger an alert and the alert's close button can also close it. When using a scheme,
an appropriate icon will be included when appropriate.

### Example

The brand scheme will be used by default if no scheme or color is provided.

```svelte
<script>
  import { Alert } from '$lib/ui';
</script>

<Alert>
  A default alert using neutral colors.
</Alert>
```
<Alert>A default alert using neutral colors.</Alert>

---

### Color Schemes

Color schemes defined in `style.css` can be used to set the color and icon used for the alert. The
icons used can also be changed in `utils.js` if desired.

```svelte
<Alert scheme="info">
  This is just a simple info alert.
</Alert>
```
<Alert scheme="info">This is just a simple info alert.</Alert>

---

```svelte
<Alert scheme="success">
  You have been alerted successfully.
</Alert>
```
<Alert scheme="success">You have been alerted successfully.</Alert>

---

```svelte
<Alert scheme="warning">
  Warning! This alert is slightly scary.
</Alert>
```
<Alert scheme="warning">Warning! This alert is slightly scary.</Alert>

---

```svelte
<Alert scheme="danger">
  Something bad happened.
</Alert>
```
<Alert scheme="danger">Something bad happened.</Alert>

---

### Custom Colors

Custom colors can be used by providing `color` and `background` props.

```svelte
<Alert color="#ec4899" background="#fce7f3">
  Pink alert!
</Alert>
```
<Alert color="#ec4899" background="#fce7f3">Pink alert!</Alert>

---

### No Icon

Icons can be disabled by setting the `icon` prop to "false" or a falsey Boolean value.

```svelte
<Alert scheme="info" icon="false">
  Keepin' it simple.
</Alert>
```
<Alert scheme="info" icon="false">Keepin' it simple.</Alert>

---

### Title Named Slot

A title can be added by using the `title` named slot.

```svelte
<Alert scheme="warning">
  <span slot="title">Watch out!</span>
  This seems like a bad idea.
</Alert>
```
<Alert scheme="warning">
	<span slot="title">Watch out!</span>
	This seems like a bad idea.
</Alert>

---

### Icon Named Slot

An icon can be added by using the `icon` named slot.
  
```svelte
<Alert scheme="success">
  <IceCream slot="icon" size={26} />
  That ice cream was delicious.
</Alert>
```
<Alert scheme="success">
	<IceCream slot="icon" size={26} />
	That ice cream was delicious.
</Alert>

---

<Table name="Alert" type="props">
  <tr>
    <td><code>active</code></td>
    <td>Boolean</td>
    <td><code>true</code></td>
    <td
      >Use with <code>bind:active</code> two-way binding so that the parent template
      can trigger an alert and the Alert's close button can also close it.</td
    >
  </tr>
  <tr>
    <td><code>icon</code></td>
    <td>String | Boolean</td>
    <td><code>true</code></td>
    <td
      >Sets whether an icon is displayed for scheme which includes a default
      icon.</td
    >
  </tr>
  <tr>
    <td><code>scheme</code></td>
    <td>String: 'info', 'success', 'warning', 'danger'</td>
    <td>&nbsp;</td>
    <td>Color/Icon scheme of alert to be displayed</td>
  </tr>
  <tr>
    <td><code>color</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td
      >Color used for text and icons (overrides <code>scheme</code> if present)</td
    >
  </tr>
  <tr>
    <td><code>background</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td
      >Color or CSS background value used for background (overrides <code
        >scheme</code
      > if present)</td
    >
  </tr>
  <tr>
    <td><code>class</code></td>
    <td>String</td>
    <td>&nbsp;</td>
    <td
      >CSS classes declared in global scope can be applied to the outermost
      element</td
    >
  </tr>
  <tr>
    <td><code>...</code></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td
      >Additional props will be passed through to the HTML element enabling
      support for things like <code>on:click</code>, etc</td
    >
  </tr>
</Table>

<Table name="Alert" type="slots">
  <tr>
    <td><code>title</code></td>
    <td>Content to be used as a title</td>
  </tr>
  <tr>
    <td><code>icon</code></td>
    <td>An icon component to replace the default icon </td>
  </tr>
</Table>
