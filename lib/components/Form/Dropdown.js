"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NativeDropdown = _interopRequireDefault(require("./NativeDropdown"));

var _VirtualDropdown = _interopRequireDefault(require("./VirtualDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useNative = typeof navigator === 'undefined' || /iPad|iPhone|iPod|android/i.test(navigator.userAgent);

var Dropdown = function Dropdown(props) {
  return useNative ? _react.default.createElement(_NativeDropdown.default, props) : _react.default.createElement(_VirtualDropdown.default, props);
};

Dropdown.Native = _NativeDropdown.default;
Dropdown.Virtual = _VirtualDropdown.default;
var _default = Dropdown;
exports.default = _default;