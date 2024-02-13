<script>
	import { slide } from 'svelte/transition'
	import './style.css'

	// prettier-ignore
	let {
	  active = true,
	  icon = true,
	  color = '',
	  background = '',
	  scheme = 'neutral',
    class: _class = '',
    ...restProps
	} = $props()

	// Include our own icons so we don't need any dependencies
	const xIcon =
		'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'

	const schemeIcons = {
		info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-info"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>',
		warning:
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
		success:
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>',
		danger:
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>'
	}

	// Set CSS custom properties --ui-color and --ui-background to main wrapper element
	function setColors(el) {
		el.style.setProperty('--ui-color', color || `var(--ui-${scheme}-dark)`)
		el.style.setProperty('--ui-background', background || `var(--ui-${scheme}-light)`)
	}
</script>

{#if active}
	<ui-alert
		use:setColors
		class={['lib-ui', _class].join(' ')}
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
		{...restProps}
	>
		{#if icon && icon !== 'false'}
			<div class="ui-icon">
				<!-- Custom or scheme icon -->
				{#if $$slots.icon}
					<slot name="icon" />
				{:else if schemeIcons[scheme]}
					{@html schemeIcons[scheme]}
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
