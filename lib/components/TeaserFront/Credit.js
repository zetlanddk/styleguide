"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = require("../Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Credit = function Credit(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_Typography.Editorial.Credit, {
    style: {
      color: 'inherit'
    }
  }, children);
};

Credit.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = Credit;
exports.default = _default;