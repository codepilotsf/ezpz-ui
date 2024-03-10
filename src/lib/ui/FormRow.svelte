<script>
  let { children, class: _class = '', ...other } = $props()
</script>

<form-row class={['lib-ui', _class].join(' ')} {...other}>
  <slot />
</form-row>

<style>
  form-row {
    display: flex;
    gap: var(--ui-form-item-row-gap);
    width: 100%;
  }
</style>
