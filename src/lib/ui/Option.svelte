<script>
  let {
    label = '',
    value = null,
    selected = null,
    disabled = null,
    _class: _class = '',
    ...other
  } = $props()
</script>

<option class="lib-ui Option {_class}" {value} {selected} {disabled} {...other}>
  {label}
  <slot />
</option>
