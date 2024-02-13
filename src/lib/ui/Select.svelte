<script>
	import './style.css'

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

	error = error === 'false' ? false : error
	placeholder = placeholder === 'false' ? false : placeholder

	const handleChange = ({ target }) => {
		selected = target.value
	}
</script>

<ui-select class="lib-ui" class:error {...restProps}>
	<label for={id}>{label}</label>

	<select class={_class} {id} {name} on:change={handleChange} {disabled}>
		{#if placeholder}
			<option class="placeholder" value="" disabled selected hidden>{placeholder}</option>
		{/if}
		<slot />
	</select>

	{#if error}
		<ui-error>{error}</ui-error>
	{:else if note}
		<ui-note>{note}</ui-note>
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
		/* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevron-down'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E"); */
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-chevrons-up-down'%3E%3Cpath d='m7 15 5 5 5-5'/%3E%3Cpath d='m7 9 5-5 5 5'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 0.5rem center;
	}

	.error > select {
		outline: 1px solid var(--ui-danger-dark);
		border: 1px solid var(--ui-danger-dark);
		box-shadow: 0 0 1px 1px var(--ui-danger-light);
		color: var(--ui-danger-dark);
	}

	.error > label {
		color: var(--ui-danger-dark);
	}

	select:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		background-color: var(--ui-light);
	}

	label {
		display: block;
		margin: --ui-form-label-margin;
		font-size: var(--ui-form-label-font-size);
		font-weight: var(--ui-form-label-font-weight);
		font-variation-settings: 'wght' var(--ui-form-label-font-weight);
		color: var(--ui-dark-color);
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
		color: var(--ui-dark);
	}
</style>
