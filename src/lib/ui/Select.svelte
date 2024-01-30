<script>
	import './theme.css';

    export let name = '';
    export let value = '';
    export let options;
	export let label = 'Select';
    export let placeholder = 'Please Select a value';
    export let disabled = false;
    export let required = false;
    export let note = '';
	export let error = '';
    export let multiple = false;
	export let id = name;

	let _class = '';
	export { _class as class };

    const handleSelect = (e) => {
        value = e.target.value;
        // Push multiple selected values to array and bind to value
        if (multiple) {
			const selectedOptions = e.target.selectedOptions;
            value = Array.from(selectedOptions).map(({ value }) => value);
        }		
	};

</script>

<ui-select class="lib-ui">
	<label for={id}>{label}</label>

    <select
        class={_class}
        class:error 
        {disabled}
        {required}
        {name}
        {id}
        {multiple}
        on:change={handleSelect}
    >
        <option value="">{placeholder}</option>
        {#each options as { value, label }}
            <option value={value}>{label}</option>
        {/each}
    </select>

    {#if error}
		<ui-form-error>{error}</ui-form-error>
	{:else if note}
		<ui-form-note>{note}</ui-form-note>
	{/if}

</ui-select>

<style>
	select {
		outline: none;
		width: 100%;
		font-size: var(--ui-form-element-font-size);
		color: var(--ui-dark-color);
		border: var(--ui-border-width) solid var(--ui-midtone-color);
		border-radius: var(--ui-border-radius);
		padding: var(--ui-form-element-padding);
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
		color: var(--ui-error-color)
	}
	ui-form-note {
		color: var(--ui-lighter-color);
	}
</style>
