<script>
	import { Alert } from '$lib/ui';
	import { IceCream } from 'lucide-svelte';
	import Default from './default.md';
	import Info from './info.md';
	import Warning from './warning.md';
	import Success from './success.md';
	import Error from './error.md';
	import Brand from './brand.md';
	import Color from './color.md';
	import NoIcon from './no-icon.md';
	import WithTitle from './with-title.md';
	import WithIcon from './with-icon.md';
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

<!-- Properties Table -->
<h3>Alert Properties</h3>
<table class="w-full">
	<thead class="text-left">
		<tr>
			<th>Prop</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>active</code></td>
			<td>Boolean</td>
			<td><code>true</code></td>
			<td
				>Use with <code>bind:active</code> two-way binding so that the parent template can trigger an
				alert and the Alert's close button can also close it.</td
			>
		</tr>
		<tr>
			<td><code>icon</code></td>
			<td>Boolean</td>
			<td><code>true</code></td>
			<td>Sets whether an icon is displayed for theme which includes a default icon.</td>
		</tr>
		<tr>
			<td><code>theme</code></td>
			<td>String: 'default', 'info', 'warning', 'success', 'error', or 'brand'</td>
			<td>'default'</td>
			<td>Color/Icon theme of alert to be displayed</td>
		</tr>
		<tr>
			<td><code>color</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Color used for text and icons (overrides <code>theme</code> if present)</td>
		</tr>
		<tr>
			<td><code>background</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td
				>Color or CSS background value used for background (overrides <code>theme</code> if present)</td
			>
		</tr>
	</tbody>
</table>

<!-- Named Slots Table -->
<h3>Alert Named Slots</h3>
<table class="w-full">
	<thead class="text-left">
		<tr>
			<th>Slot Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>title</code></td>
			<td>Content to be used as a title</td>
		</tr>
		<tr>
			<td><code>icon</code></td>
			<td>An icon component to replace the default icon </td>
		</tr>
	</tbody>
</table>
