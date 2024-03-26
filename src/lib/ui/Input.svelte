<script>
  import { getContext } from 'svelte'
  import { readable, writable } from 'svelte/store'
  import { Label, Note } from '$lib/ui'

  let {
    name = '',
    value = $bindable(),
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
  let errors = getContext('errors') || writable({})
  let constraints = getContext('constraints') || readable({})

  $errors[name] = error
  $effect(() => {
    error = $errors[name] || ''
  })

  const handleInput = (e) => {
    // This is a Rich Harris trick to allow dynamic `type` attribute
    // while still binding the value to the input.
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value
  }
</script>

<ui-input class="lib-ui Input {_class}" class:error={Boolean(error)}>
  <Label forId={id} {label} isError={Boolean(error)}></Label>

  <input
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
    margin-top: var(--ui-margin-top, 1rem);
    flex: 1;
  }

  input {
    width: 100%;
    font-size: var(--ui-input-font-size, var(--ui-font-size, 1rem));
    color: var(--ui-input-color, var(--ui-dark, #1e293b));
    border-style: solid;
    border-width: var(--ui-input-border-width, var(--ui-border-width, 1px));
    border-color: var(--ui-input-border-color, var(--ui-midtone, #94a3b8));
    border-radius: var(--ui-input-radius, var(--ui-border-radius, 3px));
    padding: var(--ui-input-padding, var(--ui-padding, 4px 6px));
  }

  input:focus {
    outline-style: solid;
    outline-color: var(--ui-input-focus, var(--ui-focus, #3b82f6));
    outline-width: var(--ui-input-outline-width, var(--ui-outline-width, 2px));
    outline-offset: var(
      --ui-input-outline-offset,
      var(--ui-outline-offset, none)
    );
    border-color: var(--ui-input-focus, var(--ui-focus #3b82f6));
  }

  .error input,
  .error input:focus {
    outline-style: solid;
    outline-width: var(--ui-input-outline-width, 2px);
    outline-color: var(--ui-input-error, var(--ui-error, #b91c1c));
    outline-offset: var(
      --ui-input-outline-offset,
      var(--ui-outline-offset, none)
    );
    border-color: var(--ui-input-error, var(--ui-error, #b91c1c));
    color: var(--ui-select-error, var(--ui-error, #b91c1c));
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--ui-light, #f1f5f9);
  }

  input::placeholder {
    color: var(
      --ui-input-placeholder-color,
      var(--ui-placeholder-color, var(--ui-midtone, #cbd5e1))
    );
  }
</style>
