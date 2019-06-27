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

var styles = {
  root: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'flex-start',
    height: 30
  }),
  line: (0, _glamor.css)({
    flex: 1
  }),
  button: (0, _glamor.css)(_objectSpread({
    outline: 'none',
    display: 'inline-block',
    WebkitAppearance: 'none',
    background: 'transparent',
    border: 'none',
    padding: '4px 0 4px 0',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  }, _styles.sansSerifRegular14, {
    color: _colors.default.primary,
    lineHeight: 1
  })),
  connected: (0, _glamor.css)({
    display: 'inline-block',
    width: _CommentHeader.profilePictureSize / 2,
    marginTop: 18,
    marginRight: 8,
    borderTop: "2px solid ".concat(_colors.default.primary),
    marginBottom: 3
  })
};

var marginLeft = function marginLeft(connected) {
  return connected ? _CommentHeader.profilePictureMargin + _CommentHeader.profilePictureSize / 2 : 0;
};

var LoadMore = function LoadMore(_ref) {
  var t = _ref.t,
      visualDepth = _ref.visualDepth,
      connected = _ref.connected,
      count = _ref.count,
      onClick = _ref.onClick;
  return _react.default.createElement("div", styles.root, _react.default.createElement(_DepthBar.DepthBars, {
    count: visualDepth,
    tail: connected
  }), _react.default.createElement("div", _extends({}, styles.line, {
    style: {
      marginLeft: -marginLeft(connected)
    }
  }), connected && _react.default.createElement("span", styles.connected), _react.default.createElement("button", _extends({}, styles.button, {
    onClick: onClick
  }), t.pluralize('styleguide/CommentTreeLoadMore/label', {
    count: count
  }))));
};

LoadMore.propTypes = {
  t: _propTypes.default.func.isRequired,
  visualDepth: _propTypes.default.number.isRequired,
  count: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = LoadMore;
exports.default = _default;