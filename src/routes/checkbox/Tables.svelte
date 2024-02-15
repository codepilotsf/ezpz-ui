<!-- Properties Table -->
<h3>Checkbox Properties</h3>
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
      <td><code>label</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>Text label appears trailing the checkmark</td>
    </tr>
    <tr>
      <td><code>leadingLabel</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>Text label appears leading the checkmark</td>
    </tr>
    <tr>
      <td><code>scheme</code></td>
      <td>String: 'neutral', 'info', 'success', 'warning', 'danger'</td>
      <td>&nbsp;</td>
      <td>Scheme defining color used for checked state</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>String</td>
      <td>'brand'</td>
      <td>Color used for checked state</td>
    </tr>
    <tr>
      <td><code>checked</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Normally used with `bind:checked` directive. Not needed within a CheckboxGroup</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>&nbsp;</td>
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
<h3>Checkbox Named Slots</h3>
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
      <td>Content to be used for label after checkbox (supercedes <code>label</code> property)</td>
    </tr>
    <tr>
      <td><code>labelLeading</code></td>
      <td
        >Content to be used for label preceding checkbox (supercedes <code>leadingLabel</code> property)</td
      >
    </tr>
  </tbody>
</table>
