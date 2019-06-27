"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = exports.profilePictureMargin = exports.profilePictureSize = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _twitter = _interopRequireDefault(require("react-icons/lib/fa/twitter"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _styles = require("../Typography/styles");

var _styleMixins = require("../../lib/styleMixins");

var _timeFormat = require("../../lib/timeFormat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var profilePictureSize = 40;
exports.profilePictureSize = profilePictureSize;
var profilePictureMargin = 10;
exports.profilePictureMargin = profilePictureMargin;
var profilePictureBorderSize = 5;
var styles = {
  root: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  }),
  profilePicture: (0, _glamor.css)({
    display: 'block',
    width: "".concat(profilePictureSize + 2 * profilePictureBorderSize, "px"),
    flexGrow: 0,
    flexShrink: 0,
    height: "".concat(profilePictureSize + 2 * profilePictureBorderSize, "px"),
    margin: "".concat(-profilePictureBorderSize, "px ").concat(-profilePictureBorderSize + profilePictureMargin, "px ").concat(-profilePictureBorderSize, "px ").concat(-profilePictureBorderSize, "px"),
    border: "".concat(profilePictureBorderSize, "px solid white")
  }),
  meta: (0, _glamor.css)({
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: "calc(100% - ".concat(profilePictureSize + profilePictureMargin, "px)")
  }),
  name: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium16, {
    lineHeight: '20px',
    color: _colors.default.text,
    display: 'flex',
    alignItems: 'center',
    paddingRight: '15px'
  })),
  nameText: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize)),
  subline: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular14, {
    lineHeight: '20px',
    color: _colors.default.text,
    display: 'flex',
    alignItems: 'center'
  })),
  sublineText: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize)),
  icon: (0, _glamor.css)(_defineProperty({
    color: '#CDCDCD',
    position: 'absolute',
    right: 0,
    top: '2px',
    flexShrink: 0,
    display: 'inline-block',
    marginLeft: 4,
    fontSize: '17px'
  }, _mediaQueries.mUp, {
    fontSize: '24px',
    top: '8px'
  })),
  link: (0, _glamor.css)({
    textDecoration: 'none',
    color: _colors.default.text,
    ':visited': {
      color: _colors.default.text
    },
    ':hover': {
      color: _colors.default.lightText
    }
  })
};
var dateFormat = (0, _timeFormat.timeFormat)('%d. %B %Y');

var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return _react.default.createElement("a", _extends({
    href: href,
    target: "_blank"
  }, styles.link), children);
};

var UserLink = function UserLink(_ref2) {
  var handle = _ref2.handle,
      children = _ref2.children;
  return _react.default.createElement(Link, {
    href: "https://twitter.com/".concat(handle)
  }, children);
};

var Header = function Header(_ref3) {
  var url = _ref3.url,
      userProfileImageUrl = _ref3.userProfileImageUrl,
      name = _ref3.name,
      handle = _ref3.handle,
      date = _ref3.date;
  var cleanHandle = handle && handle.replace('@', '');
  return _react.default.createElement("div", styles.root, _react.default.createElement(UserLink, {
    handle: cleanHandle
  }, _react.default.createElement("img", _extends({}, styles.profilePicture, {
    src: userProfileImageUrl,
    alt: ""
  }))), _react.default.createElement(Link, {
    href: url
  }, _react.default.createElement(_twitter.default, styles.icon)), _react.default.createElement("div", styles.meta, _react.default.createElement("div", styles.name, _react.default.createElement("div", styles.nameText, _react.default.createElement(UserLink, {
    handle: cleanHandle
  }, name))), _react.default.createElement("div", styles.subline, _react.default.createElement("div", styles.sublineText, _react.default.createElement(UserLink, {
    handle: cleanHandle
  }, "@", cleanHandle), ",", ' ', _react.default.createElement(Link, {
    href: url
  }, dateFormat(date))))));
};

exports.Header = Header;
var _default = Header;
exports.default = _default;