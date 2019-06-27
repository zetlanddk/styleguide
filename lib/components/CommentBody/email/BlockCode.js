"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fonts = require("../../../theme/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var children = _ref.children;
  return _react.default.createElement("pre", {
    style: {
      margin: '20px auto',
      whiteSpace: 'pre-wrap'
    }
  }, _react.default.createElement("code", {
    style: {
      backgroundColor: '#f7f7f7',
      display: 'block',
      fontFamily: _fonts.fontFamilies.monospaceRegular,
      fontSize: '14px',
      margin: 0,
      padding: '20px 15px 20px 15px'
    }
  }, children));
};

exports.default = _default;