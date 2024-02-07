<script>
    import { Select, Button } from "$lib/ui";
    import Tables from './Tables.svelte';
    let pet = '';
    let pets = [
        { value: 'dog', label: 'Dog' },
        { value: 'hamster', label: 'Hamster', selected: true },
        { value: 'parrot', label: 'Parrot' }
    ]
</script>

# Select

Select components are used to select options from a list of options

---

### Example

Select option from the list of options

```svelte
<script>
    import { Select } from "$lib/ui";
    let pet = '';
    let pets = [
        { value: 'dog', label: 'Dog' },
        { value: 'hamster', label: 'Hamster' },
        { value: 'parrot', label: 'Parrot' }
    ]
</script>

<Select
    options={pets}
    name="pets"
    label="Select Pets"
    placeholder="Please select pets"
    bind:value={pet}  
/>

```
<Select
    options={pets}
    name="pets"
    label="Select Pets"
    placeholder="Please select pets"
    bind:value={pet}  
/>

---

### Options

A mandatory `oprions` prop lets you define the list of options to be selected.

```svelte
let pets = [
    { value: 'dog', label: 'Dog' },
    { value: 'hamster', label: 'Hamster' },
    { value: 'parrot', label: 'Parrot' }
]

<Select options={pets} />
```
<Select options={pets} />

---

### Label

A `label` prop let's you define a simple String to be used as the input label.

```svelte
<Select
    options={pets}
    label="Select Pets"
/>
```
<Select
    options={pets}
    label="Select Pets"
/>

---
### PlaceHolder

A `placeholder` prop let's you define a simple String to be used as a simple descriptor for the selected value.

```svelte
<Select
    options={pets}
    placeholder="Please select Pets"
/>
```
<Select
    options={pets}
    placeholder="Please select Pets"
/>

---

### Multiple

A `multiple` prop allows you to select multiple options

```svelte
<Select
    options={pets}
    multiple
/>
```

<Select
    options={pets}
    multiple
/>

---

### Disabled

Default is true but can also be assigned a Boolean value like `disabled={pets.isExist}`.
`
```svelte
<Select
    options={pets}
    disabled
/>
```
<Select
    options={pets}
    disabled
/>

---

### Required

A `required` prop allows you to check if the value is selected

```svelte
<Select
    options={pets}
    required
/>
```
<form on:submit|preventDefault={() => console.log("Selected")} class="space-y-4">
    <Select
        options={pets}
        required
    />
    <Button size="sm" type="submit">Submit</Button>
</form>

---
### Note

A `note` prop let's you define a simple String which is displayed below the field.

```svelte
<Select
    options={pets}
    note="This is a note" 
/>
```
<Select
    options={pets}
    note="This is a note" 
/>

---

### Error

A `error` prop let's you define a simple Error String which will be displayed below the field.

```svelte
<Select
    options={pets}
    error="Selected Option is False" 
/>
```
<Select
    options={pets}
    error="Selected Option is False"
/>

---

<Tables />
