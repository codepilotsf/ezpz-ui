<script>
  import { setContext } from 'svelte'

  // prettier-ignore
  let { 
    value, 
    name = '',
    label = '', 
    color = '', 
    scheme = '', 
    class: _class = '', 
    ...other 
  } = $props()

  if (name) setContext('name', name)
  if (color) setContext('color', color)
  if (scheme) setContext('scheme', scheme)

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
</script>

<fieldset class={['lib-ui', _class].join(' ')} {...other}>
  {#if label}
    <legend>{label}</legend>
  {:else if $$slots.label}
    <slot name="label" />
  {/if}
  <slot />
</fieldset>

<style>
  .lib-ui {
    flex: 1;
    margin-top: var(--ui-margin-top);
  }

  fieldset {
    display: block;
  }

  label {
    margin-bottom: 0.5rem;
  }
</style>
