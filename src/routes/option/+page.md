<script>
    import { Select, Option, Button } from "$lib/ui";
    import Tables from './Tables.svelte';
    let pet = $state();
</script>

# Option

Option component for use with the `<Select>` component.

### Example

See the `<Select>` component docs for examples of how to use `<Option>`.


---

### Label

Label that will appear for this option in select menu.

```svelte
<Option label="Bananas" />
```

---

### Disabled

Disable this option in the select menu.

```svelte
<Option label="Bananas" disabled />

```

---

### Selected

The prevalue option.

```svelte
<Option label="Bananas" value />

```

---

### Value

The value that will be assigned to this value menu when this option is value.

```svelte
<Option label="Bananas" value />

```

---

<Tables />
