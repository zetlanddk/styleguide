"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interaction = exports.Editorial = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _Typo = require("./Typo");

var _styles = require("../Typography/styles");

var _css, _css4, _css6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Larger headlines should breakout of the parent's maxWidth container slightly
// so use a fraction of the remaining percentage.
var horizontalBreakout = "-".concat((100 - _Typo.MAX_WIDTH_PERCENT) * 0.25, "%");
var breakoutMargin = {
  marginLeft: horizontalBreakout,
  marginRight: horizontalBreakout
};
var serifSizes = {
  large: (0, _glamor.css)((_css = {}, _defineProperty(_css, _mediaQueries.tUp, {
    fontSize: '125px',
    lineHeight: '137px'
  }), _defineProperty(_css, _mediaQueries.dUp, {
    fontSize: '156px',
    lineHeight: '169px'
  }), _css)),
  medium: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, {
    fontSize: '125px',
    lineHeight: '137px'
  })),
  default: (0, _glamor.css)(_defineProperty({
    fontSize: '38px',
    lineHeight: '45px'
  }, _mediaQueries.mUp, _objectSpread({
    fontSize: '100px',
    lineHeight: '110px'
  }, breakoutMargin)))
};
var sansSerifSizes = {
  large: (0, _glamor.css)((_css4 = {}, _defineProperty(_css4, _mediaQueries.tUp, {
    fontSize: '125px',
    lineHeight: '137px'
  }), _defineProperty(_css4, _mediaQueries.dUp, {
    fontSize: '156px',
    lineHeight: '169px'
  }), _css4)),
  medium: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, {
    fontSize: '125px',
    lineHeight: '137px'
  })),
  small: (0, _glamor.css)((_css6 = {
    fontSize: '26px',
    lineHeight: '31px'
  }, _defineProperty(_css6, _mediaQueries.mUp, {
    fontSize: '50px',
    lineHeight: '57px'
  }), _defineProperty(_css6, _mediaQueries.tUp, {
    fontSize: '64px',
    lineHeight: '72px'
  }), _css6)),
  default: (0, _glamor.css)(_defineProperty({
    fontSize: '38px',
    lineHeight: '45px'
  }, _mediaQueries.mUp, _objectSpread({
    fontSize: '100px',
    lineHeight: '110px'
  }, breakoutMargin)))
};
var styles = {
  base: (0, _glamor.css)(_defineProperty({
    margin: '0 0 15px 0'
  }, _mediaQueries.mUp, {
    marginBottom: '30px'
  })),
  editorial: (0, _glamor.css)(_objectSpread({}, _styles.serifTitle20)),
  interaction: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium20))
};

var Editorial = function Editorial(_ref) {
  var children = _ref.children,
      large = _ref.large,
      medium = _ref.medium;
  var sizedStyle = (0, _glamor.css)(styles.editorial, serifSizes.default, large && serifSizes.large || medium && serifSizes.medium || {});
  return _react.default.createElement("h1", _extends({}, styles.base, sizedStyle), children);
};

exports.Editorial = Editorial;

var Interaction = function Interaction(_ref2) {
  var children = _ref2.children,
      large = _ref2.large,
      medium = _ref2.medium,
      small = _ref2.small;
  var sizedStyle = (0, _glamor.css)(styles.interaction, sansSerifSizes.default, large && sansSerifSizes.large || medium && sansSerifSizes.medium || small && sansSerifSizes.small || {});
  return _react.default.createElement("h1", _extends({}, styles.base, sizedStyle), children);
};

exports.Interaction = Interaction;