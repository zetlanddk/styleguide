"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _Figure = require("../Figure");

var _Text = _interopRequireDefault(require("./Text"));

var _css6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)(_defineProperty({
    margin: 0,
    overflow: 'hidden'
  }, _mediaQueries.mUp, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '70px 5%'
  })),
  containerFeuilleton: (0, _glamor.css)(_defineProperty({
    margin: 0,
    overflow: 'hidden'
  }, _mediaQueries.mUp, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 5%'
  })),
  containerPortrait: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    padding: 0,
    alignItems: 'flex-start'
  })),
  content: (0, _glamor.css)(_defineProperty({
    padding: '15px 15px 40px 15px'
  }, _mediaQueries.mUp, {
    padding: '0 0 0 5%',
    width: '50%'
  })),
  contentReverse: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    padding: '0 5% 0 0'
  })),
  contentPortrait: (0, _glamor.css)((_css6 = {
    padding: '15px 15px 40px 15px'
  }, _defineProperty(_css6, _mediaQueries.mUp, {
    padding: '40px 5%',
    width: '60%'
  }), _defineProperty(_css6, _mediaQueries.dUp, {
    padding: '40px 5%'
  }), _css6)),
  imageContainer: (0, _glamor.css)(_defineProperty({
    position: 'relative'
  }, _mediaQueries.mUp, {
    flexShrink: 0,
    fontSize: 0,
    // Removes the small flexbox space.
    height: 'auto',
    width: '50%'
  })),
  imageContainerFeuilleton: (0, _glamor.css)(_defineProperty({
    padding: '15px 15px 0 15px',
    position: 'relative'
  }, _mediaQueries.mUp, {
    padding: 0,
    flexShrink: 0,
    fontSize: 0,
    // Removes the small flexbox space.
    height: 'auto',
    width: '50%'
  })),
  imageContainerPortrait: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    width: '40%',
    padding: 0
  })),
  image: (0, _glamor.css)({
    height: 'auto',
    maxWidth: '100%'
  })
};

var Split = function Split(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      image = _ref.image,
      byline = _ref.byline,
      alt = _ref.alt,
      onClick = _ref.onClick,
      color = _ref.color,
      bgColor = _ref.bgColor,
      center = _ref.center,
      reverse = _ref.reverse,
      portrait = _ref.portrait,
      aboveTheFold = _ref.aboveTheFold,
      feuilleton = _ref.feuilleton;
  var background = bgColor || '';
  var flexDirection = reverse ? 'row-reverse' : '';
  var bylinePosition = feuilleton ? 'belowFeuilleton' : portrait ? reverse ? 'left' : 'right' : 'below';
  return _react.default.createElement("div", _extends({}, attributes, (0, _glamor.css)(feuilleton ? styles.containerFeuilleton : styles.container, portrait ? styles.containerPortrait : {}), {
    onClick: onClick,
    style: {
      background: background,
      flexDirection: flexDirection,
      cursor: onClick ? 'pointer' : 'default'
    }
  }), _react.default.createElement("div", (0, _glamor.css)(feuilleton ? styles.imageContainerFeuilleton : styles.imageContainer, portrait ? styles.imageContainerPortrait : {}), _react.default.createElement(_Figure.FigureImage, _extends({
    aboveTheFold: aboveTheFold
  }, _Figure.FigureImage.utils.getResizedSrcs(image, 750), {
    alt: alt
  })), byline && _react.default.createElement(_Figure.FigureByline, {
    position: bylinePosition,
    style: {
      color: color
    }
  }, byline)), _react.default.createElement("div", (0, _glamor.css)(styles.content, portrait ? styles.contentPortrait : reverse ? styles.contentReverse : {}), _react.default.createElement(_Text.default, {
    color: color,
    center: center,
    feuilleton: feuilleton
  }, children)));
};

Split.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  image: _propTypes.default.string.isRequired,
  byline: _propTypes.default.string,
  alt: _propTypes.default.string,
  color: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  center: _propTypes.default.bool,
  reverse: _propTypes.default.bool
};
Split.defaultProps = {
  alt: ''
};
var _default = Split;
exports.default = _default;