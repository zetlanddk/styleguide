"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LoadMore", {
  enumerable: true,
  get: function get() {
    return _LoadMore.default;
  }
});
Object.defineProperty(exports, "Collapse", {
  enumerable: true,
  get: function get() {
    return _Collapse.default;
  }
});
exports.Node = exports.Row = exports.comments = void 0;

var _react = _interopRequireDefault(require("react"));

var _Row = _interopRequireDefault(require("./Row"));

var _Node = _interopRequireDefault(require("./Node"));

var allComments = _interopRequireWildcard(require("./comments"));

var _LoadMore = _interopRequireDefault(require("./LoadMore"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var comments = _objectSpread({}, allComments);

exports.comments = comments;

var Row = function Row(props) {
  return _react.default.createElement(_Row.default, _extends({
    head: false,
    tail: false,
    displayAuthor: {
      profilePicture: '/static/profilePicture1.png',
      name: "Christof Moser",
      credential: {
        description: 'Journalist',
        verified: true
      }
    },
    showComposer: false,
    onEditPreferences: function onEditPreferences() {},
    onAnswer: function onAnswer() {},
    onUpvote: function onUpvote() {},
    onDownvote: function onDownvote() {},
    dismissComposer: function dismissComposer() {},
    submitComment: function submitComment() {},
    timeago: function timeago() {
      return '2h';
    }
  }, props));
};

exports.Row = Row;

var Node = function Node(_ref) {
  var t = _ref.t,
      comment = _ref.comment;
  return _react.default.createElement(_Node.default, {
    top: true,
    t: t,
    displayAuthor: {
      profilePicture: '/static/profilePicture1.png',
      name: "Christof Moser",
      credential: {
        description: 'Journalist',
        verified: true
      }
    },
    comment: comment,
    timeago: function timeago() {
      return '2h';
    },
    onEditPreferences: function onEditPreferences() {},
    upvoteComment: function upvoteComment() {},
    downvoteComment: function downvoteComment() {},
    submitComment: function submitComment() {},
    More: function More(_ref2) {
      var visualDepth = _ref2.visualDepth,
          connected = _ref2.connected,
          comments = _ref2.comment.comments;

      if (comments && comments.pageInfo && comments.pageInfo.hasNextPage) {
        return _react.default.createElement(_LoadMore.default, {
          t: t,
          visualDepth: visualDepth,
          connected: connected,
          count: comments.totalCount - (comments.nodes || []).length,
          onClick: function onClick() {}
        });
      } else {
        return null;
      }
    }
  });
};

exports.Node = Node;