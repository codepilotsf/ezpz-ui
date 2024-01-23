<script>
	import './theme.css';
	import { utils } from './utils.js';
	import { onMount } from 'svelte';

	export let type = 'button';
	export let href = false;
	export let disabled = false;
	export let loading = false;
	export let size = 'md';
	export let target = false;
	export let scheme = 'brand';
	export let color = '';
	export let background = '';

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

	let aEl;
	let buttonEl;
	onMount(() => {
		const parentEl = aEl || buttonEl;
		utils.setColors(parentEl, { scheme, color, background });
	});

	let _class = '';
	export { _class as class };
</script>

{#if href}
	<a bind:this={aEl} class={`lib-ui ${_class}`} {href} {type} {loading} {size} {target} {style}>
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
		{style}
	>
		<slot />
	</button>
{/if}

<style>
	button,
	a {
		background-color: var(--ui-color);
		transition: all 0.15s ease-in-out;
		border-radius: var(--ui-border-radius);
		font-weight: 600;
		letter-spacing: 1px;
		color: #fff;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	}

	a,
	a:hover {
		color: #fff;
		text-decoration: none;
		text-align: center;
	}

	button:hover,
	a:hover {
		filter: brightness(1.3);
	}

	button:active,
	a:active {
		filter: brightness(1);
	}
</style>
