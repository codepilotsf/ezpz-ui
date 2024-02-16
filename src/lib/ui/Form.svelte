<script>
  import './style.css'
  import { enhance } from '$app/forms'

  let { children, class: _class = '', ...other } = $props()
</script>

<form class={['lib-ui', _class].join(' ')} method="POST" use:enhance>
  <slot />
</form>

<style>
</style>
