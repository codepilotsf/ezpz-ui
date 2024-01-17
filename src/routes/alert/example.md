```html
<script>
  import { Alert } from '$lib/ui';
  let isAlertVisible = false;
</script>

<Alert type="success" bind:active={isAlertVisible}>
  Your profile has been updated.
</Alert>
```