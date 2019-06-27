"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interaction = exports.Editorial = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseSize = _defineProperty({
  fontSize: '38px',
  lineHeight: '43px'
}, _mediaQueries.mUp, {
  fontSize: '58px',
  lineHeight: '60px'
});

var styles = {
  base: (0, _glamor.css)(_defineProperty({
    margin: '0 0 15px 0'
  }, _mediaQueries.mUp, {
    marginBottom: '30px'
  })),
  editorial: (0, _glamor.css)(_objectSpread({}, _styles.serifTitle58)),
  interaction: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium58)),
  small: (0, _glamor.css)(_objectSpread({}, baseSize)),
  large: (0, _glamor.css)(_objectSpread({}, baseSize, _defineProperty({}, _mediaQueries.tUp, {
    fontSize: '125px',
    lineHeight: '137px'
  }))),
  medium: (0, _glamor.css)(_objectSpread({}, baseSize, _defineProperty({}, _mediaQueries.tUp, {
    fontSize: '100px',
    lineHeight: '110px'
  }))),
  default: (0, _glamor.css)(_objectSpread({}, baseSize, _defineProperty({}, _mediaQueries.tUp, {
    fontSize: '80px',
    lineHeight: '90px'
  })))
};

var Editorial = function Editorial(_ref) {
  var children = _ref.children,
      small = _ref.small,
      large = _ref.large,
      medium = _ref.medium;
  var sizeStyle = large && styles.large || medium && styles.medium || small && styles.small || styles.default;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.editorial, sizeStyle), children);
};

exports.Editorial = Editorial;

var Interaction = function Interaction(_ref2) {
  var children = _ref2.children,
      small = _ref2.small,
      large = _ref2.large,
      medium = _ref2.medium;
  var sizeStyle = large && styles.large || medium && styles.medium || small && styles.small || styles.default;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.interaction, sizeStyle), children);
};

exports.Interaction = Interaction;