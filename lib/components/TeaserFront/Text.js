"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _colors = _interopRequireDefault(require("../../theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TEXT_PADDING = 50;
var positionHalfWidth = {
  position: 'absolute',
  width: "calc(50% - ".concat(TEXT_PADDING, "px)")
};
var positionFullWidth = {
  position: 'absolute',
  left: "".concat(TEXT_PADDING, "px"),
  right: "".concat(TEXT_PADDING, "px")
};
var styles = {
  rootPosition: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden'
  })),
  rootMiddle: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  })),
  positioned: (0, _glamor.css)({
    position: 'relative'
  }),
  topleft: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, _objectSpread({}, positionHalfWidth, {
    left: "".concat(TEXT_PADDING, "px"),
    top: "".concat(TEXT_PADDING, "px")
  }))),
  topright: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, _objectSpread({}, positionHalfWidth, {
    left: '50%',
    top: "".concat(TEXT_PADDING, "px")
  }))),
  bottomleft: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, _objectSpread({}, positionHalfWidth, {
    bottom: "".concat(TEXT_PADDING, "px"),
    left: "".concat(TEXT_PADDING, "px")
  }))),
  bottomright: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, _objectSpread({}, positionHalfWidth, {
    bottom: "".concat(TEXT_PADDING, "px"),
    left: '50%'
  }))),
  top: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, _objectSpread({}, positionFullWidth, {
    top: "".concat(TEXT_PADDING, "px")
  }))),
  middle: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, _objectSpread({}, positionFullWidth))),
  bottom: (0, _glamor.css)(_defineProperty({}, _mediaQueries.tUp, _objectSpread({}, positionFullWidth, {
    bottom: "".concat(TEXT_PADDING, "px")
  }))),
  center: (0, _glamor.css)({
    textAlign: 'center'
  }),
  centerMobileOnly: (0, _glamor.css)(_defineProperty({
    textAlign: 'center'
  }, _mediaQueries.mUp, {
    textAlign: 'inherit'
  }))
};

var Text = function Text(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      position = _ref.position,
      center = _ref.center,
      color = _ref.color,
      collapsedColor = _ref.collapsedColor,
      maxWidth = _ref.maxWidth,
      margin = _ref.margin,
      feuilleton = _ref.feuilleton;
  var textAlignStyle = feuilleton && !center ? styles.centerMobileOnly : center ? styles.center : undefined;
  var rootStyles = position ? styles.rootPosition : {};
  var middleStyles = position === 'middle' ? styles.rootMiddle : {};
  var colorStyle = collapsedColor && (0, _glamor.css)(_defineProperty({
    color: collapsedColor
  }, _mediaQueries.tUp, {
    color: color
  }));
  return _react.default.createElement("div", _extends({}, rootStyles, middleStyles), _react.default.createElement("div", _extends({}, attributes, colorStyle, textAlignStyle, (0, _glamor.css)(styles.positioned, position ? styles[position] : {}), {
    style: {
      color: !collapsedColor ? color : undefined,
      maxWidth: maxWidth,
      margin: margin
    }
  }), children));
};

Text.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  position: _propTypes.default.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright', 'top', 'middle', 'bottom']),
  center: _propTypes.default.bool,
  color: _propTypes.default.string,
  collapsedColor: _propTypes.default.string,
  maxWidth: _propTypes.default.string,
  margin: _propTypes.default.string,
  feuilleton: _propTypes.default.bool
};
Text.defaultProps = {
  color: _colors.default.text,
  maxWidth: '',
  margin: ''
};
var _default = Text;
exports.default = _default;