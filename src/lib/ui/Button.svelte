<script>
	import { onMount } from 'svelte';
	import './style.css';
	import { utils } from './utils.js';

	export let type = 'button';
	export let href = false;
	export let disabled = false;
	export let loading = false;
	export let size = 'full';
	export let inverse = true;
	export let target = false;

	let aEl;
	let buttonEl;
	onMount(() => {
		const parentEl = aEl || buttonEl;
		utils.setColors(parentEl, $$props);
	});

	let _class = '';
	export { _class as class };
</script>

{#if href}
	<a bind:this={aEl} class={`lib-ui ${_class}`} {href} {type} {loading} {size} {inverse} {target}>
		<slot />
	</a>
{:else}
	<button
		bind:this={buttonEl}
		class={`lib-ui ${_class}`}
		{type}
		{disabled}
		{loading}
		{size}
		{inverse}
	>
		<slot />
	</button>
{/if}

<style>
	button,
	a,
	button:active,
	a:active {
		width: 100%;
		border-radius: var(--ui-border-radius);
		padding: var(--ui-spacing-md);
		font-weight: 600;
		background-color: var(--background);
		color: var(--color);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	}
	button:hover,
	a:hover {
		background-color: var(--background-hover);
		color: var(--color-hover);
	}
	button:active,
	a:active {
		background-color: var(--background);
		color: var(--color);
	}

	.lib-ui[inverse='true'] {
		background-color: var(--color);
		color: #fff;
	}
	.lib-ui[inverse='true']:hover {
		background-color: var(--color-hover);
		color: #fff;
	}
	.lib-ui[inverse='true']:active {
		background-color: var(--color);
		color: #fff;
	}

	a,
	a:hover {
		text-decoration: none;
		text-align: center;
	}
</style>
