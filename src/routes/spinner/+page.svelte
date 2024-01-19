<script>
	import { Spinner } from '$lib/ui';
	import Import from './import.md';
	import DotsCircle from './dots-circle.md';
	import DotsRow from './dots-row.md';
	import Themes from './themes.md';
	import Color from './color.md';
</script>

<h1>Spinner</h1>
<p>
	Spinners are used to indicate to the user that the interface is waiting for an action to complete
	such as a server-side operation that is taking a long time. There options for different types of
	spinners and sizes. This component is also used within other components such as <code>Button</code
	>
	to indicate <code>loading</code> state.
</p>

<h3>Import</h3>
<Import />

<hr />

<h3>Dots Circle (default type)</h3>
<DotsCircle />
<div class="flex items-center gap-5">
	<Spinner size="xs" />
	<Spinner size="sm" />
	<Spinner size="md" />
	<Spinner size="lg" />
	<Spinner size="xl" />
</div>

<hr />

<h3>Dots Row</h3>
<DotsRow />
<div class="flex flex-col items-start">
	<Spinner type="dots-row" size="xs" />
	<Spinner type="dots-row" size="sm" />
	<Spinner type="dots-row" size="md" />
	<Spinner type="dots-row" size="lg" />
	<Spinner type="dots-row" size="xl" />
</div>

<hr />

<h3>Themes</h3>
<Themes />
<div class="flex items-center gap-5">
	<Spinner theme="default" />
	<Spinner theme="info" />
	<Spinner theme="warning" />
	<Spinner theme="success" />
	<Spinner theme="error" />
	<Spinner theme="brand" />
</div>

<hr />

<h3>Color</h3>
<Color />
<Spinner color="cornflowerblue" />

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
			<td>String: 'dots-circle', 'dots-row'</td>
			<td>'dots-circle'</td>
			<td>Spinner style type</td>
		</tr>
		<tr>
			<td><code>size</code></td>
			<td>String: 'xs', 'sm', 'md', 'lg', 'xl'</td>
			<td><code>'md'</code></td>
			<td>Spinner size</td>
		</tr>
		<tr>
			<td><code>theme</code></td>
			<td>String: 'default', 'info', 'warning', 'success', 'error', or 'brand'</td>
			<td>'default'</td>
			<td>Color theme to be used for spinner</td>
		</tr>
		<tr>
			<td><code>color</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Color of spinner (overrides <code>theme</code> if present)</td>
		</tr>
	</tbody>
</table>
