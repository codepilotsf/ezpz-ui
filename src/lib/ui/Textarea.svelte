<script>
  import './style.css'
  import { Label, Note } from '$lib/ui'

  let {
    name = '',
    value,
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

  const isError = Boolean(error)

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

<ui-input class={['lib-ui', _class].join(' ')} {...other}>
  <Label forId={id} {isError} {label}></Label>

  <textarea
    use:init
    on:input={resize}
    class:isError
    {id}
    {name}
    {placeholder}
    {disabled}
    aria-disabled={disabled}
    aria-invalid={Boolean(error) || null}
    bind:value
  />

  {#if error || note}
    <Note {isError}>{error || note}</Note>
  {/if}
</ui-input>

<style>
  .lib-ui {
    flex: 1;
    margin-top: var(--ui-form-item-margin-top);
  }

  textarea {
    outline: none;
    width: 100%;
    font-size: var(--ui-form-item-font-size);
    color: var(--ui-dark);
    border: var(--ui-border-width) solid var(--ui-border-color);
    border-radius: var(--ui-border-radius);
    padding: var(--ui-form-item-padding);
    line-height: var(--ui-form-item-line-height);
    min-height: 4rem;
    margin-bottom: -5px;
  }

  textarea::placeholder {
    color: var(--ui-form-item-placeholder-color);
  }

  textarea:focus {
    outline: var(--ui-form-item-focus-outline);
    box-shadow: var(--ui-form-item-focus-box-shadow);
  }

  textarea:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--ui-light);
  }

  textarea:not(:focus).isError {
    outline: 1px solid var(--ui-danger-dark);
    border: var(--ui-border-width) 1px solid var(--ui-danger-dark);
    box-shadow: 0 0 1px 1px var(--ui-danger-dark);
    color: var(--ui-danger-dark);
  }
</style>
