<script>
	import './theme.css';
	import { utils } from './utils.js';
	import { onMount, setContext } from 'svelte';

	export let color = '';
	export let background = '';
	export let scheme = 'brand';

	let _class = '';
	export { _class as class };

	setContext('isInButtonGroup', true);
	let parentEl;
	onMount(() => utils.setColors(parentEl, { scheme, color, background }));
</script>

<ui-button-group class={`lib-ui ${_class}`} bind:this={parentEl}>
	<slot />
</ui-button-group>

<style>
	ui-button-group {
		overflow: hidden;
		border-radius: var(--ui-border-radius);
		display: inline-flex;
		flex-wrap: nowrap;
		gap: 1px;
		background-color: #444; /* todo: move this to pseudo element with reduced brightness */
	}
</style>
