"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../TeaserFront/mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)(_defineProperty({
    backgroundColor: '#f5f5f5',
    position: 'relative',
    lineHeight: 0,
    margin: 0,
    padding: '30px 15px'
  }, _mediaQueries.mUp, {
    padding: '60px 0'
  }))
};

var Teaser = function Teaser(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      onClick = _ref.onClick;
  return _react.default.createElement("div", _extends({}, attributes, styles.container, {
    onClick: onClick,
    style: {
      cursor: onClick ? 'pointer' : 'default'
    }
  }), children);
};

Teaser.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  onClick: _propTypes.default.func
};
Teaser.defaultProps = {};
var _default = Teaser;
exports.default = _default;