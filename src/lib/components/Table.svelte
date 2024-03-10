<script>
  let { name, type } = $props()
  const typeStrings = {
    props: 'Properties',
    slots: 'Slots',
  }
</script>

<h3>{name} {typeStrings[type]}</h3>
<table class="w-full">
  <thead class="text-left">
    <tr>
      {#if type === 'props'}
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      {:else if type === 'slots'}
        <th>Slot Name</th>
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
