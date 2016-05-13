'use strict';

var React = require('react');

var svg = React.DOM.svg;
var path = React.DOM.path;
var circle = React.DOM.circle;

var ROOT_2 = Math.sqrt(2);

function Arrow(props) {
  var landscape = props.direction === 'top' || props.direction === 'bottom';
  var mirror = props.direction === 'left' || props.direction === 'top';

  var borderDiagonal = props.borderWidth * ROOT_2;
  var halfBorderDiagonal = borderDiagonal / 2;

  var secondary = 2 * props.size + 2 * borderDiagonal;
  var primary = props.size + borderDiagonal;

  var primaryStart = mirror ? primary : 0;
  var primaryEnd = mirror ? halfBorderDiagonal : primary - halfBorderDiagonal;

  var secondaryStart = borderDiagonal / 2;
  var secondaryMiddle = secondary / 2;
  var secondaryEnd = secondary - halfBorderDiagonal;

  var pathData = landscape ? [
    'M', secondaryStart, primaryStart,
    'L', secondaryMiddle, primaryEnd,
    'L', secondaryEnd, primaryStart,
  ] : [
    'M', primaryStart, secondaryStart,
    'L', primaryEnd, secondaryMiddle,
    'L', primaryStart, secondaryEnd
  ];

  return (
    svg({
      xmlns: 'http://www.w3.org/svg/2000',
      width: landscape ? secondary : primary,
      height: landscape ? primary : secondary,
    },
      path({
        d: pathData.join(' '),
        fill: props.color,
        stroke: props.borderColor,
        strokeWidth: props.borderWidth,
        strokeLinecap: 'square'
      })
    )
  );
}

Arrow.propTypes = {
  color: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
  direction: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
  borderWidth: React.PropTypes.number,
  borderColor: React.PropTypes.string,
};

Arrow.defaultProps = {
  borderWidth: 0,
  borderColor: 'transparent'
};

module.exports = Arrow;
