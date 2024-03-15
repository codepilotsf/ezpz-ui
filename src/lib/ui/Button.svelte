<script>
  import { getContext } from 'svelte'

  let {
    type = null,
    href = null,
    active = null,
    loading = null,
    scheme = getContext('scheme'),
    size = getContext('size') || null,
    class: _class = '',
    ...other
  } = $props()

  const isGroup = getContext('isGroup') || null
</script>

{#if href}
  <a
    class="lib-ui button {_class}"
    {scheme}
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
    class={['lib-ui', _class].join(' ')}
    {scheme}
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
    --ui-this-color: var(--ui-button-color, #fff);
    --ui-this-background: var(
      --ui-button-background,
      var(--ui-accent, #3b82f6)
    );
    --ui-this-width: var(--ui-button-width, auto);
    --ui-this-height: var(--ui-button-height, auto);
    --ui-this-padding: var(--ui-button-padding, 10px 15px);
    --ui-this-font-size: var(--ui-button-font-size, 14px);
    --ui-this-border: var(--ui-button-border, none);
    --ui-this-radius: var(--ui-button-radius, var(--ui-radius, 3px));
  }

  .lib-ui {
    color: var(--ui-this-color);
    background-color: var(--ui-this-background);
    width: var(--ui-this-width);
    height: var(--ui-this-height);
    padding: var(--ui-this-padding);
    font-size: var(--ui-this-font-size);
    border: var(--ui-this-border);
    border-radius: var(--ui-this-radius);
    transition: filter 100ms ease-in-out;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1; /* Needed for ButtonGroup */
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
