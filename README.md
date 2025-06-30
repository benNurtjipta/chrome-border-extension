# Element Border Toggle Chrome Extension

A simple Chrome extension that adds a red 1px solid border to all elements on a webpage with a keyboard shortcut toggle.

## Features

- Toggle red borders on all elements with `Ctrl+Shift+B` (Windows/Linux) or `Ctrl+B` (Mac)
- Works on all websites
- Borders are removed when toggled off
- Visual debugging tool for web development

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select this extension folder
4. The extension is now installed and ready to use

## Usage

1. Navigate to any webpage
2. Press `Ctrl+Shift+B` (Windows/Linux) or `Ctrl+B` (Mac) to toggle borders
3. All elements will show a red 1px solid border
4. Press the shortcut again to remove the borders

## Files

- `manifest.json`: Extension configuration
- `content.js`: Main script that handles border toggling
- `background.js`: Handles keyboard shortcuts
- `icon.svg`: Source SVG icon (red circle outline)
- `icon16.png`, `icon32.png`, `icon48.png`, `icon128.png`: Extension icons in various sizes
- `README.md`: This file

## Customization

To change the border style, edit the `style.textContent` line in `content.js`:

```javascript
style.textContent = '* { border: 1px red solid !important; }';
```

You can modify:
- Border width: `1px` → `2px`, `3px`, etc.
- Border color: `red` → `blue`, `green`, `#ff0000`, etc.
- Border style: `solid` → `dashed`, `dotted`, etc.
