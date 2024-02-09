<script>
	import './theme.css'
	import { setContext } from 'svelte'

	let {
		legend = '',
		selected,
		color = '',
		scheme = '',
		class: _class = '',
		...restProps
	} = $props()

	setContext('isGroup', true)
	setContext('selected', selected)

	if (color) setContext('color', color)
	if (scheme) setContext('scheme', scheme)
</script>

<fieldset class={['lib-ui', _class].join(' ')} {...restProps}>
	{#if legend}
		<legend>{legend}</legend>
	{:else if $$slots.legend}
		<slot name="legend" />
	{/if}
	<slot />
</fieldset>

<style>
	fieldset {
		display: block;
	}

	legend {
		display: block;
		margin: --ui-form-label-margin;
		font-size: var(--ui-form-label-font-size);
		color: var(--ui-dark-color);
	}
</style>
