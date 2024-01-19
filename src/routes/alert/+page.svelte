<script>
	import { Alert } from '$lib/ui';
	import { IceCream } from 'lucide-svelte';
	import Import from './import.md';
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

<h1>Alert</h1>
<p>
	Alerts can be used to provide user feedback for things like successful operations and errors. By
	default, alerts are displayed at full-width. Use <code>bind:active</code> two-way binding so that the
	parent template can trigger an Alert and the Alert's close button can also close it. When using a theme
	other than the default, the alert will use the theme's accent color and an appropriate default icon
	which can be replaced with a custom icon via a named slot.
</p>

<!-- Import -->
<h3>Import</h3>
<Import />

<h3>Themes</h3>
<Default />
<Alert theme="default">The default alert has no icon.</Alert>

<hr />

<Info />
<Alert theme="info">This is just a simple info alert.</Alert>

<hr />

<Warning />
<Alert theme="warning">Warning! This alert is slightly scary.</Alert>

<hr />

<Success />
<Alert theme="success">You have been alerted successfully.</Alert>

<hr />

<Error />
<Alert theme="error">Something bad happened.</Alert>

<hr />

<Brand />
<Alert theme="brand">A nicely branded alert.</Alert>

<hr />

<h3>Custom Colors</h3>
<Color />
<Alert color="#a21caf" background="#f5d0fe">Fuscia alert!</Alert>

<hr />

<h3>No Icon</h3>
<NoIcon />
<Alert theme="info" icon={false}>Keepin' it simple.</Alert>

<hr />

<h3>With Title</h3>
<WithTitle />
<Alert theme="warning">
	<span slot="title">Watch out!</span>
	This seems like a bad idea.
</Alert>

<hr />

<h3>With Custom Icon</h3>
<WithIcon />
<Alert theme="success">
	<IceCream slot="icon" size={26} />
	That ice cream was delicious.
</Alert>

<hr />

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
