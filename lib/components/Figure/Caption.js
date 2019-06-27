"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Caption = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../Typography/styles");

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _Center = require("../Center");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  caption: (0, _glamor.css)(_objectSpread({
    margin: '5px auto 0 auto',
    width: '100%',
    maxWidth: "calc(100vw - ".concat(_Center.PADDING * 2, "px)")
  }, _styles.sansSerifRegular12, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular15, {
    lineHeight: '18px'
  }))))
};

var Caption = function Caption(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react.default.createElement("figcaption", _extends({}, attributes, styles.caption), children);
};

exports.Caption = Caption;
Caption.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object
};
var _default = Caption;
exports.default = _default;