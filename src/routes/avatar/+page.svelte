<script>
	import { Avatar } from '$lib/ui';
	import Import from './import.md';
	import Sizes from './sizes.md';
	import Initials from './initials.md';
	import Name from './name.md';
	import Themes from './themes.md';
	import Color from './color.md';
</script>

<h1>Avatar</h1>
<p>
	Avatars are used to display a user's profile image or initials. If an <code>initials</code>
	property is passed, it will be used as the value of the image element's <code>alt</code> attribute
	and as the backup display in case no image <code>src</code>
	is passed. Alternatively, a <code>name</code> attribute can be passed from which initials will be
	derived automatically. <!-- The image for
	an avatar may be supplied as a url supplied to the <code>src</code> property or as a named
	<code>image</code>slot which makes it possible for example to use
	<a href="https://kit.svelte.dev/docs/images" target="_blank"
		>Svelte's <code>enhanced-img</code> package</a
	> to supply a retina-friendly, best available format image. -->
</p>

<!-- Import -->
<h3>Import</h3>
<Import />

<hr />

<h3>Sizes</h3>
<Sizes />
<div class="flex items-center gap-2">
	<Avatar src="/avatars/m1.jpg" size="xs" />
	<Avatar src="/avatars/f1.jpg" size="sm" />
	<Avatar src="/avatars/m2.jpg" size="md" />
	<Avatar src="/avatars/f2.jpg" size="lg" />
	<Avatar src="/avatars/f3.jpg" size="xl" />
</div>

<hr />

<h3>Initials</h3>
<Initials />
<Avatar initials="ck" />

<hr />

<h3>Name</h3>
<Name />
<Avatar name="Michael Jackson" />

<h3>Themes (for initials fallback)</h3>
<Themes />
<Avatar initials="AB" theme="default" />
<Avatar initials="CD" theme="info" />
<Avatar initials="EF" theme="warning" />
<Avatar initials="GH" theme="success" />
<Avatar initials="IJ" theme="error" />
<Avatar initials="KL" theme="brand" />

<hr />

<h3>Color and Background (for initials fallback)</h3>
<Color />
<Avatar initials="MD" color="white" background="cornflowerblue" />

<hr />

<!-- Properties Table -->
<h3>Avatar Properties</h3>
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
			<td><code>src</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td
				>URL (either relative or full URL) to the image file to use in avatar. Preferably 1:1 aspect
				ratio. Does not need to be cropped to a circle</td
			>
		</tr>
		<tr>
			<td><code>size</code></td>
			<td>String: 'xs', 'sm', 'md', 'lg', or 'xl'</td>
			<td>'md'</td>
			<td>Sets the the size of the avatar</td>
		</tr>
		<tr>
			<td><code>initials</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td
				>Initials to display if <code>src</code> is falsey. Also used as value of <code>alt</code> attribute</td
			>
		</tr>
		<tr>
			<td><code>name</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td
				>Initials automatically derived from name to display if <code>src</code> is falsey. Also
				used as value of <code>alt</code> attribute</td
			>
		</tr>
		<tr>
			<td><code>theme</code></td>
			<td>String: 'default', 'info', 'warning', 'success', 'error', or 'brand'</td>
			<td>'default'</td>
			<td>Color theme of avatar to be displayed (when no image is present)</td>
		</tr>
		<tr>
			<td><code>color</code></td>
			<td>String</td>
			<td>&nbsp;</td>
			<td>Color used for initials (overrides <code>theme</code> if present)</td>
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
