'use strict';

var Arrow = require('./');

var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div;

function App() {
  return (
    div({style: {display: 'flex', alignItems: 'center', justifyContent: 'center'}},
      div({style: {background: 'lightgray', display: 'flex'}},
        React.createElement(Arrow, {
          color: 'blue',
          borderWidth: 5,
          borderColor: 'red',
          size: 25
        })
      )
    )
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.body.appendChild(document.createElement('div'))
);
