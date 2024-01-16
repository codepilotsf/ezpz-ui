<script>
	import { page } from '$app/stores';
	export let href;
	export let label;

	$: isActive = $page.url.pathname === href;
	let isActive = false;
</script>

<a
	class="block p-2 text-sm"
	class:rounded={isActive}
	class:bg-sky-600={isActive}
	class:text-white={isActive}
	{href}
>
	{label}
</a>
