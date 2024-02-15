<!-- Properties Table -->
<h3>RadioGroup Properties</h3>
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
      <td>String</td>
      <td>&nbsp;</td>
      <td>Two-way binded value of value item</td>
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
      <td>The <code>name</code> property to be inherited by all child Radio components</td>
    </tr>
    <tr>
      <td><code>scheme</code></td>
      <td>String: 'info', 'warning', 'success', 'error'</td>
      <td>'brand'</td>
      <td>Scheme defining color used for checked state of all child Radios</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>Color used for checked state of all child Radios</td>
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
<h3>RadioGroup Named Slots</h3>
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
        >Content to be used for label before RadioGroup (supercedes <code>label</code> property)</td
      >
    </tr>
  </tbody>
</table>
