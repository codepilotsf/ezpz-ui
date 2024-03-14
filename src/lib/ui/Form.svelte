<script>
  import { setContext } from 'svelte'
  import { superForm } from 'sveltekit-superforms'

  let { method = 'POST', superform, class: _class = '', ...other } = $props()

  if (!superform || !Object.keys(superform).length) {
    throw new Error('LIB/UI Form component requires a superform prop.')
  }

  // Set SuperForm context for child form elements
  const { form, errors, constraints, enhance } = superForm(superform)
  setContext('form', form)
  setContext('errors', errors)
  setContext('constraints', constraints)
</script>

<form
  class={['lib-ui', _class].join(' ')}
  {method}
  {superform}
  {...other}
  use:enhance
>
  <slot />
</form>
