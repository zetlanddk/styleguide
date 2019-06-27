"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("../TeaserFront/mediaQueries");

var _styles = require("../Typography/styles");

var _folderOpen = _interopRequireDefault(require("react-icons/lib/fa/folder-open"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  tag: (0, _glamor.css)(_objectSpread({
    display: 'inline-block'
  }, _styles.sansSerifMedium14, _defineProperty({
    margin: '0 0 18px 0'
  }, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifMedium20, {
    margin: '0 0 28px 0'
  })))),
  icon: (0, _glamor.css)({
    marginRight: '8px'
  })
};

var Tag = function Tag(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react.default.createElement("div", _extends({}, attributes, styles.tag), _react.default.createElement(_folderOpen.default, _extends({}, styles.icon, {
    size: 24
  })), children);
};

var _default = Tag;
exports.default = _default;