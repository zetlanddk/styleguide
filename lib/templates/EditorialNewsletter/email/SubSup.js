"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sup = exports.Sub = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sub = function Sub(_ref) {
  var children = _ref.children;
  return _react.default.createElement("sub", {
    style: {
      lineHeight: 0
    }
  }, children);
};

exports.Sub = Sub;

var Sup = function Sup(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("sup", {
    style: {
      lineHeight: 0
    }
  }, children);
};

exports.Sup = Sup;