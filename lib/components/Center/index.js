"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Breakout = exports.breakoutStyles = exports.BREAKOUT_SIZES = exports.BREAKOUT = exports.MAX_WIDTH_MOBILE = exports.MAX_WIDTH = exports.PADDING = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PADDING = 15;
exports.PADDING = PADDING;
var MAX_WIDTH = 665; // iPhone Plus, for max image sizes

exports.MAX_WIDTH = MAX_WIDTH;
var MAX_WIDTH_MOBILE = 414 - PADDING * 2;
exports.MAX_WIDTH_MOBILE = MAX_WIDTH_MOBILE;
var DEFAULT_MARGIN = 15;
var BREAKOUT = 155 + DEFAULT_MARGIN;
exports.BREAKOUT = BREAKOUT;
var FLOAT_MARGIN = 100;
var NARROW_WIDTH = 495;
var SMALL_WIDTH = 410;
var TINY_WIDTH = 325;
var floatStyle = {
  float: 'left',
  minWidth: BREAKOUT,
  maxWidth: NARROW_WIDTH,
  marginTop: FLOAT_MARGIN / 2,
  marginRight: FLOAT_MARGIN,
  marginBottom: FLOAT_MARGIN / 2,
  marginLeft: -BREAKOUT,
  width: '100%'
};
var breakoutUp = "@media only screen and (min-width: ".concat(MAX_WIDTH + BREAKOUT * 2 + PADDING * 2 + PADDING, "px)");
var styles = {
  center: (0, _glamor.css)({
    maxWidth: MAX_WIDTH + PADDING * 2,
    margin: '0 auto',
    padding: PADDING
  }),
  clear: (0, _glamor.css)({
    clear: 'both'
  })
};
var BREAKOUT_SIZES = {
  narrow: NARROW_WIDTH,
  tiny: TINY_WIDTH,
  breakout: MAX_WIDTH + BREAKOUT * 2,
  breakoutLeft: MAX_WIDTH + BREAKOUT,
  float: NARROW_WIDTH,
  floatSmall: SMALL_WIDTH,
  floatTiny: TINY_WIDTH
};
exports.BREAKOUT_SIZES = BREAKOUT_SIZES;
var breakoutStyles = {
  narrow: (0, _glamor.css)({
    margin: '0 auto',
    maxWidth: NARROW_WIDTH
  }),
  tiny: (0, _glamor.css)({
    margin: '0 auto',
    maxWidth: TINY_WIDTH
  }),
  breakout: (0, _glamor.css)(_defineProperty({}, breakoutUp, {
    marginLeft: -BREAKOUT,
    marginRight: -BREAKOUT,
    width: "calc(100% + ".concat(BREAKOUT * 2, "px)")
  })),
  breakoutLeft: (0, _glamor.css)(_defineProperty({}, breakoutUp, {
    marginLeft: -BREAKOUT,
    width: "calc(100% + ".concat(BREAKOUT, "px)")
  })),
  float: (0, _glamor.css)(_defineProperty({}, breakoutUp, _objectSpread({}, floatStyle))),
  floatSmall: (0, _glamor.css)(_defineProperty({}, breakoutUp, _objectSpread({}, floatStyle, {
    maxWidth: SMALL_WIDTH
  }))),
  floatTiny: (0, _glamor.css)(_defineProperty({}, breakoutUp, _objectSpread({}, floatStyle, {
    maxWidth: TINY_WIDTH
  })))
};
exports.breakoutStyles = breakoutStyles;

var Center = function Center(_ref) {
  var children = _ref.children,
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
      props = _objectWithoutProperties(_ref, ["children", "attributes"]);

  return _react.default.createElement("div", _extends({}, styles.center, attributes, props), children, _react.default.createElement("div", styles.clear));
};

var Breakout = function Breakout(_ref2) {
  var size = _ref2.size,
      children = _ref2.children,
      _ref2$attributes = _ref2.attributes,
      attributes = _ref2$attributes === void 0 ? {} : _ref2$attributes,
      props = _objectWithoutProperties(_ref2, ["size", "children", "attributes"]);

  return _react.default.createElement("div", _extends({}, attributes, props, breakoutStyles[size]), children);
};

exports.Breakout = Breakout;
Breakout.propTypes = {
  size: _propTypes.default.oneOf(Object.keys(breakoutStyles)),
  attributes: _propTypes.default.object
};
var _default = Center;
exports.default = _default;