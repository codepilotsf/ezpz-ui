<script>
  import './style.css'

  let { children, class: _class = '' } = $props()
</script>

<form-row class={['lib-ui', _class].join(' ')}>
  <slot />
</form-row>

<style>
  .lib-ui {
    margin-top: var(--ui-form-item-margin-top);
  }

  form-row {
    display: flex;
    gap: var(--ui-form-item-row-gap);
    width: 100%;
  }
</style>
