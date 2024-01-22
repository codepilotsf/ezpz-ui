<script>
	import { Alert } from '$lib/ui';
	import { IceCream } from 'lucide-svelte';
	import Tables from './Tables.svelte';
</script>

# Alert
Alerts can be used to provide user feedback for things like successful operations and errors. By default, alerts are
displayed at full-width. Use `bind:active` two-way binding so that the parent template can trigger an Alert and the
Alert's close button can also close it. When using a theme other than the default, the alert will use the theme's accent
color and an appropriate default icon which can be replaced with a custom icon via a named slot.

### Import

```html
<script>
  import { Alert } from '$lib/ui';
</script>
```

### Themes

```html
<Alert theme="default">
  The default alert has no icon.
</Alert>
```
<Alert theme="default">The default alert has no icon.</Alert>

---

```html
<Alert theme="info">
  This is just a simple info alert.
</Alert>
```
<Alert theme="info">This is just a simple info alert.</Alert>

---

```html
<Alert theme="warning">
  Warning! This alert is slightly scary.
</Alert>
```
<Alert theme="warning">Warning! This alert is slightly scary.</Alert>

---
```html
<Alert theme="success">
  You have been alerted successfully.
</Alert>
```
<Alert theme="success">You have been alerted successfully.</Alert>

---

```html
<Alert theme="error">
  Something bad happened.
</Alert>
```
<Alert theme="error">Something bad happened.</Alert>

---

```html
<Alert theme="brand">
  A nicely branded alert.
</Alert>
```
<Alert theme="brand">A nicely branded alert.</Alert>

---

### Custom Colors

```html
<Alert color="#ec4899" background="#fce7f3">
  Pink alert!
</Alert>
```
<Alert color="#ec4899" background="#fce7f3">Pink alert!</Alert>

---

### No Icon

```html
<Alert theme="info" icon={false}>
  Keepin' it simple.
</Alert>
```
<Alert theme="info" icon={false}>Keepin' it simple.</Alert>

---

### Title Named Slot

```html
<Alert theme="warning">
  <span slot="title">Watch out!</span>
  This seems like a bad idea.
</Alert>
```
<Alert theme="warning">
	<span slot="title">Watch out!</span>
	This seems like a bad idea.
</Alert>

---

### Icon Named Slot
  
```html
<Alert theme="success">
  <IceCream slot="icon" size={26} />
  That ice cream was delicious.
</Alert>
```
<Alert theme="success">
	<IceCream slot="icon" size={26} />
	That ice cream was delicious.
</Alert>

---

<Tables />
