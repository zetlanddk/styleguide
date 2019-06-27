"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _email = require("mdast-react-render/lib/email");

var _Header = _interopRequireDefault(require("./Header"));

var _env = _interopRequireDefault(require("../../../theme/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
      meta = _ref.meta;
  return _react.default.createElement("html", null, _react.default.createElement("head", null, _react.default.createElement("meta", {
    charSet: "UTF-8"
  }), _react.default.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "IE=edge"
  }), _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), _react.default.createElement(_email.Mso, {
    gte: "15"
  }, "\n        <xml>\n          <o:officedocumentsettings>\n            <o:allowpng />\n            <o:pixelsperinch>96</o:pixelsperinch>\n          </o:officedocumentsettings>\n        </xml>\n        "), _react.default.createElement("title", null, "*|MC:SUBJECT|*"), _react.default.createElement("style", {
    type: "text/css",
    dangerouslySetInnerHTML: {
      __html: "\n        ".concat(_env.default.FONT_FACES, "\n      ")
    }
  }), _react.default.createElement(_email.Mso, null, "\n        <style>\n          strong { font-weight:bold !important; }\n        </style>\n        ")), _react.default.createElement("body", {
    style: {
      margin: 0,
      padding: 0,
      backgroundColor: '#fff'
    }
  }, _react.default.createElement(_email.Mso, null, "\n    <div>\n      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"800\">\n        <tr>\n          <td>\n    "), _react.default.createElement("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    width: "100%"
  }, _react.default.createElement("tbody", null, _react.default.createElement(_Header.default, {
    meta: meta
  }), children)), _react.default.createElement(_email.Mso, null, "\n          </td>\n        </tr>\n      </table>\n    </div>\n    ")));
};

exports.default = _default;