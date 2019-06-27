"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DepthBars = exports.DepthBar = exports.getWidth = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _CommentHeader = require("../Comment/CommentHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var borderWidth = 2;
var marginLeftFirst = _CommentHeader.profilePictureSize / 2 - borderWidth / 2;
var marginLeft = borderWidth / 2;
var marginRight = _CommentHeader.profilePictureSize / 2 - borderWidth / 2 + _CommentHeader.profilePictureMargin;
var FIRST_WIDTH = marginLeftFirst + marginRight + borderWidth;
var WIDTH = marginLeft + marginRight + borderWidth;

var getWidth = function getWidth(count) {
  if (!count) {
    return 0;
  }

  return FIRST_WIDTH + WIDTH * (count - 1);
};

exports.getWidth = getWidth;
var styles = {
  depthBar: (0, _glamor.css)({
    width: 0,
    flexBasis: 0,
    flexShrink: 0,
    flexGrow: 0,
    alignSelf: 'stretch',
    borderLeft: "".concat(borderWidth, "px solid ").concat(_colors.default.primary),
    marginRight: marginRight
  }),
  head: (0, _glamor.css)({
    marginTop: 20 + _CommentHeader.profilePictureSize
  }),
  tail: (0, _glamor.css)({
    height: 20
  })
};

var range = function range(n) {
  return Array.from(new Array(n));
};

var DepthBar = function DepthBar(_ref) {
  var first = _ref.first,
      head = _ref.head,
      tail = _ref.tail;
  return _react.default.createElement("div", _extends({}, styles.depthBar, head ? styles.head : {}, tail ? styles.tail : {}, {
    style: {
      marginLeft: first ? marginLeftFirst : marginLeft
    }
  }));
};

exports.DepthBar = DepthBar;
DepthBar.propTypes = {
  head: _propTypes.default.bool,
  tail: _propTypes.default.bool
};

var DepthBars = function DepthBars(_ref2) {
  var count = _ref2.count,
      head = _ref2.head,
      tail = _ref2.tail;
  return range(count).map(function (_, index) {
    return _react.default.createElement(DepthBar, {
      key: index,
      first: index === 0,
      head: index === count - 1 && head,
      tail: index === count - 1 && tail
    });
  });
};

exports.DepthBars = DepthBars;
DepthBars.propTypes = {
  count: _propTypes.default.number.isRequired,
  head: _propTypes.default.bool,
  tail: _propTypes.default.bool
};