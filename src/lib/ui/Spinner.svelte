<script>
	import { onMount } from 'svelte';
	import './style.css';
	import { utils } from './utils.js';

	let _class = '';
	export { _class as class };

	export let theme = 'default';
	export let type = 'dots-circle';
	export let size = 'md';
	export let color = '';

	const sizes = {
		xs: '16px',
		sm: '26px',
		md: '42px',
		lg: '68px',
		xl: '110px'
	};

	let parentEl;
	onMount(() => {
		let { newColor } = utils.getColors({ theme, color });
		parentEl.style.setProperty('--color', newColor);
		parentEl.style.setProperty('--size', sizes[size]);
	});
</script>

<ui-spinner bind:this={parentEl} class={`lib-ui ${_class}`} {type} {size}>
	{#if type === 'dots-circle'}
		<div class="dots-circle-part1 dots-circle-part"></div>
		<div class="dots-circle-part2 dots-circle-part"></div>
		<div class="dots-circle-part3 dots-circle-part"></div>
		<div class="dots-circle-part4 dots-circle-part"></div>
		<div class="dots-circle-part5 dots-circle-part"></div>
		<div class="dots-circle-part6 dots-circle-part"></div>
		<div class="dots-circle-part7 dots-circle-part"></div>
		<div class="dots-circle-part8 dots-circle-part"></div>
		<div class="dots-circle-part9 dots-circle-part"></div>
		<div class="dots-circle-part10 dots-circle-part"></div>
		<div class="dots-circle-part11 dots-circle-part"></div>
		<div class="dots-circle-part12 dots-circle-part"></div>
	{/if}
	{#if type === 'dots-row'}
		<div class="bounce1"></div>
		<div class="bounce2"></div>
		<div class="bounce3"></div>
	{/if}
</ui-spinner>

<style>
	ui-spinner {
		display: inline-block;
	}

	/* Dots Circle 
  ------------------------------------*/
	ui-spinner[type='dots-circle'] {
		display: inline-block;
		position: relative;
		width: var(--size);
		height: var(--size);
	}

	ui-spinner[type='dots-circle'] .dots-circle-part {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	ui-spinner[type='dots-circle'] .dots-circle-part:before {
		content: '';
		display: block;
		margin: 0 auto;
		width: 15%;
		height: 15%;
		background-color: var(--color);
		border-radius: 100%;
		-webkit-animation: dots-circle-partFadeDelay 1.2s infinite ease-in-out both;
		animation: dots-circle-partFadeDelay 1.2s infinite ease-in-out both;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part2 {
		-webkit-transform: rotate(30deg);
		-ms-transform: rotate(30deg);
		transform: rotate(30deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part3 {
		-webkit-transform: rotate(60deg);
		-ms-transform: rotate(60deg);
		transform: rotate(60deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part4 {
		-webkit-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		transform: rotate(90deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part5 {
		-webkit-transform: rotate(120deg);
		-ms-transform: rotate(120deg);
		transform: rotate(120deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part6 {
		-webkit-transform: rotate(150deg);
		-ms-transform: rotate(150deg);
		transform: rotate(150deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part7 {
		-webkit-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part8 {
		-webkit-transform: rotate(210deg);
		-ms-transform: rotate(210deg);
		transform: rotate(210deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part9 {
		-webkit-transform: rotate(240deg);
		-ms-transform: rotate(240deg);
		transform: rotate(240deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part10 {
		-webkit-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		transform: rotate(270deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part11 {
		-webkit-transform: rotate(300deg);
		-ms-transform: rotate(300deg);
		transform: rotate(300deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part12 {
		-webkit-transform: rotate(330deg);
		-ms-transform: rotate(330deg);
		transform: rotate(330deg);
	}
	ui-spinner[type='dots-circle'] .dots-circle-part2:before {
		-webkit-animation-delay: -1.1s;
		animation-delay: -1.1s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part3:before {
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part4:before {
		-webkit-animation-delay: -0.9s;
		animation-delay: -0.9s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part5:before {
		-webkit-animation-delay: -0.8s;
		animation-delay: -0.8s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part6:before {
		-webkit-animation-delay: -0.7s;
		animation-delay: -0.7s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part7:before {
		-webkit-animation-delay: -0.6s;
		animation-delay: -0.6s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part8:before {
		-webkit-animation-delay: -0.5s;
		animation-delay: -0.5s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part9:before {
		-webkit-animation-delay: -0.4s;
		animation-delay: -0.4s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part10:before {
		-webkit-animation-delay: -0.3s;
		animation-delay: -0.3s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part11:before {
		-webkit-animation-delay: -0.2s;
		animation-delay: -0.2s;
	}
	ui-spinner[type='dots-circle'] .dots-circle-part12:before {
		-webkit-animation-delay: -0.1s;
		animation-delay: -0.1s;
	}

	@-webkit-keyframes dots-circle-partFadeDelay {
		0%,
		39%,
		100% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
	}

	@keyframes dots-circle-partFadeDelay {
		0%,
		39%,
		100% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
	}

	/* Dots Row 
  ------------------------------------*/
	ui-spinner[type='dots-row'] {
		width: calc(1.5 * var(--size));
		height: calc(1.5 * var(--size));
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ui-spinner[type='dots-row'] > div {
		width: calc(0.35 * var(--size));
		height: calc(0.35 * var(--size));
		background-color: var(--color);
		border-radius: 100%;
		display: inline-block;
		-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
		animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	}

	ui-spinner[type='dots-row'] .bounce1 {
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}

	ui-spinner[type='dots-row'] .bounce2 {
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}

	@-webkit-keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
		}
	}

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
</style>
