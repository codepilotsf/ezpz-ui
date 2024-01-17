<script>
	import { Alert } from '$lib/ui';
	import { IceCream } from 'lucide-svelte';
	import ResetButton from '$lib/components/ResetButton.svelte';
	import Example from './example.md';

	let isActive = {};
	resetBasic();
	resetWithTitle();
	resetWithCustomIcon();
	resetWithNoIcon();

	function resetBasic() {
		isActive.basic = {
			info: true,
			warning: true,
			success: true,
			error: true
		};
	}

	function resetWithTitle() {
		isActive.withTitle = true;
	}

	function resetWithCustomIcon() {
		isActive.withCustomIcon = true;
	}

	function resetWithNoIcon() {
		isActive.withNoIcon = true;
	}
</script>

<h1>Alert</h1>
<p>Show an alert to users for info, warning, success, or error messages.</p>

<!-- Example -->
<h3>Example Usage</h3>
<Example />

<!-- Basic -->
<h3 class="flex items-center">
	Basic Alert
	{#if !isActive.basic.info || !isActive.basic.warning || !isActive.basic.success || !isActive.basic.error}
		<ResetButton on:click={resetBasic} />
	{/if}
</h3>

<section class="flex flex-col gap-4">
	<Alert type="info" bind:active={isActive.basic.info}>This is just a simple info alert.</Alert>
	<Alert type="warning" bind:active={isActive.basic.warning}
		>Warning! This is alert is slightly scary.</Alert
	>
	<Alert type="success" bind:active={isActive.basic.success}
		>You have been alerted successfully.</Alert
	>
	<Alert type="error" bind:active={isActive.basic.error}
		>Error: This alert means something bad happened.</Alert
	>
</section>

<!-- With No Icon -->
<h3 class="flex items-center">
	<span>Alert With No Icon</span>
	{#if !isActive.withNoIcon}
		<ResetButton on:click={resetWithNoIcon} />
	{/if}
</h3>
<section class="flex flex-col gap-4">
	<Alert type="success" icon={false} bind:active={isActive.withNoIcon}
		>Successfully alerted with no icon.</Alert
	>
</section>

<!-- Alert With Title Slot -->
<h3 class="flex items-center">
	<span>Alert With <code>title</code> Slot</span>
	{#if !isActive.withTitle}
		<ResetButton on:click={resetWithTitle} />
	{/if}
</h3>

<section class="flex flex-col gap-4">
	<Alert type="warning" bind:active={isActive.withTitle}>
		<div slot="title">Watch out!</div>
		I have a bad feeling about this.
	</Alert>
</section>

<!-- Alert With Custom Icon Slot -->
<h3 class="flex items-center">
	<span>Alert With Custom <code>icon</code> Slot</span>
	{#if !isActive.withCustomIcon}
		<ResetButton on:click={resetWithCustomIcon} />
	{/if}
</h3>
<section class="flex flex-col gap-4">
	<Alert type="info" bind:active={isActive.withCustomIcon}>
		<div slot="icon"><IceCream size={26} /></div>
		Ice cream is delicious.
	</Alert>
</section>

<!-- Properties Table -->
<section>
	<h3>Alert Properties</h3>
	<table class="w-full">
		<thead class="text-left">
			<tr>
				<th>Prop</th>
				<th>Type</th>
				<th>Default</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>active</code></td>
				<td>Boolean</td>
				<td><code>true</code></td>
				<td class="description"
					>Use with <code>bind:active</code> two-way binding so that the parent template can trigger
					an alert and the Alert's close button can also close it</td
				>
			</tr>
			<tr>
				<td><code>type</code></td>
				<td>String: 'info', 'warning', 'success', or 'error'</td>
				<td>'info'</td>
				<td class="description">Sets the type of alert to be displayed</td>
			</tr>
			<tr>
				<td><code>icon</code></td>
				<td>Boolean</td>
				<td><code>true</code></td>
				<td class="description">Sets whether an icon is displayed</td>
			</tr>
		</tbody>
	</table>
</section>

<!-- Named Slots Table -->
<section>
	<h3>Alert Named Slots</h3>
	<table class="w-full">
		<thead class="text-left">
			<tr>
				<th>Slot Name</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>title</code></td>
				<td class="description">Content to be used as a title</td>
			</tr>
			<tr>
				<td><code>icon</code></td>
				<td class="description">An icon component to replace the default icon </td>
			</tr>
		</tbody>
	</table>
</section>
