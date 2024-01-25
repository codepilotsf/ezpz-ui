<script>
	import './theme.css';
	import { utils } from './utils.js';
	import { onMount, setContext } from 'svelte';

	export let color = '';
	export let scheme = 'brand';
	export let name = '';
	export let size = '';

	let _class = '';
	export { _class as class };

	setContext('isGroup', true);
	if (color) setContext('color', color);
	if (scheme) setContext('scheme', scheme);
	if (size) setContext('size', size);

	let parentEl;
	onMount(() => utils.setColors(parentEl, { scheme, color }));
</script>

<ui-button-group class={`lib-ui ${_class}`} bind:this={parentEl} {name}>
	<slot />
</ui-button-group>

<style>
	ui-button-group {
		position: relative;
		overflow: hidden;
		border-radius: var(--ui-border-radius);
		display: inline-flex;
		flex-wrap: nowrap;
		gap: 1px;
		box-shadow: var(--ui-button-shadow);
	}
	ui-button-group::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--ui-color);
		filter: brightness(0.8);
	}
</style>
