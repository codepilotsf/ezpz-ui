<script>
	import { Spinner } from '$lib/ui';
	import Import from './import.md';
	import Sizes from './sizes.md';
	import Types from './types.md';
	import DotsCircle from './dots-circle.md';
	import DotsRow from './dots-row.md';
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
<div class="flex items-center gap-3">
	<Spinner size="xs" />
	<Spinner size="sm" />
	<Spinner size="md" />
	<Spinner size="lg" />
	<Spinner size="xl" />
</div>

<hr />

<h3>Types</h3>
<Types />
<Spinner type="default" />
<Spinner type="accent" />
<Spinner type="info" />
<Spinner type="warning" />
<Spinner type="success" />
<Spinner type="error" />

<hr />

<h3>Dots Circle</h3>
<DotsCircle />
<Spinner variant="dots-circle" />

<hr />

<h3>Dots Row Sizes</h3>
<DotsRow />
<Spinner variant="dots-row" size="xs" />
<Spinner variant="dots-row" size="sm" />
<Spinner variant="dots-row" size="md" />
<Spinner variant="dots-row" size="lg" />
<Spinner variant="dots-row" size="xl" />

<hr />

<!-- Properties Table -->
<h3>Spinner Properties</h3>
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
			<td><code>type</code></td>
			<td>String: 'default', 'white', 'accent', 'info', 'warning', 'success', 'error'</td>
			<td><code>'default'</code></td>
			<td>spinner type (color theme)</td>
		</tr>
		<tr>
			<td><code>variant</code></td>
			<td>String: 'dots-circle', 'dots-row'</td>
			<td>'dots-circle'</td>
			<td>Spinner style variant</td>
		</tr>
		<tr>
			<td><code>size</code></td>
			<td>String: 'xs', 'sm', 'md', 'lg', 'xl'</td>
			<td><code>'md'</code></td>
			<td>Spinner size</td>
		</tr>
	</tbody>
</table>
