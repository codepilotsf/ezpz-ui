<script>
  import './style.css'
  import { setContext } from 'svelte'

  // prettier-ignore
  let {
    color = '',
    scheme = '',
    name = '',
    size = '',
    class: _class = '',
    ...restProps
  } = $props();

  setContext('isGroup', true)
  if (color) setContext('color', color)
  if (scheme) setContext('scheme', scheme)
  if (size) setContext('size', size)

  function setCssVars(el) {
    el.style.setProperty(
      '--ui-color',
      color || (scheme && `var(--ui-${scheme}-dark)`) || 'var(--ui-brand)',
    )
  }
</script>

<ui-button-group use:setCssVars class={['lib-ui', _class].join(' ')} {name} {...restProps}>
  <slot />
</ui-button-group>

<style>
  .lib-ui {
    flex: 1;
    margin-top: var(--ui-form-item-margin-top);
  }

  ui-button-group {
    position: relative;
    overflow: hidden;
    border-radius: var(--ui-border-radius);
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 1px;
    box-shadow: var(--ui-button-shadow);
  }
  ui-button-group::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--ui-color);
    filter: brightness(0.8);
  }
</style>
