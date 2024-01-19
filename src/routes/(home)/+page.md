<script>
  import HeadsUp from '$lib/components/HeadsUp.svelte';
  import Footer from './Footer.svelte';
  import { Alert, Avatar, Spinner } from '$lib/ui';
</script>

<svelte:head>
	<title>LIB/UI SvelteKit Components</title>
</svelte:head>

# LIB/UI SvelteKit Components
LIB/UI is a collection of Svelte components meant to be <em>downloaded directly</em> to `src/lib/ui` in your project.
Since these are just files sitting in a directory rather than hidden away in your Node modules, you can directly modify
the components to fit your needs. This keeps things simple and transparent.

### Getting Started
LIB/UI isn't a Node package so it isn't installed. Just
[download the zip file](https://libui.codepilot.com/latest.zip) to your project's `src/lib/` and extract it. Additionally,
please make sure that both TailwindCSS and Lucide-Svelte (icons) are installed in your project.

```bash
npm install -D tailwindcss;
npm install -D lucide-svelte;
```

### How To Use
LIB/UI components are imported and instantiated like any other Svelte component.

```html
<script>
  import { Spinner } from '$lib/ui';
</script>

<Spinner />
```
<Spinner />

### Properties
Properties are used to pass options to the component. For example, the `Alert` component takes an optional `theme`
property which can be used to set the color/icon theme of the alert.

```html
<Alert theme="error">Something exploded.</Alert>
```
<Alert theme="error">Something exploded.</Alert>

### Named Slots
Slots are used to pass default content as seen in the above example. However, many LIB/UI components also use <em>named</em> 
slots to pass additional content to specific areas of the component. For example, the `Alert` component accepts an optional `title` slot which can be used to pass a title to the top of the alert.

```html
<Alert theme="success">
  <div slot="title">Hooray!</div>
  This is a total success.
</Alert>
```
<Alert theme="success">
  <div slot="title">Hooray!</div>
  This is a total success.
</Alert>

<HeadsUp>
  See component docs for a full list of available properties and named slots and their usage for each component.
</HeadsUp>

### Style
All LIB/UI components use values set in `$lib/ui/style.css` for colors, spacing, border-radius, and so on. The look and
feel of your components can be substantially changed just by modifying these values.

<!-- ### Class
You can also pass a `class` property to any LIB/UI component to add additional classes to the component's outermost
element. This can be especially effective when used with Tailwind classes – and of course classes can also be used
directly on named slots as usual. So for an Alert which has a fixed width and a title that's underlined,
you could do something like this:

```html
<Alert theme="success" class="w-96">
  <div slot="title" class="underline">Hooray!</div>
  Item added to cart.
</Alert>
```
<Alert theme="success" class="w-96">
  <div slot="title" class="!text-3xl">Hooray!</div>
  Item added to cart.
</Alert> -->

### Modifying Components
Component files are heavily commented to make it easy to understand what's going on. You can modify the components as
much or as little as you like. You can also delete the ones you don't need. Be sure to also remove the reference from
`lib/ui/index.js`.

### Custom Components
LIB/UI components can also be extended to add new functionality. Using one of the existing components as a
template, you can create your own components that reference the same styles set in `lib/ui/style.css` and add them to 
the `lib/ui` directory. Remember to also add a line to export your custom component from `lib/ui/index.js`. 

<Footer />