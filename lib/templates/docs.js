"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Markdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _mdastReactRender = require("mdast-react-render");

var _remarkPreset = require("@orbiting/remark-preset");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = function Markdown(_ref) {
  var children = _ref.children,
      schema = _ref.schema;
  return _react.default.createElement("div", null, (0, _mdastReactRender.renderMdast)((0, _remarkPreset.parse)(children), schema), _react.default.createElement("pre", {
    style: {
      backgroundColor: '#fff',
      padding: 20,
      margin: '20px -20px -20px -20px',
      overflow: 'auto'
    }
  }, _react.default.createElement("code", {
    style: {
      fontFamily: '"Roboto Mono", monospace'
    }
  }, children.trim())));
};

exports.Markdown = Markdown;