"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _styles = require("../Typography/styles");

var _colors = _interopRequireDefault(require("../../theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)({
    marginBottom: 10
  }),
  inlineContainer: (0, _glamor.css)({
    marginBottom: 0,
    lineHeight: '12px'
  }),
  title: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium12, {
    color: _colors.default.text
  })),
  label: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, {
    color: _colors.default.text
  })),
  labelWithColor: (0, _glamor.css)({
    paddingLeft: 12,
    position: 'relative'
  }),
  inlineLabel: (0, _glamor.css)({
    display: 'inline-block',
    marginRight: 12
  }),
  color: (0, _glamor.css)({
    position: 'absolute',
    left: 0,
    top: 5,
    width: 8,
    height: 8
  }),
  circle: (0, _glamor.css)({
    borderRadius: '50%'
  })
};

var ColorLegend = function ColorLegend(_ref) {
  var title = _ref.title,
      shape = _ref.shape,
      values = _ref.values,
      maxWidth = _ref.maxWidth,
      inline = _ref.inline;

  if (!values.length && !title) {
    return null;
  }

  return _react.default.createElement("div", _extends({}, (0, _glamor.merge)(styles.container, inline && styles.inlineContainer), {
    style: {
      maxWidth: maxWidth
    }
  }), !!title && _react.default.createElement("div", styles.title, title), values.map(function (value, i) {
    var text = value.label;
    return _react.default.createElement("div", _extends({
      key: i
    }, (0, _glamor.merge)(styles.label, inline && styles.inlineLabel, !!value.color && styles.labelWithColor)), !!value.color && _react.default.createElement("div", _extends({}, (0, _glamor.merge)(styles.color, styles[shape === 'square' ? 'square' : 'circle']), {
      style: {
        backgroundColor: value.color
      }
    })), text, ' ');
  }));
};

ColorLegend.propTypes = {
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  shape: _propTypes.default.oneOf(['square', 'circle', 'marker']),
  values: _propTypes.default.arrayOf(_propTypes.default.shape({
    color: _propTypes.default.string,
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired
  })),
  maxWidth: _propTypes.default.number,
  inline: _propTypes.default.bool
};
var _default = ColorLegend;
exports.default = _default;