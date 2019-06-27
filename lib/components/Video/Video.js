"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _Center = require("../Center");

var _Figure = require("../Figure");

var _Image = _interopRequireDefault(require("./Image"));

var _Meta = require("./Meta");

var _Play = _interopRequireDefault(require("../VideoPlayer/Icons/Play"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)(_defineProperty({
    textDecoration: 'none',
    position: 'relative',
    padding: 0,
    margin: 0,
    marginTop: 36,
    marginBottom: 36
  }, _mediaQueries.mUp, {
    marginTop: 45,
    marginBottom: 45
  })),
  thumbnail: (0, _glamor.css)({
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 0,
    position: 'relative',
    width: '100%',
    '::before': {
      position: 'absolute',
      background: 'rgba(0, 0, 0, .6)',
      content: ' ',
      height: '100%',
      width: '100%',
      zIndex: 9
    }
  }),
  playIcon: (0, _glamor.css)({
    color: '#fff',
    lineHeight: 0,
    position: 'absolute',
    left: 'calc(50% - 13px)',
    top: 'calc(50% - 18px)',
    zIndex: 9
  }),
  playNote: (0, _glamor.css)({
    position: 'absolute',
    top: 'calc(50% + 18px)',
    left: '50%',
    transform: 'translate(-50%,0)',
    color: '#fff',
    width: '100%',
    maxWidth: 400,
    padding: 10,
    lineHeight: 1.2,
    textAlign: 'center',
    zIndex: 9
  }),
  embedContainer: (0, _glamor.css)({
    position: 'relative',
    height: 0,
    width: '100%',
    marginBottom: '5px'
  }),
  embedIframe: (0, _glamor.css)({
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0
  })
};

var Embed = function Embed(_ref) {
  var id = _ref.id,
      platform = _ref.platform,
      aspectRatio = _ref.aspectRatio,
      title = _ref.title;
  var src = '';

  if (platform === 'youtube') {
    src = "https://www.youtube-nocookie.com/embed/".concat(id, "?autoplay=true&showinfo=0&rel=0");
  }

  if (platform === 'vimeo') {
    src = "https://player.vimeo.com/video/".concat(id, "?autoplay=1");
  }

  return _react.default.createElement("div", (0, _glamor.css)(styles.embedContainer, {
    paddingBottom: "".concat(100 / aspectRatio, "%")
  }), _react.default.createElement("iframe", _extends({}, styles.embedIframe, {
    src: src,
    frameBorder: "0",
    title: title,
    allowFullScreen: true
  })));
};

var Video =
/*#__PURE__*/
function (_Component) {
  _inherits(Video, _Component);

  function Video(props) {
    var _this;

    _classCallCheck(this, Video);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Video).call(this, props));
    _this.state = {
      embedIframe: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Video, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.setState({
        embedIframe: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          id = _this$props.id,
          url = _this$props.url,
          platform = _this$props.platform,
          title = _this$props.title,
          thumbnail = _this$props.thumbnail,
          aspectRatio = _this$props.aspectRatio,
          size = _this$props.size,
          showMeta = _this$props.showMeta,
          userName = _this$props.userName,
          userUrl = _this$props.userUrl,
          userProfileImageUrl = _this$props.userProfileImageUrl,
          date = _this$props.date,
          attributes = _this$props.attributes;
      var embedIframe = this.state.embedIframe;
      return _react.default.createElement("figure", _extends({}, attributes, (0, _glamor.merge)(styles.container, _Center.breakoutStyles[size])), !embedIframe && _react.default.createElement("a", _extends({}, styles.thumbnail, {
        onClick: this.handleClick
      }), _react.default.createElement("span", styles.playIcon, _react.default.createElement(_Play.default, null)), _react.default.createElement("span", styles.playNote, t('styleguide/video/dnt/note', {
        player: t("styleguide/video/dnt/player/".concat(platform)),
        platform: t("styleguide/video/dnt/player/".concat(platform))
      })), _react.default.createElement(_Image.default, {
        src: thumbnail,
        alt: "",
        aspectRatio: aspectRatio
      })), embedIframe && _react.default.createElement(Embed, {
        id: id,
        platform: platform,
        aspectRatio: aspectRatio,
        title: title
      }), _react.default.createElement(_Figure.FigureCaption, null, title), showMeta && _react.default.createElement(_Meta.Meta, {
        url: url,
        platform: platform,
        title: title,
        userProfileImageUrl: userProfileImageUrl,
        userName: userName,
        userUrl: userUrl,
        date: date
      }));
    }
  }]);

  return Video;
}(_react.Component);

Video.propTypes = {
  t: _propTypes.default.func.isRequired,
  id: _propTypes.default.string,
  url: _propTypes.default.string.isRequired,
  platform: _propTypes.default.oneOf(['vimeo', 'youtube']).isRequired,
  thumbnail: _propTypes.default.string.isRequired,
  aspectRatio: _propTypes.default.number.isRequired,
  size: _propTypes.default.oneOf(Object.keys(_Center.breakoutStyles)),
  showMeta: _propTypes.default.bool.isRequired,
  userName: _propTypes.default.string,
  userUrl: _propTypes.default.string,
  userProfileImageUrl: _propTypes.default.string,
  date: _propTypes.default.object
};
Video.defaultProps = {
  t: function t() {
    return '';
  },
  platform: 'youtube',
  size: undefined,
  showMeta: false
};
var _default = Video;
exports.default = _default;