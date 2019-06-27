"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fonts = require("../../../theme/fonts");

var _Paragraph = require("./Paragraph");

var _HR = _interopRequireDefault(require("./HR"));

var _email = require("mdast-react-render/lib/email");

var _colors = _interopRequireDefault(require("../../../theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var footerLinkStyle = _objectSpread({}, _Paragraph.linkStyle, {
  color: _colors.default.text,
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontSize: '15px',
  lineHeight: '30px'
});

var _default = function _default(_ref) {
  var children = _ref.children,
      meta = _ref.meta;
  var slug = meta.slug,
      path = meta.path;
  return _react.default.createElement("tr", null, _react.default.createElement("td", {
    align: "center",
    valign: "top"
  }, _react.default.createElement(_email.Mso, null, "\n      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"600\">\n        <tr>\n          <td>\n        "), _react.default.createElement("table", {
    align: "center",
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    width: "100%",
    style: {
      maxWidth: 600,
      color: '#000',
      fontSize: 19,
      fontFamily: _fonts.fontFamilies.serifRegular
    }
  }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
    style: {
      padding: 20
    },
    className: "body_content"
  }, children)), _react.default.createElement("tr", null, _react.default.createElement("td", {
    style: {
      padding: 20
    }
  }, _react.default.createElement("a", {
    href: "https://www.republik.ch/",
    style: _Paragraph.linkStyle
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
    alt: ""
  })), _react.default.createElement("p", {
    style: _objectSpread({}, _Paragraph.paragraphStyle, {
      marginTop: 0
    })
  }, "Republik AG", _react.default.createElement("br", null), "Sihlhallenstrasse 1", _react.default.createElement("br", null), "8004 Z\xFCrich"), _react.default.createElement(_HR.default, null), _react.default.createElement("p", null, _react.default.createElement("a", {
    href: "https://www.republik.ch".concat(path ? path : "/".concat(slug)),
    style: footerLinkStyle
  }, "Im Web lesen"), _react.default.createElement("br", null), _react.default.createElement("a", {
    href: "https://www.republik.ch/konto#newsletter",
    style: footerLinkStyle
  }, "Newsletter-Einstellungen anpassen"), _react.default.createElement("br", null), _react.default.createElement("a", {
    href: "*|UNSUB|*",
    style: footerLinkStyle
  }, "Von allen Newslettern abmelden")))))), _react.default.createElement(_email.Mso, null, "\n      </td>\n    </tr>\n  </table>\n        ")));
};

exports.default = _default;