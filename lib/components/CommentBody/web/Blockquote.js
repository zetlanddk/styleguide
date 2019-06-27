"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockQuoteNested = exports.BlockQuoteParagraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _mediaQueries = require("../../../theme/mediaQueries");

var _styles = require("../../Typography/styles");

var _objectSpread2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  blockquote: (0, _glamor.css)(_defineProperty({
    backgroundColor: '#f7f7f7',
    margin: '20px auto',
    padding: '15px'
  }, _mediaQueries.mUp, {
    padding: '25px'
  })),
  paragraph: (0, _glamor.css)(_objectSpread({
    margin: '6px 0'
  }, _styles.serifRegular14, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.serifRegular16, {
    margin: '10px 0'
  })), _defineProperty(_objectSpread2, '&:first-child', {
    marginTop: 0
  }), _defineProperty(_objectSpread2, '&:last-child', {
    marginBottom: 0
  }), _objectSpread2)))
};

var BlockQuoteParagraph = function BlockQuoteParagraph(_ref) {
  var children = _ref.children;
  return _react.default.createElement("p", styles.paragraph, children);
};

exports.BlockQuoteParagraph = BlockQuoteParagraph;

var BlockQuoteNested = function BlockQuoteNested(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", _extends({}, styles.blockquote, {
    style: {
      borderLeft: "2px solid ".concat(_colors.default.divider)
    }
  }), children);
};

exports.BlockQuoteNested = BlockQuoteNested;

var _default = function _default(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("div", styles.blockquote, children);
};

exports.default = _default;