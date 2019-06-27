"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.textAttributes = exports.DEFAULT_IMAGE_SIZE = exports.IMAGE_SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _Center = require("../Center");

var _mediaQueries = require("../../theme/mediaQueries");

var _css;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IMAGE_SIZES = {
  XS: 120,
  S: 155,
  M: 240,
  L: 325
};
exports.IMAGE_SIZES = IMAGE_SIZES;
var DEFAULT_IMAGE_SIZE = 'S';
exports.DEFAULT_IMAGE_SIZE = DEFAULT_IMAGE_SIZE;
var textAttributes = {
  'data-infobox-text': true
};
exports.textAttributes = textAttributes;
var textSelector = '[data-infobox-text]';
var figureChildStyles = Object.keys(IMAGE_SIZES).reduce(function (styles, key) {
  var size = IMAGE_SIZES[key];
  styles[key] = (0, _glamor.css)({
    '& figure': {
      width: size,
      maxWidth: '100%'
    }
  });
  return styles;
}, {
  absolute: (0, _glamor.css)((_css = {}, _defineProperty(_css, _mediaQueries.onlyS, {
    '& figure': {
      maxWidth: _Center.MAX_WIDTH_MOBILE
    }
  }), _defineProperty(_css, _mediaQueries.mUp, {
    position: 'relative',
    minHeight: IMAGE_SIZES.S,
    '& figure': {
      position: 'absolute',
      left: 0,
      margin: '0 15px 15px 0',
      top: 0
    }
  }), _css)),
  float: (0, _glamor.css)({
    '& figure': {
      float: 'left',
      margin: '10px 15px 5px 0',
      width: '99px'
    },
    // Micro clearfix hack to avoid surrounding text floating into info boxes
    // with image and very short text.
    '&::before': {
      content: ' ',
      display: 'table'
    },
    '&::after': {
      content: ' ',
      display: 'table',
      clear: 'both'
    }
  })
});
var textChildStyles = Object.keys(IMAGE_SIZES).reduce(function (styles, key) {
  var size = IMAGE_SIZES[key];
  styles[key] = (0, _glamor.css)(_defineProperty({}, _mediaQueries.mUp, _defineProperty({}, "& ".concat(textSelector), {
    marginLeft: size + 20
  })));
  return styles;
}, {});
var floatStyle = (0, _glamor.css)(_defineProperty({}, _mediaQueries.onlyS, {
  margin: '40px auto'
}));
var defaultStyle = (0, _glamor.css)(_defineProperty({
  margin: '40px 0'
}, _mediaQueries.mUp, {
  margin: '60px 0'
}));

var getBreakoutSize = function getBreakoutSize(size, hasFigure) {
  if (size === 'float') {
    return hasFigure ? 'floatSmall' : 'floatTiny';
  }

  if (size === 'breakout') {
    return 'breakoutLeft';
  }

  return size;
};

var InfoBox = function InfoBox(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      size = _ref.size,
      figureSize = _ref.figureSize,
      figureFloat = _ref.figureFloat;
  var styles = {};
  var float = figureFloat || size === 'float';

  if (figureSize) {
    var allowedFigureSize = size === 'float' ? 'XS' : figureSize;
    styles = _objectSpread({}, float ? figureChildStyles.float : figureChildStyles.absolute, figureChildStyles[allowedFigureSize]);

    if (!float) {
      styles = _objectSpread({}, styles, textChildStyles[allowedFigureSize]);
    }
  }

  styles = _objectSpread({}, styles, size === 'float' ? floatStyle : defaultStyle);
  return _react.default.createElement(_Center.Breakout, {
    attributes: attributes,
    size: getBreakoutSize(size, figureSize)
  }, _react.default.createElement("section", styles, children));
};

InfoBox.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  size: _propTypes.default.oneOf(['float', 'breakout']),
  figureSize: _propTypes.default.oneOf(Object.keys(IMAGE_SIZES)),
  figureFloat: _propTypes.default.bool.isRequired
};
InfoBox.defaultProps = {
  figureFloat: false
};
var _default = InfoBox;
exports.default = _default;