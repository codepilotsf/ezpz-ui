<script>
	import { afterNavigate } from '$app/navigation';
	import '@fontsource-variable/open-sans';
	import '../style/app.pcss';
	import '../style/code.css';
	import { FolderOpenDot, DownloadCloud } from 'lucide-svelte';
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';
	import MenuItem from '$lib/components/MenuItem.svelte';

	let contentEl;

	afterNavigate(() => {
		contentEl.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>LIB/UI</title>
</svelte:head>

<page-wrapper class="flex h-full flex-col">
	<!-- Header -->
	<header
		class="flex h-20 items-center justify-between border-b border-b-slate-200 bg-white px-3 text-sky-600 shadow"
	>
		<!-- Logo -->
		<a href="/" class="flex items-end gap-1 text-2xl font-semibold hover:no-underline">
			<FolderOpenDot size={34} strokeWidth={2.3} />
			<span>LIB<span class="mx-1">/</span><span class="font-light">UI</span></span>
		</a>
		<div class="flex items-center">
			<!-- Download Link -->
			<a class="p-2" href="libui.codepilot.com/latest.zip" target="_blank"
				><DownloadCloud size={24} strokeWidth={3} /></a
			>
			<!-- Github Link -->
			<a class="p-2" href="https://github.com/codepilotsf/lib-ui" target="_blank"><GitHubIcon /></a>
		</div>
	</header>

	<scrollable-wrapper class="flex w-full flex-1 overflow-hidden">
		<!-- Menu -->
		<menu class="block h-full min-w-48 overflow-y-auto bg-sky-50 px-2 pt-2">
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
		</menu>

		<!-- Content -->
		<scrollable-content
			bind:this={contentEl}
			class="block h-full flex-1 overflow-y-auto bg-white p-10"
		>
			<content-container class="block max-w-[60rem] pb-20">
				<slot />
			</content-container>
		</scrollable-content>
	</scrollable-wrapper>
</page-wrapper>
