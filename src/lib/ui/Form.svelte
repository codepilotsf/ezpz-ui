<script>
  import './style.css'
  import { setContext } from 'svelte'
  import { enhance as svelteEnhance } from '$app/forms'
  import { superForm } from 'sveltekit-superforms'

  let {
    method = 'POST',
    superform = null,
    enhance: useEnhance = true,
    class: _class = '',
    ...other
  } = $props()

  const superFormStores = superform ? superForm(superform) : null
  if (superFormStores) {
    const { form, errors, constraints } = superFormStores
    setContext('form', form)
    setContext('errors', errors)
    setContext('constraints', constraints)
  }
  useEnhance = useEnhance === 'false' ? false : useEnhance

  let enhanceFunction
  if (useEnhance === true || useEnhance === 'true') {
    enhanceFunction = superFormStores?.enhance || svelteEnhance
  }
</script>

<form class={['lib-ui', _class].join(' ')} {method} {superform} {...other} use:enhanceFunction>
  <slot />
</form>

<style>
</style>
