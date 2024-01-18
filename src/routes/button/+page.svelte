<script>
	import { Button } from '$lib/ui';
	import Import from './import.md';
	import Basic from './basic.md';

	export let type = 'accent';
</script>

<h1>Button</h1>
<p>
	Button components are rendered as a <code>button</code> element by default or if an
	<code>href</code>
	property is passed, it will be rendered as a regular <code>a</code> anchor link element. Styling
	will be the same in either case. By default, buttons are full-width and use the accent colors set
	in
	<code>style.css</code>.
</p>

<h3>Import</h3>
<Import />

<hr />

<h3>Basic Button</h3>
<Basic />
<Button {type}>Sign in</Button>

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
