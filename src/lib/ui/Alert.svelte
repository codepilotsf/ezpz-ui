<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import './style.css';
	import { utils } from './utils.js';

	export let active = true;
	export let icon = true;
	export let theme = 'default';

	const defaultIcon = utils.getIcon(theme);
	const xIcon = utils.getIcon('x', 18);

	let parentEl;
	onMount(() => utils.setColors(parentEl, $$props));

	let _class = '';
	export { _class as class };
</script>

{#if active}
	<ui-alert
		class={`lib-ui ${_class}`}
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
		{theme}
		bind:this={parentEl}
	>
		{#if icon}
			<div>
				<!-- Custom or default icon -->
				{#if $$slots.icon}
					<slot name="icon" />
				{:else if defaultIcon}
					{@html defaultIcon}
				{/if}
			</div>
		{/if}

		<div>
			<!-- Title -->
			{#if $$slots.title}
				<div class="font-semibold">
					<slot name="title" />
				</div>
			{/if}

			<!-- Message (default slot) -->
			{#if $$slots.default}
				<div><slot /></div>
			{/if}
		</div>

		<!-- Close Button -->
		<button on:click={() => (active = false)}>
			{@html xIcon}
		</button>
	</ui-alert>
{/if}

<style>
	ui-alert {
		display: flex;
		gap: var(--ui-spacing-md);
		border-radius: var(--ui-border-radius);
		padding: var(--ui-spacing-md);
		color: var(--color);
		background-color: var(--background);
	}
	button {
		margin-left: auto;
		margin-top: 4px;
		height: fit-content;
	}
</style>
