"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var leadStyle = _objectSpread({}, _styles.serifRegular19, {
  lineHeight: '27px',
  margin: '0 0 10px 0',
  color: _colors.default.text
});

var lead = (0, _glamor.css)(_objectSpread({}, leadStyle, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, _styles.serifRegular23, {
  margin: '0 0 20px 0'
}))));
var leadSmall = (0, _glamor.css)(_objectSpread({}, leadStyle, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, _styles.serifRegular18, {
  margin: '0 0 20px 0'
}))));

var Lead = function Lead(_ref) {
  var children = _ref.children,
      columns = _ref.columns,
      attributes = _ref.attributes;
  return _react.default.createElement("span", _extends({}, attributes, columns === 3 ? leadSmall : lead, {
    style: {
      color: 'inherit'
    }
  }), children);
};

Lead.propTypes = {
  children: _propTypes.default.node.isRequired,
  columns: _propTypes.default.number
};
var _default = Lead;
exports.default = _default;