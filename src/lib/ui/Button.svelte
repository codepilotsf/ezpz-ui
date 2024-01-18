<script>
	import './style.css';

	export let type = 'submit';
	export let href = false;
	export let disabled = false;
	export let loading = false;
	export let size = 'full';
	export let htmlType = null;

	let _class = '';
	export { _class as class };
</script>

{#if href}
	<a class={`lib-ui ${_class}`} {href} {type} {loading} {size}>
		<slot />
	</a>
{:else}
	<button class={`lib-ui ${_class}`} {type} {disabled} {loading} {size} {htmlType}>
		<slot />
	</button>
{/if}

<style>
	button,
	a {
		width: 100%;
		border-radius: var(--ui-border-radius);
		padding: var(--ui-spacing-md);
		font-weight: 600;
		/* Colors are inversed for button */
		background-color: var(--ui-color-accent-foreground);
		color: var(--ui-color-accent-background);
	}
	button:hover {
		background-color: var(--ui-color-accent-hover-foreground);
	}
</style>
