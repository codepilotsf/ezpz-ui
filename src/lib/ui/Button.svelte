<script>
	import './style.css';

	export let type = 'submit';
	export let href = false;
	export let disabled = false;
	export let loading = false;
	export let size = 'full';

	let _class = '';
	export { _class as class };
</script>

<button class={`lib-ui ${_class}`}>
	<slot />
</button>

<style>
	button {
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
