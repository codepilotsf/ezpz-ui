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
			<td>String | Boolean</td>
			<td><code>true</code></td>
			<td>Sets whether an icon is displayed for scheme which includes a default icon.</td>
		</tr>
		<tr>
			<td><code>scheme</code></td>
			<td>String: 'neutral', 'info', 'success', 'warning', 'danger'</td>
			<td>'neutral'</td>
			<td>Color/Icon scheme of alert to be displayed</td>
		</tr>
		<tr>
			<td><code>color</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Color used for text and icons (overrides <code>scheme</code> if present)</td>
		</tr>
		<tr>
			<td><code>background</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td
				>Color or CSS background value used for background (overrides <code>scheme</code> if present)</td
			>
		</tr>
		<tr>
			<td><code>...</code></td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td
				>Additional props will be passed through to the parent element enabling support for things
				like <code>on:click</code>, etc</td
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
