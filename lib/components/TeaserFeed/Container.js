"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _Format = require("./Format");

var _colors = _interopRequireDefault(require("../../theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  main: (0, _glamor.css)(_defineProperty({
    borderTop: "1px solid ".concat(_colors.default.text),
    paddingTop: '8px',
    margin: '0 0 30px 0'
  }, _mediaQueries.mUp, {
    margin: '0 0 40px 0',
    paddingTop: '10px'
  })),
  link: (0, _glamor.css)({
    color: 'inherit',
    textDecoration: 'none'
  })
};

var Teaser = function Teaser(_ref) {
  var children = _ref.children,
      color = _ref.color,
      format = _ref.format,
      interaction = _ref.interaction,
      Link = _ref.Link;
  return _react.default.createElement("div", _extends({}, styles.main, {
    style: {
      borderColor: color
    }
  }), format && format.meta && _react.default.createElement(_Format.Format, {
    color: color
  }, _react.default.createElement(Link, {
    href: format.meta.path,
    passHref: true
  }, _react.default.createElement("a", _extends({}, styles.link, {
    href: format.meta.path
  }), format.meta.title))), children);
};

Teaser.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string,
  format: _propTypes.default.object,
  interaction: _propTypes.default.bool,
  Link: _propTypes.default.func.isRequired // a react component

};
var _default = Teaser;
exports.default = _default;