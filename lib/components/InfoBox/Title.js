"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Title = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../Typography/styles");

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _InfoBox = require("./InfoBox");

var _objectSpread2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  text: (0, _glamor.css)(_objectSpread({
    margin: '0 0 8px 0',
    borderTop: "1px solid ".concat(_colors.default.text)
  }, _styles.sansSerifMedium16, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifMedium19, {
    margin: '0 0 12px 0'
  })), _defineProperty(_objectSpread2, "color", _colors.default.text), _objectSpread2)))
};

var Title = function Title(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react.default.createElement("p", _extends({}, attributes, _InfoBox.textAttributes, styles.text), children);
};

exports.Title = Title;
Title.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object
};
var _default = Title;
exports.default = _default;