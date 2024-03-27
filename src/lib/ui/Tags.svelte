<script>
	import { X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { Label, Note } from '$lib/ui';

	let {
		value,
		color,
		label = false,
		error = '',
		note = '',
		name = '',
		id = name,
		placeholder = 'Enter a tag name'
	} = $props();

	function addTag(e) {
		if (e.key === 'Enter') {
			value = [...value, e.target.value];
			e.target.value = '';
		}
	}

	function deleteTag(e) {
		value = value.filter((tag) => tag !== e);
	}
</script>

<!-- Tag input -->
<ui-tag-list class="lib-ui">
	<Label forId={id} {label} isError={Boolean(error)}></Label>

	<input
		{placeholder}
		class="w-full rounded-sm border-[1px] border-solid p-3"
		on:keydown={addTag}
	/>

	<!-- Tags display -->
	<div class="mt-2 flex flex-wrap gap-1" class:hidden={!value.length}>
		{#each value as tag}
			<div class="flex items-center px-2 {color} text-nowrap rounded-sm text-xs" transition:slide>
				{tag}
				<button on:click={() => deleteTag(tag)} class="-ml-1 -mr-2 p-2">
					<X size="10" />
				</button>
			</div>
		{/each}
	</div>

	{#if error || note}
		<Note isError={Boolean(error)}>{error || note}</Note>
	{/if}
</ui-tag-list>

<style>
	.lib-ui {
		display: block;
		margin-top: var(--ui-form-item-margin-top);
		flex: 1;
	}

	input {
		outline: none;
		width: 100%;
		font-size: var(--ui-form-item-font-size);
		color: var(--ui-dark);
		border: var(--ui-border-width) solid var(--ui-border-color);
		border-radius: var(--ui-border-radius);
		padding: var(--ui-form-item-padding);
	}

	input:focus {
		outline: 2px solid var(--ui-brand);
		box-shadow: 0 0 2px 1px var(--brand);
	}

	input.error {
		outline: var(--ui-border-width) solid var(--ui-danger-dark);
		border: var(--ui-border-width) solid var(--ui-danger-dark);
		box-shadow: 0 0 1px 1px var(--ui-danger-dark);
		color: var(--ui-danger-dark);
	}

	input:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		background: var(--ui-light);
	}

	input::placeholder {
		color: --ui-form-item-placeholder-color;
	}
</style>
