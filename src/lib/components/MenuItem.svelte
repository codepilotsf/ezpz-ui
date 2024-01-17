<script>
	import { page } from '$app/stores';
	export let href;
	export let label;

	$: isActive = $page.url.pathname === href;
	let isActive = false;
</script>

<a
	class="block p-3 text-sm text-sky-700"
	class:hover:bg-sky-100={!isActive}
	class:rounded={isActive}
	class:bg-sky-600={isActive}
	class:!text-white={isActive}
	{href}
>
	{label}
</a>
