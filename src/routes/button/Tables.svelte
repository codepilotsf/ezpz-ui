<!-- Properties Table -->
<h3>Button Properties</h3>
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
      <td><code>scheme</code></td>
      <td>String: 'neutral', 'info', 'success', 'warning', 'danger'</td>
      <td>'brand'</td>
      <td>Color scheme to use as button color with white text</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>String: 'xs', 'sm', 'md', 'lg', or 'xl'</td>
      <td>'md'</td>
      <td>Size of button</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>If present, <code>a</code> (anchor tag) is used to style a link as a button</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>Used with <code>href</code> to set the anchor tag's <code>target</code> attribute</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>(todo)</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><code>active</code></td>
      <td>Boolean</td>
      <td>false</td>
      <td>Display as active button (brighter)</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>(todo)</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><code>variant</code></td>
      <td>(todo)</td>
      <td>&nbsp;</td>
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
        <code>disabled</code>, <code>on:click</code>, <code>target="_blank"</code>, etc</td
      >
    </tr>
  </tbody>
</table>

<!-- Named Slots Table -->
<h3>Button Named Slots</h3>
<table class="w-full">
  <thead class="text-left">
    <tr>
      <th>Slot Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>icon</code></td>
      <td>(todo)</td>
    </tr>
    <tr>
      <td><code>iconTrailing</code></td>
      <td>(todo)</td>
    </tr>
  </tbody>
</table>
