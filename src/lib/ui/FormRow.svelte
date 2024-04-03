<script>
	let { class: _class = '', ...other } = $props();
</script>

<form-row class="lib-ui FormRow {_class}" {...other}>
	<slot />
</form-row>

<style>
	form-row {
		display: flex;
		gap: var(--ui-form-row-gap, 0.5rem);
		width: 100%;
	}
</style>
