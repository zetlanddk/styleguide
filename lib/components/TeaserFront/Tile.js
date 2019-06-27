"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TeaserFrontTileRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _Text = _interopRequireDefault(require("./Text"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Figure = require("../Figure");

var _LazyLoad = _interopRequireDefault(require("../LazyLoad"));

var _css3, _objectSpread2, _css6, _css7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IMAGE_SIZE = {
  tiny: 180,
  small: 220,
  medium: 300,
  large: 360
};
var sizeTiny = {
  maxHeight: "".concat(IMAGE_SIZE.tiny, "px"),
  maxWidth: "".concat(IMAGE_SIZE.tiny, "px")
};
var sizeSmall = {
  maxHeight: "".concat(IMAGE_SIZE.small, "px"),
  maxWidth: "".concat(IMAGE_SIZE.small, "px")
};
var sizeMedium = {
  maxHeight: "".concat(IMAGE_SIZE.medium, "px"),
  maxWidth: "".concat(IMAGE_SIZE.medium, "px")
};
var sizeLarge = {
  maxHeight: "".concat(IMAGE_SIZE.large, "px"),
  maxWidth: "".concat(IMAGE_SIZE.large, "px")
};
var styles = {
  container: (0, _glamor.css)(_defineProperty({
    margin: '0 auto',
    textAlign: 'center',
    padding: '30px 15px 40px 15px',
    width: '100%'
  }, _mediaQueries.mUp, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 0'
  })),
  textContainer: (0, _glamor.css)(_defineProperty({
    padding: 0
  }, _mediaQueries.mUp, {
    padding: '0 13%',
    width: '100%'
  })),
  imageContainer: (0, _glamor.css)((_css3 = {
    margin: '0 auto 30px auto'
  }, _defineProperty(_css3, _mediaQueries.mUp, {
    fontSize: 0 // Removes the small flexbox space.

  }), _defineProperty(_css3, _mediaQueries.tUp, {
    margin: '0 auto 60px auto'
  }), _css3)),
  onlyImageContainer: (0, _glamor.css)({
    margin: '0 auto',
    fontSize: 0,
    minHeight: '100px',
    // IE11
    width: '100%' // IE11

  }),
  image: (0, _glamor.css)(_objectSpread({
    minWidth: '100px'
  }, sizeSmall, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, sizeMedium)), _defineProperty(_objectSpread2, _mediaQueries.tUp, _objectSpread({}, sizeLarge)), _objectSpread2))),
  onlyImage: (0, _glamor.css)({
    minWidth: '100px',
    maxHeight: '100% !important',
    maxWidth: '100% !important'
  }),
  row: (0, _glamor.css)(_defineProperty({
    margin: 0,
    display: 'block'
  }, _mediaQueries.mUp, {
    display: 'flex'
  })),
  rowMobileReverse: (0, _glamor.css)(_defineProperty({
    margin: 0,
    display: 'flex',
    flexDirection: 'column-reverse'
  }, _mediaQueries.mUp, {
    flexDirection: 'row'
  })),
  col2: (0, _glamor.css)((_css6 = {}, _defineProperty(_css6, _mediaQueries.mUp, {
    '& .tile': {
      width: '50%'
    },
    '& img': _objectSpread({}, sizeSmall)
  }), _defineProperty(_css6, _mediaQueries.tUp, {
    '& img': _objectSpread({}, sizeMedium)
  }), _css6)),
  col3: (0, _glamor.css)((_css7 = {
    '& .tile': {
      borderTop: "1px solid ".concat(_colors.default.divider)
    }
  }, _defineProperty(_css7, _mediaQueries.mUp, {
    display: 'flex',
    flexFlow: 'row wrap',
    '& .tile': {
      width: '33.3%',
      borderTop: 'none',
      borderLeft: "1px solid ".concat(_colors.default.divider),
      margin: '0 0 50px 0',
      padding: '20px 0'
    },
    '& .tile:nth-child(3n+1)': {
      borderLeft: 'none'
    },
    '& img': _objectSpread({}, sizeTiny)
  }), _defineProperty(_css7, _mediaQueries.tUp, {
    '& img': _objectSpread({}, sizeSmall)
  }), _css7))
};

var TeaserFrontTileRow = function TeaserFrontTileRow(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      columns = _ref.columns,
      mobileReverse = _ref.mobileReverse;
  return _react.default.createElement("div", _extends({
    role: "group"
  }, attributes, mobileReverse ? styles.rowMobileReverse : styles.row, styles["col".concat(columns)]), children);
};

exports.TeaserFrontTileRow = TeaserFrontTileRow;
TeaserFrontTileRow.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  columns: _propTypes.default.oneOf([1, 2, 3]).isRequired
};
TeaserFrontTileRow.defaultProps = {
  columns: 1
};

var Tile = function Tile(_ref2) {
  var children = _ref2.children,
      attributes = _ref2.attributes,
      image = _ref2.image,
      byline = _ref2.byline,
      alt = _ref2.alt,
      onClick = _ref2.onClick,
      color = _ref2.color,
      bgColor = _ref2.bgColor,
      align = _ref2.align,
      aboveTheFold = _ref2.aboveTheFold,
      onlyImage = _ref2.onlyImage;
  var background = bgColor || '';
  var justifyContent = align === 'top' ? 'flex-start' : align === 'bottom' ? 'flex-end' : '';

  var imageProps = image && _Figure.FigureImage.utils.getResizedSrcs(image, IMAGE_SIZE.large, false);

  var containerStyle = {
    background: background,
    cursor: onClick ? 'pointer' : 'default',
    justifyContent: justifyContent
  };

  if (onlyImage) {
    containerStyle.padding = 0;
  }

  return _react.default.createElement("div", _extends({}, attributes, styles.container, {
    onClick: onClick,
    style: containerStyle,
    className: "tile"
  }), imageProps && _react.default.createElement("div", onlyImage ? styles.onlyImageContainer : styles.imageContainer, _react.default.createElement(_LazyLoad.default, {
    visible: aboveTheFold,
    style: {
      position: 'relative',
      fontSize: 0
    }
  }, _react.default.createElement("img", _extends({
    src: imageProps.src,
    srcSet: imageProps.srcSet,
    alt: alt
  }, onlyImage ? styles.onlyImage : styles.image)), byline && _react.default.createElement(_Figure.FigureByline, {
    position: "rightCompact",
    style: {
      color: color
    }
  }, byline))), !onlyImage && _react.default.createElement("div", styles.textContainer, _react.default.createElement(_Text.default, {
    color: color,
    maxWidth: '600px',
    margin: '0 auto'
  }, children)));
};

Tile.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  image: _propTypes.default.string,
  byline: _propTypes.default.string,
  alt: _propTypes.default.string,
  color: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  align: _propTypes.default.oneOf(['top', 'middle', 'bottom']),
  aboveTheFold: _propTypes.default.bool,
  onlyImage: _propTypes.default.bool
};
Tile.defaultProps = {
  alt: ''
};
var _default = Tile;
exports.default = _default;