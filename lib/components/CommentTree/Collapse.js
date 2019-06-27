"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

var _CommentHeader = require("../Comment/CommentHeader");

var _DepthBar = require("./DepthBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderWidth = 2;
var styles = {
  root: (0, _glamor.css)({
    position: 'relative',
    height: 0,
    borderTop: "".concat(borderWidth, "px solid ").concat(_colors.default.primary),
    marginTop: '-2px'
  }),
  button: (0, _glamor.css)(_objectSpread({
    position: 'absolute',
    top: -14,
    outline: 'none',
    display: 'block',
    WebkitAppearance: 'none',
    background: 'white',
    border: 'none',
    padding: '4px 0',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  }, _styles.sansSerifRegular14, {
    color: _colors.default.primary,
    lineHeight: 1
  }))
};

var Collapse = function Collapse(_ref) {
  var t = _ref.t,
      visualDepth = _ref.visualDepth,
      onClick = _ref.onClick;
  var depthWidth = (0, _DepthBar.getWidth)(visualDepth);
  var lineWidth = depthWidth - _CommentHeader.profilePictureSize / 2 - _CommentHeader.profilePictureMargin + borderWidth / 2;
  return _react.default.createElement("div", _extends({}, styles.root, {
    style: {
      width: lineWidth
    }
  }), _react.default.createElement("button", _extends({}, styles.button, {
    style: {
      left: depthWidth
    },
    onClick: onClick
  }), t('styleguide/CommentTreeCollapse/label')));
};

Collapse.propTypes = {
  t: _propTypes.default.func.isRequired,
  visualDepth: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = Collapse;
exports.default = _default;