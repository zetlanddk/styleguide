"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _styles = require("../Typography/styles");

var _Figure = require("../Figure");

var _Header = require("./Header");

var _playArrow = _interopRequireDefault(require("react-icons/lib/md/play-arrow"));

var _objectSpread2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)(_defineProperty({
    display: 'block',
    textDecoration: 'none',
    borderBottom: "1px solid ".concat(_colors.default.text),
    borderTop: "1px solid ".concat(_colors.default.text),
    margin: '36px auto',
    paddingTop: '10px',
    position: 'relative',
    maxWidth: '455px'
  }, _mediaQueries.mUp, {
    margin: '45px auto',
    paddingTop: '10px'
  })),
  text: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular15, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular18)), _defineProperty(_objectSpread2, "color", _colors.default.text), _defineProperty(_objectSpread2, '& a', _objectSpread({}, _styles.link)), _objectSpread2))),
  mediaContainer: (0, _glamor.css)({
    display: 'inline-block',
    position: 'relative'
  }),
  playIcon: (0, _glamor.css)({
    color: '#fff',
    lineHeight: 0,
    position: 'absolute',
    fontSize: '80px',
    left: 'calc(50% - 40px)',
    top: 'calc(50% - 40px)'
  })
};

var Tweet = function Tweet(_ref) {
  var attributes = _ref.attributes,
      html = _ref.html,
      url = _ref.url,
      userName = _ref.userName,
      userScreenName = _ref.userScreenName,
      date = _ref.date,
      userProfileImageUrl = _ref.userProfileImageUrl,
      image = _ref.image,
      more = _ref.more,
      playable = _ref.playable;
  return _react.default.createElement("div", _extends({}, attributes, styles.container), _react.default.createElement(_Header.Header, {
    url: url,
    userProfileImageUrl: userProfileImageUrl,
    name: userName,
    handle: userScreenName,
    date: date
  }), _react.default.createElement("p", _extends({}, styles.text, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })), image && _react.default.createElement(_Figure.Figure, null, _react.default.createElement("a", _extends({
    href: url,
    target: "_blank"
  }, styles.mediaContainer), playable && _react.default.createElement("span", styles.playIcon, _react.default.createElement(_playArrow.default, null)), _react.default.createElement(_Figure.FigureImage, {
    src: image,
    alt: ""
  })), more && _react.default.createElement(_Figure.FigureCaption, null, _react.default.createElement("a", _extends({
    href: url,
    target: "_blank"
  }, (0, _glamor.css)(_styles.link)), more))));
};

Tweet.propTypes = {
  attributes: _propTypes.default.object,
  html: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired,
  userProfileImageUrl: _propTypes.default.string.isRequired,
  userName: _propTypes.default.string.isRequired,
  userScreenName: _propTypes.default.string.isRequired,
  date: _propTypes.default.object.isRequired,
  image: _propTypes.default.string,
  more: _propTypes.default.string,
  playable: _propTypes.default.bool
};
Tweet.defaultProps = {
  platform: 'twitter'
};
var _default = Tweet;
exports.default = _default;