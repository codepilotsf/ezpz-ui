<script>
	import './theme.css';

	export let name = '';
	export let value = '';
	export let label = 'Input';
	export let type = 'text';
	export let placeholder = '';
	export let disabled = false;
	export let note = '';
	export let error = '';
	export let required = false;
	export let id = name;

	let _class = '';
	export { _class as class };

	const handleInput = (e) => {
		// This is a Rich Harris trick to allow dynamic `type` attribute
		// while still binding the value to the input.
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};
</script>

<ui-input class="lib-ui">
	<label for={id}>{label}</label>

	<input
		class={_class}
		class:error
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
		<ui-form-error>{error}</ui-form-error>
	{:else if note}
		<ui-form-note>{note}</ui-form-note>
	{/if}
</ui-input>

<style>
	input {
		outline: none;
		width: 100%;
		font-size: var(--ui-form-element-font-size);
		color: var(--ui-dark-color);
		border: var(--ui-border-width) solid var(--ui-midtone-color);
		border-radius: var(--ui-border-radius);
		padding: var(--ui-form-element-padding);
	}

	input:focus {
		outline: 2px solid var(--link);
		box-shadow: 0 0 2px 1px var(--link);
	}

	input.error {
		outline: 1px solid var(--ui-error-background);
		border: 1px solid var(--ui-error-background);
		box-shadow: 0 0 1px 1px var(--ui-error-background);
		color: var(--ui-error-color);
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
		color: var(--ui-dark-color);
	}

	ui-form-error {
		color: var(--ui-error-color)
	}
	ui-form-note {
		color: var(--ui-lighter-color);
	}
</style>
