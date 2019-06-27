"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CommentHeader = exports.profilePictureMargin = exports.profilePictureSize = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _check = _interopRequireDefault(require("react-icons/lib/md/check"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

var _styleMixins = require("../../lib/styleMixins");

var _timeFormat = require("../../lib/timeFormat");

var _BrandMark = require("../Logo/BrandMark");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
    alignItems: 'center'
  }),
  profilePicture: (0, _glamor.css)({
    display: 'block',
    width: "".concat(profilePictureSize + 2 * profilePictureBorderSize, "px"),
    flexGrow: 0,
    flexShrink: 0,
    height: "".concat(profilePictureSize + 2 * profilePictureBorderSize, "px"),
    margin: "".concat(-profilePictureBorderSize, "px ").concat(-profilePictureBorderSize + profilePictureMargin, "px ").concat(-profilePictureBorderSize, "px ").concat(-profilePictureBorderSize, "px"),
    border: "".concat(profilePictureBorderSize, "px solid")
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
    alignItems: 'center'
  })),
  nameText: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize)),
  timeago: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular14, {
    lineHeight: '20px',
    color: _colors.default.lightText,
    flexShrink: 0,
    flexGrow: 1,
    textAlign: 'right',
    paddingLeft: 5
  })),
  description: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular14, {
    lineHeight: '20px',
    color: _colors.default.lightText,
    display: 'flex',
    alignItems: 'center'
  })),
  descriptionText: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize)),
  verifiedCheck: (0, _glamor.css)({
    color: _colors.default.text,
    flexShrink: 0,
    display: 'inline-block',
    marginLeft: 4,
    marginTop: -2
  }),
  link: (0, _glamor.css)({
    color: 'inherit',
    textDecoration: 'none'
  }),
  linkUnderline: (0, _glamor.css)({
    color: 'inherit',
    textDecoration: 'none',
    ':hover': _objectSpread({}, _styleMixins.underline)
  })
};
var dateTimeFormat = (0, _timeFormat.timeFormat)('%d. %B %Y %H:%M');

var titleDate = function titleDate(string) {
  return dateTimeFormat(new Date(string));
};

var DefaultLink = function DefaultLink(_ref) {
  var children = _ref.children;
  return children;
};

var CommentHeader = function CommentHeader(_ref2) {
  var t = _ref2.t,
      commentId = _ref2.commentId,
      discussion = _ref2.discussion,
      _ref2$Link = _ref2.Link,
      Link = _ref2$Link === void 0 ? DefaultLink : _ref2$Link,
      timeago = _ref2.timeago,
      createdAt = _ref2.createdAt,
      updatedAt = _ref2.updatedAt,
      credential = _ref2.credential,
      highlighted = _ref2.highlighted,
      displayAuthor = _objectWithoutProperties(_ref2, ["t", "commentId", "discussion", "Link", "timeago", "createdAt", "updatedAt", "credential", "highlighted"]);

  var updated = updatedAt && updatedAt !== createdAt;
  var profilePicture = displayAuthor.profilePicture,
      name = displayAuthor.name;
  return _react.default.createElement("div", styles.root, _react.default.createElement(Link, {
    displayAuthor: displayAuthor,
    passHref: true
  }, _react.default.createElement("a", styles.link, _react.default.createElement("img", _extends({}, styles.profilePicture, {
    style: {
      borderColor: highlighted ? _colors.default.primaryBg : '#fff'
    },
    src: profilePicture || _BrandMark.DEFAULT_PROFILE_PICTURE,
    alt: ""
  })))), _react.default.createElement("div", styles.meta, _react.default.createElement("div", styles.name, _react.default.createElement("div", styles.nameText, _react.default.createElement(Link, {
    displayAuthor: displayAuthor,
    passHref: true
  }, _react.default.createElement("a", styles.link, name))), timeago && _react.default.createElement("span", _extends({}, styles.timeago, {
    title: titleDate(createdAt)
  }), _react.default.createElement(Link, {
    commentId: commentId,
    discussion: discussion,
    passHref: true
  }, _react.default.createElement("a", styles.linkUnderline, timeago(createdAt))))), (credential || updated) && _react.default.createElement("div", styles.description, credential && _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", _extends({}, styles.descriptionText, {
    style: {
      color: credential.verified ? _colors.default.text : _colors.default.lightText
    }
  }), credential.description), credential.verified && _react.default.createElement(_check.default, styles.verifiedCheck)), updated && _react.default.createElement("span", _extends({}, styles.timeago, {
    title: titleDate(updatedAt),
    style: {
      marginLeft: 15
    }
  }), t('styleguide/comment/header/updated')))));
};

exports.CommentHeader = CommentHeader;
var _default = CommentHeader;
exports.default = _default;