<!-- 
Note: There appears to be a Svelte bug which prevents spreading `...other` props or `$constraints` 
props in the `select` element.
-->
<script>
  import { getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { Label, Note, Option } from '$lib/ui'

  let {
    name = '',
    disabled = null,
    id = name,
    value = $bindable(),
    label = '',
    init = 'Select',
    note = '',
    error = '',
    class: _class = '',
  } = $props()

  // Convert string to boolean
  error = error === 'false' ? false : error
  disabled = disabled === 'false' ? false : disabled

  let errors = getContext('errors') || writable({})

  $errors[name] = error
  $effect(() => {
    error = $errors[name] || ''
  })

  const handleChange = ({ target }) => {
    value = target.value
  }
</script>

<ui-select class="lib-ui Select {_class}" class:error={Boolean(error)}>
  <Label forId={id} {label} isError={Boolean(error)}></Label>

  <select
    {id}
    {name}
    {disabled}
    aria-invalid={Boolean(error) || null}
    aria-disabled={disabled}
    on:change={handleChange}
  >
    {#if init}
      <Option class="init" value="" disabled selected hidden>{init}</Option>
    {/if}
    <slot />
  </select>

  {#if error || note}
    <Note isError={Boolean(error)}>{error || note}</Note>
  {/if}
</ui-select>

<style>
  .lib-ui {
    display: block;
    margin-top: var(--ui-margin-top);
    flex: 1;
  }

  select {
    display: block;
    width: 100%;
    padding: var(--ui-select-padding, var(--ui-padding, 4px 6px));
    font-size: var(--ui-select-font-size, var(--ui-font-size 0.875rem));
    color: var(--ui-select-color, var(--ui-dark, #1e293b));
    border-style: solid;
    border-width: var(--ui-select-border-width, var(--ui-border-width, 1px));
    border-color: var(
      --ui-select-border-color,
      var(--ui-border-color, var(--ui-midtone, #d2d6dc))
    );
    border-radius: var(--ui-select-border-radius, var(--ui-border-radius, 3px));
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-down'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
  }

  select:focus {
    outline-style: solid;
    outline-color: var(--ui-select-focus, var(--ui-focus, #3b82f6));
    outline-width: var(--ui-select-outline-width, var(--ui-outline-width, 2px));
    outline-offset: var(
      --ui-select-outline-offset,
      var(--ui-outline-offset, none)
    );
    border-color: var(--ui-select-focus, var(--ui-focus #3b82f6));
  }

  .error select,
  .error select:focus {
    outline-style: solid;
    outline-width: var(--ui-select-outline-width, 2px);
    outline-color: var(--ui-select-error, var(--ui-error, #b91c1c));
    outline-offset: var(
      --ui-select-outline-offset,
      var(--ui-outline-offset, none)
    );
    border-color: var(--ui-select-error, var(--ui-error, #b91c1c));
    color: var(--ui-select-error, var(--ui-error, #b91c1c));
  }

  select:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--ui-light, #f1f5f9);
  }
</style>
