"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NarrowContainer = exports.Container = exports.CONTENT_MAX_WIDTH = exports.NARROW_CONTENT_MAX_WIDTH = exports.CONTENT_PADDING = exports.GUTTER = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GUTTER = 42;
exports.GUTTER = GUTTER;
var CONTENT_PADDING = 15;
exports.CONTENT_PADDING = CONTENT_PADDING;
var NARROW_CONTENT_MAX_WIDTH = 680;
exports.NARROW_CONTENT_MAX_WIDTH = NARROW_CONTENT_MAX_WIDTH;
var CONTENT_MAX_WIDTH = 1230;
exports.CONTENT_MAX_WIDTH = CONTENT_MAX_WIDTH;
var styles = {
  container: (0, _glamor.css)({
    boxSizing: 'border-box',
    width: '100%',
    padding: "0 ".concat(CONTENT_PADDING, "px"),
    maxWidth: CONTENT_MAX_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto'
  }),
  narrowContainer: (0, _glamor.css)({
    boxSizing: 'border-box',
    width: '100%',
    padding: "0 ".concat(CONTENT_PADDING, "px"),
    maxWidth: NARROW_CONTENT_MAX_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto'
  })
};

var Container = function Container(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement("div", _extends({}, props, styles.container), children);
};

exports.Container = Container;
Container.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.any
};

var NarrowContainer = function NarrowContainer(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement("div", _extends({}, props, styles.narrowContainer), children);
};

exports.NarrowContainer = NarrowContainer;
NarrowContainer.propTypes = {
  children: _propTypes.default.node
};