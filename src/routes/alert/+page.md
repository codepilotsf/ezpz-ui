<script>
	import { Alert } from '$lib/ui';
	import { IceCream } from 'lucide-svelte';
	import Tables from './Tables.svelte';
</script>

# Alert

Alerts can be used to provide user feedback for things like successful operations and errors. By default, alerts are
displayed at full-width. Use `bind:active` two-way binding so that the parent template can trigger an alert and the
alert's close button can also close it. When using a scheme, an appropriate icon will be included by default.

### Example

The brand scheme will be used by default if no scheme or color is provided.

```svelte
<script>
  import { Alert } from '$lib/ui';
</script>

<Alert>
  A default alert using the brand scheme.
</Alert>
```
<Alert>A default alert using the brand scheme.</Alert>

---

### Color Schemes

Color schemes defined in `theme.css` can be used to set the color and icon used for the alert. The icons used can also
be changed in `utils.js` if desired.


```svelte
<Alert scheme="brand">
  A nicely branded alert.
</Alert>
```
<Alert scheme="brand">A nicely branded alert.</Alert>

---

```svelte
<Alert scheme="info">
  This is just a simple info alert.
</Alert>
```
<Alert scheme="info">This is just a simple info alert.</Alert>

---

```svelte
<Alert scheme="warning">
  Warning! This alert is slightly scary.
</Alert>
```
<Alert scheme="warning">Warning! This alert is slightly scary.</Alert>

---
```svelte
<Alert scheme="success">
  You have been alerted successfully.
</Alert>
```
<Alert scheme="success">You have been alerted successfully.</Alert>

---

```svelte
<Alert scheme="error">
  Something bad happened.
</Alert>
```
<Alert scheme="error">Something bad happened.</Alert>

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

Icons can be disabled by setting the `icon` prop to `false`.

```svelte
<Alert scheme="info" icon={false}>
  Keepin' it simple.
</Alert>
```
<Alert scheme="info" icon={false}>Keepin' it simple.</Alert>

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

<Tables />
