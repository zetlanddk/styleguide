"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scribble = exports.Interaction = exports.Editorial = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("../TeaserFront/mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: (0, _glamor.css)(_defineProperty({
    margin: 0,
    marginBottom: '16px'
  }, _mediaQueries.tUp, {
    marginBottom: '25px'
  })),
  editorial: (0, _glamor.css)(_objectSpread({}, _styles.serifTitle26, _defineProperty({}, _mediaQueries.tUp, _objectSpread({}, _styles.serifTitle32)))),
  interaction: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium26, _defineProperty({}, _mediaQueries.tUp, _objectSpread({}, _styles.sansSerifMedium32)))),
  scribble: (0, _glamor.css)(_objectSpread({}, _styles.cursiveTitle26, _defineProperty({}, _mediaQueries.tUp, _objectSpread({}, _styles.cursiveTitle32))))
};

var Editorial = function Editorial(_ref) {
  var children = _ref.children;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.editorial), children);
};

exports.Editorial = Editorial;

var Interaction = function Interaction(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.interaction), children);
};

exports.Interaction = Interaction;

var Scribble = function Scribble(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.scribble), children);
};

exports.Scribble = Scribble;