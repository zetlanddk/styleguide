"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InlineSpinner = exports.Spinner = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var containerStyle = (0, _glamor.css)({
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%'
});

var spin = _glamor.css.keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0.15
  }
});

var barStyle = (0, _glamor.css)({
  display: 'block',
  animation: "".concat(spin, " 1.2s linear infinite"),
  borderRadius: 5,
  backgroundColor: '#999',
  position: 'absolute',
  width: '20%',
  height: '7.8%',
  top: '-3.9%',
  left: '-10%'
});

var Spinner = function Spinner(_ref) {
  var size = _ref.size;
  var bars = [];

  for (var i = 0; i < 12; i++) {
    var style = {};
    style.WebkitAnimationDelay = style.animationDelay = (i - 12) / 10 + 's';
    style.WebkitTransform = style.transform = 'rotate(' + i * 30 + 'deg) translate(146%)';
    bars.push(_react.default.createElement("span", _extends({}, barStyle, {
      style: style,
      key: i
    })));
  }

  return _react.default.createElement("span", _extends({}, containerStyle, {
    style: {
      width: size,
      height: size
    }
  }), bars);
};

exports.Spinner = Spinner;
var inlineBlock = (0, _glamor.css)({
  position: 'relative',
  display: 'inline-block'
});

var InlineSpinner = function InlineSpinner(_ref2) {
  var size = _ref2.size;
  return _react.default.createElement("span", _extends({}, inlineBlock, {
    style: {
      width: size,
      height: size
    }
  }), _react.default.createElement(Spinner, {
    size: size
  }));
};

exports.InlineSpinner = InlineSpinner;
Spinner.defaultProps = InlineSpinner.defaultProps = {
  size: 50
};
var _default = Spinner;
exports.default = _default;