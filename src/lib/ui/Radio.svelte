<script>
  import './style.css'
  import { getContext } from 'svelte'

  let {
    label = '',
    leadingLabel = '',
    name = getContext('name') || null,
    id = name || null,
    disabled = null,
    checked = null,
    value,
    color = getContext('color'),
    scheme = getContext('scheme'),
    class: _class = '',
    ...other
  } = $props()

  function setCssVars(el) {
    el.style.setProperty(
      '--ui-color',
      color || (scheme && `var(--ui-${scheme}-dark)`) || 'var(--ui-brand)'
    )
  }

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
    class={['lib-ui', _class].join(' ')}
    type="radio"
    {id}
    {name}
    {value}
    {disabled}
    checked={(value && value === valueState?.value) || (!valueState?.value?.length && checked)}
    {...other}
    aria-checked={checked}
    on:change={handleChange}
    use:setCssVars
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
    font-size: var(--ui-form-label-font-size-small);
    gap: 0.5rem;
    width: fit-content;
    padding: 2px;
  }
  input {
    border: 1px solid var(--ui-border-color);
    border-radius: 3px;
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
    opacity: 0.4;
    cursor: not-allowed;
  }
  input:disabled {
    background: var(--ui-midtone);
  }

  input:checked {
    border-color: var(--ui-color);
    background-color: var(--ui-color);
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ccircle fill='white' cx='5' cy='5' r='4'/%3E%3C/svg%3E%0A");
  }
</style>
