"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _Comment = require("../Comment");

var _CommentHeader = require("../Comment/CommentHeader");

var _CommentComposer = _interopRequireDefault(require("../CommentComposer/CommentComposer"));

var _DepthBar = require("./DepthBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  root: (0, _glamor.css)({
    display: 'flex'
  }),
  commentComposerContainer: (0, _glamor.css)({
    marginTop: '20px',
    transition: 'opacity .2s'
  })
};

var Row = function Row(_ref) {
  var t = _ref.t,
      visualDepth = _ref.visualDepth,
      head = _ref.head,
      tail = _ref.tail,
      otherChild = _ref.otherChild,
      comment = _ref.comment,
      displayAuthor = _ref.displayAuthor,
      showComposer = _ref.showComposer,
      composerError = _ref.composerError,
      onEditPreferences = _ref.onEditPreferences,
      onAnswer = _ref.onAnswer,
      edit = _ref.edit,
      onUnpublish = _ref.onUnpublish,
      onShare = _ref.onShare,
      onUpvote = _ref.onUpvote,
      onDownvote = _ref.onDownvote,
      dismissComposer = _ref.dismissComposer,
      submitComment = _ref.submitComment,
      highlighted = _ref.highlighted,
      timeago = _ref.timeago,
      maxLength = _ref.maxLength,
      replyBlockedMsg = _ref.replyBlockedMsg,
      Link = _ref.Link,
      secondaryActions = _ref.secondaryActions,
      collapsed = _ref.collapsed,
      onToggleCollapsed = _ref.onToggleCollapsed,
      onShouldCollapse = _ref.onShouldCollapse,
      tags = _ref.tags,
      onTagChange = _ref.onTagChange,
      tagValue = _ref.tagValue,
      context = _ref.context;
  var isEditing = edit && edit.isEditing;
  var downVotes = comment.downVotes,
      upVotes = comment.upVotes;
  var barCount = visualDepth - (otherChild ? 1 : 0);
  return _react.default.createElement("div", styles.root, _react.default.createElement(_DepthBar.DepthBars, {
    count: barCount,
    head: head,
    tail: tail
  }), _react.default.createElement("div", {
    style: {
      flexGrow: 1,
      flexBasis: 0,
      margin: otherChild ? '20px 0' : "20px 0 20px -".concat(_CommentHeader.profilePictureSize + _CommentHeader.profilePictureMargin, "px"),
      width: "calc(100% - ".concat((0, _DepthBar.getWidth)(barCount), "px)")
    }
  }, !isEditing && _react.default.createElement(_Comment.Comment, _extends({}, comment, {
    highlighted: highlighted,
    Link: Link,
    timeago: timeago,
    t: t,
    collapsed: collapsed,
    onShouldCollapse: onShouldCollapse,
    context: context
  })), isEditing && _react.default.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, _react.default.createElement(_CommentComposer.default, {
    t: t,
    initialText: comment.text,
    displayAuthor: displayAuthor,
    error: edit.error,
    onEditPreferences: onEditPreferences,
    onCancel: edit.cancel,
    submitComment: edit.submit,
    submitLabel: t('styleguide/comment/edit/submit'),
    maxLength: maxLength,
    secondaryActions: secondaryActions,
    tags: tags,
    onTagChange: onTagChange,
    tagValue: tagValue
  })), _react.default.createElement("div", {
    style: {
      marginLeft: _CommentHeader.profilePictureSize + _CommentHeader.profilePictureMargin
    }
  }, _react.default.createElement(_Comment.CommentActions, {
    t: t,
    downVotes: downVotes,
    upVotes: upVotes,
    onAnswer: onAnswer,
    onEdit: edit && edit.start,
    onUnpublish: onUnpublish,
    onShare: onShare,
    onUpvote: onUpvote,
    onDownvote: onDownvote,
    replyBlockedMsg: replyBlockedMsg,
    highlighted: highlighted,
    collapsed: collapsed,
    onToggleCollapsed: onToggleCollapsed
  }), displayAuthor && showComposer && _react.default.createElement(Composer, {
    t: t,
    displayAuthor: displayAuthor,
    error: composerError,
    onEditPreferences: onEditPreferences,
    onCancel: dismissComposer,
    submitComment: submitComment,
    maxLength: maxLength,
    secondaryActions: secondaryActions
  }))));
};

