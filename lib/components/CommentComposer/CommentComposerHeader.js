"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _edit = _interopRequireDefault(require("react-icons/lib/md/edit"));

var _check = _interopRequireDefault(require("react-icons/lib/md/check"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

var _styleMixins = require("../../lib/styleMixins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center',
    background: _colors.default.secondaryBg,
    padding: '12px'
  }),
  profilePicture: (0, _glamor.css)({
    display: 'block',
    width: '40px',
    height: '40px',
    marginRight: 10
  }),
  meta: (0, _glamor.css)({
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: 0
  }),
  name: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium16, {
    lineHeight: '20px',
    color: _colors.default.text
  }, _styleMixins.ellipsize)),
  description: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular14, {
    lineHeight: '20px',
    color: _colors.default.lightText,
    display: 'flex',
    alignItems: 'center'
  })),
  descriptionText: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize)),
  verifiedDescription: (0, _glamor.css)({
    color: _colors.default.text
  }),
  verifiedCheck: (0, _glamor.css)({
    flexShrink: 0,
    display: 'inline-block',
    marginLeft: 4,
    marginTop: -2
  }),
  actionButton: (0, _glamor.css)({
    outline: 'none',
    WebkitAppearance: 'none',
    background: 'transparent',
    border: 'none',
    flexShrink: 0,
    alignSelf: 'stretch',
    margin: '-12px -12px -12px 0',
    padding: '15px 20px',
    fontSize: '24px',
    cursor: 'pointer'
  })
};

var CommentComposerHeader = function CommentComposerHeader(_ref) {
  var profilePicture = _ref.profilePicture,
      name = _ref.name,
      credential = _ref.credential,
      onClick = _ref.onClick;
  return _react.default.createElement("div", styles.root, profilePicture && _react.default.createElement("img", _extends({}, styles.profilePicture, {
    src: profilePicture,
    alt: ""
  })), _react.default.createElement("div", styles.meta, _react.default.createElement("div", styles.name, name), credential && _react.default.createElement("div", _extends({}, styles.description, credential.verified ? styles.verifiedDescription : {}), _react.default.createElement("div", styles.descriptionText, credential.description), credential.verified && _react.default.createElement(_check.default, styles.verifiedCheck))), _react.default.createElement("button", _extends({}, styles.actionButton, {
    onClick: onClick
  }), _react.default.createElement(_edit.default, null)));
};

var _default = CommentComposerHeader;
exports.default = _default;