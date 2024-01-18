<script>
	import './style.css';

	let _class = '';
	export { _class as class };

	export let type = 'accent';
	export let variant = 'open-circle';
	export let size = 'md';
</script>

<ui-spinner class={`lib-ui ${_class}`} {type} {variant} {size}></ui-spinner>

<style>
	ui-spinner {
		display: inline-block;
		box-sizing: border-box;
	}

	/* Types
  ------------------- */
	ui-spinner[type='accent'] {
		border-color: var(--ui-color-accent-foreground);
	}

	ui-spinner[type='info'] {
		border-color: var(--ui-color-info-foreground);
	}

	ui-spinner[type='warning'] {
		border-color: var(--ui-color-warning-foreground);
	}

	ui-spinner[type='success'] {
		border-color: var(--ui-color-warning-foreground);
	}

	ui-spinner[type='error'] {
		border-color: var(--ui-color-warning-foreground);
	}

	/* Sizes
  ------------------- */
	ui-spinner[size='xs'] {
		width: 1rem;
	}
	ui-spinner[size='sm'] {
		width: 1.5rem;
	}
	ui-spinner[size='md'] {
		width: 2rem;
	}
	ui-spinner[size='lg'] {
		width: 2.5rem;
	}
	ui-spinner[size='xl'] {
		width: 3rem;
	}

	/* Variants 
  ------------------- */
	ui-spinner[variant='open-circle'] {
		aspect-ratio: 1;
		border-width: 5px;
		border-style: solid;
		border-bottom-color: transparent;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
