"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Node = function Node(props) {
  var _props$visualDepth = props.visualDepth,
      visualDepth0 = _props$visualDepth === void 0 ? 1 : _props$visualDepth,
      head0 = props.head,
      tail0 = props.tail,
      _props$logicalDepth = props.logicalDepth,
      logicalDepth = _props$logicalDepth === void 0 ? 0 : _props$logicalDepth,
      _props$otherChild = props.otherChild,
      otherChild0 = _props$otherChild === void 0 ? false : _props$otherChild,
      t = props.t,
      top = props.top,
      displayAuthor = props.displayAuthor,
      comment = props.comment,
      timeago = props.timeago,
      onEditPreferences = props.onEditPreferences,
      isAdmin = props.isAdmin,
      More = props.More;
  var comments = comment.comments;
  var hasChildren = comments && comments.totalCount > 0; // Adjust the visual depth and other options based on the shape of the comment
  // (and its children).

  var _ref = function () {
    if (top) {
      if (hasChildren) {
        // Top node with children. Is head but not tail so that the
        // bar continues.
        return {
          visualDepth: 1,
          head: true,
          tail: false,
          otherChild: false
        };
      } // Top node with no children. No vertical bars.


      return {
        visualDepth: 1,
        head: true,
        tail: true,
        otherChild: true
      };
    }

    if (otherChild0) {
      if (hasChildren) {
        // An 'otherChild' with children itself. Clear the 'otherChild'
        // flag and increase the visual depth, so that we can draw
        // a continuous bar across all children.
        return {
          visualDepth: visualDepth0 + 1,
          head: true,
          tail: false,
          otherChild: false
        };
      } // An 'otherChild' with no children. Keep the vertical bar continuous.


      return {
        visualDepth: visualDepth0 + 1,
        head: false,
        tail: false,
        otherChild: true
      };
    }

    if (hasChildren) {
      return {
        visualDepth: visualDepth0,
        head: head0,
        tail: false,
        otherChild: false
      };
    }

    return {
      visualDepth: visualDepth0,
      head: head0,
      tail: tail0,
      otherChild: otherChild0
    };
  }(),
      visualDepth = _ref.visualDepth,
      head = _ref.head,
      tail = _ref.tail,
      otherChild = _ref.otherChild;

  var This = _react.default.createElement(_Row.default, {
    key: "this",
    t: t,
    visualDepth: visualDepth,
    head: head,
    tail: tail,
    otherChild: otherChild,
    comment: comment,
    displayAuthor: displayAuthor,
    onEditPreferences: onEditPreferences,
    isAdmin: isAdmin,
    submitComment: props.submitComment,
    editComment: props.editComment,
    upvoteComment: props.upvoteComment,
    downvoteComment: props.downvoteComment,
    unpublishComment: props.unpublishComment,
    timeago: timeago
  });

  if (comments === undefined) {
    return This;
  }

  var nodes = comments.nodes;
  return [This].concat(_toConsumableArray(function () {
    if (nodes && nodes.length > 0) {
      var _nodes = _toArray(nodes),
          firstChild = _nodes[0],
          otherChildren = _nodes.slice(1);

      return _toConsumableArray(otherChildren.map(function (c, i) {
        return _react.default.createElement(Node, _extends({}, props, {
          key: i,
          top: false,
          logicalDepth: logicalDepth + 1,
          visualDepth: visualDepth,
          head: true,
          tail: true,
          otherChild: true,
          comment: c
        }));
      })).concat([_react.default.createElement(More, {
        key: "more",
        visualDepth: visualDepth + 1,
        logicalDepth: logicalDepth + 1,
        comment: comment
      }), _react.default.createElement(Node, _extends({}, props, {
        top: false,
        logicalDepth: logicalDepth + 1,
        visualDepth: visualDepth,
        head: false,
        tail: true,
        otherChild: false,
        key: "firstChild",
        comment: firstChild
      }))]);
    }

    return [_react.default.createElement(More, {
      key: "more",
      visualDepth: visualDepth,
      connected: true,
      logicalDepth: logicalDepth + 1,
      comment: comment
    })];
  }()));
};

Node.propTypes = {
  t: _propTypes.default.func.isRequired,
  displayAuthor: _propTypes.default.object,
  comment: _propTypes.default.object.isRequired,
  timeago: _propTypes.default.func.isRequired,
  onEditPreferences: _propTypes.default.func.isRequired,
  upvoteComment: _propTypes.default.func.isRequired,
  downvoteComment: _propTypes.default.func.isRequired,
  submitComment: _propTypes.default.func.isRequired,
  More: _propTypes.default.func.isRequired
};
var _default = Node;
exports.default = _default;