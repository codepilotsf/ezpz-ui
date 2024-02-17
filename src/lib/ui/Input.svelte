<script>
  import './style.css'
  import { getContext } from 'svelte'
  import { readable } from 'svelte/store'
  import { Label, Note } from '$lib/ui'

  let {
    name = '',
    value = null,
    id = name || null,
    label = '',
    type = 'text',
    placeholder = null,
    disabled = false,
    note = '',
    error = '',
    class: _class = '',
    ...other
  } = $props()

  // Convert "false" string to boolean
  error = error === 'false' ? false : error
  disabled = disabled === 'false' ? false : disabled

  let form = getContext('form') || readable({})
  let errors = getContext('errors') || readable({})
  let constraints = getContext('constraints') || readable({})

  $effect(() => {
    error = errors ? $errors[name] : error
  })

  const handleInput = (e) => {
    // This is a Rich Harris trick to allow dynamic `type` attribute
    // while still binding the value to the input.
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value
  }
</script>

<ui-input class="lib-ui">
  <Label forId={id} {label} isError={Boolean(error)}></Label>

  <input
    class={_class}
    class:error={Boolean(error)}
    aria-invalid={Boolean(error) || null}
    {type}
    {id}
    {name}
    {placeholder}
    {disabled}
    value={$form[name] || value}
    {...$constraints[name]}
    {...other}
    on:input={handleInput}
  />

  {#if error || note}
    <Note isError={Boolean(error)}>{error || note}</Note>
  {/if}
</ui-input>

<style>
  .lib-ui {
    flex: 1;
    margin-top: var(--ui-form-item-margin-top);
  }

  input {
    outline: none;
    width: 100%;
    font-size: var(--ui-form-item-font-size);
    color: var(--ui-dark);
    border: var(--ui-border-width) solid var(--ui-border-color);
    border-radius: var(--ui-border-radius);
    padding: var(--ui-form-item-padding);
  }

  input:focus {
    outline: 2px solid var(--ui-brand);
    box-shadow: 0 0 2px 1px var(--brand);
  }

  input.isError {
    outline: 1px solid var(--ui-danger-dark);
    border: var(--ui-border-width) 1px solid var(--ui-danger-dark);
    box-shadow: 0 0 1px 1px var(--ui-danger-dark);
    color: var(--ui-danger-dark);
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--ui-light);
  }

  input::placeholder {
    color: --ui-form-item-placeholder-color;
  }
</style>
