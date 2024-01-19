<script>
	import './style.css';
	import { utils } from './utils.js';

	export let src = '';
	export let initials = '';
	export let name = '';
	export let size = 'md';
	export let theme = 'default';
	export let color = '';
	export let background = '';

	let _class = '';
	export { _class as class };

	const style = utils.getStyle(color, background);

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

<ui-avatar
	class={`lib-ui ${_class}`}
	class:w-10={size === 'xs'}
	class:w-16={size === 'sm'}
	class:w-20={size === 'md'}
	class:w-32={size === 'lg'}
	class:w-40={size === 'xl'}
	{theme}
	{style}
>
	{#if src}
		<img {src} alt={name || initials || 'Avatar'} />
	{:else if initials}
		<span
			class:text-[1rem]={size === 'xs'}
			class:text-[1.8rem]={size === 'sm'}
			class:text-[2.4rem]={size === 'md'}
			class:text-[4rem]={size === 'lg'}
			class:text-[5.4rem]={size === 'xl'}>{initials}</span
		>
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
	}

	ui-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	ui-avatar[theme='default'] {
		background-color: var(--ui-color-default-midtone);
		color: var(--ui-color-default-light);
	}

	ui-avatar[theme='info'] {
		background-color: var(--ui-color-info-dark);
		color: var(--ui-color-info-light);
	}

	ui-avatar[theme='warning'] {
		background-color: var(--ui-color-warning-dark);
		color: var(--ui-color-warning-light);
	}

	ui-avatar[theme='success'] {
		background-color: var(--ui-color-success-dark);
		color: var(--ui-color-success-light);
	}

	ui-avatar[theme='error'] {
		background-color: var(--ui-color-error-dark);
		color: var(--ui-color-error-light);
	}

	ui-avatar[theme='brand'] {
		background-color: var(--ui-color-brand-dark);
		color: var(--ui-color-brand-light);
	}
</style>
