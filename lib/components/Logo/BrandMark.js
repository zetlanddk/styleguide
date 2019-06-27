"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_PROFILE_PICTURE = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _env = _interopRequireDefault(require("../../theme/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VIEWBOX = _env.default.BRAND_MARK_VIEWBOX || '0 0 4 4';
var PATH = _env.default.BRAND_MARK_PATH || 'M0 4 L1 0 L4 4 Z';
var VIEWBOX_ARRAY = VIEWBOX.split(' ').map(function (d) {
  return +d;
});
var WIDTH = VIEWBOX_ARRAY[2] - VIEWBOX_ARRAY[0];
var HEIGHT = VIEWBOX_ARRAY[3] - VIEWBOX_ARRAY[1];
var ppViewBox = [VIEWBOX_ARRAY[0] - WIDTH * 0.22, VIEWBOX_ARRAY[1] - HEIGHT * 0.22, WIDTH + WIDTH * 0.44, HEIGHT + HEIGHT * 0.44];
var DEFAULT_PROFILE_PICTURE = "data:image/svg+xml,".concat(encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"".concat(ppViewBox.join(' '), "\"><rect x=\"").concat(ppViewBox[0], "\" y=\"").concat(ppViewBox[1], "\" width=\"").concat(ppViewBox[2], "\" height=\"").concat(ppViewBox[3], "\" fill=\"#E1E7E5\" /><path fill=\"#fff\" d=\"").concat(PATH, "\" /></svg>")));
exports.DEFAULT_PROFILE_PICTURE = DEFAULT_PROFILE_PICTURE;
var styles = {
  container: (0, _glamor.css)({
    position: 'relative',
    height: 0,
    width: '100%',
    paddingBottom: "".concat(HEIGHT / WIDTH * 100, "%")
  }),
  svg: (0, _glamor.css)({
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0
  })
};

var R = function R(_ref) {
  var fill = _ref.fill;
  return _react.default.createElement("div", styles.container, _react.default.createElement("svg", _extends({}, styles.svg, {
    viewBox: VIEWBOX
  }), _react.default.createElement("path", {
    fill: fill,
    d: PATH
  })));
};

R.defaultProps = {
  fill: '#000'
};
var _default = R;
exports.default = _default;