Row.propTypes = {
  t: _propTypes.default.func.isRequired,
  visualDepth: _propTypes.default.number.isRequired,
  head: _propTypes.default.bool.isRequired,
  tail: _propTypes.default.bool.isRequired,
  otherChild: _propTypes.default.bool,
  comment: _propTypes.default.object.isRequired,
  displayAuthor: _propTypes.default.object,
  showComposer: _propTypes.default.bool.isRequired,
  composerError: _propTypes.default.string,
  onEditPreferences: _propTypes.default.func.isRequired,
  onAnswer: _propTypes.default.func,
  onUnpublish: _propTypes.default.func,
  onShare: _propTypes.default.func,
  onUpvote: _propTypes.default.func,
  onDownvote: _propTypes.default.func,
  dismissComposer: _propTypes.default.func.isRequired,
  submitComment: _propTypes.default.func.isRequired,
  highlighted: _propTypes.default.bool,
  timeago: _propTypes.default.func.isRequired,
  maxLength: _propTypes.default.number,
  replyBlockedMsg: _propTypes.default.string,
  Link: _propTypes.default.func,
  secondaryActions: _propTypes.default.object,
  collapsed: _propTypes.default.bool,
  onToggleCollapsed: _propTypes.default.func,
  onShouldCollapse: _propTypes.default.func
};

var Composer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Composer, _PureComponent);

  function Composer(props) {
    var _this;

    _classCallCheck(this, Composer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Composer).call(this, props));
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(Composer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isVisible: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          displayAuthor = _this$props.displayAuthor,
          error = _this$props.error,
          onEditPreferences = _this$props.onEditPreferences,
          onCancel = _this$props.onCancel,
          submitComment = _this$props.submitComment,
          maxLength = _this$props.maxLength,
          secondaryActions = _this$props.secondaryActions;
      var isVisible = this.state.isVisible;
      return _react.default.createElement("div", _extends({}, styles.commentComposerContainer, {
        style: {
          opacity: isVisible ? 1 : 0
        }
      }), _react.default.createElement(_CommentComposer.default, {
        t: t,
        displayAuthor: displayAuthor,
        error: error,
        onEditPreferences: onEditPreferences,
        onCancel: onCancel,
        submitComment: submitComment,
        maxLength: maxLength,
        secondaryActions: secondaryActions
      }));
    }
  }]);

  return Composer;
}(_react.PureComponent);

Composer.propTypes = {
  t: _propTypes.default.func.isRequired,
  displayAuthor: _propTypes.default.object.isRequired,
  error: _propTypes.default.string,
  onCancel: _propTypes.default.func.isRequired,
  submitComment: _propTypes.default.func.isRequired,
  maxLength: _propTypes.default.number
};

