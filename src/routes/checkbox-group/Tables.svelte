<!-- Properties Table -->
<h3>CheckboxGroup Properties</h3>
<table class="w-full">
  <thead class="text-left">
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bind:value</code></td>
      <td>Array</td>
      <td>&nbsp;</td>
      <td>Two-way binded array of value items</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>Text label appears before CheckmarkGroup</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>The <code>name</code> property to be inherited by all child Checkbox components</td>
    </tr>
    <tr>
      <td><code>scheme</code></td>
      <td>String: 'neutral', 'warning', 'info', 'success', 'danger'</td>
      <td>&nbsp;</td>
      <td>Scheme defining color used for checked state of all child Checkboxes</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>String</td>
      <td>'brand'</td>
      <td>Color used for checked state of all child Checkboxes</td>
    </tr>
    <tr>
      <td><code>class</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>CSS classes declared in global scope can be applied to the outermost element</td>
    </tr>
    <tr>
      <td><code>...</code></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td
        >Additional props will be passed through to the HTML element enabling support for things
        like
        <code>on:click</code>, etc</td
      >
    </tr>
  </tbody>
</table>

<!-- Named Slots Table -->
<h3>CheckboxGroup Named Slots</h3>
<table class="w-full">
  <thead class="text-left">
    <tr>
      <th>Slot Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code></td>
      <td
        >Content to be used for label before CheckboxGroup (supercedes <code>label</code> property)</td
      >
    </tr>
  </tbody>
</table>
