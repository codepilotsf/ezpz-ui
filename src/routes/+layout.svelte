<script>
	import '@fontsource-variable/open-sans';
	import '../app.pcss';
	import { FolderOpenDot } from 'lucide-svelte';
	import MenuItem from '$lib/components/MenuItem.svelte';
</script>

<svelte:head>
	<title>LIB/UI</title>
</svelte:head>

<page-wrapper class="flex h-full flex-col">
	<!-- Header -->
	<header
		class="flex h-20 items-center border-b border-b-slate-200 bg-white px-3 text-sky-600 shadow"
	>
		<a href="/" class="flex items-end gap-1 text-2xl font-semibold">
			<FolderOpenDot size={36} strokeWidth={2.3} />
			<span>LIB<span class="mx-1">/</span><span class="font-light">UI</span></span>
		</a>
	</header>

	<scrollable-wrapper class="flex w-full flex-1">
		<!-- Menu -->
		<scrollable-menu class="block h-full min-w-48 bg-slate-100 px-3">
			<MenuItem href="/alert" label="Alert" />
			<MenuItem href="/avatar" label="Avatar" />
			<MenuItem href="/button" label="Button" />
			<MenuItem href="/button-group" label="ButtonGroup" />
			<MenuItem href="/checkbox" label="Checkbox" />
			<MenuItem href="/checkbox-group" label="CheckboxGroup" />
			<MenuItem href="/file-picker" label="FilePicker" />
			<MenuItem href="/form-row" label="FormRow" />
			<MenuItem href="/input" label="Input" />
			<MenuItem href="/input-number" label="InputNumber" />
			<MenuItem href="/modal" label="Modal" />
			<MenuItem href="/radio" label="Radio" />
			<MenuItem href="/radio-group" label="RadioGroup" />
			<MenuItem href="/select" label="Select" />
			<MenuItem href="/spinner" label="Spinner" />
			<MenuItem href="/textarea" label="Textarea" />
			<MenuItem href="/toast" label="Toast" />
			<MenuItem href="/toggle" label="Toggle" />
		</scrollable-menu>

		<!-- Content -->
		<scrollable-content class="block h-full flex-1 bg-white p-6">
			<slot />
		</scrollable-content>
	</scrollable-wrapper>
</page-wrapper>
