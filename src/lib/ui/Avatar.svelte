<script>
	import { onMount } from 'svelte';
	import './theme.css';
	import { utils } from './utils.js';

	export let src = '';
	export let initials = '';
	export let name = '';
	export let size = 'md';
	export let theme = 'default';

	let _class = '';
	export { _class as class };

	const sizes = {
		xs: '32px',
		sm: '52px',
		md: '84px',
		lg: '136px',
		xl: '220px'
	};

	const style = `
    width: ${sizes[size]}; 
    font-size: calc(${sizes[size]} / 2);
  `;

	let parentEl;
	onMount(() => utils.setColors(parentEl, $$props));

	// Format initials or get from name
	if (initials) {
		initials = initials.toUpperCase().slice(0, 2);
	} else if (name) {
		initials = name
			.split(' ')
			.map((word) => word[0].toUpperCase())
			.slice(0, 2)
			.join('');
	}
</script>

<ui-avatar class={`lib-ui ${_class}`} {theme} bind:this={parentEl} {style}>
	{#if src}
		<img {src} alt={name || initials || 'Avatar'} />
	{:else if initials}
		<span>{initials}</span>
	{/if}
	<slot />
</ui-avatar>

<style>
	ui-avatar {
		display: inline-flex;
		align-items: center;
		height: auto;
		justify-content: center;
		border-radius: 50%;
		font-weight: 600;
		font-size: 1.25rem;
		overflow: hidden;
		aspect-ratio: 1;
		background: var(--background);
		color: var(--color);
	}

	ui-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
