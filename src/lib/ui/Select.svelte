<script>
  import './style.css'
  import { Label, Note } from '$lib/ui'

  let {
    name = '',
    disabled = null,
    id = name,
    selected,
    label = '',
    placeholder = 'Select',
    note = '',
    error = '',
    class: _class = '',
    ...restProps
  } = $props()

  // Convert string to boolean
  error = error === 'false' ? false : error
  placeholder = placeholder === 'false' ? false : placeholder

  const isError = Boolean(error)

  const handleChange = ({ target }) => {
    selected = target.value
  }
</script>

<ui-select class="lib-ui" {...restProps}>
  <Label forId={id} {isError} {label}></Label>

  <select class={_class} class:error {id} {name} on:change={handleChange} {disabled}>
    {#if placeholder}
      <option class="placeholder" value="" disabled selected hidden>{placeholder}</option>
    {/if}
    <slot />
  </select>

  {#if error || note}
    <Note {isError}>{error || note}</Note>
  {/if}
</ui-select>

<style>
  .lib-ui {
    flex: 1;
    margin-top: var(--ui-form-item-margin-top);
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
    outline: 1px solid var(--ui-danger-dark);
    border: 1px solid var(--ui-danger-dark);
    box-shadow: 0 0 1px 1px var(--ui-danger-light);
    color: var(--ui-danger-dark);
  }
</style>
