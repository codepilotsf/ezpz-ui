<script>
  import './style.css'
  import { getContext } from 'svelte'

  let {
    type = 'button',
    href = null,
    active = null,
    loading = null,
    scheme = getContext('scheme') || '',
    color = getContext('color') || '',
    size = getContext('size') || 'md',
    background = '',
    class: _class = '',
    ...other
  } = $props()

  const sizes = {
    xs: {
      'font-size': 9,
      'x-padding': 6,
      'y-padding': 4,
    },
    sm: {
      'font-size': 12,
      'x-padding': 10,
      'y-padding': 5,
    },
    md: {
      'font-size': 14,
      'x-padding': 15,
      'y-padding': 10,
    },
    lg: {
      'font-size': 18,
      'x-padding': 20,
      'y-padding': 12,
    },
    xl: {
      'font-size': 20,
      'x-padding': 24,
      'y-padding': 12,
    },
  }

  function setCssVars(el) {
    el.style.setProperty(
      '--ui-color',
      color || (scheme && `var(--ui-${scheme}-dark)`) || 'var(--ui-brand)',
    )
    el.style.setProperty('--ui-button-font-size', `${sizes[size]['font-size']}px`)
    el.style.setProperty(
      '--ui-button-padding',
      `${sizes[size]['y-padding']}px ${sizes[size]['x-padding']}px`,
    )
  }

  const isGroup = getContext('isGroup')
</script>

{#if href}
  <a
    use:setCssVars
    class={['lib-ui', _class].join(' ')}
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
    use:setCssVars
    class={['lib-ui', _class].join(' ')}
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
    flex: 1;
  }

  button,
  a {
    background-color: var(--ui-color);
    transition: all 0.12s ease-in-out;
    border-radius: var(--ui-border-radius);
    padding: var(--ui-button-padding);
    font-size: var(--ui-button-font-size);
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    z-index: 1; /* Needed for ButtonGroup */
  }

  button:not([isGroup]),
  a:not([isGroup]) {
    box-shadow: var(--ui-button-shadow);
    margin-top: var(--ui-form-item-margin-top);
  }

  a,
  a:hover {
    color: #fff;
    text-decoration: none;
    text-align: center;
  }

  button:hover,
  button[active='true'],
  a:hover,
  a[active='true'] {
    filter: brightness(1.3);
  }

  button:hover:not([isGroup]),
  button[active='true']:not([isGroup]),
  a:hover:not([isGroup]),
  a[active='true']:not([isGroup]) {
    outline: 1px solid var(--ui-color);
  }

  button:active,
  a:active {
    filter: brightness(1);
    outline: none;
  }

  button[isGroup],
  a[isGroup] {
    border-radius: 0;
  }
</style>
