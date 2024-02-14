<script>
	import './style.css'
	import { Label, Note } from '$lib/ui'

	let {
		name = '',
		value,
		id = name,
		label = '',
		placeholder = '',
		disabled = false,
		fixed = false,
		note = '',
		error = '',
		class: _class = ''
	} = $props()

	// Convert "false" string to boolean
	error = error === 'false' ? false : error
	disabled = disabled === 'false' ? false : disabled

	const isError = Boolean(error)

	function resize(el) {
		console.log('el:', el)
		// if (!resize) return
		// target.style.height = '5px'
		// target.style.height = target.scrollHeight + 2 + 'px'
	}
</script>

<ui-input class="lib-ui">
	<Label forId={id} {isError}>{label}</Label>

	<!-- <textarea
		use:resize
		on:input={resize}
		class={_class}
		class:isError
		{id}
		{name}
		{placeholder}
		{disabled}
		{value}
	/> -->

	{#if error || note}
		<Note {isError}>{error || note}</Note>
	{/if}
</ui-input>

<style>
	textarea {
		outline: none;
		width: 100%;
		font-size: var(--ui-form-element-font-size);
		color: var(--ui-dark);
		border: var(--ui-border-width) solid var(--ui-border-color);
		border-radius: var(--ui-border-radius);
		padding: var(--ui-form-element-padding);
		line-height: var(--ui-form-item-line-height);
		min-height: 3rem;
	}

	textarea::placeholder {
		color: var(--ui-form-item-placeholder-color);
	}

	textarea:focus {
		outline: var(--ui-form-item-focus-outline);
		box-shadow: var(--ui-form-item-focus-box-shadow);
	}

	textarea:disabled {
		cursor: not-allowed;
		opacity: var(--ui-form-item-disabled-opacity);
		background: var(--ui-form-item-disabled-background);
	}

	textarea:not(:focus).error {
		outline: var(--ui-form-item-error-outline);
		border: var(--ui-form-item-error-border);
		box-shadow: var(--ui-form-item-error-box-shadow);
		color: var(--ui-form-item-error-color);
	}

	/* Inverse */
	:global(.inverse textarea) {
		color: var(--ui-form-item-inverse-color);
		background: var(--ui-form-item-inverse-background);
		border: var(--ui-form-item-inverse-border);
	}

	:global(.inverse textarea::placeholder) {
		color: var(--ui-form-item-inverse-placeholder-color);
	}

	:global(.inverse textarea:focus) {
		outline: var(--ui-form-item-inverse-focus-outline);
		box-shadow: var(--ui-form-item-inverse-focus-box-shadow);
	}

	:global(.inverse textarea:disabled) {
		background: var(--ui-form-item-inverse-disabled-background);
	}
</style>
