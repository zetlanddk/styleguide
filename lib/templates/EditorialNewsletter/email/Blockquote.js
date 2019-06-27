"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockquoteSource = exports.BlockquoteText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fonts = require("../../../theme/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blockquoteStyle = {
  marginBottom: '30px'
};
var textStyle = {
  color: '#000',
  fontSize: '28px',
  lineHeight: '33px',
  fontFamily: _fonts.fontFamilies.serifBold
};
var sourceStyle = {
  color: '#000',
  fontSize: '15px',
  lineHeight: '158%',
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontStyle: 'normal'
};

var _default = function _default(_ref) {
  var children = _ref.children;
  return _react.default.createElement("blockquote", {
    style: blockquoteStyle
  }, children);
};

exports.default = _default;

var BlockquoteText = function BlockquoteText(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("p", {
    style: textStyle
  }, children);
};

exports.BlockquoteText = BlockquoteText;

var BlockquoteSource = function BlockquoteSource(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("cite", {
    style: sourceStyle
  }, children);
};

exports.BlockquoteSource = BlockquoteSource;