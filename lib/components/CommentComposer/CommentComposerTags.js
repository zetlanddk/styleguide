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

var _Radio = _interopRequireDefault(require("../Form/Radio"));

var _mediaQueries = require("../../theme/mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: (0, _glamor.css)({
    background: _colors.default.secondaryBg,
    padding: '12px'
  }),
  title: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium16, {
    lineHeight: '20px',
    color: _colors.default.text,
    marginBottom: 10
  })),
  tags: (0, _glamor.css)(_defineProperty({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }, _mediaQueries.mUp, {
    flexDirection: 'row'
  })),
  tag: (0, _glamor.css)(_defineProperty({
    marginRight: 24,
    '& ~ &': {
      marginTop: 5
    }
  }, _mediaQueries.mUp, {
    '& ~ &': {
      marginTop: 0
    }
  }))
};

var CommentComposerTags = function CommentComposerTags(_ref) {
  var tagRequired = _ref.tagRequired,
      tags = _ref.tags,
      value = _ref.value,
      _onChange = _ref.onChange;
  return _react.default.createElement("div", styles.root, _react.default.createElement("div", styles.tags, tags && !!tags.length && tags.map(function (tag) {
    return _react.default.createElement("div", _extends({}, styles.tag, {
      key: tag
    }), _react.default.createElement(_Radio.default, {
      value: tag,
      checked: value === tag,
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      }
    }, tag));
  })));
};

CommentComposerTags.propTypes = {
  t: _propTypes.default.func.isRequired,
  tagRequired: _propTypes.default.bool,
  tags: _propTypes.default.arrayOf(_propTypes.default.string),
  value: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired
};
var _default = CommentComposerTags;
exports.default = _default;