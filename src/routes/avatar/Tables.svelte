<!-- Properties Table -->
<h3>Avatar Properties</h3>
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
      <td><code>src</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td
        >URL (either relative or full URL) to the image file to use in avatar. Preferably 1:1 aspect
        ratio. Does not need to be cropped to a circle</td
      >
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>String: 'xs', 'sm', 'md', 'lg', or 'xl'</td>
      <td>'md'</td>
      <td>Sets the the size of the avatar</td>
    </tr>
    <tr>
      <td><code>initials</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td
        >Initials to display if <code>src</code> is falsey. Also used as value of <code>alt</code> attribute</td
      >
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td
        >Initials automatically derived from name to display if <code>src</code> is falsey. Also
        used as value of <code>alt</code> attribute</td
      >
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td>Color used for initials (overrides <code>theme</code> if present)</td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>String</td>
      <td>&nbsp;</td>
      <td
        >Color or CSS background value used for background (overrides <code>theme</code> if present)</td
      >
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
        like <code>on:click</code>, etc</td
      >
    </tr>
  </tbody>
</table>
