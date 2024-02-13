<script>
	import './theme.css'

	let {
		name = '',
		value,
		id = name,
		label = '',
		type = 'text',
		placeholder = '',
		disabled = false,
		note = '',
		error = '',
		required = false,
		class: _class = ''
	} = $props()

	error = error === 'false' ? false : error
	disabled = disabled === 'false' ? false : disabled

	const handleInput = (e) => {
		// This is a Rich Harris trick to allow dynamic `type` attribute
		// while still binding the value to the input.
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value
	}
</script>

<ui-input class="lib-ui" class:error>
	<label for={id}>{label}</label>

	<input
		class={_class}
		{type}
		{id}
		{name}
		{placeholder}
		{disabled}
		{value}
		{required}
		on:input={handleInput}
	/>

	{#if error}
		<ui-error>{error}</ui-error>
	{:else if note}
		<ui-note>{note}</ui-note>
	{/if}
</ui-input>

<style>
	input {
		outline: none;
		width: 100%;
		font-size: var(--ui-form-element-font-size);
		color: var(--ui-dark);
		border: var(--ui-border-width) solid var(--ui-border-color);
		border-radius: var(--ui-border-radius);
		padding: var(--ui-form-element-padding);
	}

	input:focus {
		outline: 2px solid var(--ui-brand);
		box-shadow: 0 0 2px 1px var(--brand);
	}

	.error > input {
		outline: 1px solid var(--ui-danger-dark);
		border: 1px solid var(--ui-danger-dark);
		box-shadow: 0 0 1px 1px var(--ui-danger-dark);
		color: var(--ui-danger-dark);
	}

	.error > label {
		color: var(--ui-danger-dark);
	}

	input:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		background: var(--lighter);
	}

	input::placeholder {
		color: --ui-form-element-placeholder-color;
	}

	label {
		display: block;
		margin: --ui-form-label-margin;
		font-size: var(--ui-form-label-font-size);
		font-weight: var(--ui-form-label-font-weight);
		font-variation-settings: 'wght' var(--ui-form-label-font-weight);
		color: var(--ui-dark);
	}

	ui-error,
	ui-note {
		display: block;
		font-size: var(--ui-form-error-note-font-size);
		line-height: var(--ui-form-error-note-line-height);
		margin-top: var(--ui-form-error-note-margin-top);
	}

	ui-error {
		color: var(--ui-danger-dark);
	}
	ui-note {
		color: var(--ui-lighter-color);
	}
</style>
