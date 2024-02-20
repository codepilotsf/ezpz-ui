<script>
  import { getContext } from 'svelte'
  import './style.css'

  let {
    label = '',
    leadingLabel = '',
    checked,
    disabled = false,
    name = getContext('name') || null,
    id = name || null,
    value = null,
    color = getContext('color') || '',
    scheme = getContext('scheme') || '',
    _class: _class = '',
    ...other
  } = $props()

  function setCssVars(el) {
    el.style.setProperty(
      '--ui-color',
      color || (scheme && `var(--ui-${scheme}-dark)`) || 'var(--ui-brand)'
    )
  }

  let valueState = getContext('valueState')

  if (valueState?.value && !checked && checked !== false) {
    checked = valueState.value.includes(value)
  }

  function handleChange({ target }) {
    if (!valueState) return
    if (target.checked) {
      valueState.value = [...valueState.value, value]
    } else {
      valueState.value = valueState.value.filter((v) => v != value)
    }
  }
</script>

<label {disabled} forId={id}>
  {#if $$slots.leadingLabel}
    <slot name="leadingLabel" />
  {:else if leadingLabel}
    <span>{leadingLabel}</span>
  {/if}

  <input
    class={['lib-ui', _class].join(' ')}
    use:setCssVars
    type="checkbox"
    bind:checked
    on:change={handleChange}
    {id}
    {name}
    {disabled}
    {value}
    {...other}
    aria-checked={checked}
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
    transition: all 0.12s ease-in-out;
  }

  input:where(:active:not(:disabled), :focus) {
    outline: none;
  }

  input:disabled,
  label[disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  input:disabled {
    background: var(--ui-midtone);
  }

  input:checked {
    border-color: var(--ui-color);
    background-color: var(--ui-color);
    background-position: 40% 40%;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' %3E%3Cpath fill='white' d='M0,8 5,13 14,4 12,2 5,9 2,6z'/%3E%3C/svg%3E%0A");
  }
</style>
