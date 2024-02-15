<script>
	import { Textarea, Button } from '$lib/ui';
  import Tables from './Tables.svelte';
  let message = $state('');
</script>

# Textarea

Use Textarea for form text fields. By default, the Textarea will grow to contain the text entered by the user.

---

### Example

Type in the field to see the value change.

```svelte
<script>
  import { Textarea } from '$lib/ui'
  let message = $state('');
</script>

<Textarea bind:value={message} />

<p>Message: {message}</p>
```
<Textarea bind:value={message} />
<p>Message: {message}</p>

---

### Label

Label for the textarea element.

```svelte
<Textarea label="Message" />
```
<Textarea label="Message" />

---

### Name

Name of the textarea for form submission.

```svelte
<Textarea name="message" label="Message" />
```
<Textarea name="message" label="Message" />

---

### Height

Use `height` to set the initial height of the textarea. If using CSS utility classes (like
Tailwind), you can also set the height with something like `class="!h-48"` (using the Tailwind `!`
important flag to override default style).

```svelte
<Textarea height="10rem" />
```
<Textarea height="10rem" />

---

### PlaceHolder

A `placeholder` prop let's you define a simple String to be used as a simple descriptor for the input value.

```svelte
<Textarea placeholder="Jane Doe" />
```
<Textarea label="Name" placeholder="Jane Doe" />

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={user.isSpammable}`.

```svelte
<Textarea label="Name" disabled />
```
<Textarea label="Name" disabled />

---

### Fixed

Use `fixed` to disable the auto-expanding feature and show regular scrollbars as necessary.

```svelte
<Textarea fixed />
```
<Textarea fixed />

---

### Error

Display error message below the field. Also adds error styles.

```svelte
<Textarea error="Email is not valid" />
```
<Textarea value="jane@doe" error="Email is not valid" />

---

### Note

A `note` prop let's you define a note displayed below the field.

```svelte
<Textarea note="This is a note" />
```
<Textarea note="This is a note" />

---

<Tables />
