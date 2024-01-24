<script>
	import './theme.css';
	import { utils } from './utils.js';
	import { onMount, getContext } from 'svelte';

	export let label = '';
	export let leadingLabel = '';
	export let disabled = null;
	export let checked = null;
	export let value = null;

	export let color = getContext('color') || '';
	export let scheme = getContext('scheme') || 'brand';

	let _class = '';
	export { _class as class };

	let radioEl;
	onMount(() => utils.setColors(radioEl, { scheme, color }));

	const selected = getContext('selected');

	function handleClick() {
		$selected = value;
	}
</script>

<label class={`lib-ui ${_class}`} {disabled}>
	{#if $$slots.leadingLabel}
		<slot name="leadingLabel" />
	{:else if leadingLabel}
		<span>{leadingLabel}</span>
	{/if}

	<input
		type="radio"
		class={`lib-ui ${_class}`}
		bind:this={radioEl}
		on:click={handleClick}
		{disabled}
		{value}
		checked={$selected === value || (!$selected && checked)}
	/>

	{#if $$slots.label}
		<slot name="label" />
	{:else if label}
		<span>{label}</span>
	{/if}
</label>

<style>
	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0;
		font-size: var(--ui-form-label-font-size-small);
		gap: 0.5rem;
		width: fit-content;
		padding: 2px;
	}
	input {
		border: 1px solid var(--ui-midtone-color);
		border-radius: 3px;
		appearance: none;
		width: 18px;
		height: 18px;
		margin: 0;
		vertical-align: top;
		background: #fff no-repeat center center;
		border-radius: 50%;
		transition: all 0.1s ease-in-out;
	}

	input:where(:active:not(:disabled), :focus) {
		outline: none;
	}

	input:disabled,
	label[disabled='true'] {
		opacity: 0.4;
		cursor: not-allowed;
	}
	input:disabled {
		background: var(--ui-midtone-color);
	}

	input:checked {
		border-color: var(--ui-brand-color);
		background-color: var(--ui-brand-color);
		background-position: 50% 50%;
		background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ccircle fill='white' cx='5' cy='5' r='4'/%3E%3C/svg%3E%0A");
	}
</style>
