<script>
  import './style.css'
  import { setContext } from 'svelte'

  let { selected, label = '', color = '', scheme = '', class: _class = '', ...restProps } = $props()

  if (color) setContext('color', color)
  if (scheme) setContext('scheme', scheme)

  /* 
  When $state is set to context and the value is not a custom object, 
  it becomes a static (non-reactive) value. The solution is to take that
  static object from context and set it to a reactive variable by creating
  a custom object and recasting it to a $state object.
  */
  let selectedState = $state({ value: selected || [] })
  setContext('selectedState', selectedState)

  /*
  Whenever selectedState object is updated in the child component, we need to 
  update the binded value to match.
  */
  $effect(() => {
    selected = selectedState.value
  })
</script>

<fieldset class={`lib-ui ${_class}`}>
  {#if label}
    <label>{label}</label>
  {:else if $$slots.label}
    <slot name="label" />
  {/if}
  <slot />
</fieldset>

<style>
  .lib-ui {
    flex: 1;
    margin-top: var(--ui-form-item-margin-top);
  }

  fieldset {
    display: block;
  }

  label {
    margin-bottom: 0.5rem;
  }
</style>
