"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _env = _interopRequireDefault(require("../../theme/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var VIEWBOX = _env.default.LOGO_VIEWBOX || '0 0 4 1.5';
var PATH = _env.default.LOGO_PATH || 'M0 0 L4 0 L4 1.5 L3 0.5 L2 4 L1 0.5 L0 1.5 Z';
var VIEWBOX_ARRAY = VIEWBOX.split(' ').map(function (d) {
  return +d;
});
var WIDTH = VIEWBOX_ARRAY[2] - VIEWBOX_ARRAY[0];
var HEIGHT = VIEWBOX_ARRAY[3] - VIEWBOX_ARRAY[1];
var ratio = WIDTH / HEIGHT;
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

var LogoSvg = function LogoSvg(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill,
      props = _objectWithoutProperties(_ref, ["width", "height", "fill"]);

  return _react.default.createElement("svg", _extends({}, props, {
    width: width,
    height: height,
    viewBox: VIEWBOX
  }), _react.default.createElement("path", {
    fill: fill,
    d: PATH
  }));
};

var Logo = function Logo(props) {
  var width;
  var height;

  if (props.width) {
    width = props.width;
    height = width / ratio;
  } else if (props.height) {
    height = props.height;
    width = height * ratio;
  } else {
    return _react.default.createElement("div", styles.container, _react.default.createElement(LogoSvg, _extends({}, styles.svg, {
      width: "100%",
      fill: props.fill
    })));
  }

  return _react.default.createElement(LogoSvg, {
    width: width,
    height: height,
    fill: props.fill
  });
};

Logo.defaultProps = {
  fill: '#000'
};
Logo.ratio = ratio;
var _default = Logo;
exports.default = _default;