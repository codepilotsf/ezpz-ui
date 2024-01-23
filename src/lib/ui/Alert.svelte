<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import './theme.css';
	import { utils } from './utils.js';

	export let active = true;
	export let icon = true;
	export let color = '';
	export let background = '';
	export let scheme = 'brand';

	const defaultIcon = utils.getIcon(scheme);
	const xIcon = utils.getIcon('x', 18);

	let parentEl;
	onMount(() => utils.setColors(parentEl, { scheme, color, background }));

	let _class = '';
	export { _class as class };
</script>

{#if active}
	<ui-alert
		class={`lib-ui ${_class}`}
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
		{scheme}
		bind:this={parentEl}
	>
		{#if icon}
			<div class="ui-icon">
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
		gap: 8px;
		border-radius: var(--ui-border-radius);
		padding: 12px;
		color: var(--ui-color);
		background-color: var(--ui-background);
	}
	button {
		margin-left: auto;
		margin-top: 2px;
		height: fit-content;
		padding: 2px;
	}
	.ui-icon {
		margin-top: -2px;
		padding: 2px;
	}
</style>
