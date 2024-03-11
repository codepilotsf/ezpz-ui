<script>
  import { setContext } from 'svelte'
  import { superForm } from 'sveltekit-superforms'

  // prettier-ignore
  let {
    method = 'POST',
    superform,
    class: _class = '',
    ...other
  } = $props()

  if (superform) {
    const { form, errors, constraints, enhance } = superForm(superform)
    setContext('form', form)
    setContext('errors', errors)
    setContext('constraints', constraints)
  }
</script>

<form
  class={['lib-ui', _class].join(' ')}
  {method}
  {superform}
  {...other}
  use:enhance()
>
  <slot />
</form>

<style>
</style>
