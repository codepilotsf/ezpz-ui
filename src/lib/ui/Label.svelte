<!--
Label is imported by form field components such as Input and CheckboxGroup
and is *not* generally used directly. It is broken out into a separate component
so that it can be styled consistently across all form field components while
keeping the code DRY. In the case of CheckboxGroup and RadioGroup, the `legend`
tag is used instead of `label` but styled the same way.
-->

<script>
  import './style.css'

  // prettier-ignore
  let {
    label = '',
    isLegend = false,
    forId = null,
    isError,
  } = $props()

  // Convert "false" string to boolean
  isError = isError === 'false' ? false : isError
</script>

{#if isLegend}
  <legend class="lib-ui" class:error={isError}><slot /></legend>
{:else}
  <slot />
  <label class="lib-ui" for={forId} class:error={isError}>
    {label}
  </label>
{/if}

<style>
  label,
  legend {
    display: block;
    margin: var(--ui-form-label-margin);
    font-size: var(--ui-form-label-font-size);
    font-weight: var(--ui-form-label-font-weight);
    font-variation-settings: 'wght' var(--ui-form-label-font-weight);
    color: var(--ui-dark);
  }

  label.error,
  legend.error {
    color: var(--ui-danger-dark);
  }
</style>
