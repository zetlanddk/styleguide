"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../TeaserFront/mediaQueries");

var _styles = require("../Typography/styles");

var _objectSpread2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  more: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular15, (_objectSpread2 = {
    margin: 0,
    minHeight: '15px',
    textAlign: 'center'
  }, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular21)), _defineProperty(_objectSpread2, '& > a', {
    color: _colors.default.text
  }), _defineProperty(_objectSpread2, '& > a:hover', {
    color: _colors.default.lightText
  }), _objectSpread2)))
};

var More = function More(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react.default.createElement("p", _extends({}, styles.more, attributes), children);
};

var _default = More;
exports.default = _default;