"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _d3Color = require("d3-color");

var _mediaQueries = require("./mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var format = (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium16, _defineProperty({
  margin: '0 0 18px 0'
}, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifMedium20, {
  margin: '0 0 28px 0'
}))));

var Format = function Format(_ref) {
  var children = _ref.children,
      color = _ref.color,
      collapsedColor = _ref.collapsedColor;
  var labColor = (0, _d3Color.lab)(color);
  var labCollapsedColor = (0, _d3Color.lab)(collapsedColor || color);
  var mixColorStyle = collapsedColor && (0, _glamor.css)(_defineProperty({
    color: labCollapsedColor.l > 50 ? labCollapsedColor.darker(0.6) : labCollapsedColor.brighter(3.0)
  }, _mediaQueries.tUp, {
    color: labColor.l > 50 ? labColor.darker(2.0) : labColor.brighter(3.0)
  }));
  return _react.default.createElement("p", _extends({}, format, mixColorStyle ? mixColorStyle : undefined, {
    style: !mixColorStyle ? {
      color: color
    } : undefined
  }), children);
};

Format.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string,
  collapsedColor: _propTypes.default.string
};
var _default = Format;
exports.default = _default;