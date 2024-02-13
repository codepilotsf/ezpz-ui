<script>
	import './style.css'
	import { Label, Note } from '$lib/ui'
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
		<Label isLegend="true" isError={Boolean(error)}>{legend}</Label>
	{:else if $$slots.legend}
		<slot name="legend" />
	{/if}
	<slot />
	{#if error || note}
		<Note isError={Boolean(error)}>{error || note}</Note>
	{/if}
</fieldset>

<style>
	fieldset {
		display: block;
	}
</style>
