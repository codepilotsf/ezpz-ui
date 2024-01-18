<script>
	import { slide } from 'svelte/transition';
	import { X, BadgeInfo, AlertTriangle, CheckCheck, AlertCircle } from 'lucide-svelte';

	import './style.css';

	export let active = true;
	export let icon = true;
	export let type = 'info';

	let _class = '';
	export { _class as class };
</script>

{#if active}
	<ui-alert
		class={`lib-ui ${_class}`}
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
		{type}
	>
		{#if icon}
			<div>
				{#if $$slots.icon}
					<!-- Custom Icon -->
					<slot name="icon" />
				{:else if type === 'info'}
					<!-- Default Info Icon -->
					<BadgeInfo size={24} />
				{:else if type === 'warning'}
					<!-- Default Warning Icon -->
					<AlertTriangle size={24} />
				{:else if type === 'success'}
					<!-- Default Success Icon -->
					<CheckCheck size={24} />
				{:else if type === 'error'}
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
	ui-alert[type='info'] {
		color: var(--ui-color-info-text);
		background-color: var(--ui-color-info-background);
	}
	ui-alert[type='warning'] {
		color: var(--ui-color-alert-text);
		background-color: var(--ui-color-warning-background);
	}
	ui-alert[type='success'] {
		color: var(--ui-color-success-text);
		background-color: var(--ui-color-success-background);
	}
	ui-alert[type='error'] {
		color: var(--ui-color-error-text);
		background-color: var(--ui-color-error-background);
	}
</style>
