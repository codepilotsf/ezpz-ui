<script>
  let { name, type } = $props()
  const typeStrings = {
    props: 'Component Props',
    css: 'CSS Custom Properties',
    slots: 'Named Slots',
  }
</script>

<h4>{name} {typeStrings[type]}</h4>
<table class="api mb-12 w-full">
  <thead class="text-left">
    <tr>
      {#if type === 'props'}
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      {:else if type === 'css'}
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      {:else if type === 'slots'}
        <th>Name</th>
        <th>Description</th>
      {/if}
    </tr>
  </thead>
  <tbody>
    {#if type}
      <slot />
    {/if}
  </tbody>
</table>

<style>
  :global(table.api code) {
    white-space: nowrap;
  }
</style>
