<!--
Label is imported by form field components such as Input and CheckboxGroup
and is *not* generally used directly. It is broken out into a separate component
so that it can beœ styled consistently across all form field components while
keeping the code DRY. In the case of CheckboxGroup and RadioGroup, the `label`
tag is used instead of `label` but styled the same way.
-->

<script>
  import './style.css'

  // prettier-ignore
  let {
    label = '',
    isLegend = false,
    forId,
    isError,
  } = $props()

  // Remove falsey values from the props
  forId = forId || null
  isError = isError || null
</script>

{#if isLegend}
  <label {isError}><slot /></label>
{:else}
  <slot />
  <label for={forId} {isError}>
    {label}
  </label>
{/if}

<style>
  label,
  label {
    display: block;
    margin: var(--ui-form-label-margin);
    font-size: var(--ui-form-label-font-size);
    font-weight: var(--ui-form-label-font-weight);
    font-variation-settings: 'wght' var(--ui-form-label-font-weight);
    color: var(--ui-dark);
  }

  label[isError],
  label[isError] {
    color: var(--ui-danger-dark);
  }
</style>
