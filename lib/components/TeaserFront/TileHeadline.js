"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scribble = exports.Interaction = exports.Editorial = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("./mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var smallSize = {
  fontSize: '26px',
  lineHeight: '32px',
  marginBottom: '16px'
};
var standardSize = {
  fontSize: '32px',
  lineHeight: '37px',
  marginBottom: '25px'
};
var mediumSize = {
  fontSize: '48px',
  lineHeight: '54px',
  marginBottom: '25px'
};
var styles = {
  base: (0, _glamor.css)(_defineProperty({
    margin: 0,
    marginBottom: 6
  }, _mediaQueries.mUp, {
    marginBottom: 8
  })),
  editorialCol2: (0, _glamor.css)(_objectSpread({}, _styles.serifTitle20, smallSize, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, standardSize)))),
  editorialCol2Medium: (0, _glamor.css)(_objectSpread({}, _styles.serifTitle20, smallSize, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, mediumSize)))),
  editorialCol3: (0, _glamor.css)(_objectSpread({}, _styles.serifTitle20, smallSize, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, standardSize)))),
  interactionCol2: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium20, smallSize, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, standardSize)))),
  interactionCol2Medium: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium20, smallSize, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, mediumSize)))),
  interactionCol3: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium20, smallSize, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, standardSize)))),
  scribble: (0, _glamor.css)(_objectSpread({}, _styles.cursiveTitle20, smallSize, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, standardSize))))
};

var Editorial = function Editorial(_ref) {
  var children = _ref.children,
      medium = _ref.medium,
      columns = _ref.columns;
  var style = columns === 3 ? styles.editorialCol3 : medium ? styles.editorialCol2Medium : styles.editorialCol2;
  return _react.default.createElement("h1", _extends({}, styles.base, style), children);
};

exports.Editorial = Editorial;

var Interaction = function Interaction(_ref2) {
  var children = _ref2.children,
      medium = _ref2.medium,
      columns = _ref2.columns;
  var style = columns === 3 ? styles.interactionCol3 : medium ? styles.interactionCol2Medium : styles.interactionCol2;
  return _react.default.createElement("h1", _extends({}, styles.base, style), children);
};

exports.Interaction = Interaction;

var Scribble = function Scribble(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("h1", _extends({}, styles.base, styles.scribble), children);
};

exports.Scribble = Scribble;