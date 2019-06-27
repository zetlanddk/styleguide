"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var meta = _ref.meta;
  var slug = meta.slug,
      path = meta.path;
  return _react.default.createElement("tr", null, _react.default.createElement("td", {
    align: "center",
    valign: "top",
    style: {
      borderBottom: "1px solid ".concat(_colors.default.divider)
    }
  }, _react.default.createElement("a", {
    href: "https://www.republik.ch".concat(path ? path : "/".concat(slug)),
    title: "Im Web lesen"
  }, _react.default.createElement("img", {
    height: "79",
    src: "https://assets.project-r.construction/images/logo_republik_newsletter.png",
    style: {
      border: 0,
      width: '180px !important',
      height: '79px !important',
      margin: 0,
      maxWidth: '100% !important'
    },
    width: "180",
    alt: "REPUBLIK"
  }))));
};

exports.default = _default;