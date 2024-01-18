<script>
	import { Avatar } from '$lib/ui';
	import Import from './import.md';
	import Sizes from './sizes.md';
	import Initials from './initials.md';
	import Name from './name.md';
</script>

<h1>Avatar</h1>
<p>
	Avatars are used to display a user's profile image. They can be used with or without an image. The
	user's initials can also be provided and used as a fallback if no image is provided. <!-- The image for
	an avatar may be supplied as a url supplied to the <code>src</code> property or as a named
	<code>image</code>slot which makes it possible for example to use
	<a href="https://kit.svelte.dev/docs/images" target="_blank"
		>Svelte's <code>enhanced-img</code> package</a
	> to supply a retina-friendly, best available format image. -->
</p>

<!-- Import -->
<h3>Import</h3>
<Import />

<h3>Sizes</h3>
<Sizes />
<div class="flex items-center gap-2">
	<Avatar src="/avatars/m1.jpg" size="xs" />
	<Avatar src="/avatars/f1.jpg" size="sm" />
	<Avatar src="/avatars/m2.jpg" size="md" />
	<Avatar src="/avatars/f2.jpg" size="lg" />
	<Avatar src="/avatars/f3.jpg" size="xl" />
</div>

<h3>Initials</h3>
<Initials />
<Avatar initials="ck" />

<h3>Name</h3>
<Name />
<Avatar name="Michael Jackson" />

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
