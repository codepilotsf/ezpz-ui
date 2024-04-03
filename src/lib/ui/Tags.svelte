<script>
	import { X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { Input, Button } from '$lib/ui';

	let {
		value = $bindable([]),
		color,
		label = '',
		error = '',
		note = '',
		name = '',
		id = name,
		placeholder = 'Enter a tag name'
	} = $props();

	function addTag(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
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
	<Input {label} {placeholder} on:keydown={addTag} />

	<!-- Tags display -->
	<div class="flex flex-wrap gap-1" class:mt-2={value.length}>
		{#each value as tag}
			<ui-tag class="flex items-center text-nowrap rounded-sm text-xs" transition:slide>
				{tag}
				<button type="button" on:click={() => deleteTag(tag)} class="-ml-1 -mr-2 p-2">
					<X size="10" />
				</button>
			</ui-tag>
		{/each}
	</div>
</ui-tag-list>

<style>
	.lib-ui {
		display: block;
		margin-top: var(--ui-form-item-margin-top);
		flex: 1;
	}

	ui-tag {
		background-color: var(--ui-tag-background, var(--ui-light, #e2e8f0));
		color: var(--ui-tag-color, var(--ui-dark, #1e293b));
		padding: var(--ui-tag-padding, 1px 4px);
		height: 1.3rem;
	}
</style>
