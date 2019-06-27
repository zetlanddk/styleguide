"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockQuoteNested = exports.BlockQuoteParagraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _Paragraph = require("./Paragraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BlockQuoteParagraph = function BlockQuoteParagraph(_ref) {
  var children = _ref.children;
  return _react.default.createElement("p", {
    style: _objectSpread({}, _Paragraph.paragraphStyle, {
      margin: 0,
      padding: '10px 0'
    })
  }, children);
};

exports.BlockQuoteParagraph = BlockQuoteParagraph;

var BlockQuoteNested = function BlockQuoteNested(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    style: {
      backgroundColor: '#f7f7f7',
      borderLeft: "2px solid ".concat(_colors.default.divider),
      margin: '20px auto',
      padding: '20px 25px'
    }
  }, children);
};

exports.BlockQuoteNested = BlockQuoteNested;

var _default = function _default(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("div", {
    style: {
      backgroundColor: '#f7f7f7',
      margin: '20px auto',
      padding: '20px 25px'
    }
  }, children);
};

exports.default = _default;