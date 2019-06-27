"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FigureImage", {
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
});
Object.defineProperty(exports, "FigureCaption", {
  enumerable: true,
  get: function get() {
    return _Caption.default;
  }
});
Object.defineProperty(exports, "FigureByline", {
  enumerable: true,
  get: function get() {
    return _Byline.default;
  }
});
exports.FigureGroup = exports.FigureCover = exports.CoverTextTitleBlockHeadline = exports.Figure = exports.FIGURE_SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _Center = require("../Center");

var _Image = _interopRequireDefault(require("./Image"));

var _Caption = _interopRequireDefault(require("./Caption"));

var _Byline = _interopRequireDefault(require("./Byline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  figure: (0, _glamor.css)({
    margin: 0,
    marginBottom: 15,
    padding: 0,
    width: '100%'
  }),
  figureGroup: (0, _glamor.css)(_defineProperty({
    margin: 0,
    display: 'block'
  }, _mediaQueries.mUp, {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  })),
  cover: (0, _glamor.css)({
    position: 'relative'
  }),
  coverSize: (0, _glamor.css)({
    marginTop: 30,
    marginBottom: 20
  }),
  coverBreakout: (0, _glamor.css)({
    margin: '30px auto 20px auto',
    maxWidth: _Center.MAX_WIDTH + _Center.PADDING * 2,
    padding: _Center.PADDING
  }),
  coverText: (0, _glamor.css)(_defineProperty({
    position: 'absolute',
    left: '5%',
    right: '5%',
    textAlign: 'center',
    display: 'none'
  }, _mediaQueries.mUp, {
    display: 'block'
  })),
  coverTextTitleBlockHeadline: (0, _glamor.css)(_defineProperty({
    display: 'block'
  }, _mediaQueries.mUp, {
    display: 'none'
  })),
  col2: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    '& figure': {
      maxWidth: "calc(".concat(100 / 2, "% - 8px)")
    }
  })),
  col3: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    '& figure': {
      maxWidth: "calc(".concat(100 / 3, "% - 10px)")
    }
  })),
  col4: (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, {
    '& figure': {
      maxWidth: "calc(".concat(100 / 4, "% - 12px)")
    }
  }))
};

var figureBreakout = _objectSpread({}, _Center.breakoutStyles, {
  center: (0, _glamor.css)({
    maxWidth: _Center.MAX_WIDTH + _Center.PADDING * 2,
    padding: _Center.PADDING,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0
  })
});

var FIGURE_SIZES = _objectSpread({}, _Center.BREAKOUT_SIZES, {
  center: _Center.MAX_WIDTH
});

exports.FIGURE_SIZES = FIGURE_SIZES;

var Figure = function Figure(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      size = _ref.size;
  return _react.default.createElement("figure", _extends({}, attributes, (0, _glamor.merge)(styles.figure, figureBreakout[size])), children);
};

exports.Figure = Figure;
Figure.propTypes = {
  children: _propTypes.default.node.isRequired,
  size: _propTypes.default.oneOf(Object.keys(figureBreakout)),
  attributes: _propTypes.default.object
};

var textPosStyle = function textPosStyle(_ref2) {
  var anchor = _ref2.anchor,
      offset = _ref2.offset;

  if (anchor === 'middle') {
    return {
      position: 'absolute',
      top: '50%',
      transform: 'translate(-, -50%)',
      marginTop: offset
    };
  }

  if (anchor === 'top') {
    return {
      position: 'absolute',
      top: offset
    };
  }

  if (anchor === 'bottom') {
    return {
      position: 'absolute',
      bottom: offset
    };
  }
};

var CoverTextTitleBlockHeadline = function CoverTextTitleBlockHeadline(_ref3) {
  var children = _ref3.children,
      attributes = _ref3.attributes;
  return _react.default.createElement("div", _extends({}, attributes, styles.coverTextTitleBlockHeadline), children);
};

exports.CoverTextTitleBlockHeadline = CoverTextTitleBlockHeadline;

var FigureCover = function FigureCover(_ref4) {
  var size = _ref4.size,
      text = _ref4.text,
      props = _objectWithoutProperties(_ref4, ["size", "text"]);

  var sizeStyle = size ? size === 'breakout' ? styles.coverBreakout : styles.coverSize : undefined;
  return _react.default.createElement("div", _extends({}, styles.cover, sizeStyle), _react.default.createElement(Figure, _extends({
    size: size
  }, props)), text && _react.default.createElement("div", _extends({
    style: textPosStyle(text)
  }, styles.coverText), text.element));
};

exports.FigureCover = FigureCover;

var FigureGroup = function FigureGroup(_ref5) {
  var children = _ref5.children,
      attributes = _ref5.attributes,
      columns = _ref5.columns,
      size = _ref5.size,
      data = _ref5.data;
  return _react.default.createElement("figure", _extends({
    role: "group"
  }, attributes, (0, _glamor.merge)(styles.figureGroup, _Center.breakoutStyles[size]), styles["col".concat(columns)]), children);
};

exports.FigureGroup = FigureGroup;
FigureGroup.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  columns: _propTypes.default.oneOf([2, 3, 4]).isRequired
};
FigureGroup.defaultProps = {
  columns: 2
};