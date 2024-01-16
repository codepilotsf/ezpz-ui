<svelte:head>
	<title>LIB/UI SvelteKit Components</title>
</svelte:head>

# LIB/UI SvelteKit Components

LIB/UI is a collection of Svelte components meant to be <em>downloaded directly</em> to `src/lib/ui` in your project.
Since these are just files sitting in a directory rather than hidden away in your Node modules, you can directly modify
the components to fit your needs. This keeps things simple and transparent.

### Getting Started

Since LIB/UI isn't a Node package and has zero dependencies (other than Svelte), there's nothing to install. Just
[download the zip file](https://libui.codepilot.com/latest.zip) to your project's `src/lib/` and extract it.

### How To Use

LIB/UI components are imported and instantiated like any other Svelte component.

```html
<script>
  import { Alert } from '$lib/ui';
</script>

<Alert>Holy crap!</Alert>
```

### Style

All LIB/UI components use values set in `$lib/ui/style.css` for colors, spacing, border-radius, and so on. The look and
feel of your components can be substantially changed just by modifying these values.

### Modifying Components

Component files are heavily commented to make it easy to understand what's going on. You can modify the components as
much or as little as you like. You can also delete the ones you don't need. Be sure to also remove the reference from
`lib/ui/index.js`.

### Custom Components

LIB/UI components can also be easily extended to add new functionality. Using one of the existing components as a
template, you can create your own components that reference the same styles set in `lib/ui/style.css` and add them to 
the `lib/ui` directory. Remember to also add a line to export your custom component from `lib/ui/index.js`. 