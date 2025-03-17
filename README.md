# \<oarg-info-overlay>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i oarg-info-overlay
```

## Usage

Import component

```javascript
import 'oarg-info-overlay/oarg-info-overlay.js';
```

Use component

```html
<oarg-info-overlay horizontalAlign="left" verticalAlign="top">
  <span>Any info message. (this is the overlay content)</span>
</oarg-info-overlay>
```

## Porperties
- **opened**: Set the open or close state of the overlay. 
The mixin offers several properties to customize the the way it shows the overlay.

- **horizontalAlign**: String property to set the horizontal position of the menu. Valid values are "under_left", "under_right", "left", "right" or "center". Default to "under_left".

- **verticalAlign**: String property to set the vertical position of the menu. Valid values are "bottom", "center" or "top". Default to "bottom".

- **moveTop**: Number of pixels to modify the default vertical position of the overlay. Accepts positive (move down) an negative (move up) values. Default 0.

- **moveLeft**: Number of pixels to modify the default horizontal position of the overlay. Accepts positive (move right) an negative (move left) values. Default 0.

## Methods

- **open()**: Use it to open the menu overlay box
- **close()**: Use it to close the menu overlay box
- **toggle()**: Toggles the menu-overlay box

**Important note**: the trigger does not opens the menu by itself. You must call the ```open()``` or ```toggle()``` method to open the menu when you need. The trigger by default is used only for positioning the menu overlay.

For example, you can use the the ```toogle()``` method as a click handler on the trigger.

```html
<span id="trigger" @click=${this.toggle}>This is the trigger</span>
```

## Custom events

- **overlay-opened**: dispatched when the overlay opens.
- **overlay-closed**: dispatched when the overlay closes.

### CSS Custom Properties

You can customize it using CSS Custom Properties.

Custom property | Description | Default
----------------|-------------|---------
--oarg-info-overlay-width | Overlay size | max-content
--oarg-info-overlay-background-color | Overlay background color | beige
--oarg-info-overlay-text-color | Overlay text color | black
--oarg-info-overlay-border | Overlay border | 1px solid #ccc
--oarg-info-overlay-shadow | Overlay shadow | 0 0 10px rgba(0, 0, 0, 0.2)
--oarg-info-overlay-font-style | Overlay font style | normal
--oarg-info-overlay-icon-size | Overlay icon size | 20px
--oarg-info-overlay-icon-color | Overlay icon color | black