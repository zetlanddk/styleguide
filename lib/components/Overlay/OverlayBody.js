"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _OverlayToolbar = require("./OverlayToolbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var overlayBodyStyle = (0, _glamor.css)(_defineProperty({
  padding: "".concat(_OverlayToolbar.height + 20, "px 12px 20px")
}, _mediaQueries.mUp, {
  padding: "".concat(_OverlayToolbar.height + 20, "px 20px 20px")
}));

var OverlayBody = function OverlayBody(props) {
  return _react.default.createElement("div", _extends({}, overlayBodyStyle, props));
};

var _default = OverlayBody;
exports.default = _default;