"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CommentTeaser = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _get = _interopRequireDefault(require("lodash/get"));

var _openInNew = _interopRequireDefault(require("react-icons/lib/md/open-in-new"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styleMixins = require("../../lib/styleMixins");

var _inQuotes = require("../../lib/inQuotes");

var _Typography = require("../Typography/");

var _styles = require("../Typography/styles");

var _web = require("../CommentBody/web");

var _CommentContext = _interopRequireDefault(require("../Comment/CommentContext"));

var _CommentHeader = _interopRequireDefault(require("../Comment/CommentHeader"));

var _RawHtml = _interopRequireDefault(require("../RawHtml/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: (0, _glamor.css)({
    borderTop: "1px solid ".concat(_colors.default.text),
    margin: '0 0 40px 0',
    paddingTop: 10
  }),
  header: (0, _glamor.css)({
    marginBottom: 10
  }),
  body: (0, _glamor.css)(_objectSpread({}, _styles.serifRegular14, {
    color: _colors.default.text,
    margin: '10px 0'
  })),
  link: (0, _glamor.css)({
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    '& em': {
      background: _colors.default.primaryBg,
      fontStyle: 'normal'
    }
  }),
  linkUnderline: (0, _glamor.css)({
    color: 'inherit',
    textDecoration: 'none',
    ':hover': _objectSpread({}, _styleMixins.underline)
  }),
  footer: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular14, {
    display: 'flex',
    justifyContent: 'space-between'
  })),
  discussionReference: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize, {
    color: _colors.default.lightText,
    position: 'relative'
  })),
  icon: (0, _glamor.css)({
    position: 'absolute',
    right: 0,
    marginTop: '-2px'
  }),
  timeago: (0, _glamor.css)({
    color: _colors.default.lightText,
    flexShrink: 0,
    paddingLeft: 10
  })
};
var ICON_SIZE = 18;

var DefaultLink = function DefaultLink(_ref) {
  var children = _ref.children;
  return children;
};

var CommentTeaser = function CommentTeaser(_ref2) {
  var t = _ref2.t,
      id = _ref2.id,
      displayAuthor = _ref2.displayAuthor,
      preview = _ref2.preview,
      highlights = _ref2.highlights,
      createdAt = _ref2.createdAt,
      timeago = _ref2.timeago,
      _ref2$Link = _ref2.Link,
      Link = _ref2$Link === void 0 ? DefaultLink : _ref2$Link,
      discussion = _ref2.discussion,
      tags = _ref2.tags,
      parentIds = _ref2.parentIds,
      onClick = _ref2.onClick,
      newPage = _ref2.newPage;
  var highlight = (0, _get.default)(highlights, '[0].fragments[0]', '').trim();
  var endsWithPunctuation = highlight && (Math.abs(highlight.lastIndexOf('...') - highlight.length) < 4 || Math.abs(highlight.lastIndexOf('…') - highlight.length) < 2 || Math.abs(highlight.lastIndexOf('.') - highlight.length) < 2); // assuming frontend currently supports only one tag.

  var tag = tags && !!tags.length && tags[0];
  return _react.default.createElement("div", _extends({
    id: id
  }, styles.root), displayAuthor && _react.default.createElement("div", styles.header, _react.default.createElement(_CommentHeader.default, _extends({}, displayAuthor, {
    commentId: id,
    createdAt: createdAt,
    timeago: timeago,
    discussion: discussion,
    Link: Link
  }))), tag && _react.default.createElement(_CommentContext.default, {
    title: _react.default.createElement(Link, {
      commentId: id,
      discussion: discussion,
      passHref: true
    }, _react.default.createElement("a", styles.link, tag))
  }), _react.default.createElement("div", _extends({}, styles.body, {
    style: {
      marginTop: displayAuthor || tag ? undefined : 0
    }
  }), _react.default.createElement(_web.CommentBodyParagraph, null, _react.default.createElement(Link, {
    commentId: id,
    discussion: discussion,
    passHref: true
  }, _react.default.createElement("a", styles.link, !!preview && !highlight && _react.default.createElement(_react.Fragment, null, preview.string, !!preview.more && _react.default.createElement(_react.Fragment, null, "\xA0\u2026")), !!highlight && _react.default.createElement(_react.Fragment, null, _react.default.createElement(_RawHtml.default, {
    dangerouslySetInnerHTML: {
      __html: highlight
    }
  }), !endsWithPunctuation && _react.default.createElement(_react.Fragment, null, "\xA0\u2026")))))), _react.default.createElement("div", styles.footer, _react.default.createElement("div", _extends({}, styles.discussionReference, {
    style: {
      paddingRight: newPage ? "".concat(ICON_SIZE + 5, "px") : undefined
    }
  }), t.elements("styleguide/CommentTeaser/".concat(parentIds && parentIds.length ? 'reply' : 'comment', "/link"), {
    link: _react.default.createElement(Link, {
      key: id,
      commentId: id,
      discussion: discussion,
      passHref: true
    }, _react.default.createElement("a", _Typography.linkRule, (0, _inQuotes.inQuotes)(discussion.title), newPage && _react.default.createElement("span", styles.icon, _react.default.createElement(_openInNew.default, {
      size: ICON_SIZE,
      fill: _colors.default.disabled
    }))))
  })), !displayAuthor && _react.default.createElement("div", styles.timeago, _react.default.createElement(Link, {
    commentId: id,
    discussion: discussion,
    passHref: true
  }, _react.default.createElement("a", styles.linkUnderline, timeago(createdAt))))));
};

exports.CommentTeaser = CommentTeaser;
var _default = CommentTeaser;
exports.default = _default;