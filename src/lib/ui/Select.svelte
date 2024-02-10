<script>
	// import { setContext } from 'svelte'
	import './theme.css'

	let {
		name = '',
		id = name,
		selected,
		label = '',
		placeholder = 'Select one',
		note = '',
		error = '',
		multiple = false,
		class: _class = '',
		...restProps
	} = $props()

	const handleChange = ({ target }) => {
		selected = target.value
	}
</script>

<ui-select class="lib-ui" {...restProps}>
	<label for={id}>{label}</label>

	<select class={_class} class:error {name} {id} {multiple} on:change={handleChange}>
		{#if placeholder}
			<option value="" disabled selected hidden class="placeholder">{placeholder}</option>
		{/if}
		<slot />
	</select>

	{#if error}
		<ui-form-error>{error}</ui-form-error>
	{:else if note}
		<ui-form-note>{note}</ui-form-note>
	{/if}
</ui-select>

<style>
	select {
		display: block;
		width: 100%;
		padding: var(--ui-form-element-padding);
		font-size: var(--ui-form-element-font-size);
		color: var(--ui-dark-color);
		border: var(--ui-border-width) solid var(--ui-border-color);
		border-radius: var(--ui-border-radius);
		outline: none;
		appearance: none;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: right 0.5rem center;
	}

	select.error {
		outline: 1px solid var(--ui-error-background);
		border: 1px solid var(--ui-error-background);
		box-shadow: 0 0 1px 1px var(--ui-error-background);
		color: var(--ui-error-color);
	}

	select:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		background: var(--lighter);
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
		color: var(--ui-error-color);
	}
	ui-form-note {
		color: var(--ui-lighter-color);
	}
</style>
