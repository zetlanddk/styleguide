"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../TeaserFront/mediaQueries");

var _Figure = require("../Figure");

var _css3, _css4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)(_defineProperty({
    margin: 0
  }, _mediaQueries.mUp, {
    marginBottom: '40px'
  })),
  containerWithImage: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })),
  content: (0, _glamor.css)((_css3 = {
    padding: '0 0 15px 0'
  }, _defineProperty(_css3, _mediaQueries.mUp, {
    padding: '0 0 15px 5%',
    width: '67%'
  }), _defineProperty(_css3, _mediaQueries.tUp, {
    width: '51%'
  }), _css3)),
  contentWithImage: (0, _glamor.css)((_css4 = {
    paddingTop: '15px'
  }, _defineProperty(_css4, _mediaQueries.mUp, {
    padding: '0 5% 0 5%',
    width: '60%'
  }), _defineProperty(_css4, _mediaQueries.tUp, {
    width: '60%'
  }), _css4)),
  imageContainer: (0, _glamor.css)(_defineProperty({
    position: 'relative'
  }, _mediaQueries.mUp, {
    flexShrink: 0,
    fontSize: 0,
    // Removes the small flexbox space.
    height: 'auto',
    width: '40%'
  })),
  image: (0, _glamor.css)({
    height: 'auto',
    maxWidth: '100%'
  })
};

var TeaserIntro = function TeaserIntro(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      image = _ref.image,
      alt = _ref.alt,
      onClick = _ref.onClick,
      byline = _ref.byline,
      t = _ref.t;
  return _react.default.createElement("div", _extends({}, attributes, (0, _glamor.merge)(styles.container, image ? styles.containerWithImage : {}), {
    onClick: onClick,
    style: {
      cursor: onClick ? 'pointer' : 'default'
    }
  }), image && _react.default.createElement("div", styles.imageContainer, _react.default.createElement(_Figure.FigureImage, _extends({}, _Figure.FigureImage.utils.getResizedSrcs(image, 750), {
    alt: alt
  })), byline && _react.default.createElement(_Figure.FigureByline, {
    position: "rightCompact"
  }, byline)), _react.default.createElement("div", (0, _glamor.merge)(styles.content, image ? styles.contentWithImage : {}), children));
};

TeaserIntro.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  image: _propTypes.default.string,
  byline: _propTypes.default.string,
  alt: _propTypes.default.string,
  onClick: _propTypes.default.func
};
TeaserIntro.defaultProps = {
  alt: ''
};
var _default = TeaserIntro;
exports.default = _default;