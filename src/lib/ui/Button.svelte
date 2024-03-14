<script>
  import { getContext } from 'svelte'

  let {
    type = null,
    href = null,
    active = null,
    loading = null,
    scheme = getContext('scheme'),
    color = getContext('color'),
    background = getContext('background'),
    size = getContext('size') || 'md',
    class: _class = '',
    ...other
  } = $props()

  const isGroup = getContext('isGroup') || null
</script>

{#if href}
  <a
    class={['lib-ui', _class].join(' ')}
    style:color
    style:background
    {scheme}
    {href}
    {type}
    {active}
    {loading}
    {size}
    {isGroup}
    {...other}
    on:click
  >
    <slot />
  </a>
{:else}
  <button
    class={['lib-ui', _class].join(' ')}
    style:color
    style:background
    {scheme}
    {type}
    {active}
    {loading}
    {size}
    {isGroup}
    {...other}
    on:click
  >
    <slot />
  </button>
{/if}

<style>
  .lib-ui {
    transition: filter 100ms ease-in-out;
    border-radius: var(--ui-border-radius, 3px);
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1; /* Needed for ButtonGroup */
    color: #fff;
    background-color: var(--ui-accent, royalblue);
  }

  [size='xs'] {
    font-size: 9px;
    padding: 4px 6px;
  }

  [size='sm'] {
    font-size: 12px;
    padding: 5px 10px;
  }

  [size='md'] {
    font-size: 14px;
    padding: 10px 15px;
  }

  [size='lg'] {
    font-size: 18px;
    padding: 12px 20px;
  }

  [size='xl'] {
    font-size: 20px;
    padding: 12px 24px;
  }

  [scheme='info'] {
    background-color: var(--ui-info-dark, dodgerblue);
  }
  [scheme='success'] {
    background-color: var(--ui-success-dark, darkgreen);
  }
  [scheme='warning'] {
    background-color: var(--ui-warning-dark, darkorange);
  }

  [scheme='danger'] {
    background-color: var(--ui-danger-dark, red);
  }

  .lib-ui:not([isGroup]) {
    box-shadow: var(--ui-button-shadow, 0 1px 2px rgba(0, 0, 0, 0.35));
    margin-top: calc(var(--ui-form-item-margin-top, 1rem) * 1.8);
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
