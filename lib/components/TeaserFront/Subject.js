"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _d3Color = require("d3-color");

var _mediaQueries = require("./mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var subjectStyle = _objectSpread({}, _styles.sansSerifRegular19, _defineProperty({
  lineHeight: '27px'
}, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular23)));

var subject = (0, _glamor.css)(_objectSpread({}, subjectStyle));
var subjectSmall = (0, _glamor.css)(_objectSpread({}, subjectStyle, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular18, {
  lineHeight: '24px'
}))));

var Subject = function Subject(_ref) {
  var children = _ref.children,
      color = _ref.color,
      collapsedColor = _ref.collapsedColor,
      columns = _ref.columns;
  var labColor = (0, _d3Color.lab)(color);
  var labCompactColor = (0, _d3Color.lab)(collapsedColor || color);
  var style = (0, _glamor.css)(_defineProperty({
    color: labCompactColor.l > 50 ? labCompactColor.darker(0.6) : labCompactColor.brighter(3.0),
    '&::after': {
      content: !!children.length ? " " : undefined
    },
    paddingRight: !!children.length ? '.2em' : 0
  }, _mediaQueries.tUp, {
    color: labColor.l > 50 ? labColor.darker(2.0) : labColor.brighter(3.0)
  }));
  return _react.default.createElement("span", _extends({}, style, columns === 3 ? subjectSmall : subject), children);
};

Subject.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string,
  collapsedColor: _propTypes.default.string,
  columns: _propTypes.default.number
};
var _default = Subject;
exports.default = _default;