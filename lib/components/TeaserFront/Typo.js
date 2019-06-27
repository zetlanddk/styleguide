"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MAX_WIDTH_PERCENT = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _Text = _interopRequireDefault(require("./Text"));

var _css;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MAX_WIDTH_PERCENT = 70;
exports.MAX_WIDTH_PERCENT = MAX_WIDTH_PERCENT;
var styles = {
  root: (0, _glamor.css)({
    margin: 0
  }),
  textContainer: (0, _glamor.css)((_css = {
    margin: '0 auto',
    padding: '15px 15px 40px 15px'
  }, _defineProperty(_css, _mediaQueries.mUp, {
    maxWidth: "".concat(MAX_WIDTH_PERCENT, "%"),
    padding: '60px 0 80px 0'
  }), _defineProperty(_css, _mediaQueries.tUp, {
    padding: '80px 0 100px 0'
  }), _css))
};

var TypoBlock = function TypoBlock(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      onClick = _ref.onClick,
      color = _ref.color,
      bgColor = _ref.bgColor;
  var background = bgColor || '';
  return _react.default.createElement("div", _extends({}, attributes, styles.root, {
    onClick: onClick,
    style: {
      background: background,
      cursor: onClick ? 'pointer' : 'default'
    }
  }), _react.default.createElement("div", styles.textContainer, _react.default.createElement(_Text.default, {
    center: true,
    color: color
  }, children)));
};

TypoBlock.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  color: _propTypes.default.string,
  bgColor: _propTypes.default.string
};
var _default = TypoBlock;
exports.default = _default;