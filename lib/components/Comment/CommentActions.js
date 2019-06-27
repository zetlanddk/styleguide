"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CommentActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _keyboardArrowDown = _interopRequireDefault(require("react-icons/lib/md/keyboard-arrow-down"));

var _keyboardArrowUp = _interopRequireDefault(require("react-icons/lib/md/keyboard-arrow-up"));

var _visibilityOff = _interopRequireDefault(require("react-icons/lib/md/visibility-off"));

var _edit = _interopRequireDefault(require("react-icons/lib/md/edit"));

var _reply = _interopRequireDefault(require("react-icons/lib/md/reply"));

var _share = _interopRequireDefault(require("react-icons/lib/md/share"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styleMixins = require("../../lib/styleMixins");

var _Typography = require("../Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = {
  right: 26,
  left: 20
};
var buttonStyle = {
  outline: 'none',
  WebkitAppearance: 'none',
  background: 'transparent',
  border: 'none',
  padding: '0',
  display: 'block',
  cursor: 'pointer'
};
var styles = {
  root: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      display: 'block'
    }
  }),
  rightActions: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    lineHeight: '1',
    marginLeft: 'auto'
  }),
  leftActions: (0, _glamor.css)({
    display: 'flex',
    marginRight: 'auto',
    flexWrap: 'nowrap'
  }),
  votes: (0, _glamor.css)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  vote: (0, _glamor.css)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  voteDivider: (0, _glamor.css)({
    color: _colors.default.disabled,
    padding: '0 2px'
  }),
  iconButton: (0, _glamor.css)(_objectSpread({}, buttonStyle, {
    margin: '0 4px',
    '& svg': {
      margin: '0 auto'
    },
    '&[disabled]': {
      cursor: 'inherit',
      color: _colors.default.disabled
    }
  })),
  rightButton: (0, _glamor.css)({
    display: 'flex',
    justifyContent: 'center',
    height: "".concat(config.right, "px"),
    width: '24px',
    fontSize: "".concat(config.right, "px"),
    lineHeight: "".concat(config.right, "px"),
    margin: 0,
    '& > svg': {
      flexShrink: 0
    }
  }),
  leftButton: (0, _glamor.css)({
    height: "".concat(config.left, "px"),
    width: "".concat(config.left, "px"),
    fontSize: "".concat(config.left, "px"),
    lineHeight: "".concat(config.left, "px")
  }),
  collapsed: (0, _glamor.css)({
    borderTop: "1px solid ".concat(_colors.default.divider),
    paddingTop: '6px'
  }),
  centerButton: (0, _glamor.css)(_objectSpread({}, buttonStyle, _styleMixins.ellipsize, {
    flex: '1 0 20px'
  })),
  centerLabel: (0, _glamor.css)({
    color: _colors.default.primary
  })
};

var CommentActions = function CommentActions(_ref) {
  var t = _ref.t,
      downVotes = _ref.downVotes,
      upVotes = _ref.upVotes,
      onAnswer = _ref.onAnswer,
      onEdit = _ref.onEdit,
      onUnpublish = _ref.onUnpublish,
      onShare = _ref.onShare,
      onUpvote = _ref.onUpvote,
      onDownvote = _ref.onDownvote,
      replyBlockedMsg = _ref.replyBlockedMsg,
      highlighted = _ref.highlighted,
      collapsed = _ref.collapsed,
      onToggleCollapsed = _ref.onToggleCollapsed;
  var collapsable = collapsed !== undefined;
  var collapseLabel = t("styleguide/CommentActions/".concat(collapsed ? 'expand' : 'collapse'));
  return _react.default.createElement("div", _extends({}, styles.root, collapsable && collapsed && !highlighted && styles.collapsed), _react.default.createElement("div", styles.leftActions, onAnswer && _react.default.createElement(IconButton, {
    type: "left",
    onClick: replyBlockedMsg ? null : onAnswer,
    title: replyBlockedMsg || t('styleguide/CommentActions/answer')
  }, _react.default.createElement(_reply.default, {
    fill: replyBlockedMsg ? _colors.default.disabled : _colors.default.text
  })), onEdit && _react.default.createElement(IconButton, {
    type: "left",
    onClick: onEdit,
    title: t('styleguide/CommentActions/edit')
  }, _react.default.createElement(_edit.default, null)), onUnpublish && _react.default.createElement(IconButton, {
    type: "left",
    onClick: onUnpublish,
    title: t('styleguide/CommentActions/unpublish')
  }, _react.default.createElement(_visibilityOff.default, null)), onShare && _react.default.createElement(IconButton, {
    type: "left",
    onClick: onShare,
    title: t('styleguide/CommentActions/share')
  }, _react.default.createElement(_share.default, null))), collapsable && _react.default.createElement("button", _extends({}, styles.centerButton, {
    onClick: onToggleCollapsed,
    title: collapseLabel
  }), _react.default.createElement(_Typography.Label, null, _react.default.createElement("span", styles.centerLabel, collapseLabel))), _react.default.createElement("div", styles.rightActions, _react.default.createElement("div", styles.votes, _react.default.createElement("div", styles.vote, _react.default.createElement(IconButton, {
    onClick: onUpvote,
    title: t('styleguide/CommentActions/upvote')
  }, _react.default.createElement(_keyboardArrowUp.default, null)), _react.default.createElement(_Typography.Label, {
    title: t.pluralize('styleguide/CommentActions/upvote/count', {
      count: upVotes
    })
  }, upVotes)), _react.default.createElement("div", styles.voteDivider, "/"), _react.default.createElement("div", styles.vote, _react.default.createElement(_Typography.Label, {
    title: t.pluralize('styleguide/CommentActions/downvote/count', {
      count: downVotes
    })
  }, downVotes), _react.default.createElement(IconButton, {
    onClick: onDownvote,
    title: t('styleguide/CommentActions/downvote')
  }, _react.default.createElement(_keyboardArrowDown.default, null))))));
}; // Use the 'iconSize' to adjust the visual weight of the icon. For example
// the 'MdShareIcon' looks much larger next to 'MdKeyboardArrowUp' if both
// have the same dimensions.
//
// The outer dimensions of the action button element is always the same:
// square and as tall as the 'CommentAction' component.


exports.CommentActions = CommentActions;

var IconButton = function IconButton(_ref2) {
  var iconSize = _ref2.iconSize,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'right' : _ref2$type,
      onClick = _ref2.onClick,
      title = _ref2.title,
      children = _ref2.children;
  return _react.default.createElement("button", _extends({}, styles.iconButton, styles["".concat(type, "Button")], {
    title: title,
    disabled: !onClick,
    onClick: onClick
  }), children);
};

var _default = CommentActions;
exports.default = _default;