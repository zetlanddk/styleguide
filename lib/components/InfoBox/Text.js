"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = void 0;

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
  text: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular15, (_objectSpread2 = {
    lineHeight: '24px'
  }, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular18)), _defineProperty(_objectSpread2, "color", _colors.default.text), _defineProperty(_objectSpread2, ':nth-of-type(2)', {
    marginTop: 0
  }), _objectSpread2)))
};

var Text = function Text(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react.default.createElement("p", _extends({}, attributes, _InfoBox.textAttributes, styles.text), children);
};

exports.Text = Text;
Text.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object
};
var _default = Text;
exports.default = _default;