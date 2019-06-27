"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = require("../../List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_List.ListItem, {
    style: {
      fontSize: 'inherit',
      lineHeight: 'inherit'
    }
  }, children);
};

exports.ListItem = ListItem;
var _default = _List.List;
exports.default = _default;