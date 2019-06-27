"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ratio = 1.385;

var Play = function Play(_ref) {
  var width = _ref.width,
      fill = _ref.fill;
  return _react.default.createElement("svg", {
    width: width,
    height: width * ratio,
    viewBox: "0 0 26 36"
  }, _react.default.createElement("path", {
    d: "M25.956 18.188L.894 35.718V.66",
    fill: fill
  }));
};

Play.defaultProps = {
  width: 26,
  fill: '#fff'
};
var _default = Play;
exports.default = _default;