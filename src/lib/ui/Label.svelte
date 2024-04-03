<!--
Label is imported by form field components such as Input and CheckboxGroup
and is *not* generally used directly. It is broken out into a separate component
so that it can be styled consistently across all form field components while
keeping the code DRY. In the case of CheckboxGroup and RadioGroup, the `legend`
tag is used instead of `label` but styled the same way.
-->

<script>
	// prettier-ignore
	let {
    label = '',
    isLegend = false,
    forId = null,
    isError,
    class: _class = '',
  } = $props()

	// Convert "false" string to boolean
	isError = isError === 'false' ? false : isError;
</script>

{#if isLegend && label !== null}
	<legend class="lib-ui Label {_class}" class:error={isError}>
		{#if !label}
			&nbsp;
		{/if}
		<slot />
	</legend>
{:else if label !== null}
	<slot />
	<label class="lib-ui Label {_class}" for={forId} class:error={isError}>
		{#if !label}
			&nbsp;
		{:else}
			{label}
		{/if}
	</label>
{/if}

<style>
	label,
	legend {
		display: block;
		margin: var(--ui-label-margin, 3px 0);
		font-size: var(--ui-label-font-size, 0.9rem);
		font-weight: var(--ui-label-font-weight, 600);
		font-variation-settings: 'wght' var(--ui-label-font-weight, 600);
		color: inherit;
	}

	label.error,
	legend.error {
		color: var(--ui-error, #b91c1c);
	}
</style>
