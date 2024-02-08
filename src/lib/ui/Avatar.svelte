<script>
	import './theme.css'

	let {
		src = '',
		initials = '',
		name = '',
		size = 'md',
		color = '',
		background = '',
		class: _class = '',
		...restProps
	} = $props()

	const sizes = {
		xs: '32px',
		sm: '52px',
		md: '84px',
		lg: '136px',
		xl: '220px'
	}

	const scheme = 'neutral'

	// Format initials or get them from name
	if (initials) {
		initials = initials.toUpperCase().slice(0, 2)
	} else if (name) {
		initials = name
			.split(' ')
			.map((word) => word[0].toUpperCase())
			.slice(0, 2)
			.join('')
	}

	function setCssVars(el) {
		el.style.setProperty('--ui-color', color || `var(--ui-${scheme}-dark)`)
		el.style.setProperty('--ui-background', background || `var(--ui-${scheme}-light)`)
		el.style.setProperty('--ui-avatar-size', sizes[size])
	}
</script>

<ui-avatar use:setCssVars class={['lib-ui', _class].join(' ')} {...restProps}>
	{#if src}
		<img {src} alt={name || initials || 'Avatar'} />
	{:else if initials}
		<span>{initials}</span>
	{/if}
	<slot />
</ui-avatar>

<style>
	ui-avatar {
		display: inline-flex;
		align-items: center;
		height: auto;
		width: var(--ui-avatar-size);
		justify-content: center;
		border-radius: 50%;
		font-weight: 600;
		font-size: calc(var(--ui-avatar-size) / 2.2);
		overflow: hidden;
		aspect-ratio: 1;
		background: var(--ui-background);
		color: var(--ui-color);
	}

	ui-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
