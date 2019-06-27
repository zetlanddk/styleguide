"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center',
    background: _colors.default.secondaryBg,
    padding: '12px',
    height: '64px',
    cursor: 'pointer'
  }),
  profilePicture: (0, _glamor.css)({
    display: 'block',
    width: '40px',
    height: '40px',
    marginRight: 10
  }),
  meta: (0, _glamor.css)(_objectSpread({}, _styles.serifRegular16, {
    color: _colors.default.lightText,
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: 0
  }))
};

var CommentComposerPlaceholder = function CommentComposerPlaceholder(_ref) {
  var t = _ref.t,
      profilePicture = _ref.profilePicture,
      onClick = _ref.onClick;
  return _react.default.createElement("div", _extends({}, styles.root, {
    onClick: onClick
  }), profilePicture && _react.default.createElement("img", _extends({}, styles.profilePicture, {
    src: profilePicture,
    alt: ""
  })), _react.default.createElement("div", styles.meta, t('styleguide/CommentComposer/placeholder')));
};

var _default = CommentComposerPlaceholder;
exports.default = _default;