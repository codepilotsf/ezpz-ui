<script>
  import { page } from '$app/stores'
  export let href
  export let label
  export let disabled = false

  $: isActive = $page.url.pathname === href
  let isActive = false
</script>

{#if disabled}
  <span
    class="block cursor-not-allowed p-3 text-sm font-semibold text-sky-200"
    class:rounded={isActive}
    class:bg-sky-200={isActive}
    >{label}
  </span>
{:else}
  <a
    class="duration-400 block p-3 text-sm font-semibold text-sky-800 transition ease-in-out hover:rounded"
    class:hover:bg-sky-200={!isActive}
    class:rounded={isActive}
    class:bg-sky-200={isActive}
    {href}
  >
    {label}
  </a>
{/if}
