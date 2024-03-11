<script>
  import { setContext } from 'svelte'

  let {
    color,
    background,
    scheme,
    size,
    name = '',
    class: _class = '',
    ...other
  } = $props()

  setContext('isGroup', true)
  if (color) setContext('color', color)
  if (background) setContext('background', background)
  if (scheme) setContext('scheme', scheme)
  if (size) setContext('size', size)

  function setBackground(el) {
    // This must be set as a local CSS variable in order to use it in the pseudo-element for the
    // background color of the button group (which is a darkened version of the background color)
    if (background) {
      el.style.setProperty('--ui-button-group-background', background)
    }
  }
</script>

<ui-button-group
  use:setBackground
  class={['lib-ui', _class].join(' ')}
  {name}
  {scheme}
  {...other}
>
  <slot />
</ui-button-group>

<style>
  .lib-ui {
    flex: 1;
    margin-top: var(--ui-form-item-margin-top, 1rem);
    position: relative;
    overflow: hidden;
    border-radius: var(--ui-border-radius, 3px);
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 1px;
    box-shadow: var(--ui-button-shadow, 0 1px 2px rgba(0, 0, 0, 0.35));
  }

  [scheme='info'] {
    --ui-button-group-scheme-background: var(--ui-info-dark, dodgerblue);
  }

  [scheme='warning'] {
    --ui-button-group-scheme-background: var(--ui-warning-dark, darkorange);
  }

  [scheme='success'] {
    --ui-button-group-scheme-background: var(--ui-success-dark, green);
  }

  [scheme='danger'] {
    --ui-button-group-scheme-background: var(--ui-danger-dark, red);
  }

  ui-button-group::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(
      --ui-button-group-background,
      var(--ui-button-group-scheme-background, var(--ui-accent, royalblue))
    );
    filter: brightness(0.8);
  }
</style>
