"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = require("../Typography");

var _d3Color = require("d3-color");

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("./mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CreditLink = function CreditLink(_ref) {
  var children = _ref.children,
      color = _ref.color,
      collapsedColor = _ref.collapsedColor,
      props = _objectWithoutProperties(_ref, ["children", "color", "collapsedColor"]);

  var labColor = (0, _d3Color.lab)(color);
  var labCollapsedColor = collapsedColor && (0, _d3Color.lab)(collapsedColor);
  var baseColorStyle = {
    color: color,
    ':hover': {
      color: labColor.b > 0.5 ? labColor.darker(0.6) : labColor.brighter(0.6)
    }
  };
  var colorStyle = labCollapsedColor ? _defineProperty({
    color: collapsedColor,
    ':hover': {
      color: labCollapsedColor.b > 0.5 ? labCollapsedColor.darker(0.6) : labCollapsedColor.brighter(0.6)
    }
  }, _mediaQueries.tUp, _objectSpread({}, baseColorStyle)) : baseColorStyle;
  var style = (0, _glamor.css)(_objectSpread({}, colorStyle, {
    cursor: 'pointer'
  }));
  return _react.default.createElement(_Typography.Editorial.A, _extends({}, props, style), children);
};

CreditLink.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string,
  collapsedColor: _propTypes.default.string
};
CreditLink.defaultProps = {
  color: _colors.default.primary
};
var _default = CreditLink;
exports.default = _default;