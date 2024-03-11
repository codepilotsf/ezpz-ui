<script>
  let {
    src = '',
    initials = '',
    name = '',
    alt = '',
    size = 'md',
    color,
    background,
    class: _class = '',
    ...other
  } = $props()

  // Format initials or get them from name
  if (initials) {
    initials = initials.toUpperCase().slice(0, 2)
  } else if (name) {
    initials = name
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .slice(0, 2)
      .join('')
  }
</script>

<ui-avatar
  class={['lib-ui', _class].join(' ')}
  style:color
  style:background
  {size}
  {...other}
>
  {#if src}
    <img {src} alt={alt || name || initials || 'Avatar'} />
  {:else if initials}
    <span>{initials}</span>
  {/if}
  <slot />
</ui-avatar>

<style>
  ui-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    height: auto;
    overflow: hidden;
    aspect-ratio: 1;
    background-color: var(--ui-light, #ccc);
    color: var(--ui-dark, #222);
    width: var(--ui-avatar-size); /* This gets set below according to size */
    font-size: calc(var(--ui-avatar-size) / 2.2);
  }

  [size='xs'] {
    --ui-avatar-size: 32px;
  }

  [size='sm'] {
    --ui-avatar-size: 52px;
  }

  [size='md'] {
    --ui-avatar-size: 84px;
  }

  [size='lg'] {
    --ui-avatar-size: 136px;
  }

  [size='xl'] {
    --ui-avatar-size: 220px;
  }

  ui-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
