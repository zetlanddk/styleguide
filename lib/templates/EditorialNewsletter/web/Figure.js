"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Figure = require("../../../components/Figure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledFigure = function StyledFigure(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_Figure.Figure, {
    attributes: {
      style: {
        borderTop: '1px solid #555',
        paddingTop: '13px',
        marginBottom: '30px'
      }
    }
  }, children);
};

var _default = StyledFigure;
exports.default = _default;