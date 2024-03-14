<script>
  let {
    src = '',
    initials = '',
    name = '',
    alt = '',
    size,
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

<ui-avatar class="lib-ui alert {_class}" {size} {...other}>
  {#if src}
    <img {src} alt={alt || name || initials || 'Avatar'} />
  {:else if initials}
    <span>{initials}</span>
  {/if}
  <slot />
</ui-avatar>

<style>
  /* Instance Styles
  -----------------------------*/
  ui-avatar {
    --ui-this-size: var(--ui-avatar-size, 84px);
    --ui-this-color: var(--ui-avatar-color, var(--ui-dark, #1e293b));
    --ui-this-background: var(--ui-avatar-background, var(--ui-light, #e2e8f0));
    --ui-this-border: var(--ui-avatar-border, none);
  }
  ui-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    height: auto;
    overflow: hidden;
    aspect-ratio: 1;
    color: var(--ui-this-color);
    background-color: var(--ui-this-background);
    width: var(--ui-this-size);
    font-size: calc(var(--ui-this-size) / 2.2);
  }

  [size='xs'] {
    --ui-this-size: 32px;
  }

  [size='sm'] {
    --ui-this-size: 52px;
  }

  [size='md'] {
    --ui-this-size: 84px;
  }

  [size='lg'] {
    --ui-this-size: 136px;
  }

  [size='xl'] {
    --ui-this-size: 220px;
  }

  ui-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
