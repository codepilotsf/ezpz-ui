<!-- Properties Table -->
<h3>Radio Properties</h3>
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
			<td><code>label</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Text label appears trailing the checkmark</td>
		</tr>
		<tr>
			<td><code>leadingLabel</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Text label appears leading the checkmark</td>
		</tr>
		<tr>
			<td><code>scheme</code></td>
			<td>String: 'info', 'warning', 'success', 'error'</td>
			<td>'brand'</td>
			<td>Scheme defining color used for checked state</td>
		</tr>
		<tr>
			<td><code>color</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Color used for checked state</td>
		</tr>
		<tr>
			<td><code>checked</code></td>
			<td>Boolean</td>
			<td><code>false</code></td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td><code>disabled</code></td>
			<td>Boolean</td>
			<td><code>false</code></td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td><code>value</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>
				When within a RadioGroup, sets the <code>selected</code> value if checked (see
				<a href="/radio-group">RadioGroup</a>)
			</td>
		</tr>
	</tbody>
</table>

<!-- Named Slots Table -->
<h3>Radio Named Slots</h3>
<table class="w-full">
	<thead class="text-left">
		<tr>
			<th>Slot Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>label</code></td>
			<td>Content to be used for label after radio (supercedes <code>label</code> property)</td>
		</tr>
		<tr>
			<td><code>labelLeading</code></td>
			<td
				>Content to be used for label preceding radio (supercedes <code>leadingLabel</code> property)</td
			>
		</tr>
	</tbody>
</table>
