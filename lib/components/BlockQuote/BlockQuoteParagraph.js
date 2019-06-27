"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _styles = require("../Typography/styles");

var _objectSpread2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  quote: (0, _glamor.css)(_objectSpread({
    backgroundColor: '#f7f7f7',
    margin: 0,
    padding: '0 15px 12px 15px',
    fontSize: '15px'
  }, _styles.sansSerifRegular15, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular18, {
    padding: '0 25px 20px 25px',
    '&:first-child': {
      paddingTop: '20px'
    }
  })), _defineProperty(_objectSpread2, '&:first-child', {
    paddingTop: '12px'
  }), _objectSpread2)))
};

var BlockQuoteParagraph = function BlockQuoteParagraph(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react.default.createElement("p", _extends({}, styles.quote, attributes), children);
};

BlockQuoteParagraph.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object
};
var _default = BlockQuoteParagraph;
exports.default = _default;