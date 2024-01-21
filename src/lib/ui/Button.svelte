<script>
	import { onMount } from 'svelte';
	import './style.css';
	import { utils } from './utils.js';

	export let type = 'button';
	export let href = false;
	export let disabled = false;
	export let loading = false;
	export let size = 'md';
	export let inverse = true;
	export let target = false;

	const sizes = {
		xs: {
			'font-size': 9,
			'x-padding': 6,
			'y-padding': 4
		},
		sm: {
			'font-size': 12,
			'x-padding': 10,
			'y-padding': 5
		},
		md: {
			'font-size': 14,
			'x-padding': 15,
			'y-padding': 10
		},
		lg: {
			'font-size': 18,
			'x-padding': 20,
			'y-padding': 12
		},
		xl: {
			'font-size': 20,
			'x-padding': 24,
			'y-padding': 12
		}
	};

	const style = [
		`font-size: ${sizes[size]['font-size']}px;`,
		`padding: ${sizes[size]['y-padding']}px ${sizes[size]['x-padding']}px;`
	].join(' ');

	console.log('style:', style);

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
	<a
		bind:this={aEl}
		class={`lib-ui ${_class}`}
		{href}
		{type}
		{loading}
		{size}
		{inverse}
		{target}
		{style}
	>
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
		{style}
	>
		<slot />
	</button>
{/if}

<style>
	button,
	a {
		border-radius: var(--ui-border-radius);
		font-weight: 600;
		letter-spacing: 1px;
		background-color: var(--background);
		color: var(--color);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
		transition: all 0.2s ease-in-out;
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

	a,
	a:hover {
		text-decoration: none;
		text-align: center;
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
</style>
