"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H2 = void 0;

var _react = _interopRequireDefault(require("react"));

var _fonts = require("../../../theme/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h2Style = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontSize: '23px',
  lineHeight: '130%',
  marginTop: '60px'
};

var H2 = function H2(_ref) {
  var children = _ref.children;
  return _react.default.createElement("h2", {
    style: h2Style
  }, children);
};

exports.H2 = H2;