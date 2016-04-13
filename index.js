'use strict';

var React = require('react');

var svg = React.DOM.svg;
var path = React.DOM.path;

var ROOT_2 = Math.sqrt(2);

function Arrow(props) {
  var borderDiagonal = props.borderWidth * ROOT_2;

  var viewBox = [
    borderDiagonal / -2,
    0,
    2 * props.size + borderDiagonal,
    props.size + borderDiagonal / 2
  ];

  var pathData = [
    'M', 0, 0,
    'L', props.size, props.size,
    'L', 2 * props.size, 0
  ];

  return (
    svg({
      xmlns: 'http://www.w3.org/svg/2000',
      viewBox: viewBox.join(' '),
      width: 2 * props.size + 2 * borderDiagonal,
      height: props.size + borderDiagonal
    }, path({
      d: pathData.join(' '),
      fill: props.color,
      stroke: props.borderColor,
      strokeWidth: props.borderWidth,
      strokeLinecap: 'square'
    }))
  );
}

Arrow.propTypes = {
  borderWidth: React.PropTypes.number,
  borderColor: React.PropTypes.string,
  color: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired
};

module.exports = Arrow;
