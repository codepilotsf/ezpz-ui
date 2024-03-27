<script>
  import { getContext } from 'svelte'

  let {
    label = '',
    leadingLabel = '',
    name = getContext('name') || null,
    id = name || null,
    disabled = null,
    checked = null,
    value = $bindable(),
    class: _class = '',
    ...other
  } = $props()

  const valueState = getContext('valueState')

  function handleChange() {
    if (valueState) valueState.value = value
  }
</script>

<label>
  {#if $$slots.leadingLabel}
    <slot name="leadingLabel" />
  {:else if leadingLabel}
    <span>{leadingLabel}</span>
  {/if}

  <input
    class="lib-ui Radio {_class}"
    type="radio"
    {id}
    {name}
    {value}
    {disabled}
    checked={(value && value === valueState?.value) ||
      (!valueState?.value?.length && checked)}
    {...other}
    aria-checked={checked}
    on:change={handleChange}
  />

  {#if $$slots.label}
    <slot name="label" />
  {:else if label}
    <span>{label}</span>
  {/if}
</label>

<style>
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    font-size: var(--ui-radio-font-size, var(--ui-small-font-size, 0.875rem));
    gap: var(--ui-radio-gap, 0.5rem);
    width: fit-content;
    padding: var(--ui-radio-padding, 2px);
  }

  input {
    border-style: solid;
    border-width: var(--ui-radio-border-width, var(--ui-border-width, 1px));
    border-color: var(--ui-radio-border-color, var(--ui-midtone, #94a3b8));
    border-radius: var(--ui-radio-radius, var(--ui-border-radius, 3px));
    appearance: none;
    width: 18px;
    height: 18px;
    margin: 0;
    vertical-align: top;
    background: #fff no-repeat center center;
    border-radius: 50%;
    transition: all 0.1s ease-in-out;
  }

  input:where(:active:not(:disabled), :focus) {
    outline: none;
  }

  input:disabled,
  label[disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:disabled {
    background-color: var(--ui-midtone, #cbd5e1);
  }

  input:checked {
    border-color: var(--ui-radio-color, var(--ui-focus, #3b82f6));
    background-color: var(--ui-radio-color, var(--ui-focus, #3b82f6));
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ccircle fill='white' cx='5' cy='5' r='4'/%3E%3C/svg%3E%0A");
  }
</style>
