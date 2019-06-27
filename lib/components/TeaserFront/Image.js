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

var _zIndex = _interopRequireDefault(require("../../theme/zIndex"));

var _Figure = require("../Figure");

var _Text = _interopRequireDefault(require("./Text"));

var _textContainerStyle, _objectSpread3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var containerStyle = _defineProperty({
  position: 'relative',
  lineHeight: 0,
  margin: 0,
  zIndex: _zIndex.default.frontImage
}, _mediaQueries.tUp, {
  background: 'none'
});

var textContainerStyle = (_textContainerStyle = {
  overflow: 'hidden',
  // Hides unpositioned content on mobile.
  padding: '15px 15px 40px 15px'
}, _defineProperty(_textContainerStyle, _mediaQueries.mUp, {
  padding: '40px 15% 70px 15%'
}), _defineProperty(_textContainerStyle, _mediaQueries.tUp, {
  padding: 0
}), _textContainerStyle);
var styles = {
  container: (0, _glamor.css)(_objectSpread({}, containerStyle)),
  containerFeuilleton: (0, _glamor.css)(_objectSpread({}, containerStyle, _defineProperty({
    margin: '15px'
  }, _mediaQueries.mUp, {
    background: 'none',
    margin: '50px 5%'
  }))),
  textContainer: (0, _glamor.css)(_objectSpread({}, textContainerStyle)),
  textContainerFeuilleton: (0, _glamor.css)(_objectSpread({}, textContainerStyle, (_objectSpread3 = {
    padding: '15px 0 40px 0'
  }, _defineProperty(_objectSpread3, _mediaQueries.mUp, {
    padding: '40px 0 70px 0'
  }), _defineProperty(_objectSpread3, _mediaQueries.tUp, {
    padding: 0
  }), _objectSpread3)))
};

var ImageBlock = function ImageBlock(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      image = _ref.image,
      byline = _ref.byline,
      alt = _ref.alt,
      onClick = _ref.onClick,
      color = _ref.color,
      bgColor = _ref.bgColor,
      textPosition = _ref.textPosition,
      center = _ref.center,
      aboveTheFold = _ref.aboveTheFold,
      onlyImage = _ref.onlyImage,
      feuilleton = _ref.feuilleton;
  var background = bgColor || '';
  return _react.default.createElement("div", _extends({}, attributes, feuilleton ? styles.containerFeuilleton : styles.container, {
    onClick: onClick,
    style: {
      background: background,
      cursor: onClick ? 'pointer' : 'default'
    }
  }), _react.default.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 0
    }
  }, _react.default.createElement(_Figure.FigureImage, _extends({
    aboveTheFold: aboveTheFold
  }, _Figure.FigureImage.utils.getResizedSrcs(image, 1500, false), {
    alt: alt
  })), byline && _react.default.createElement(_Figure.FigureByline, {
    position: onlyImage ? 'leftInsideOnlyImage' : 'leftInside',
    style: {
      color: color
    }
  }, byline)), !onlyImage && _react.default.createElement("div", feuilleton ? styles.textContainerFeuilleton : styles.textContainer, _react.default.createElement(_Text.default, {
    position: textPosition,
    color: color,
    collapsedColor: feuilleton && _colors.default.text,
    center: center,
    feuilleton: feuilleton
  }, children)));
};

ImageBlock.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  image: _propTypes.default.string.isRequired,
  byline: _propTypes.default.string,
  alt: _propTypes.default.string,
  color: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  center: _propTypes.default.bool,
  textPosition: _propTypes.default.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright', 'top', 'middle', 'bottom']),
  onlyImage: _propTypes.default.bool,
  feuilleton: _propTypes.default.bool
};
ImageBlock.defaultProps = {
  textPosition: 'topleft',
  alt: '',
  onlyImage: false
};
var _default = ImageBlock;
exports.default = _default;