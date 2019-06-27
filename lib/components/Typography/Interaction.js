"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cursive = exports.Emphasis = exports.P = exports.H3 = exports.H2 = exports.H1 = exports.Headline = void 0;

var _react = _interopRequireDefault(require("react"));

var styles = _interopRequireWildcard(require("./styles"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _fonts = require("../../theme/fonts");

var _objectSpread2, _objectSpread3, _objectSpread4, _objectSpread5, _objectSpread6;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var interactionHeadline = (0, _glamor.css)(_objectSpread({
  margin: '0 0 12px 0'
}, styles.sansSerifMedium30, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifMedium58)), _defineProperty(_objectSpread2, "color", _colors.default.text), _defineProperty(_objectSpread2, ':first-child', {
  marginTop: 0
}), _defineProperty(_objectSpread2, ':last-child', {
  marginBottom: 0
}), _objectSpread2)));
var interactionH1 = (0, _glamor.css)(_objectSpread({}, styles.sansSerifMedium30, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifMedium40)), _defineProperty(_objectSpread3, "color", _colors.default.text), _defineProperty(_objectSpread3, "margin", 0), _objectSpread3)));
var interactionH2 = (0, _glamor.css)(_objectSpread({}, styles.sansSerifMedium22, (_objectSpread4 = {}, _defineProperty(_objectSpread4, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifMedium30)), _defineProperty(_objectSpread4, "color", _colors.default.text), _defineProperty(_objectSpread4, "margin", 0), _objectSpread4)));
var interactionH3 = (0, _glamor.css)(_objectSpread({}, styles.sansSerifMedium19, (_objectSpread5 = {}, _defineProperty(_objectSpread5, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifMedium22)), _defineProperty(_objectSpread5, "color", _colors.default.text), _defineProperty(_objectSpread5, "margin", 0), _objectSpread5)));
var interactionP = (0, _glamor.css)(_objectSpread({
  color: _colors.default.text
}, styles.sansSerifRegular16, (_objectSpread6 = {}, _defineProperty(_objectSpread6, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifRegular21)), _defineProperty(_objectSpread6, "margin", 0), _objectSpread6)));

var Headline = function Headline(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement("h1", _extends({}, props, interactionHeadline), children);
};

exports.Headline = Headline;

var H1 = function H1(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement("h1", _extends({}, props, interactionH1), children);
};

exports.H1 = H1;

var H2 = function H2(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement("h2", _extends({}, props, interactionH2), children);
};

exports.H2 = H2;

var H3 = function H3(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return _react.default.createElement("h3", _extends({}, props, interactionH3), children);
};

exports.H3 = H3;

var P = function P(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return _react.default.createElement("p", _extends({}, props, interactionP), children);
};

exports.P = P;
var emphasis = (0, _glamor.css)({
  fontWeight: 'normal',
  fontFamily: _fonts.fontFamilies.sansSerifMedium
});

var Emphasis = function Emphasis(_ref6) {
  var children = _ref6.children,
      attributes = _ref6.attributes,
      props = _objectWithoutProperties(_ref6, ["children", "attributes"]);

  return _react.default.createElement("strong", _extends({}, props, attributes, emphasis), children);
};

exports.Emphasis = Emphasis;
var cursive = (0, _glamor.css)({
  fontWeight: 'normal',
  fontFamily: _fonts.fontFamilies.sansSerifItalic,
  fontStyle: 'normal'
});

var Cursive = function Cursive(_ref7) {
  var children = _ref7.children,
      attributes = _ref7.attributes,
      props = _objectWithoutProperties(_ref7, ["children", "attributes"]);

  return _react.default.createElement("em", _extends({}, props, attributes, cursive), children);
};

exports.Cursive = Cursive;