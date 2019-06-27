"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular16, {
    color: _colors.default.error,
    marginTop: 12
  }))
};

var CommentComposerError = function CommentComposerError(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", styles.root, children);
};

var _default = CommentComposerError;
exports.default = _default;