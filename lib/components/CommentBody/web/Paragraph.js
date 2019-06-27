"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = exports.Definition = exports.Heading = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var Editorial = _interopRequireWildcard(require("../../Typography/Editorial"));

var _mediaQueries = require("../../../theme/mediaQueries");

var _styles = require("../../Typography/styles");

var _objectSpread2, _objectSpread3;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  p: (0, _glamor.css)(_objectSpread({}, _styles.serifRegular14, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.serifRegular16)), _defineProperty(_objectSpread2, "margin", '10px 0'), _defineProperty(_objectSpread2, ':first-child', {
    marginTop: 0
  }), _defineProperty(_objectSpread2, ':last-child', {
    marginBottom: 0
  }), _objectSpread2))),
  code: (0, _glamor.css)({
    backgroundColor: '#f7f7f7',
    borderRadius: '2px',
    display: 'inline-block',
    fontSize: '90%',
    padding: '0 5px'
  }),
  definition: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, (_objectSpread3 = {
    margin: '10px 0'
  }, _defineProperty(_objectSpread3, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular15)), _defineProperty(_objectSpread3, '& ~ &', {
    marginTop: -5
  }), _objectSpread3)))
};

var Paragraph = function Paragraph(_ref) {
  var children = _ref.children;
  return _react.default.createElement("p", styles.p, children);
};

var Heading = function Heading(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement(Paragraph, null, _react.default.createElement(Editorial.Emphasis, null, children));
};

exports.Heading = Heading;

var Definition = function Definition(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("p", styles.definition, children);
};

exports.Definition = Definition;

var Code = function Code(_ref4) {
  var children = _ref4.children;
  return _react.default.createElement("code", styles.code, children);
};

exports.Code = Code;
var _default = Paragraph;
exports.default = _default;