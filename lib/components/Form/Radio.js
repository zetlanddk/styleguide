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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  label: (0, _glamor.css)({
    fontSize: 16,
    lineHeight: '20px',
    fontFamily: _fonts.fontFamilies.sansSerifRegular,
    cursor: 'pointer'
  }),
  input: (0, _glamor.css)({
    display: 'none'
  }),
  box: (0, _glamor.css)({
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'middle'
  }),
  clear: (0, _glamor.css)({
    clear: 'left'
  })
};

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled;
  return _react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("circle", {
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: "6",
    cx: "12",
    cy: "12",
    r: "9"
  }), checked && _react.default.createElement("circle", {
    fill: disabled ? _colors.default.disabled : _colors.default.primary,
    cx: "12",
    cy: "12",
    r: "6"
  }), _react.default.createElement("circle", {
    fill: "none",
    stroke: checked && !disabled ? _colors.default.primary : disabled ? _colors.default.divider : _colors.default.secondary,
    cx: "12",
    cy: "12",
    r: "11.5"
  }));
};

var _default = function _default(_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      name = _ref2.name,
      value = _ref2.value,
      checked = _ref2.checked,
      disabled = _ref2.disabled,
      onChange = _ref2.onChange;
  return _react.default.createElement("label", _extends({}, styles.label, {
    style: _objectSpread({
      color: disabled ? _colors.default.disabled : _colors.default.text
    }, style)
  }), _react.default.createElement("span", styles.box, _react.default.createElement(Radio, {
    checked: checked,
    disabled: disabled
  })), _react.default.createElement("input", _extends({}, styles.input, {
    name: name,
    type: "radio",
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange
  })), children, _react.default.createElement("span", styles.clear));
};

exports.default = _default;