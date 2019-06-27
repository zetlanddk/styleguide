"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _css;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)((_css = {
    margin: '30px auto'
  }, _defineProperty(_css, _mediaQueries.mUp, {
    margin: '40px auto'
  }), _defineProperty(_css, '& figcaption', {
    marginLeft: 0,
    marginRight: 0
  }), _css))
};

var BlockQuote = function BlockQuote(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react.default.createElement("div", _extends({}, styles.container, attributes), children);
};

BlockQuote.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object
};
var _default = BlockQuote;
exports.default = _default;