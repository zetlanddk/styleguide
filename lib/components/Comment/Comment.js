"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MissingNode = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _mdastReactRender = require("mdast-react-render");

var _Typography = require("../Typography");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _Comment = _interopRequireDefault(require("../../templates/Comment"));

var _CommentContext = _interopRequireDefault(require("./CommentContext"));

var _CommentHeader = _interopRequireWildcard(require("./CommentHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var schema = (0, _Comment.default)();
var highlightPadding = 7;
var COLLAPSED_HEIGHT = {
  mobile: 180,
  desktop: 240,
  // We won't collapse a comment if it just slightly exceeds the heights above.
  threshold: 50
};
var styles = {
  container: (0, _glamor.css)({
    position: 'relative'
  }),
  highlight: (0, _glamor.css)({
    top: -highlightPadding,
    left: -highlightPadding,
    right: -highlightPadding,
    bottom: -highlightPadding,
    padding: highlightPadding,
    width: "calc(100% + ".concat(highlightPadding * 2, "px)"),
    backgroundColor: _colors.default.primaryBg
  }),
  margin: (0, _glamor.css)({
    display: 'block',
    marginLeft: _CommentHeader.profilePictureSize + _CommentHeader.profilePictureMargin,
    marginBottom: 12,
    marginTop: 12
  }),
  body: (0, _glamor.css)({
    margin: "12px 0 0 ".concat(_CommentHeader.profilePictureSize + _CommentHeader.profilePictureMargin, "px")
  }),
  bodyCollapsed: (0, _glamor.css)(_defineProperty({
    height: "".concat(COLLAPSED_HEIGHT.mobile, "px"),
    overflow: 'hidden'
  }, _mediaQueries.mUp, {
    maxHeight: "".concat(COLLAPSED_HEIGHT.desktop, "px")
  })),
  context: (0, _glamor.css)({
    marginBottom: 10
  })
};

var MissingNode = function MissingNode(_ref) {
  var node = _ref.node,
      children = _ref.children;
  return _react.default.createElement("span", {
    style: {
      textDecoration: "underline wavy ".concat(_colors.default.divider),
      display: 'inline-block',
      margin: 4
    },
    title: "Markdown element \"".concat(node.type, "\" wird nicht unterst\xFCtzt.")
  }, children || node.value || node.identifier || '[…]');
};

exports.MissingNode = MissingNode;

var Comment =
/*#__PURE__*/
function (_Component) {
  _inherits(Comment, _Component);

  function Comment(props) {
    var _this;

    _classCallCheck(this, Comment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Comment).call(this, props));

    _this.commentBodyRef = function (ref) {
      _this.commentBody = ref;
    };

    _this.measure = function () {
      var measured = {};

      if (_this.commentBody) {
        var rect = _this.commentBody.getBoundingClientRect();

        measured = {
          commentBodyHeight: rect.height,
          isMobile: window.innerWidth < _mediaQueries.mBreakPoint
        };
      }

      return measured;
    };

    _this.maybeCollapse = function () {
      if (!_this.props.onShouldCollapse) {
        return;
      }

      var _this$measure = _this.measure(),
          commentBodyHeight = _this$measure.commentBodyHeight,
          isMobile = _this$measure.isMobile;

      if (commentBodyHeight && commentBodyHeight > (isMobile ? COLLAPSED_HEIGHT.mobile : COLLAPSED_HEIGHT.desktop) + COLLAPSED_HEIGHT.threshold) {
        _this.props.onShouldCollapse && _this.props.onShouldCollapse();
      }
    };

    return _this;
  }

  _createClass(Comment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.maybeCollapse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.maybeCollapse();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          id = _this$props.id,
          timeago = _this$props.timeago,
          createdAt = _this$props.createdAt,
          updatedAt = _this$props.updatedAt,
          _this$props$published = _this$props.published,
          published = _this$props$published === void 0 ? true : _this$props$published,
          userCanEdit = _this$props.userCanEdit,
          adminUnpublished = _this$props.adminUnpublished,
          displayAuthor = _this$props.displayAuthor,
          content = _this$props.content,
          children = _this$props.children,
          highlighted = _this$props.highlighted,
          collapsed = _this$props.collapsed,
          context = _this$props.context,
          Link = _this$props.Link;
      return _react.default.createElement("div", _extends({
        "data-comment-id": id
      }, styles.container, highlighted ? styles.highlight : {}), _react.default.createElement(_CommentHeader.default, _extends({}, displayAuthor, {
        highlighted: highlighted,
        Link: Link,
        t: t,
        commentId: id,
        createdAt: createdAt,
        updatedAt: updatedAt,
        timeago: timeago
      })), !published && _react.default.createElement("div", styles.body, t('styleguide/comment/unpublished')), _react.default.createElement("div", _extends({}, styles.body, collapsed ? styles.bodyCollapsed : undefined, {
        style: {
          opacity: published ? 1 : 0.5
        },
        ref: this.commentBodyRef
      }), context && context.title && _react.default.createElement("div", styles.context, _react.default.createElement(_CommentContext.default, context)), children || !!content && (0, _mdastReactRender.renderMdast)(content, schema, {
        MissingNode: MissingNode
      })), adminUnpublished && userCanEdit && _react.default.createElement("div", styles.body, t('styleguide/comment/adminUnpublished')), !adminUnpublished && !published && userCanEdit && _react.default.createElement(_Typography.Label, styles.margin, t('styleguide/comment/unpublished/userCanEdit')));
    }
  }]);

  return Comment;
}(_react.Component);

var _default = Comment;
exports.default = _default;