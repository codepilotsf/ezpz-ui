<script>
  import HeadsUp from '$lib/components/HeadsUp.svelte';
  import Footer from './Footer.svelte';
  import Table from '$lib/components/Table.svelte';
  import { Alert, Avatar, Spinner } from '$lib/ui';
</script>

<svelte:head>
	<title>LIB/UI SvelteKit Components</title>
</svelte:head>

# LIB/UI SvelteKit Components

LIB/UI is a collection of Svelte 5 components meant to be *downloaded directly* to `src/lib/ui` in
your project. Since these are just files sitting in a directory and not hidden away in your Node
modules, that means you can directly modify the components to fit your needs. This keeps things
simple and transparent.

### Getting Started

LIB/UI isn't a Node package so it isn't installed. Just [download the zip
file](https://libui.codepilot.com/latest.zip) to your SvelteKit project's `src/lib/` and extract it.
It requires no dependencies other than Svelte itself.

### How To Use

LIB/UI components are imported and instantiated like any other Svelte component.

```svelte
<script>
  import { Spinner } from '$lib/ui';
</script>

<Spinner />
```
<Spinner />

### Properties

Properties are used to pass options to the component. For example, the `Alert` component takes an
optional `scheme` property which can be used to set the color/icon theme of the alert.

```svelte
<Alert scheme="danger">Something assploded.</Alert>
```
<Alert scheme="danger">Something assploded.</Alert>

### Named Slots

Slots are used to pass default content as seen in the above example. However, many LIB/UI components
also use <em>named</em> slots to pass additional content to specific areas of the component. For
example, the `Alert` component accepts an optional `title` slot which can be used to set a title to
be displayed at the top of the alert.

```svelte
<Alert scheme="success">
  <div slot="title">Hooray!</div>
  This is a total success.
</Alert>
```
<Alert scheme="success">
  <div slot="title">Hooray!</div>
  This is a total success.
</Alert>

<HeadsUp> See component docs for a full list of available properties and named slots and their usage
  for each component. </HeadsUp>

### CSS Custom Properties
CSS custom properties are used to set colors, spacing, and other values used by LIB/UI components.
For example, to change the default border radius used for things like form elements and alerts, you
could add this to your project's CSS:

```css
:root {
  --ui-radius: 4px;
}
```

This approach has a number of advantages over using regular Svelte props because of the way CSS
rules cascade and can be overridden. For example, you can set a global border radius for all form
elements, but then override it for a specific form element if needed. Or you can even create classes
for your own alternate versions of LIB/UI components that are styled differently from the rest.

There are also CSS custom properties available for individual components. For example, the Alert
component will use the global `--ui-radius` value by default. But you can change the default border
radius for only Alert components like this:

```css
:root {
  --ui-alert-radius: 8px;
}
```

You can even set custom properties directly on a single component instance in your Svelte file:

```svelte
<Alert --ui-alert-radius="8px">
  This alert has a custom border radius.
</Alert>
```

This is made possible by a very handy [Svelte Component
Directive](https://svelte.dev/docs/component-directives#style-props) called `--style-props` which
allows you to set custom properties directly within the scope of a component instance with the
convenient shorthand syntax shown above.

If you need to create an alternate style for a component such as making a dark version of a Form,
this can be easily done with a simple CSS class. All LIB/UI components have a `lib-ui` class and a
class that matches the component's name. So to create a dark version of a Form, you could create 
a class like this:

```css
.lib-ui.Form.dark {
  --ui-input-background: #333;
  --ui-input-color: #fff;
  --ui-input-label-color: #fff;
  --ui-button-background: #444;
  --ui-button-color: #fff;
}
```

Then by adding the `dark` class to a Form component, these styles will be set for the Form element
and all of its child components.

```svelte
<Form class="dark">
  <Input label="name" />
  <Button>Submit</Button>
</Form>
```

<HeadsUp>This technique makes LIB/UI very flexible and customizable. Note that when creating a
targeted class like the example above, this will supercede any other values including even inline 
style-props.</HeadsUp>

---

There are many global custom properties that can be set to change the default appearance of LIB/UI
components. They are all optional and will fall back to default values if not set.

<Table name="Global" type="css">
  <tr>
    <td colspan="4" class="pt-4">GLOBAL COLORS</td>
  </tr>
  <tr>
    <td><code>--ui-accent</code></td>
    <td>Color</td>
    <td><code>#3b82f6</code></td>
    <td>Accent color used for things like buttons and links</td>
  </tr>
  <tr>
    <td><code>--ui-dark</code></td>
    <td>Color</td>
    <td><code>#1e293b</code></td>
    <td>Dark color used for things like text</td>
  </tr>
  <tr>
    <td><code>--ui-midtone</code></td>
    <td>Color</td>
    <td><code>#94a3b8</code></td>
    <td>Midtone color used for things like borders</td>
  </tr>
  <tr>
    <td><code>--ui-light</code></td>
    <td>Color</td>
    <td><code>#e2e8f0</code></td>
    <td>Light color used for things like disabled form element background</td>
  </tr>
  <tr>
    <td><code>--ui-info-dark</code></td>
    <td>Color</td>
    <td><code>#1e40af</code></td>
    <td>Dark color used for things like text in components with scheme value 'info'</td>
  </tr>
  <tr>
    <td><code>--ui-info-light</code></td>
    <td>Color</td>
    <td><code>#1e40af</code></td>
    <td>Light color used for things like Alert background scheme value 'info'</td>
  </tr>
    <tr>
    <td><code>--ui-info-dark</code></td>
    <td>Color</td>
    <td><code>#1e40af</code></td>
    <td>Dark color used for things like text in components with scheme value 'info'</td>
  </tr>
  <tr>
    <td><code>--ui-info-light</code></td>
    <td>Color</td>
    <td><code>#dbeafe</code></td>
    <td>Light color used for things like Alert background scheme value 'info'</td>
  </tr>
  <tr>
    <td><code>--ui-warning-dark</code></td>
    <td>Color</td>
    <td><code>#9a3412</code></td>
    <td>Dark color used for things like text in components with scheme value 'warning'</td>
  </tr>
  <tr>
    <td><code>--ui-warning-light</code></td>
    <td>Color</td>
    <td><code>#fef08a</code></td>
    <td>Light color used for things like text in components with scheme value 'warning'</td>
  </tr>
  <tr>
    <td><code>--ui-success-dark</code></td>
    <td>Color</td>
    <td><code>#166534</code></td>
    <td>Dark color used for things like text in components with scheme value 'success'</td>
  </tr>
  <tr>
    <td><code>--ui-success-light</code></td>
    <td>Color</td>
    <td><code>#bbf7d0</code></td>
    <td>Light color used for things like text in components with scheme value 'success'</td>
  </tr>
  <tr>
    <td><code>--ui-danger-dark</code></td>
    <td>Color</td>
    <td><code>#b91c1c</code></td>
    <td>Dark color used for things like text in components with scheme value 'danger'</td>
  </tr>
  <tr>
    <td><code>--ui-danger-light</code></td>
    <td>Color</td>
    <td><code>#fee2e2</code></td>
    <td>Light color used for things like text in components with scheme value 'danger'</td>
  </tr>
  <tr>
    <td colspan="4" class="pt-8">GLOBAL BORDERS</td>
  </tr>
  <tr>
    <td><code>--ui-border</code></td>
    <td>Border shorthand</td>
    <td><code>1px solid var(--ui-midtone)</code></td>
    <td>CSS border shorthand value for border style on things like form elements</td>
  </tr>
  <tr>
    <td><code>--ui-radius</code></td>
    <td>Numeric</td>
    <td><code>3px</code></td>
    <td>Border radius for things like form elements</td>
  </tr>
  <tr>
    <td colspan="4" class="pt-8">GLOBAL FORM ITEMS</td>
  </tr>
  <tr>
    <td><code>--ui-item-margin</code></td>
    <td>Numeric</td>
    <td><code>1rem</code></td>
    <td>Sets margin-top on form elements within a form</td>
  </tr>
  <tr>
    <td><code>--ui-form-row-gap</code></td>
    <td>Numeric</td>
    <td><code>.5rem</code></td>
    <td>Sets gap on elements within a FormRow</td>
  </tr>
  <tr>
    <td><code>--ui-note-spacing</code></td>
    <td>Numeric</td>
    <td><code>6px</code></td>
    <td>Sets sets margin-top on notes and errors below form elements</td>
  </tr>
  <tr>
    <td><code>--ui-note-size</code></td>
    <td>Numeric</td>
    <td><code>.9rem</code></td>
    <td>Sets sets font-size on notes and errors below form elements</td>
  </tr>
</Table>

### CSS Classes
You can also pass a `class` property to any LIB/UI component to add additional classes to the
component's outermost element. This can be especially powerful when used with Tailwind utility
classes – and of course, classes can also be used directly on named slots as usual. So for an Alert
which has a fixed width and drop shadow and a title that's underlined, you could do something like
this:

```svelte
<Alert scheme="success" class="w-96 shadow-xl">
  <div slot="title" class="underline">Hooray!</div>
  Item added to cart.
</Alert>
```
<Alert scheme="success" class="w-96 shadow-xl">
  <div slot="title" class="underline">Hooray!</div>
  Item added to cart.
</Alert>

### Modifying Components

Component files are well organized and commented to make it easy to understand what's going on. You
can modify the components as much or as little as you like. You can also delete the ones you don't
need. Be sure to also remove the reference from `lib/ui/index.js`.

### Custom Components

LIB/UI components can also be extended to add new functionality. Using one of the existing
components as a template, you can create your own components that reference the same styles set in
`lib/ui/style.css` and add them to the `lib/ui` directory. Remember to also add a line to export
your custom component from `lib/ui/index.js`. 

<Footer />