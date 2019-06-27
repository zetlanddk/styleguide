"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IMAGE_SIZE = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _Center = require("../Center");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IMAGE_SIZE = 155;
exports.IMAGE_SIZE = IMAGE_SIZE;
var styles = {
  container: (0, _glamor.css)(_defineProperty({
    margin: '40px auto'
  }, _mediaQueries.mUp, {
    margin: '60px auto'
  })),
  containerFloat: (0, _glamor.css)(_defineProperty({
    // Vertical desktop margins are currently handled in Center.
    marginLeft: 'auto',
    marginRight: 'auto'
  }, _mediaQueries.onlyS, {
    margin: '40px auto'
  })),
  figure: (0, _glamor.css)(_defineProperty({
    '& figure': {
      width: IMAGE_SIZE
    }
  }, _mediaQueries.mUp, {
    paddingLeft: 170,
    '& figure': {
      marginLeft: -170,
      marginRight: 15,
      float: 'left'
    }
  })),
  clear: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    clear: 'both'
  }))
};

var getBreakoutSize = function getBreakoutSize(size, hasFigure) {
  if (size === 'float') {
    return hasFigure ? 'float' : 'floatTiny';
  }

  if (size === 'breakout') {
    return 'breakoutLeft';
  }

  return size;
};

var PullQuote = function PullQuote(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      hasFigure = _ref.hasFigure,
      size = _ref.size;
  var textAlign = !hasFigure && size === 'narrow' ? 'center' : 'inherit';
  var containerStyle = size === 'float' ? styles.containerFloat : styles.container;
  return _react.default.createElement(_Center.Breakout, {
    attributes: attributes,
    size: getBreakoutSize(size, hasFigure)
  }, _react.default.createElement("blockquote", _extends({}, containerStyle, hasFigure ? styles.figure : {}, {
    style: {
      textAlign: textAlign
    }
  }), children, _react.default.createElement("div", styles.clear)));
};

PullQuote.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  size: _propTypes.default.oneOf(['narrow', 'float', 'breakout'])
};
var _default = PullQuote;
exports.default = _default;