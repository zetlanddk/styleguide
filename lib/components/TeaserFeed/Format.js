"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Format = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../Typography/styles");

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  main: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium14, _defineProperty({
    margin: '0 0 6px 0'
  }, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifMedium16, {
    margin: '-5px 0 8px 0'
  }))))
};

var Format = function Format(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return _react.default.createElement("p", _extends({}, styles.main, {
    style: {
      color: color
    }
  }), children);
};

exports.Format = Format;
Format.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string
};
var _default = Format;
exports.default = _default;