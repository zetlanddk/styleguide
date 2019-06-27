"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("../Typography/styles");

var _CommentComposerHeader = _interopRequireDefault(require("./CommentComposerHeader"));

var _CommentComposerError = _interopRequireDefault(require("./CommentComposerError"));

var _CommentComposerProgress = _interopRequireDefault(require("./CommentComposerProgress"));

var _CommentComposerTags = _interopRequireDefault(require("./CommentComposerTags"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionButtonStyle = _objectSpread({}, _styles.sansSerifRegular16, {
  outline: 'none',
  WebkitAppearance: 'none',
  background: 'transparent',
  border: 'none',
  padding: '0 12px',
  cursor: 'pointer',
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'center'
});

var styles = {
  form: (0, _glamor.css)({
    background: _colors.default.secondaryBg,
    borderTop: '1px solid white'
  }),
  textArea: (0, _glamor.css)(_objectSpread({
    padding: '6px 12px 0',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '60px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box'
  }, _styles.serifRegular16, {
    color: _colors.default.text
  })),
  textAreaEmpty: (0, _glamor.css)({
    color: _colors.default.lightText,
    '::-webkit-input-placeholder': {
      color: _colors.default.lightText
    }
  }),
  maxLength: (0, _glamor.css)({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '-10px',
    padding: '0 12px'
  }),
  remaining: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular14, {
    lineHeight: '20px',
    padding: '0 5px'
  })),
  actions: (0, _glamor.css)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px'
  }),
  mainActions: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center',
    height: '40px'
  }),
  cancelButton: (0, _glamor.css)(_objectSpread({}, actionButtonStyle, {
    color: _colors.default.text
  })),
  commitButton: (0, _glamor.css)(_objectSpread({}, actionButtonStyle, {
    color: _colors.default.primary,
    '&[disabled]': {
      color: _colors.default.disabled
    }
  })),
  secondaryActions: (0, _glamor.css)({
    padding: '0 12px'
  })
};

var CommentComposer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CommentComposer, _PureComponent);

  function CommentComposer(props) {
    var _this;

    _classCallCheck(this, CommentComposer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentComposer).call(this, props));
    _this.state = {
      text: props.initialText || '',
      count: 0,
      progress: 0,
      tagValue: props.tagValue
    };

    _this.onChange = function (ev) {
      _this.setState({
        text: ev.target.value
      });

      _this.updateMaxLength();
    };

    _this.onSubmit = function () {
      _this.props.submitComment(_this.state.text, _this.state.tagValue ? [_this.state.tagValue] : undefined);
    };

    _this.textarea = null;

    _this.textareaRef = function (ref) {
      _this.textarea = ref;
    };

    _this.getCount = function () {
      return _this.textarea && _this.textarea.value.length || 0;
    };

    _this.onTagChange = function (tagValue) {
      _this.setState({
        tagValue: tagValue
      });

      _this.props.onTagChange && _this.props.onTagChange(tagValue);
    };

    return _this;
  }

  _createClass(CommentComposer, [{
    key: "updateMaxLength",
    value: function updateMaxLength() {
      if (this.props.maxLength) {
        this.setState({
          count: this.getCount(),
          progress: this.getCount() / this.props.maxLength * 100
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.textarea) {
        this.textarea.focus();
        this.updateMaxLength();
      }
    }
  }, {
    key: "renderProgress",
    value: function renderProgress() {
      var maxLength = this.props.maxLength;
      if (!maxLength) return null;
      var _this$state = this.state,
          count = _this$state.count,
          progress = _this$state.progress;
      var remaining = maxLength - count;
      var progressColor = progress > 100 ? _colors.default.error : _colors.default.text;
      return _react.default.createElement("div", styles.maxLength, remaining < 21 && _react.default.createElement("span", _extends({}, styles.remaining, {
        style: {
          color: progressColor
        }
      }), remaining), _react.default.createElement(_CommentComposerProgress.default, {
        stroke: progressColor,
        radius: 9,
        strokeWidth: 2,
        progress: Math.min(progress, 100)
      }));
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
          submitLabel = _this$props.submitLabel,
          cancelLabel = _this$props.cancelLabel,
          secondaryActions = _this$props.secondaryActions,
          maxLength = _this$props.maxLength,
          tagRequired = _this$props.tagRequired,
          tags = _this$props.tags;
      var _this$state2 = this.state,
          text = _this$state2.text,
          count = _this$state2.count,
          tagValue = _this$state2.tagValue;
      var maxLengthExceeded = maxLength && count > maxLength;
      return _react.default.createElement("div", null, _react.default.createElement(_CommentComposerHeader.default, _extends({}, displayAuthor, {
        onClick: onEditPreferences
      })), tags && !!tags.length && _react.default.createElement("div", styles.form, _react.default.createElement(_CommentComposerTags.default, {
        t: t,
        tags: tags,
        tagRequired: tagRequired,
        onChange: this.onTagChange,
        value: tagValue
      })), _react.default.createElement("div", styles.form, _react.default.createElement(_reactTextareaAutosize.default, _extends({
        inputRef: this.textareaRef
      }, styles.textArea, text === '' ? styles.textAreaEmpty : {}, {
        placeholder: t('styleguide/CommentComposer/placeholder'),
        value: text,
        rows: "1",
        onChange: this.onChange
      })), this.renderProgress(), _react.default.createElement("div", styles.actions, secondaryActions && _react.default.createElement("div", styles.secondaryActions, secondaryActions), _react.default.createElement("div", styles.mainActions, _react.default.createElement("button", _extends({}, styles.cancelButton, {
        onClick: onCancel
      }), cancelLabel || t('styleguide/CommentComposer/cancel')), _react.default.createElement("button", _extends({}, styles.commitButton, {
        onClick: this.onSubmit,
        disabled: maxLengthExceeded
      }), submitLabel || t('styleguide/CommentComposer/answer'))))), error && _react.default.createElement(_CommentComposerError.default, null, error));
    }
  }]);

  return CommentComposer;
}(_react.PureComponent);

CommentComposer.propTypes = {
  t: _propTypes.default.func.isRequired,
  displayAuthor: _propTypes.default.object.isRequired,
  error: _propTypes.default.string,
  onEditPreferences: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  submitComment: _propTypes.default.func.isRequired,
  submitLabel: _propTypes.default.string,
  cancelLabel: _propTypes.default.string,
  secondaryActions: _propTypes.default.object,
  maxLength: _propTypes.default.number,
  tagRequired: _propTypes.default.bool,
  tags: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = CommentComposer;
exports.default = _default;