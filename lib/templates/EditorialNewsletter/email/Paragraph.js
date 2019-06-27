"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Link = exports.Cursive = exports.Emphasis = exports.Br = exports.linkStyle = exports.paragraphStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _fonts = require("../../../theme/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paragraphStyle = {
  color: _colors.default.text,
  fontSize: '19px',
  lineHeight: '158%',
  fontFamily: _fonts.fontFamilies.serifRegular
};
exports.paragraphStyle = paragraphStyle;
var linkStyle = {
  color: _colors.default.text,
  textDecoration: 'underline',
  textDecorationSkip: 'ink'
};
exports.linkStyle = linkStyle;
var emphasisStyle = {
  color: _colors.default.text,
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal'
};
var cursiveStyle = {
  fontFamily: _fonts.fontFamilies.serifItalic,
  fontStyle: 'normal',
  fontWeight: 'normal'
};

var Br = function Br() {
  return _react.default.createElement("br", null);
};

exports.Br = Br;

var Emphasis = function Emphasis(_ref) {
  var children = _ref.children;
  return _react.default.createElement("strong", {
    style: emphasisStyle
  }, children);
};

exports.Emphasis = Emphasis;

var Cursive = function Cursive(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("em", {
    style: cursiveStyle
  }, children);
};

exports.Cursive = Cursive;

var Link = function Link(_ref3) {
  var children = _ref3.children,
      href = _ref3.href,
      title = _ref3.title;
  return _react.default.createElement("a", {
    href: href,
    title: title,
    style: linkStyle
  }, children);
};

exports.Link = Link;

var _default = function _default(_ref4) {
  var children = _ref4.children;
  return _react.default.createElement("p", {
    style: paragraphStyle
  }, children);
};

exports.default = _default;