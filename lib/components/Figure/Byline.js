"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Byline = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../Typography/styles");

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _mediaQueries2 = require("../TeaserFront/mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  byline: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular10, _defineProperty({
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased'
  }, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular12))))
};

var positionBaseStyle = _objectSpread({}, _styles.sansSerifRegular12, {
  transform: 'rotate(-90deg)',
  transformOrigin: '0 100%',
  textAlign: 'left',
  position: 'absolute',
  bottom: 0,
  whiteSpace: 'nowrap'
});

var positionStyle = {
  below: (0, _glamor.css)(_defineProperty({
    display: 'block',
    marginTop: '5px',
    paddingLeft: '15px'
  }, _mediaQueries2.mUp, _objectSpread({}, _styles.sansSerifRegular12, {
    paddingLeft: 0
  }))),
  belowFeuilleton: (0, _glamor.css)(_defineProperty({
    display: 'block',
    marginTop: '5px',
    paddingLeft: 0
  }, _mediaQueries2.mUp, _objectSpread({}, _styles.sansSerifRegular12))),
  // right of relative container on desktop, below on mobile.
  right: (0, _glamor.css)(_defineProperty({
    paddingLeft: '15px'
  }, _mediaQueries2.mUp, _objectSpread({}, positionBaseStyle, {
    left: '100%',
    marginLeft: '18px'
  }))),
  // right of relative container on desktop and mobile, always small font size.
  rightCompact: (0, _glamor.css)(_objectSpread({}, positionBaseStyle, _styles.sansSerifRegular10, _defineProperty({
    left: '100%',
    marginLeft: '14px'
  }, _mediaQueries2.mUp, _objectSpread({}, _styles.sansSerifRegular10)))),
  // left of relative container on desktop, below on mobile.
  left: (0, _glamor.css)(_defineProperty({
    paddingLeft: '15px'
  }, _mediaQueries2.mUp, _objectSpread({}, positionBaseStyle, {
    left: 0,
    marginLeft: '-5px'
  }))),
  // left inside relative container on desktop, below on mobile.
  leftInside: (0, _glamor.css)(_defineProperty({
    display: 'block',
    marginTop: '5px',
    paddingLeft: '15px'
  }, _mediaQueries2.mUp, _objectSpread({}, positionBaseStyle, {
    left: 0,
    marginTop: 0,
    marginLeft: '18px'
  }))),
  // left inside relative container on desktop and mobile.
  leftInsideOnlyImage: (0, _glamor.css)(_objectSpread({}, positionBaseStyle, _styles.sansSerifRegular10, _defineProperty({
    left: 0,
    marginTop: 0,
    marginLeft: '15px',
    paddingLeft: '15px'
  }, _mediaQueries2.mUp, _objectSpread({}, _styles.sansSerifRegular12, {
    marginLeft: '18px'
  }))))
};

var Byline = function Byline(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      style = _ref.style,
      position = _ref.position;
  return _react.default.createElement("span", _extends({}, attributes, {
    style: style
  }, (0, _glamor.merge)(styles.byline, position && positionStyle[position])), children);
};

exports.Byline = Byline;
Byline.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  position: _propTypes.default.oneOf(['below', 'belowFeuilleton', 'right', 'rightCompact', 'left', 'leftInside', 'leftInsideOnlyImage'])
};
Byline.defaultProps = {
  style: {}
};
var _default = Byline;
exports.default = _default;