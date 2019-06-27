"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _fonts = require("../../theme/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var buttonStyle = (0, _glamor.css)({
  outline: 'none',
  verticalAlign: 'bottom',
  padding: '10px 20px 10px 20px',
  minWidth: 160,
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: 22,
  height: 60,
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  border: "1px solid ".concat(_colors.default.secondary),
  borderRadius: 0,
  color: _colors.default.secondary,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: _colors.default.primary,
    borderColor: _colors.default.primary,
    color: '#fff'
  },
  ':active': {
    backgroundColor: _colors.default.secondary,
    borderColor: _colors.default.secondary,
    color: '#fff'
  },
  ':disabled, [disabled]': {
    backgroundColor: '#fff',
    color: _colors.default.disabled,
    borderColor: _colors.default.disabled,
    cursor: 'default'
  }
});
var primaryStyle = (0, _glamor.css)({
  backgroundColor: _colors.default.primary,
  borderColor: _colors.default.primary,
  color: '#fff',
  ':hover': {
    backgroundColor: _colors.default.secondary,
    borderColor: _colors.default.secondary
  },
  ':active': {
    backgroundColor: '#000',
    borderColor: '#000',
    color: '#fff'
  }
});
var dimmedStyle = (0, _glamor.css)({
  backgroundColor: '#fff',
  color: _colors.default.disabled,
  borderColor: _colors.default.disabled
});
var blackStyle = (0, _glamor.css)({
  backgroundColor: 'transparent',
  borderColor: '#000',
  color: '#000',
  ':hover': {
    backgroundColor: '#000',
    borderColor: '#000',
    color: '#fff'
  },
  ':active': {
    backgroundColor: '#000',
    borderColor: '#000',
    color: '#fff'
  }
});
var whiteStyle = (0, _glamor.css)({
  backgroundColor: 'transparent',
  borderColor: '#fff',
  color: '#fff',
  ':hover': {
    backgroundColor: '#fff',
    borderColor: '#fff',
    color: '#000'
  },
  ':active': {
    backgroundColor: '#fff',
    borderColor: '#fff',
    color: '#000'
  }
});
var blockStyle = (0, _glamor.css)({
  display: 'block',
  width: '100%'
});
var bigStyle = (0, _glamor.css)({
  fontSize: 22,
  height: 80,
  padding: '10px 30px 10px 30px'
});

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      type = _ref.type,
      children = _ref.children,
      primary = _ref.primary,
      dimmed = _ref.dimmed,
      black = _ref.black,
      white = _ref.white,
      big = _ref.big,
      block = _ref.block,
      style = _ref.style,
      disabled = _ref.disabled,
      sim = _ref.simulate;
  var simulations = sim ? (0, _glamor.simulate)(sim) : {};
  var styles = (0, _glamor.merge)(buttonStyle, primary && primaryStyle, dimmed && dimmedStyle, black && blackStyle, white && whiteStyle, block && blockStyle, big && bigStyle);
  return _react.default.createElement("button", _extends({
    onClick: onClick,
    type: type,
    style: style,
    disabled: disabled
  }, styles, simulations), children);
};

var _default = Button;
exports.default = _default;