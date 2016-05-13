# react-svg-arrow
A React component for tooltip and popover arrows

### Usage

```js
const React = require('react');
const Arrow = require('react-svg-arrow');

const App = () => (
  React.createElement(Arrow, {
    size: 25,
    color: 'red',
    direction: 'right',
    borderWidth: 5,
    borderColor: 'blue'
  })
);

```

### Why?

Creating arrows with borders in HTML/CSS is a pain.


`react-svg-arrow` features:
* No psuedo element hacks
* No clipping hacks
* No transform/rotation hacks
* Just a plain SVG element with a single path
