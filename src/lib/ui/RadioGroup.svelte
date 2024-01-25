<script>
	import './theme.css';
	import { utils } from './utils.js';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let selected;
	export let legend = '';
	export let color = '';
	export let scheme = 'brand';

	let _class = '';
	export { _class as class };

	let selectedStore = writable(selected);

	setContext('selected', selectedStore);

	if (color) setContext('color', color);
	if (scheme) setContext('scheme', scheme);

	$: selected = $selectedStore;

	let fieldsetEl;
	onMount(() => utils.setColors(fieldsetEl, { scheme, color }));
</script>

<fieldset class={`lib-ui ${_class}`} bind:this={fieldsetEl}>
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
		margin-bottom: 0.5rem;
	}
</style>
