"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quote = exports.HR = exports.Sup = exports.Sub = exports.Label = exports.P = exports.Lead = exports.H2 = exports.H1 = exports.A = exports.linkRule = exports.fontStyles = exports.Scribble = exports.Interaction = exports.Editorial = void 0;

var _react = _interopRequireDefault(require("react"));

var styles = _interopRequireWildcard(require("./styles"));

var _Editorial = _interopRequireWildcard(require("./Editorial"));

var _Interaction = _interopRequireWildcard(require("./Interaction"));

var _Scribble = _interopRequireWildcard(require("./Scribble"));

var _glamor = require("glamor");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Namespaced exports.
var Editorial = _objectSpread({}, _Editorial);

exports.Editorial = Editorial;

var Interaction = _objectSpread({}, _Interaction);

exports.Interaction = Interaction;

var Scribble = _objectSpread({}, _Scribble); // Direct exports.


exports.Scribble = Scribble;
var fontStyles = styles;
exports.fontStyles = fontStyles;
var linkRule = (0, _glamor.css)(styles.link);
exports.linkRule = linkRule;

var A = function A(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement("a", _extends({}, props, linkRule), children);
};

exports.A = A;
var h1Rule = (0, _glamor.css)(styles.h1);

var H1 = function H1(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement("h1", _extends({}, props, h1Rule), children);
};

exports.H1 = H1;
var h2Rule = (0, _glamor.css)(styles.h2);

var H2 = function H2(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement("h2", _extends({}, props, h2Rule), children);
};

exports.H2 = H2;
var leadRule = (0, _glamor.css)(styles.lead);

var Lead = function Lead(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return _react.default.createElement("p", _extends({}, props, leadRule), children);
};

exports.Lead = Lead;
var pRule = (0, _glamor.css)(styles.p);

var P = function P(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return _react.default.createElement("p", _extends({}, props, pRule), children);
};

exports.P = P;
var labelRule = (0, _glamor.css)(styles.label);

var Label = function Label(_ref6) {
  var children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["children"]);

  return _react.default.createElement("span", _extends({}, props, labelRule), children);
};

exports.Label = Label;
var subSupStyles = {
  base: (0, _glamor.css)({
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '75%',
    lineHeight: '1.4em',
    position: 'relative',
    verticalAlign: 'baseline'
  }),
  sub: (0, _glamor.css)({
    bottom: '-0.25em'
  }),
  sup: (0, _glamor.css)({
    top: '-0.5em'
  })
};

var Sub = function Sub(_ref7) {
  var children = _ref7.children,
      attributes = _ref7.attributes;
  return _react.default.createElement("sub", _extends({}, attributes, subSupStyles.base, subSupStyles.sub), children);
};

exports.Sub = Sub;

var Sup = function Sup(_ref8) {
  var children = _ref8.children,
      attributes = _ref8.attributes;
  return _react.default.createElement("sup", _extends({}, attributes, subSupStyles.base, subSupStyles.sup), children);
};

exports.Sup = Sup;
var hrRule = (0, _glamor.css)(styles.hr);

var HR = function HR(_ref9) {
  var attributes = _ref9.attributes;
  return _react.default.createElement("hr", _extends({}, attributes, hrRule));
};

exports.HR = HR;
var quoteRule = (0, _glamor.css)(styles.quote);
var quoteTextRule = (0, _glamor.css)(styles.quoteText);

var Quote = function Quote(_ref10) {
  var children = _ref10.children,
      source = _ref10.source,
      props = _objectWithoutProperties(_ref10, ["children", "source"]);

  return _react.default.createElement("blockquote", _extends({}, props, quoteRule), _react.default.createElement("div", quoteTextRule, "\xAB", children, "\xBB"), !!source && _react.default.createElement("cite", null, source));
};

exports.Quote = Quote;