<script>
	import { Button } from '$lib/ui';
</script>

# Button
Button components are rendered as a `button` element by default or if an `href` property is passed, it will be rendered
as a regular `a` anchor link element. Styling will be the same in either case. By default, buttons are full-width and
color themes set in `style.css` are inversed.

### Import
```html
<script>
  import { Button } from '$lib/ui';
</script>
```

---

### Themes
```html
<Button>
  Click Me
</Button>
```
<Button>Click Me</Button>

---

```html
<Button theme="info">
  Click Me
</Button>
```
<Button theme="info">Click Me</Button>

---

```html
<Button theme="warning">
  Click Me
</Button>
```
<Button theme="warning">Click Me</Button>

---

```html
<Button theme="success">
  Click Me
</Button>
```
<Button theme="success">Click Me</Button>

---

```html
<Button theme="error">
  Click Me
</Button>
```
<Button theme="error">Click Me</Button>

---

```html
<Button theme="brand">
  Click Me
</Button>
```
<Button theme="brand">Click Me</Button>

---

### Sizes
```html
<Button size="xs">
  Click Me
</Button>
```
<Button size="xs">Click Me</Button>

---

```html
<Button size="sm">
  Click Me
</Button>
```
<Button size="sm">Click Me</Button>

---

```html
<Button size="md">
  Click Me
</Button>
```
<Button size="md">Click Me</Button>

---

```html
<Button size="lg">
  Click Me
</Button>
```
<Button size="lg">Click Me</Button>

---

```html
<Button size="xl">
  Click Me
</Button>
```
<Button size="xl">Click Me</Button>

---

### Anchor Tag
```html
<Button href="https://svelte.dev">
  Check Out Svelte
</Button>
```
<Button href="https://svelte.dev">Check Out Svelte</Button>

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
				alert and the Alert's close button can also close it</td
			>
		</tr>
		<tr>
			<td><code>type</code></td>
			<td>String: 'info', 'warning', 'success', or 'error'</td>
			<td>'info'</td>
			<td>Sets the type of alert to be displayed</td>
		</tr>
		<tr>
			<td><code>icon</code></td>
			<td>Boolean</td>
			<td><code>true</code></td>
			<td>Sets whether an icon is displayed</td>
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
