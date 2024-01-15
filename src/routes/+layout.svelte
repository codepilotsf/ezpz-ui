<script>
	import '@fontsource-variable/open-sans';
	import '../app.pcss';
	import { Rabbit } from 'lucide-svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>

<svelte:head>
	<title>EZPZ UI</title>
</svelte:head>

<page-wrapper class="flex h-full flex-col">
	<!-- Header -->
	<header
		class="flex h-20 items-center border-b border-b-slate-200 bg-white px-2 text-sky-600 shadow"
	>
		<a href="/" class="flex items-end gap-1 text-2xl font-semibold">
			<Rabbit size={36} strokeWidth={2.3} />
			<span>EZPZ<span class="font-light">UI</span></span>
		</a>
	</header>

	<scrollable-wrapper class="flex h-full w-full">
		<!-- Menu -->
		<scrollable-menu class="block h-full w-56 bg-slate-100">
			<Menu />
		</scrollable-menu>

		<!-- Content -->
		<scrollable-content class="block h-full flex-1 bg-white p-6">
			<slot />
		</scrollable-content>
	</scrollable-wrapper>
</page-wrapper>
