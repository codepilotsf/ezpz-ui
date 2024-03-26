<script>
  import { getContext } from 'svelte'

  let {
    type = null,
    href = null,
    active = null,
    loading = null,
    size = getContext('size') || 'md',
    class: _class = '',
    ...other
  } = $props()

  const padding = {
    xs: '4px 6px',
    sm: '5px 10px',
    md: '10px 15px',
    lg: '12px 20px',
    xl: '12px 24px',
  }

  const fontSize = {
    xs: '9px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '20px',
  }

  const isGroup = getContext('isGroup') || null
</script>

{#if href}
  <a
    class="lib-ui Button {_class}"
    style="--ui-this-font-size: {fontSize[size]}; --ui-this-padding: {padding[
      size
    ]}"
    {href}
    {type}
    {active}
    {loading}
    {size}
    {isGroup}
    {...other}
    on:click
    on:hover
  >
    <slot />
  </a>
{:else}
  <button
    class="lib-ui Button {_class}"
    style="--ui-this-font-size:{fontSize[size]}; --ui-this-padding:{padding[
      size
    ]}"
    {type}
    {active}
    {loading}
    {size}
    {isGroup}
    {...other}
    on:click
    on:hover
  >
    <slot />
  </button>
{/if}

<style>
  .lib-ui {
    --ui-this-font-size: var(--ui-button-font-size, 14px);
    --ui-this-border: var(--ui-button-border, none);
    --ui-this-radius: var(--ui-button-radius, var(--ui-border-radius, 3px));
  }

  button.lib-ui,
  a.lib-ui {
    color: var(--ui-button-color, #fff);
    background-color: var(--ui-button-background, var(--ui-focus, #3b82f6));
    width: var(--ui-button-width, auto);
    height: var(--ui-button-height, auto);
    padding: var(--ui-button-padding, var(--ui-this-padding));
    font-size: var(--ui-button-font-size, var(--ui-this-font-size));
    border: var(--ui-this-border);
    border-radius: var(--ui-this-radius);
    transition: filter 100ms ease-in-out;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1; /* Needed for ButtonGroup */
  }

  .lib-ui:not([isGroup]) {
    box-shadow: var(--ui-button-shadow, 0 1px 2px rgba(0, 0, 0, 0.35));
    margin-top: calc(var(--ui-margin-top, 1rem) * 1.8);
  }

  a.lib-ui,
  a.lib-ui:hover {
    display: inline-block;
    text-decoration: none;
    text-align: center;
  }

  button.lib-ui:hover,
  button.lib-ui[active='true'],
  a:hover,
  a[active='true'] {
    filter: brightness(1.3);
  }

  button.lib-ui:active,
  a.lib-ui:active {
    filter: brightness(1);
    outline: none;
  }

  button.lib-ui[isGroup],
  a.lib-ui[isGroup] {
    border-radius: 0;
  }
</style>
