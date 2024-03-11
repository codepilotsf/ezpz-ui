<script>
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
    error = error || $errors[name] || ''
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
    display: block;
    margin-top: var(--ui-form-item-margin-top, 1rem);
    flex: 1;
  }

  input {
    outline: none;
    width: 100%;
    font-size: var(--ui-form-item-font-size, 1rem);
    color: var(--ui-dark, #222);
    border-width: var(--ui-border-width, 1px);
    border-style: solid;
    border-color: var(--ui-border-color, var(--ui-midtone, #aaa));
    border-radius: var(--ui-border-radius, 3px);
    padding: var(--ui-form-item-padding, 4px 6px);
  }

  input:focus {
    outline: 1px solid var(--ui-accent, dodgerblue);
    border-color: var(--ui-accent, dodgerblue);
    box-shadow: 0 0 1px 1px var(--ui-accent, dodgerblue);
  }

  input.error {
    outline: 1px solid var(--ui-danger-dark, red);
    border-color: var(--ui-danger-dark, red);
    box-shadow: 0 0 1px 1px var(--ui-danger-dark, red);
    color: var(--ui-danger-dark, red);
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--ui-light, #ccc);
  }

  input::placeholder {
    color: var(--ui-form-item-placeholder-color, var(--ui-midtone, #aaa));
  }
</style>
