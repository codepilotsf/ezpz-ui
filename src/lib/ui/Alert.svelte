<script>
  import { fade } from 'svelte/transition'

  let {
    active = true,
    icon = true,
    scheme,
    class: _class = '',
    ...other
  } = $props()
</script>

{#if active}
  <ui-alert
    class="lib-ui alert {_class}"
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
    {scheme}
    {...other}
  >
    {#if icon && icon !== 'false'}
      <div class="ui-icon">
        {#if $$slots.icon}
          <!-- Custom Icon (slot) -->
          <slot name="icon" />
        {:else if scheme === 'info'}
          <!-- Info Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            /><line x1="12" x2="12" y1="16" y2="12" /><line
              x1="12"
              x2="12.01"
              y1="8"
              y2="8"
            /></svg
          >
        {:else if scheme === 'warning'}
          <!-- Warning Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
            /><path d="M12 9v4" /><path d="M12 17h.01" /></svg
          >
        {:else if scheme === 'success'}
          <!-- Success Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg
          >
        {:else if scheme === 'danger'}
          <!-- Danger Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path
              d="m9 9 6 6"
            /></svg
          >
        {/if}
      </div>
    {/if}

    <div>
      <!-- Title -->
      {#if $$slots.title}
        <div class="title">
          <slot name="title" />
        </div>
      {/if}

      <!-- Message (default slot) -->
      {#if $$slots.default}
        <div><slot /></div>
      {/if}
    </div>

    <!-- Close Button -->
    <button on:click={() => (active = false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
      >
    </button>
  </ui-alert>
{/if}

<style>
  /* Instance Styles
  -----------------------------*/
  .lib-ui {
    --ui-this-color: var(--ui-alert-color, var(--ui-dark, #1e293b));
    --ui-this-background: var(--ui-alert-background, var(--ui-light, #e2e8f0));
    --ui-this-padding: var(--ui-alert-padding, 12px);
    --ui-this-gap: var(--ui-alert-gap, 8px);
    --ui-this-border: var(--ui-alert-border, none);
    --ui-this-radius: var(--ui-alert-radius, var(--ui-radius, 3px));
  }

  ui-alert {
    display: flex;
    gap: var(--ui-this-gap);
    border: var(--ui-this-border);
    border-radius: var(--ui-this-radius);
    padding: var(--ui-this-padding);
    color: var(--ui-this-color);
    background-color: var(--ui-this-background);
  }

  [scheme='info'] {
    color: var(--ui-info-dark, #1e40af);
    background-color: var(--ui-info-light, #dbeafe);
  }

  [scheme='warning'] {
    color: var(--ui-warning-dark, #9a3412);
    background-color: var(--ui-warning-light, #fef08a);
  }

  [scheme='success'] {
    color: var(--ui-success-dark, #166534);
    background-color: var(--ui-success-light, #bbf7d0);
  }

  [scheme='danger'] {
    color: var(--ui-danger-dark, #b91c1c);
    background-color: var(--ui-danger-light, #fee2e2);
  }

  .title {
    font-weight: 600;
  }

  button {
    margin-left: auto;
    margin-top: 2px;
    height: fit-content;
    padding: 2px;
  }

  .ui-icon {
    margin-top: -2px;
    padding: 2px;
  }
</style>
