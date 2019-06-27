"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scribble = exports.Interaction = exports.Editorial = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: (0, _glamor.css)(_defineProperty({
    color: _colors.default.text,
    margin: 0,
    marginBottom: 6
  }, _mediaQueries.mUp, {
    marginBottom: 8
  })),
  editorial: (0, _glamor.css)(_objectSpread({}, _styles.serifTitle20, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, _styles.serifTitle22)))),
  interaction: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium20, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifMedium22, {
    lineHeight: '24px'
  })))),
  scribble: (0, _glamor.css)(_objectSpread({}, _styles.cursiveTitle20, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, _styles.cursiveTitle22))))
};

var Editorial = function Editorial(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.editorial, {
    style: style
  }), children);
};

exports.Editorial = Editorial;

var Interaction = function Interaction(_ref2) {
  var children = _ref2.children,
      style = _ref2.style;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.interaction, {
    style: style
  }), children);
};

exports.Interaction = Interaction;

var Scribble = function Scribble(_ref3) {
  var children = _ref3.children,
      style = _ref3.style;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.scribble, {
    style: style
  }), children);
};

exports.Scribble = Scribble;