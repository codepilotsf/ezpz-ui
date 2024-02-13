<script>
	import { onMount } from 'svelte'
	import './theme.css'

	let {
		variant = 'bars-circle',
		size = 'md',
		color = 'var(--ui-brand)',
		class: _class = ''
	} = $props()

	const sizes = {
		xs: '16px',
		sm: '26px',
		md: '42px',
		lg: '68px',
		xl: '110px'
	}
</script>

<!-- https://github.com/n3r4zzurr0/svg-spinners -->

<ui-spinner class={`lib-ui ${_class}`} style={`color: ${color}`}>
	{#if variant === 'bars-circle'}
		<svg
			width={sizes[size]}
			height={sizes[size]}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
		>
			<style>
				.spinner_OSmW {
					transform-origin: center;
					animation: spinner_T6mA 0.75s step-end infinite;
				}
				@keyframes spinner_T6mA {
					8.3% {
						transform: rotate(30deg);
					}
					16.6% {
						transform: rotate(60deg);
					}
					25% {
						transform: rotate(90deg);
					}
					33.3% {
						transform: rotate(120deg);
					}
					41.6% {
						transform: rotate(150deg);
					}
					50% {
						transform: rotate(180deg);
					}
					58.3% {
						transform: rotate(210deg);
					}
					66.6% {
						transform: rotate(240deg);
					}
					75% {
						transform: rotate(270deg);
					}
					83.3% {
						transform: rotate(300deg);
					}
					91.6% {
						transform: rotate(330deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			</style><g class="spinner_OSmW"
				><rect x="11" y="1" width="2" height="5" opacity=".14" /><rect
					x="11"
					y="1"
					width="2"
					height="5"
					transform="rotate(30 12 12)"
					opacity=".29"
				/><rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43" /><rect
					x="11"
					y="1"
					width="2"
					height="5"
					transform="rotate(90 12 12)"
					opacity=".57"
				/><rect
					x="11"
					y="1"
					width="2"
					height="5"
					transform="rotate(120 12 12)"
					opacity=".71"
				/><rect
					x="11"
					y="1"
					width="2"
					height="5"
					transform="rotate(150 12 12)"
					opacity=".86"
				/><rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" /></g
			></svg
		>
	{/if}

	{#if variant === 'strip-circle'}
		<svg
			width={sizes[size]}
			height={sizes[size]}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			><style>
				.spinner-strip-circle {
					transform-origin: center;
					animation: spinner_StKS 0.75s infinite linear;
				}
				@keyframes spinner_StKS {
					100% {
						transform: rotate(360deg);
					}
				}
			</style><path
				d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
				opacity=".25"
			/><path
				d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
				class="spinner-strip-circle"
			/></svg
		>
	{/if}

	{#if variant === 'dots-circle'}
		<!-- todo -->
	{/if}

	{#if variant === 'dots-row'}
		<!-- todo -->
	{/if}
</ui-spinner>

<style>
	ui-spinner {
		display: inline-block;
		color: var(--ui-color);
	}
</style>
