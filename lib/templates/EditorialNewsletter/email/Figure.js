"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Byline = exports.Caption = exports.Image = void 0;

var _react = _interopRequireDefault(require("react"));

var _fonts = require("../../../theme/fonts");

var _utils = require("mdast-react-render/lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return _react.default.createElement("img", {
    key: "image",
    style: {
      border: '0px',
      borderTop: '1px solid #555',
      paddingTop: '13px',
      width: '640px',
      height: 'auto',
      margin: '0px',
      maxWidth: '100% !important'
    },
    width: "600",
    src: (0, _utils.imageResizeUrl)(src, '600x'),
    alt: alt
  });
};

exports.Image = Image;

var Caption = function Caption(_ref2) {
  var children = _ref2.children,
      data = _ref2.data;
  return _react.default.createElement("p", {
    key: "caption",
    style: {
      fontSize: '15px',
      fontFamily: _fonts.fontFamilies.sansSerifRegular,
      marginTop: '5px',
      marginBottom: '30px',
      textAlign: 'left'
    }
  }, children);
};

exports.Caption = Caption;

var Byline = function Byline(_ref3) {
  var children = _ref3.children,
      data = _ref3.data;
  return _react.default.createElement("span", {
    key: "caption",
    style: {
      fontSize: '12px',
      fontFamily: _fonts.fontFamilies.sansSerifRegular
    }
  }, children);
};

exports.Byline = Byline;

var _default = function _default(_ref4) {
  var children = _ref4.children;
  return _react.default.createElement("span", null, children);
};

exports.default = _default;