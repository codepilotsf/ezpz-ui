<script>
	import { Avatar } from '$lib/ui';
  import Tables from './Tables.svelte';
</script>

# Avatar

Avatars are used to display a user's profile image or initials. If an `initials` property is passed, it will
be used as the value of the image element's `alt` attribute and as the backup display in case no image
`src` is passed. Alternatively, a `name` attribute can be passed from which initials will be
derived automatically. 

<!-- The image for
an avatar may be supplied as a url supplied to the <code>src</code> property or as a named
<code>image</code>slot which makes it possible for example to use
<a href="https://kit.svelte.dev/docs/images" target="_blank"
	>Svelte's <code>enhanced-img</code> package</a
> to supply a retina-friendly, best available format image. 
-->

### Example

A basic avatar with an image source. The provided image does not need to be a circle, the avatar will
be clipped to a circle automatically.

```svelte
<script>
  import { Avatar } from '$lib/ui';
</script>

<Avatar src="./dave.jpg" />
```

<Avatar src="/avatars/m2.jpg" />

---

### Sizes

The default size is `md` (medium) as shown above. The `size` property can be used to set the size as defined in
`theme.css`.

```svelte
<Avatar src="./bob.jpg" size="xs" />
<Avatar src="./jane.jpg" size="sm" />
<Avatar src="./dave.jpg" size="md" />
<Avatar src="./susan.jpg" size="lg" />
<Avatar src="./lynn.jpg" size="xl" />
```
<div class="flex items-center gap-2">
	<Avatar src="/avatars/m1.jpg" size="xs" />
	<Avatar src="/avatars/f1.jpg" size="sm" />
	<Avatar src="/avatars/m2.jpg" size="md" />
	<Avatar src="/avatars/f2.jpg" size="lg" />
	<Avatar src="/avatars/f3.jpg" size="xl" />
</div>

---

### Initials

Supplied initials will be used as the value of the image element's `alt` attribute and as the backup display in case no
`src` image is passed. Initials are automatically uppercased and only the first two letters are used.

```svelte
<Avatar initials="ck" />
```
<Avatar initials="ck" />

---

### Name

Instead of passing `initials`, a `name` property can be passed from which initials can be derived for backup display.
If present, the `name` property is also used as the value of the image element's `alt` attribute.

```svelte
<Avatar name="Michael Jackson" />
```
<Avatar name="Michael Jackson" />

---

### Custom Colors

Custom colors can be used by providing `color` and `background` props.

```svelte
<Avatar 
  initials="JG" 
  color="yellow" 
  background="green" 
/>
```
<Avatar initials="JG" color="yellow" background="green" />

---

<Tables />