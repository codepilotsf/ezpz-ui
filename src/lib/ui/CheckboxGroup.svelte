<script>
	import './style.css'
	import { Label } from '$lib/ui'
	import { setContext } from 'svelte'

	let {
		legend = '',
		selected,
		color = '',
		scheme = '',
		error = '',
		note = '',
		class: _class = '',
		...restProps
	} = $props()

	setContext('isGroup', true)

	/* 
  When $state is set to context and the value is not a custom object, 
  it becomes a static (non-reactive) value. The solution is to take that
  static object from context and set it to a reactive variable by creating
  a custom object and recasting it to a $state object.
  */

	let selectedState = $state({ value: selected || [] })
	setContext('selectedState', selectedState)

	/*
  Whenever selectedState object is updated in the child component, we need to 
  update the binded value to match.
  */
	$effect(() => {
		selected = selectedState.value
	})

	if (color) setContext('color', color)
	if (scheme) setContext('scheme', scheme)
</script>

<fieldset class={['lib-ui', _class].join(' ')} {...restProps}>
	{#if legend}
		<Label isError={Boolean(error)}>{legend}</Label>
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
