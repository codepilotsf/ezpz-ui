<script>
	import { page } from '$app/stores';
	export let href;
	export let label;
	export let disabled = false;

	$: isActive = $page.url.pathname === href;
	let isActive = false;
</script>

{#if disabled}
	<span
		class="block cursor-not-allowed p-3 text-sm text-sky-300"
		class:rounded={isActive}
		class:bg-sky-600={isActive}
		class:!text-white={isActive}
		>{label}
	</span>
{:else}
	<a
		class="duration-400 block p-3 text-sm text-sky-700 transition ease-in-out"
		class:hover:bg-sky-100={!isActive}
		class:rounded={isActive}
		class:bg-sky-600={isActive}
		class:!text-white={isActive}
		{href}
	>
		{label}
	</a>
{/if}
