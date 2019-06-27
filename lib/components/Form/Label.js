"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LSelect = exports.LInput = exports.LButton = exports.Label = exports.fieldHeight = exports.labelHeight = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderWidth = 1;
var labelHeight = 20; // The height of the area at the top for the label.

exports.labelHeight = labelHeight;
var fieldHeight = 40;
exports.fieldHeight = fieldHeight;
var styles = {
  label: (0, _glamor.css)({
    width: '100%',
    paddingTop: labelHeight,
    position: 'relative',
    display: 'block'
  }),
  labelText: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular21, {
    color: _colors.default.disabled,
    position: 'absolute',
    top: labelHeight,
    transition: 'top 200ms, font-size 200ms'
  })),
  labelTextTop: (0, _glamor.css)({
    top: 5,
    fontSize: 14,
    lineHeight: '15px'
  }),
  labelTextFocused: (0, _glamor.css)({
    color: _colors.default.primary
  }),
  labelTextError: (0, _glamor.css)({
    color: _colors.default.error
  }),
  field: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular21, {
    fontSize: 22,
    color: _colors.default.text,
    width: '100%',
    display: 'block',
    appearance: 'none',
    outline: 'none',
    borderRadius: 0,
    backgroundColor: '#fff',
    border: 'none',
    padding: '0',
    textAlign: 'left',
    cursor: 'pointer',
    height: fieldHeight,
    borderBottom: "solid ".concat(_colors.default.disabled, " ").concat(borderWidth, "px"),
    ':focus': {
      borderColor: _colors.default.primary
    }
  })),
  select: (0, _glamor.css)({
    ':focus + svg': {
      fill: _colors.default.primary
    }
  }),
  selectArrow: (0, _glamor.css)({
    position: 'absolute',
    right: 0,
    top: 28,
    pointerEvents: 'none',
    fill: _colors.default.disabled
  }),
  selectArrowBlack: (0, _glamor.css)({
    fill: '#000'
  }),
  selectArrowWhite: (0, _glamor.css)({
    fill: '#fff'
  }),
  white: (0, _glamor.css)({
    backgroundColor: 'transparent',
    color: '#fff',
    borderColor: '#fff',
    ':focus': {
      borderColor: '#fff'
    }
  }),
  black: (0, _glamor.css)({
    backgroundColor: 'transparent',
    color: '#000',
    borderColor: '#000',
    ':focus': {
      borderColor: '#000'
    }
  })
};

var Label = function Label(_ref) {
  var top = _ref.top,
      focus = _ref.focus,
      error = _ref.error,
      text = _ref.text,
      black = _ref.black,
      white = _ref.white,
      children = _ref.children;
  var labelTextStyle = (0, _glamor.merge)(styles.labelText, top && styles.labelTextTop, focus && styles.labelTextFocused, error && styles.labelTextError, white && styles.white, black && styles.black);
  return _react.default.createElement("label", styles.label, _react.default.createElement("span", labelTextStyle, text), children);
};

exports.Label = Label;

var LButton = function LButton(_ref2) {
  var black = _ref2.black,
      white = _ref2.white,
      props = _objectWithoutProperties(_ref2, ["black", "white"]);

  return _react.default.createElement("button", _extends({}, (0, _glamor.merge)(styles.field, black && styles.black, white && styles.white), props));
};

exports.LButton = LButton;

var LInput = function LInput(_ref3) {
  var black = _ref3.black,
      white = _ref3.white,
      props = _objectWithoutProperties(_ref3, ["black", "white"]);

  return _react.default.createElement("input", _extends({}, (0, _glamor.merge)(styles.field, black && styles.black, white && styles.white), props));
};

exports.LInput = LInput;

var LSelect = function LSelect(_ref4) {
  var black = _ref4.black,
      white = _ref4.white,
      props = _objectWithoutProperties(_ref4, ["black", "white"]);

  return [_react.default.createElement("select", _extends({
    key: "select"
  }, (0, _glamor.merge)(styles.field, styles.select, black && styles.black, white && styles.white), props)), _react.default.createElement("svg", _extends({
    key: "arrow"
  }, (0, _glamor.merge)(styles.selectArrow, black && styles.selectArrowBlack, white && styles.selectArrowWhite), {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24"
  }), _react.default.createElement("path", {
    d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
  }))];
};

exports.LSelect = LSelect;