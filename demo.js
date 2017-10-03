'use strict';

var Arrow = require('./');

var React = require('react');
var ReactDOM = require('react-dom');

function App() {
  return (
    React.createElement('div', {style: {display: 'flex', alignItems: 'center', justifyContent: 'center'}},
      React.createElement('div', {style: {background: 'lightgray', display: 'flex'}},
        React.createElement(Arrow, {
          color: 'blue',
          borderWidth: 50,
          borderColor: 'red',
          size: 250,
          direction: 'top'
        })
      )
    )
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.body.appendChild(document.createElement('div'))
);
