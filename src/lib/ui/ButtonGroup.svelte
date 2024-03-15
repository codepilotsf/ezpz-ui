<script>
  import { setContext } from 'svelte'

  let { size, name = '', class: _class = '', ...other } = $props()

  setContext('isGroup', true)
  if (size) setContext('size', size)
</script>

<ui-button-group class={['lib-ui', _class].join(' ')} {name} {...other}>
  <slot />
</ui-button-group>

<style>
  .lib-ui {
    --ui-this-border: var(--ui-button-group-border, none);
    --ui-this-radius: var(
      --ui-button-group-radius,
      var(--ui-button-radius, var(--ui-radius, 3px))
    );
    --ui-this-shadow: var(
      --ui-button-group-shadow,
      var(--ui-button-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.2))
    );
  }

  ui-button-group {
    flex: 1;
    margin-top: var(--ui-form-item-margin-top, 1rem);
    position: relative;
    overflow: hidden;
    border: var(--ui-this-border);
    border-radius: var(--ui-this-radius);
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 1px;
    box-shadow: var(--ui-this-shadow);
  }

  ui-button-group::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--ui-button-background, var(--ui-accent, #3b82f6));
    filter: brightness(0.8);
  }
</style>
