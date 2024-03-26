<!-- 
Note is used by form field components such as Input and CheckboxGroup and is *not* generally used directly. It is broken
out into a separate component so that it can be styled consistently across all form field components while keeping the
code DRY. Note can be styled as a helpful note or as an error message.
-->

<script>
  let { isError } = $props()

  // Remove falsey values from the props
  isError = isError || null
</script>

{#if isError}
  <ui-error><slot /></ui-error>
{:else}
  <ui-note><slot /></ui-note>
{/if}

<style>
  ui-error,
  ui-note {
    display: block;
    font-size: var(--ui-form-error-note-font-size, 0.9rem);
    line-height: var(--ui-form-error-note-line-height, 1);
    margin-top: var(--ui-form-error-note-margin-top, 6px);
  }

  ui-error {
    color: var(--ui-error, #b91c1c);
  }
  ui-note {
    color: var(--ui-dark, #222);
  }
</style>
