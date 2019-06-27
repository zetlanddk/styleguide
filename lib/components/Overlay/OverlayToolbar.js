"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayToolbarConfirm = exports.OverlayToolbarClose = exports.OverlayToolbar = exports.height = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _close = _interopRequireDefault(require("react-icons/lib/md/close"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var height = 48;
exports.height = height;
var styles = {
  root: (0, _glamor.css)(_defineProperty({
    display: 'flex',
    height: "".concat(height, "px"),
    background: 'white',
    borderBottom: "1px solid ".concat(_colors.default.divider),
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 100
  }, _mediaQueries.mUp, {
    position: 'absolute'
  })),
  close: (0, _glamor.css)(_defineProperty({
    fontSize: '24px',
    height: "".concat(height, "px"),
    width: '38px',
    flexBasis: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    padding: '0',
    background: 'transparent',
    // For some reason 'justify-content' doesn't work in iOS, so
    // use auto margin to center the icon inside the button.
    '& > svg': {
      margin: '0 auto'
    }
  }, _mediaQueries.mUp, {
    width: '48px',
    flexBasis: '48px'
  })),
  confirm: (0, _glamor.css)(_objectSpread({
    height: "".concat(height, "px"),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    background: 'transparent'
  }, _styles.sansSerifRegular16, _defineProperty({
    color: _colors.default.primary,
    margin: '0 0 0 auto',
    padding: '0 12px'
  }, _mediaQueries.mUp, {
    padding: '0 20px'
  })))
};

var OverlayToolbar = function OverlayToolbar(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", styles.root, children);
};

exports.OverlayToolbar = OverlayToolbar;
OverlayToolbar.propTypes = {
  children: _propTypes.default.node.isRequired
};

var OverlayToolbarClose = function OverlayToolbarClose(_ref2) {
  var onClick = _ref2.onClick;
  return _react.default.createElement("button", _extends({}, styles.close, {
    onClick: onClick
  }), _react.default.createElement(_close.default, null));
};

exports.OverlayToolbarClose = OverlayToolbarClose;
OverlayToolbarClose.propTypes = {
  onClick: _propTypes.default.func.isRequired
};

var OverlayToolbarConfirm = function OverlayToolbarConfirm(_ref3) {
  var label = _ref3.label,
      onClick = _ref3.onClick;
  return _react.default.createElement("button", _extends({}, styles.confirm, {
    onClick: onClick
  }), label);
};

exports.OverlayToolbarConfirm = OverlayToolbarConfirm;
OverlayToolbarConfirm.propTypes = {
  label: _propTypes.default.node.isRequired,
  onClick: _propTypes.default.func.isRequired
};