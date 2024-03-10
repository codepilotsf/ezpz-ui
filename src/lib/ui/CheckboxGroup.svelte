<script>
  import { Label, Note } from '$lib/ui'
  import { setContext } from 'svelte'

  let {
    label = '',
    name = '',
    value,
    color = '',
    scheme = '',
    error = '',
    note = '',
    class: _class = '',
    ...other
  } = $props()

  setContext('isGroup', true)
  if (name) setContext('name', name)

  /* 
  When $state is set to context and the value is not a custom object, 
  it becomes a static (non-reactive) value. The solution is to take that
  static object from context and set it to a reactive variable by creating
  a custom object and recasting it to a $state object.
  */

  let valueState = $state({ value: value || [] })
  setContext('valueState', valueState)

  /*
  Whenever valueState object is updated in the child component, we need to 
  update the binded value to match.
  */
  $effect(() => {
    value = valueState.value
  })

  if (color) setContext('color', color)
  if (scheme) setContext('scheme', scheme)
</script>

<fieldset class={['lib-ui', _class].join(' ')} {...other}>
  {#if label}
    <Label isLegend="true" isError={Boolean(error)}>{label}</Label>
  {:else if $$slots.label}
    <slot name="label" />
  {/if}
  <slot />
  {#if error || note}
    <Note isError={Boolean(error)}>{error || note}</Note>
  {/if}
</fieldset>

<style>
  .lib-ui {
    flex: 1;
  }

  fieldset {
    display: block;
  }
</style>
