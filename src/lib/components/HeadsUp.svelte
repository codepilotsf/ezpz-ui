<script>
  import { Lightbulb } from 'lucide-svelte'
</script>

<div class="mb-12 mt-10 flex gap-2 rounded bg-yellow-100 p-3">
  <Lightbulb size={28} class="shrink-0" />
  <div>
    <slot />
  </div>
</div>
