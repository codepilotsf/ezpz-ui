<script>
	import { setContext } from 'svelte';
	import { superForm } from 'sveltekit-superforms';

	let { method = 'POST', superform, class: _class = '' } = $props();

	let enhance = () => {};

	if (superform) {
		// Set SuperForm context for child form elements
		const sf = superForm(superform);
		setContext('form', sf.form);
		setContext('errors', sf.errors);
		setContext('constraints', sf.constraints);
		enhance = sf.enhance;
	}
</script>

<form class="lib-ui Form {_class}" {method} use:enhance>
	<slot />
</form>
