<script>
	import './theme.css';
	import { utils } from './utils.js';
	import { onMount } from 'svelte';

	export let color = '';
	export let background = '';
	export let scheme = 'brand';

	let _class = '';
	export { _class as class };

	let parentEl;
	onMount(() => utils.setColors(parentEl, { scheme, color, background }));
</script>

<ui-TAGNAME class={`lib-ui ${_class}`} bind:this={parentEl}>
	<!-- code -->
</ui-TAGNAME>

<style>
	/* style */
</style>
