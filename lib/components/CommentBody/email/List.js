"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _Paragraph = require("./Paragraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listStyle = {
  marginLeft: '1em',
  paddingLeft: '1em'
};

var ListItem = function ListItem(_ref) {
  var children = _ref.children;
  return _react.default.createElement("li", {
    style: _Paragraph.paragraphStyle
  }, children);
};

exports.ListItem = ListItem;

var _default = function _default(_ref2) {
  var children = _ref2.children,
      data = _ref2.data;
  return data.ordered ? _react.default.createElement("ol", {
    start: data.start,
    style: listStyle
  }, children) : _react.default.createElement("ul", {
    style: listStyle
  }, children);
};

exports.default = _default;