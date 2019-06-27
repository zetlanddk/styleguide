"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = exports.Paragraph = exports.Definition = exports.Code = exports.StrikeThrough = exports.Link = exports.Cursive = exports.Emphasis = exports.linkStyle = exports.paragraphStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _fonts = require("../../../theme/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paragraphStyle = {
  color: _colors.default.text,
  fontSize: '16px',
  lineHeight: '158%',
  margin: '10px 0',
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
var strikeThroughStyle = {
  textDecoration: 'line-through'
};
var codeStyle = {
  backgroundColor: '#f7f7f7',
  borderRadius: '2px',
  display: 'inline-block',
  fontFamily: _fonts.fontFamilies.monospaceRegular,
  fontSize: '14px',
  padding: '0 5px'
};
var definitionStyle = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontSize: '15px',
  margin: '10px 0'
};

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

var StrikeThrough = function StrikeThrough(_ref4) {
  var children = _ref4.children;
  return _react.default.createElement("span", {
    style: strikeThroughStyle
  }, children);
};

exports.StrikeThrough = StrikeThrough;

var Code = function Code(_ref5) {
  var children = _ref5.children;
  return _react.default.createElement("code", {
    style: codeStyle
  }, children);
};

exports.Code = Code;

var Definition = function Definition(_ref6) {
  var children = _ref6.children;
  return _react.default.createElement("p", {
    style: definitionStyle
  }, children);
};

exports.Definition = Definition;

var Paragraph = function Paragraph(_ref7) {
  var children = _ref7.children;
  return _react.default.createElement("p", {
    style: paragraphStyle
  }, children);
};

exports.Paragraph = Paragraph;

var Heading = function Heading(_ref8) {
  var children = _ref8.children;
  return _react.default.createElement(Paragraph, null, _react.default.createElement(Emphasis, null, children));
};

exports.Heading = Heading;