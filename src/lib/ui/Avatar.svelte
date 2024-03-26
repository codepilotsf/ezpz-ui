<script>
  let {
    src = '',
    initials = '',
    name = '',
    alt = '',
    size = 'md',
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

  // Set size to named or explicit value
  const sizes = {
    xs: '32px',
    sm: '52px',
    md: '84px',
    lg: '136px',
    xl: '220px',
  }
</script>

<svelte:head>
  <title>LIB/UI Avatar</title>
</svelte:head>

<ui-avatar
  class="lib-ui Avatar {_class}"
  style="--ui-this-size: {sizes[size]}"
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
    border: var(--ui-avatar-border, none);
    border-radius: 50%;
    font-weight: 600;
    height: auto;
    width: var(--ui-avatar-size, var(--ui-this-size, 84px));
    font-size: var(--ui-avatar-font-size, calc(var(--ui-this-size) / 2.2));
    overflow: hidden;
    aspect-ratio: 1;
    color: var(--ui-avatar-color, var(--ui-dark, #1e293b));
    background-color: var(--ui-avatar-background, var(--ui-light, #e2e8f0));
  }

  ui-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
