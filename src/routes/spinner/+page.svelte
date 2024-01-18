<script>
	import { Spinner } from '$lib/ui';
	import Import from './import.md';
	import Sizes from './sizes.md';
	import Types from './types.md';
	import OpenCircle from './open-circle.md';
</script>

<h1>Spinner</h1>
<p>
	Spinners are used to indicate to the user that the interface is waiting for an action to complete
	such as a server-side operation that is taking a long time. There options for different types of
	spinners and sizes. This components is also used within other components such as <code
		>Button</code
	>
	to indicate <code>loading</code> state.
</p>

<h3>Import</h3>
<Import />

<hr />

<h3>Sizes</h3>
<Sizes />
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

<hr />

<h3>Types</h3>
<Types />
<Spinner type="accent" />
<Spinner type="info" />
<Spinner type="warning" />
<Spinner type="success" />
<Spinner type="error" />

<hr />

<h3>Open Circle (default variant)</h3>
<OpenCircle />
<Spinner variant="open-circle" />

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
				alert and the Alert's close Spinner can also close it</td
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
