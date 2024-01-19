export const utils = {
  // Returns a style string for a given color and background or null
  getStyle(color, background) {
    if (!color && !background) return null;
    let style = '';
    if (color) style += `color: ${color};`;
    if (background) style += `background: ${background};`;
    return style;
  }
};