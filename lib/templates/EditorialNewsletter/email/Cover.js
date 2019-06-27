"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CoverImage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoverImage = function CoverImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;

  // skip rendering empty cover images
  // - some email clients show a prominent error when rendering an img tag without a src
  // - this happens for covers all the time because they currently can't be removed in publikator-frontend
  if (!src && !alt) {
    return null;
  }

  return _react.default.createElement("img", {
    src: src,
    alt: alt,
    border: "0",
    style: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: 'auto !important',
      maxWidth: '100% !important'
    }
  });
};

exports.CoverImage = CoverImage;

var _default = function _default(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("tr", null, _react.default.createElement("td", {
    align: "center",
    valign: "top",
    className: "cover"
  }, children));
};

exports.default = _default;