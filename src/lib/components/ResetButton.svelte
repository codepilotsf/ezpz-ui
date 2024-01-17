<script>
	import { fade } from 'svelte/transition';
	import { RotateCcw } from 'lucide-svelte';
</script>

<button
	class="ml-3 flex w-fit items-center gap-1 rounded-full border border-slate-500 px-[6px] py-[1px] text-xs"
	in:fade={{ delay: 200, duration: 200 }}
	out:fade={{ duration: 200 }}
	on:click
>
	<RotateCcw size={12} /> Reset
</button>
