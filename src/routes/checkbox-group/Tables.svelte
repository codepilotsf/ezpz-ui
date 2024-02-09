<!-- Properties Table -->
<h3>CheckboxGroup Properties</h3>
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
			<td><code>bind:selected</code></td>
			<td>Array</td>
			<td>&nbsp;</td>
			<td
				><code>$state</code> object with a <code>value</code> property which contains an array of selected
				items</td
			>
		</tr>
		<tr>
			<td><code>legend</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Text legend appears before CheckmarkGroup</td>
		</tr>
		<tr>
			<td><code>scheme</code></td>
			<td>String: 'info', 'warning', 'success', 'error'</td>
			<td><code>'brand'</code></td>
			<td>Scheme defining color used for checked state of all child Checkboxes</td>
		</tr>
		<tr>
			<td><code>color</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Color used for checked state of all child Checkboxes</td>
		</tr>
	</tbody>
</table>

<!-- Named Slots Table -->
<h3>CheckboxGroup Named Slots</h3>
<table class="w-full">
	<thead class="text-left">
		<tr>
			<th>Slot Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>legend</code></td>
			<td
				>Content to be used for legend before CheckboxGroup (supercedes <code>legend</code> property)</td
			>
		</tr>
	</tbody>
</table>
