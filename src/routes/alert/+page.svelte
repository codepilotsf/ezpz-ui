<script>
	import { Alert } from '$lib/ui';
	import { IceCream } from 'lucide-svelte';
	import Import from './import.md';
	import Info from './info.md';
	import Warning from './warning.md';
	import Success from './success.md';
	import Error from './error.md';
	import NoIcon from './no-icon.md';
	import WithTitle from './with-title.md';
	import WithIcon from './with-icon.md';
</script>

<h1>Alert</h1>
<p>
	Alerts can be used to provide user feedback for things like successful operations and errors. By
	default, Alerts are displayed at full-width with an icon appropriate for the type of Alert. Use <code
		>bind:active</code
	> two-way binding so that the parent template can trigger an Alert and the Alert's close button can
	also close it.
</p>

<!-- Import -->
<h3>Import</h3>
<Import />

<hr />

<h3>Info (default)</h3>
<Info />
<Alert type="info">This is just a simple info alert.</Alert>

<hr />

<h3>Warning</h3>
<Warning />
<Alert type="warning">Warning! This is alert is slightly scary.</Alert>

<hr />

<h3>Success</h3>
<Success />
<Alert type="success">You have been alerted successfully.</Alert>

<hr />

<h3>Error</h3>
<Error />
<Alert type="error">Something bad happened.</Alert>

<hr />

<h3>No Icon</h3>
<NoIcon />
<Alert icon={false}>Keepin' it simple.</Alert>

<hr />

<h3>With Title</h3>
<WithTitle />
<Alert type="warning">
	<span slot="title">Watch out!</span>
	This seems like a bad idea.
</Alert>

<hr />

<h3>With Custom Icon</h3>
<WithIcon />
<Alert type="success">
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
			<td class="description"
				>Use with <code>bind:active</code> two-way binding so that the parent template can trigger an
				alert and the Alert's close button can also close it</td
			>
		</tr>
		<tr>
			<td><code>type</code></td>
			<td>String: 'info', 'warning', 'success', or 'error'</td>
			<td>'info'</td>
			<td class="description">Sets the type of alert to be displayed</td>
		</tr>
		<tr>
			<td><code>icon</code></td>
			<td>Boolean</td>
			<td><code>true</code></td>
			<td class="description">Sets whether an icon is displayed</td>
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
			<td class="description">Content to be used as a title</td>
		</tr>
		<tr>
			<td><code>icon</code></td>
			<td class="description">An icon component to replace the default icon </td>
		</tr>
	</tbody>
</table>
