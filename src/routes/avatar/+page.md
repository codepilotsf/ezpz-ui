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

### Import

```html
<script>
  import { Avatar } from '$lib/ui';
</script>
```

---

### Sizes

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

```svelte
<Avatar initials="ck" />
```
<Avatar initials="ck" />

---

### Name

```svelte
<Avatar name="Michael Jackson" />
```
<Avatar name="Michael Jackson" />

### Themes (for initials fallback)

```svelte
<Avatar initials="AB" theme="default" />
<Avatar initials="CD" theme="info" />
<Avatar initials="EF" theme="warning" />
<Avatar initials="GH" theme="success" />
<Avatar initials="IJ" theme="error" />
<Avatar initials="KL" theme="brand" />
```
<Avatar initials="AB" theme="default" />
<Avatar initials="CD" theme="info" />
<Avatar initials="EF" theme="warning" />
<Avatar initials="GH" theme="success" />
<Avatar initials="IJ" theme="error" />
<Avatar initials="KL" theme="brand" />

---

### Color and Background (for initials fallback)

```svelte
<Avatar 
  initials="MD" 
  color="white" 
  background="cornflowerblue" 
/>
```
<Avatar initials="MD" color="white" background="cornflowerblue" />

---

<Tables />