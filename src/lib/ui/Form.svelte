<script>
  import './style.css'
  import { setContext } from 'svelte'
  import { enhance as svelteEnhance } from '$app/forms'
  import { superForm } from 'sveltekit-superforms'

  let {
    method = 'POST',
    superform,
    enhance: useEnhance = true,
    class: _class = '',
    ...other
  } = $props()

  let superEnhance
  if (superform) {
    const { form, errors, constraints, enhance } = superForm(superform)
    setContext('form', form)
    setContext('errors', errors)
    setContext('constraints', constraints)
    superEnhance = enhance
  }

  let enhanceFunction
  if (useEnhance && useEnhance !== 'false') {
    enhanceFunction = superEnhance || svelteEnhance
  }
</script>

<form class={['lib-ui', _class].join(' ')} {method} {superform} {...other} use:enhanceFunction>
  <slot />
</form>

<style>
</style>
