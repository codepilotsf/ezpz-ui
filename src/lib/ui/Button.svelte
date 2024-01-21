<script>
	import { onMount } from 'svelte';
	import './style.css';
	import { utils } from './utils.js';

	export let type = 'button';
	export let href = false;
	export let disabled = false;
	export let loading = false;
	export let size = 'full';
	export let theme = 'default';
	export let color = '';
	export let background = '';

	let aEl;
	let buttonEl;
	onMount(() => {
		const parentEl = aEl || buttonEl;
		let { newBackground, newColor } = utils.getColors({ theme, background, color });
		parentEl.style.setProperty('--background', newBackground);
		parentEl.style.setProperty('--color', newColor);
	});

	let _class = '';
	export { _class as class };
</script>

{#if href}
	<a bind:this={aEl} class={`lib-ui ${_class}`} {href} {type} {loading} {size}>
		<slot />
	</a>
{:else}
	<button bind:this={buttonEl} class={`lib-ui ${_class}`} {type} {disabled} {loading} {size}>
		<slot />
	</button>
{/if}

<style>
	button,
	a {
		width: 100%;
		border-radius: var(--ui-border-radius);
		padding: var(--ui-spacing-md);
		font-weight: 600;
		/* Colors are inversed for button */
		background-color: var(--color);
		color: var(--background);
	}
	button:hover {
		background-color: var(--ui-color-brand-hover-dark);
	}
</style>
