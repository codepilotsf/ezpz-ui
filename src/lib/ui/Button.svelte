<script>
	import './theme.css'
	import { utils } from './utils.js'
	import { getContext } from 'svelte'

	let {
		type = 'button',
		href = false,
		active = false,
		loading = false,
		scheme = getContext('scheme') || 'neutral',
		color = getContext('color') || '',
		size = getContext('size') || 'md',
		background = '',
		class: _class = '',
		...restProps
	} = $props()

	const sizes = {
		xs: {
			'font-size': 9,
			'x-padding': 6,
			'y-padding': 4
		},
		sm: {
			'font-size': 12,
			'x-padding': 10,
			'y-padding': 5
		},
		md: {
			'font-size': 14,
			'x-padding': 15,
			'y-padding': 10
		},
		lg: {
			'font-size': 18,
			'x-padding': 20,
			'y-padding': 12
		},
		xl: {
			'font-size': 20,
			'x-padding': 24,
			'y-padding': 12
		}
	}

	const style = [
		`font-size: ${sizes[size]['font-size']}px;`,
		`padding: ${sizes[size]['y-padding']}px ${sizes[size]['x-padding']}px;`
	].join(' ')

	function setCssVars(el) {
		el.style.setProperty('--ui-color', color || '#ffffff')
		el.style.setProperty('--ui-background', background || `var(--ui-${scheme}-dark)`)
		utils.setColors(el, { scheme, color, background })
	}

	const isGroup = getContext('isGroup')
</script>

{#if href}
	<a
		use:setCssVars
		class={['lib-ui', _class].join(' ')}
		{href}
		{type}
		{active}
		{loading}
		{size}
		{style}
		{isGroup}
		{...restProps}
	>
		<slot />
	</a>
{:else}
	<button
		use:setCssVars
		class={['lib-ui', _class].join(' ')}
		{type}
		{active}
		{loading}
		{size}
		{style}
		{isGroup}
	>
		<slot />
	</button>
{/if}

<style>
	button,
	a {
		background-color: var(--ui-color);
		transition: all 0.15s ease-in-out;
		border-radius: var(--ui-border-radius);
		font-weight: 600;
		letter-spacing: 1px;
		color: #fff;
		z-index: 1;
	}

	button:not([isGroup]),
	a:not([isGroup]) {
		box-shadow: var(--ui-button-shadow);
	}

	a,
	a:hover {
		color: #fff;
		text-decoration: none;
		text-align: center;
	}

	button:hover,
	button[active='true'],
	a:hover,
	a[active='true'] {
		filter: brightness(1.3);
	}

	button:active,
	a:active {
		filter: brightness(1);
	}

	button[isGroup],
	a[isGroup] {
		border-radius: 0;
	}
</style>
