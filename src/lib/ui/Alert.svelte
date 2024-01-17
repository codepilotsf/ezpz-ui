<script>
	import { slide } from 'svelte/transition';
	import { X, BadgeInfo, AlertTriangle, CheckCheck, AlertCircle } from 'lucide-svelte';

	import './style.css';

	export let active = true;
	export let type = 'info';
	export let icon = true;
</script>

{#if active}
	<ui-alert
		class="lib-ui"
		class:info={type === 'info'}
		class:warning={type === 'warning'}
		class:success={type === 'success'}
		class:error={type === 'error'}
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
	>
		<div class="flex gap-2">
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
		</div>
	</ui-alert>
{/if}

<style>
	ui-alert {
		border-radius: var(--ui-border-radius);
		padding: var(--ui-spacing-md);
	}
	ui-alert.info {
		color: var(--ui-color-info-text);
		background-color: var(--ui-color-info-background);
	}
	ui-alert.warning {
		color: var(--ui-color-alert-text);
		background-color: var(--ui-color-warning-background);
	}
	ui-alert.success {
		color: var(--ui-color-success-text);
		background-color: var(--ui-color-success-background);
	}
	ui-alert.error {
		color: var(--ui-color-error-text);
		background-color: var(--ui-color-error-background);
	}
</style>
