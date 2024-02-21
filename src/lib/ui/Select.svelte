<script>
  import './style.css'
  import { getContext } from 'svelte'
  import { readable } from 'svelte/store'
  import { Label, Note } from '$lib/ui'

  let {
    name = '',
    disabled = null,
    id = name,
    value,
    label = '',
    placeholder = 'Select',
    note = '',
    error = '',
    class: _class = '',
    ...other
  } = $props()

  // Convert string to boolean
  error = error === 'false' ? false : error
  disabled = disabled === 'false' ? false : disabled

  let form = getContext('form') || readable({})
  let errors = getContext('errors') || readable({})
  let constraints = getContext('constraints') || readable({})

  $effect(() => {
    error = error || $errors[name] || ''
  })

  const handleChange = ({ target }) => {
    value = target.value
  }
</script>

<ui-select class={['lib-ui', _class].join(' ')} {...other}>
  <Label forId={id} {label} isError={Boolean(error)}></Label>

  <select
    {id}
    {name}
    {disabled}
    value={$form[name] || value}
    class:error={Boolean(error)}
    aria-invalid={Boolean(error) || null}
    aria-disabled={disabled}
    {...$constraints[name]}
    {...other}
    on:change={handleChange}
  >
    {#if placeholder}
      <option class="placeholder" value="" disabled selected hidden
        >{placeholder}</option
      >
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
    margin-top: var(--ui-form-item-margin-top);
    flex: 1;
  }

  select {
    display: block;
    width: 100%;
    padding: var(--ui-form-item-padding);
    font-size: var(--ui-form-item-font-size);
    color: var(--ui-dark-color);
    border: var(--ui-border-width) solid var(--ui-border-color);
    border-radius: var(--ui-border-radius);
    outline: none;
    appearance: none;
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-down'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E"); */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevrons-up-down'%3E%3Cpath d='m7 15 5 5 5-5'/%3E%3Cpath d='m7 9 5-5 5 5'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
  }

  select.error {
    outline: var(--ui-border-width) solid var(--ui-danger-dark);
    border: var(--ui-border-width) solid var(--ui-danger-dark);
    box-shadow: 0 0 1px 1px var(--ui-danger-light);
    color: var(--ui-danger-dark);
  }
</style>
