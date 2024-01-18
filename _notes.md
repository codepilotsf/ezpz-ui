New plan for themes, colors, variants, etc.

You can pass a `theme` as one of the following:
'default', 'accent', 'info', 'warning', 'success, 'error'

Alternatively, `color` can be passed as an arbitrary color name or hex value to set the foreground color and `bg-color`
can also be passed for those components that have a background color.

Trying to pass both a `theme` and `color` or `bg-color` will throw an error.

These makes `type` now available to be used for other purposes like `type="button"` or `type="dot-row"`.

The `variant` prop is also now available should we need yet another prop like that.