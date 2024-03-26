<script>
  import { readable, writable } from 'svelte/store'
  import { getContext } from 'svelte'
  import { Label, Note } from '$lib/ui'

  let {
    name = '',
    value = $bindable(),
    id = name,
    label = '',
    height,
    placeholder = '',
    disabled = false,
    fixed = false,
    note = '',
    error = '',
    class: _class = '',
    ...other
  } = $props()

  // Convert "false" string to boolean
  error = error === 'false' ? false : error
  disabled = disabled === 'false' ? false : disabled

  let form = getContext('form') || readable({})
  let errors = getContext('errors') || writable({})
  let constraints = getContext('constraints') || readable({})

  $errors[name] = error
  $effect(() => {
    error = $errors[name] || ''
  })

  function init(target) {
    if (height) target.style.setProperty('min-height', height)
    resize({ target })
  }

  function resize({ target }) {
    if (fixed) return
    target.style.height = '5px'
    target.style.height = target.scrollHeight + 2 + 'px'
  }
</script>

<ui-input
  class="lib-ui Textarea {_class}"
  class:error={Boolean(error)}
  {...other}
>
  <Label forId={id} isError={Boolean(error)} {label}></Label>

  <textarea
    use:init
    on:input={resize}
    {id}
    {name}
    {placeholder}
    {disabled}
    aria-disabled={disabled || null}
    aria-invalid={Boolean(error) || null}
    bind:value
  />

  {#if error || note}
    <Note isError={Boolean(error)}>{error || note}</Note>
  {/if}
</ui-input>

<style>
  .lib-ui {
    display: block;
    margin-top: var(--ui-margin-top, 1rem);
    flex: 1;
  }

  textarea {
    width: 100%;
    font-size: var(--ui-textarea-font-size, var(--ui-font-size, 1rem));
    color: var(--ui-textarea-color, var(--ui-dark, #1e293b));
    border-style: solid;
    border-width: var(--ui-textarea-border-width, var(--ui-border-width, 1px));
    border-color: var(--ui-textarea-border-color, var(--ui-midtone, #94a3b8));
    border-radius: var(
      --ui-textarea-border-radius,
      var(--ui-border-radius, 3px)
    );
    padding: var(--ui-textarea-padding, var(--ui-padding, 0.5rem));
    line-height: var(--ui-textarea-line-height, var(--ui-line-height, 1.6));
    min-height: var(--ui-textarea-min-height, 4rem);
  }

  textarea::placeholder {
    color: var(
      --ui-textarea-placeholder-color,
      var(--ui-placeholder-color, var(--ui-midtone, #cbd5e1))
    );
  }

  textarea:focus {
    outline: var(--ui-focus-outline);
    box-shadow: var(--ui-focus-box-shadow);
  }

  textarea:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--ui-light, #f1f5f9);
  }

  .lib-ui.error textarea {
    outline-style: solid;
    outline-width: var(--ui-textarea-outline-width, 2px);
    outline-color: var(--ui-textarea-error, var(--ui-error, #b91c1c));
    outline-offset: var(
      --ui-textarea-outline-offset,
      var(--ui-outline-offset, none)
    );
    border-color: var(--ui-textarea-error, var(--ui-error, #b91c1c));
    color: var(--ui-textarea-error, var(--ui-error, #b91c1c));
  }
</style>
