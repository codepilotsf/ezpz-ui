<script>
	import { slide } from 'svelte/transition';
	import { X, BadgeInfo, AlertTriangle, CheckCheck, AlertCircle } from 'lucide-svelte';

	import './style.css';

	export let active = true;
	export let icon = true;
	export let theme = 'default';
	export let color = '';
	export let background = '';

	let styleValue = '';
	if (color) styleValue += `color: ${color};`;
	if (background) styleValue += `background: ${background};`;
	const style = styleValue || null;

	let _class = '';
	export { _class as class };
</script>

{#if active}
	<ui-alert
		class={`lib-ui ${_class}`}
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
		{theme}
		{style}
	>
		{#if icon}
			<div>
				{#if $$slots.icon}
					<!-- Custom Icon -->
					<slot name="icon" />
				{:else if theme === 'info'}
					<!-- Default Info Icon -->
					<BadgeInfo size={24} />
				{:else if theme === 'warning'}
					<!-- Default Warning Icon -->
					<AlertTriangle size={24} />
				{:else if theme === 'success'}
					<!-- Default Success Icon -->
					<CheckCheck size={24} />
				{:else if theme === 'error'}
					<!-- Default Error Icon -->
					<AlertCircle size={24} />
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
		<button class="ml-auto mt-1 h-fit" on:click={() => (active = false)}>
			<X size={18} />
		</button>
	</ui-alert>
{/if}

<style>
	ui-alert {
		display: flex;
		gap: var(--ui-spacing-md);
		border-radius: var(--ui-border-radius);
		padding: var(--ui-spacing-md);
	}
	ui-alert[theme='default'] {
		color: var(--ui-color-default-light);
		background-color: var(--ui-color-default-midtone);
	}
	ui-alert[theme='info'] {
		color: var(--ui-color-info-dark);
		background-color: var(--ui-color-info-light);
	}
	ui-alert[theme='warning'] {
		color: var(--ui-color-warning-dark);
		background-color: var(--ui-color-warning-light);
	}
	ui-alert[theme='success'] {
		color: var(--ui-color-success-dark);
		background-color: var(--ui-color-success-light);
	}
	ui-alert[theme='error'] {
		color: var(--ui-color-error-dark);
		background-color: var(--ui-color-error-light);
	}
	ui-alert[theme='brand'] {
		color: var(--ui-color-brand-dark);
		background-color: var(--ui-color-brand-light);
	}
</style>
