"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _List.List;
  }
});
Object.defineProperty(exports, "UL", {
  enumerable: true,
  get: function get() {
    return _List.UnorderedList;
  }
});
Object.defineProperty(exports, "OL", {
  enumerable: true,
  get: function get() {
    return _List.OrderedList;
  }
});
Object.defineProperty(exports, "LI", {
  enumerable: true,
  get: function get() {
    return _List.ListItem;
  }
});
exports.Headline = void 0;

var _react = _interopRequireDefault(require("react"));

var styles = _interopRequireWildcard(require("./styles"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _List = require("../List");

var _objectSpread2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headline = (0, _glamor.css)(_objectSpread({}, styles.cursiveTitle30, (_objectSpread2 = {
  margin: '0 0 12px 0'
}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, styles.cursiveTitle58, {
  margin: '0 0 12px 0'
})), _defineProperty(_objectSpread2, "color", _colors.default.text), _defineProperty(_objectSpread2, ':first-child', {
  marginTop: 0
}), _defineProperty(_objectSpread2, ':last-child', {
  marginBottom: 0
}), _objectSpread2)));

var Headline = function Headline(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      props = _objectWithoutProperties(_ref, ["children", "attributes"]);

  return _react.default.createElement("h1", _extends({}, attributes, props, headline), children);
};

exports.Headline = Headline;