"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)({
    display: 'block',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }),
  img: (0, _glamor.css)({
    display: 'block',
    position: 'absolute',
    width: '100%'
  })
};

var _default = function _default(_ref) {
  var src = _ref.src,
      srcSet = _ref.srcSet,
      sizes = _ref.sizes,
      alt = _ref.alt,
      aspectRatio = _ref.aspectRatio,
      attributes = _ref.attributes,
      visible = _ref.visible,
      offset = _ref.offset,
      onClick = _ref.onClick;
  return _react.default.createElement(_.default, {
    attributes: _objectSpread({}, styles.container, attributes),
    offset: offset,
    visible: visible,
    style: {
      // We always subtract 1px to prevent against rounding issues that can lead
      // to the background color shining through at the bottom of the image.
      paddingBottom: "calc(".concat(100 / aspectRatio, "% - 1px)"),
      backgroundColor: src.match(/\.png(\.webp)?(\?|$)/) ? 'transparent' : undefined
    }
  }, _react.default.createElement("img", _extends({
    src: src,
    srcSet: srcSet,
    sizes: sizes,
    alt: alt
  }, styles.img, {
    onClick: onClick
  })));
};

exports.default = _default;