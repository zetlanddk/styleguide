"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interaction = exports.Editorial = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _styles = require("../Typography/styles");

var _objectSpread2, _objectSpread3, _objectSpread4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var size = {
  s: {
    fontSize: '38px',
    lineHeight: '43px'
  },
  m: {
    fontSize: '60px',
    lineHeight: '70px'
  },
  l: {
    fontSize: '80px',
    lineHeight: '90px'
  },
  xl: {
    fontSize: '100px',
    lineHeight: '110px'
  },
  xxl: {
    fontSize: '125px',
    lineHeight: '135px'
  }
};
var sizes = {
  large: (0, _glamor.css)(_objectSpread({}, size.s, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, size.l)), _defineProperty(_objectSpread2, _mediaQueries.tUp, _objectSpread({}, size.xl)), _defineProperty(_objectSpread2, _mediaQueries.dUp, _objectSpread({}, size.xxl)), _objectSpread2))),
  medium: (0, _glamor.css)(_objectSpread({}, size.s, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _mediaQueries.mUp, _objectSpread({}, size.m)), _defineProperty(_objectSpread3, _mediaQueries.tUp, _objectSpread({}, size.l)), _defineProperty(_objectSpread3, _mediaQueries.dUp, _objectSpread({}, size.xl)), _objectSpread3))),
  default: (0, _glamor.css)(_objectSpread({}, size.s, (_objectSpread4 = {}, _defineProperty(_objectSpread4, _mediaQueries.tUp, _objectSpread({}, size.m)), _defineProperty(_objectSpread4, _mediaQueries.dUp, _objectSpread({}, size.l)), _objectSpread4)))
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
  var sizedStyle = (0, _glamor.css)(styles.editorial, large && sizes.large || medium && sizes.medium || sizes.default);
  return _react.default.createElement("h1", _extends({}, styles.base, sizedStyle), children);
};

exports.Editorial = Editorial;

var Interaction = function Interaction(_ref2) {
  var children = _ref2.children,
      large = _ref2.large,
      medium = _ref2.medium;
  var sizedStyle = (0, _glamor.css)(styles.interaction, large && sizes.large || medium && sizes.medium || sizes.default);
  return _react.default.createElement("h1", _extends({}, styles.base, sizedStyle), children);
};

exports.Interaction = Interaction;