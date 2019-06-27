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

var styles = {
  label: (0, _glamor.css)({
    fontSize: 16,
    lineHeight: '20px',
    color: _colors.default.text,
    fontFamily: _fonts.fontFamilies.sansSerifRegular,
    cursor: 'pointer'
  }),
  labelDisabled: (0, _glamor.css)({
    color: _colors.default.disabled
  }),
  input: (0, _glamor.css)({
    display: 'none'
  }),
  unchecked: (0, _glamor.css)({
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 18,
    height: 18,
    border: "1px solid ".concat(_colors.default.secondary)
  }),
  disabled: (0, _glamor.css)({
    border: "1px solid ".concat(_colors.default.disabled)
  }),
  box: (0, _glamor.css)({
    display: 'inline-block',
    padding: '3px 3px 3px 0',
    marginRight: 5,
    marginTop: -3,
    float: 'left'
  })
};

var Checked = function Checked(_ref) {
  var disabled = _ref.disabled;
  return _react.default.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, _react.default.createElement("path", {
    d: "M0 0h18v18H0V0zm7 14L2 9.192l1.4-1.346L7 11.308 14.6 4 16 5.346 7 14z",
    fill: disabled ? _colors.default.disabled : _colors.default.primary,
    fillRule: "evenodd"
  }));
};

var _default = function _default(_ref2) {
  var children = _ref2.children,
      name = _ref2.name,
      checked = _ref2.checked,
      disabled = _ref2.disabled,
      _onChange = _ref2.onChange;
  return _react.default.createElement("label", disabled ? (0, _glamor.merge)(styles.label, styles.labelDisabled) : styles.label, _react.default.createElement("span", styles.box, checked ? _react.default.createElement(Checked, {
    disabled: disabled
  }) : _react.default.createElement("span", disabled ? (0, _glamor.merge)(styles.unchecked, styles.disabled) : styles.unchecked)), _react.default.createElement("input", _extends({}, styles.input, {
    name: name,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: function onChange(event) {
      _onChange(event, event.target.checked);
    }
  })), children);
};

exports.default = _default;