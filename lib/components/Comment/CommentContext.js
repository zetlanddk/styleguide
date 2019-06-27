"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CommentContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styleMixins = require("../../lib/styleMixins");

var _mediaQueries = require("../../theme/mediaQueries");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center'
  }),
  meta: (0, _glamor.css)({
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  }),
  title: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize, _styles.sansSerifMedium14, _defineProperty({
    color: _colors.default.text
  }, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifMedium16, {
    lineHeight: '20px'
  })))),
  description: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize, _styles.sansSerifRegular14, {
    color: _colors.default.text
  }))
};

var CommentContext = function CommentContext(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return _react.default.createElement("div", styles.root, _react.default.createElement("div", styles.meta, _react.default.createElement("div", styles.title, title), description && _react.default.createElement("div", styles.description, description)));
};

exports.CommentContext = CommentContext;
var _default = CommentContext;
exports.default = _default;