var RowState =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(RowState, _PureComponent2);

  function RowState(props) {
    var _this2;

    _classCallCheck(this, RowState);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(RowState).call(this, props));
    _this2.state = {
      composerState: 'idle',
      // idle | focused | submitting | error
      composerError: undefined,
      // or string
      shouldCollapse: false,
      collapsed: !!props.collapsable,
      tagValue: props.selectedTag
    };

    _this2.openComposer = function () {
      _this2.setState({
        composerState: 'focused',
        composerError: undefined
      });
    };

    _this2.dismissComposer = function () {
      _this2.setState({
        composerState: 'idle',
        composerError: undefined
      });
    };

    _this2.upvoteComment = function () {
      _this2.props.upvoteComment(_this2.props.comment.id);
    };

    _this2.downvoteComment = function () {
      _this2.props.downvoteComment(_this2.props.comment.id);
    };

    _this2.submitComment = function (content) {
      _this2.setState({
        composerState: 'submitting'
      });

      _this2.props.submitComment(_this2.props.comment, content).then(function () {
        _this2.setState({
          composerState: 'idle',
          composerError: undefined
        });
      }, function (e) {
        _this2.setState({
          composerState: 'error',
          composerError: e
        });
      });
    };

    _this2.toggleCollapsed = function () {
      _this2.setState({
        collapsed: !_this2.state.collapsed
      });
    };

    _this2.onShouldCollapse = function () {
      _this2.setState({
        shouldCollapse: true
      });
    };

    _this2.onTagChange = function (tagValue) {
      _this2.setState({
        tagValue: tagValue
      });
    };

    return _this2;
  }

  _createClass(RowState, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!!nextProps.highlighted) {
        this.setState({
          collapsed: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          t = _this$props2.t,
          timeago = _this$props2.timeago,
          comment = _this$props2.comment,
          highlighted = _this$props2.highlighted,
          visualDepth = _this$props2.visualDepth,
          head = _this$props2.head,
          tail = _this$props2.tail,
          otherChild = _this$props2.otherChild,
          displayAuthor = _this$props2.displayAuthor,
          onEditPreferences = _this$props2.onEditPreferences,
          onShare = _this$props2.onShare,
          isAdmin = _this$props2.isAdmin,
          maxLength = _this$props2.maxLength,
          replyBlockedMsg = _this$props2.replyBlockedMsg,
          Link = _this$props2.Link,
          secondaryActions = _this$props2.secondaryActions,
          collapsable = _this$props2.collapsable,
          tags = _this$props2.tags,
          context = _this$props2.context;
      var _this$state = this.state,
          composerState = _this$state.composerState,
          composerError = _this$state.composerError,
          collapsed = _this$state.collapsed,
          shouldCollapse = _this$state.shouldCollapse,
          tagValue = _this$state.tagValue;
      var userVote = comment.userVote;
      var edit = comment.userCanEdit && {
        start: function start() {
          _this3.setState({
            isEditing: true,
            editError: undefined
          });
        },
        submit: function submit(content) {
          var tags = _this3.state.tagValue ? [_this3.state.tagValue] : undefined;

          _this3.props.editComment(comment, content, tags).then(function () {
            _this3.setState({
              isEditing: false
            });
          }).catch(function (e) {
            _this3.setState({
              editError: e
            });
          });
        },
        cancel: function cancel() {
          _this3.setState({
            isEditing: false
          });
        },
        isEditing: this.state.isEditing,
        error: this.state.editError
      };
      var collapseAttributes = collapsable ? {
        collapsed: shouldCollapse ? collapsed : undefined,
        onShouldCollapse: this.onShouldCollapse,
        onToggleCollapsed: this.toggleCollapsed
      } : undefined;
      return _react.default.createElement(Row, _extends({
        t: t,
        visualDepth: visualDepth,
        head: head,
        tail: tail,
        otherChild: otherChild,
        comment: comment,
        highlighted: highlighted,
        displayAuthor: displayAuthor,
        showComposer: composerState !== 'idle',
        composerError: composerError,
        onEditPreferences: onEditPreferences,
        onAnswer: displayAuthor ? this.openComposer : undefined,
        onUpvote: !displayAuthor || userVote === 'UP' ? undefined : this.upvoteComment,
        onDownvote: !displayAuthor || userVote === 'DOWN' ? undefined : this.downvoteComment,
        onUnpublish: (isAdmin || comment.userCanEdit) && comment.published ? function () {
          return _this3.props.unpublishComment(comment.id);
        } : undefined,
        onShare: onShare ? function () {
          return onShare(comment.id);
        } : undefined,
        dismissComposer: this.dismissComposer,
        submitComment: this.submitComment,
        edit: edit,
        timeago: timeago,
        maxLength: maxLength,
        replyBlockedMsg: replyBlockedMsg,
        Link: Link,
        secondaryActions: secondaryActions,
        tags: tags,
        onTagChange: this.onTagChange,
        tagValue: tagValue,
        context: context
      }, collapseAttributes));
    }
  }]);

  return RowState;
}(_react.PureComponent);

var _default = RowState;
exports.default = _default;