<script>
  import { getContext } from 'svelte'

  let {
    label = '',
    leadingLabel = '',
    checked,
    disabled = false,
    name = getContext('name') || null,
    id = name || null,
    value = null,
    background = getContext('background') || '',
    scheme = getContext('scheme') || '',
    _class: _class = '',
    ...other
  } = $props()

  function setBackground(el) {
    // This must be set as a local CSS variable in order to use it in the pseudo-element for the
    // background color of the button group (which is a darkened version of the background color)
    if (background) {
      el.style.setProperty('--ui-checkbox-background', background)
    }
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
    use:setBackground
    type="checkbox"
    bind:checked
    on:change={handleChange}
    {id}
    {name}
    {disabled}
    {value}
    {scheme}
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
    border-style: solid;
    border-width: var(--ui-border-width, 1px);
    border-radius: var(--ui-border-radius, 3px);
    border-color: var(--ui-border-color, var(--ui-midtone, #aaa));
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
    background: var(--ui-light, #ccc);
  }

  input:checked {
    border-color: var(--ui-checkbox-background, var(--ui-accent, royalblue));
    background-color: var(
      --ui-checkbox-background,
      var(--ui-accent, royalblue)
    );
    background-position: 40% 40%;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' %3E%3Cpath fill='white' d='M0,8 5,13 14,4 12,2 5,9 2,6z'/%3E%3C/svg%3E%0A");
  }

  input:checked[scheme='info'] {
    --ui-checkbox-background: var(--ui-info-dark, dodgerblue);
  }

  [scheme='warning'] {
    --ui-checkbox-background: var(--ui-warning-dark, darkorange);
  }

  [scheme='success'] {
    --ui-checkbox-background: var(--ui-success-dark, darkgreen);
  }

  [scheme='danger'] {
    --ui-checkbox-background: var(--ui-danger-dark, red);
  }
</style>
