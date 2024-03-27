<script>
  import { setContext } from 'svelte'

  let { size, name = '', class: _class = '', ...other } = $props()

  setContext('isGroup', true)
  if (size) setContext('size', size)
</script>

<ui-button-group class="lib-ui ButtonGroup {_class}" {name} {...other}>
  <slot />
</ui-button-group>

<style>
  ui-button-group {
    flex: 1;
    margin-top: var(--ui-margin-top, 1rem);
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: var(--ui-button-group-border-width, 0);
    border-color: var(--ui-button-group-border-color, none);
    border-radius: var(
      --ui-button-group-border-radius,
      var(--ui-button-border-radius, var(--ui-border-radius, 3px))
    );
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 1px;
    box-shadow: var(
      --ui-button-group-shadow,
      var(--ui-button-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.2))
    );
  }

  ui-button-group::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--ui-button-background, var(--ui-focus, #3b82f6));
    filter: brightness(0.8);
  }
</style>
