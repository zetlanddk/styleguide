"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _zIndex = _interopRequireDefault(require("../../theme/zIndex"));

var _glamor = require("glamor");

var _Center = require("../Center");

var _Spinner = require("../Spinner");

var _fullscreen = require("./fullscreen");

var _Fullscreen = _interopRequireDefault(require("./Icons/Fullscreen"));

var _Play = _interopRequireDefault(require("./Icons/Play"));

var _Volume = _interopRequireDefault(require("./Icons/Volume"));

var _Subtitles = _interopRequireDefault(require("./Icons/Subtitles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ZINDEX_VIDEOPLAYER_ICONS = 6;
var ZINDEX_VIDEOPLAYER_SCRUB = 3;
var PROGRESS_HEIGHT = 4;
var styles = {
  fullWindow: (0, _glamor.css)({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: _zIndex.default.foreground,
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  wrapper: (0, _glamor.css)({
    position: 'relative',
    lineHeight: 0,
    marginBottom: PROGRESS_HEIGHT
  }),
  video: (0, _glamor.css)({
    width: '100%',
    height: 'auto',
    transition: 'height 200ms',
    outline: 'none',
    '::-webkit-media-controls-panel': {
      display: 'none !important'
    },
    '::--webkit-media-controls-play-button': {
      display: 'none !important'
    },
    '::-webkit-media-controls-start-playback-button': {
      display: 'none !important'
    },
    ':focus': {
      outline: 'none'
    }
  }),
  videoFullscreen: (0, _glamor.css)({
    width: '100%',
    height: 'auto',
    outline: 'none',
    transition: 'height 200ms',
    '::-webkit-media-controls-volume-slider': {
      display: 'none !important'
    },
    '::-webkit-media-controls-download-button': {
      display: 'none !important'
    }
  }),
  controls: (0, _glamor.css)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    cursor: 'pointer',
    transition: 'opacity 200ms'
  }),
  play: (0, _glamor.css)({
    position: 'absolute',
    top: '50%',
    left: '5%',
    right: '5%',
    marginTop: -18,
    textAlign: 'center',
    transition: 'opacity 200ms'
  }),
  progress: (0, _glamor.css)({
    position: 'absolute',
    backgroundColor: _colors.default.primary,
    bottom: -PROGRESS_HEIGHT,
    left: 0,
    height: PROGRESS_HEIGHT,
    transition: 'bottom 200ms'
  }),
  icons: (0, _glamor.css)({
    position: 'absolute',
    zIndex: ZINDEX_VIDEOPLAYER_ICONS,
    right: 10,
    bottom: 10,
    cursor: 'pointer'
  }),
  scrub: (0, _glamor.css)({
    zIndex: ZINDEX_VIDEOPLAYER_SCRUB,
    position: 'absolute',
    height: '10%',
    bottom: -PROGRESS_HEIGHT,
    left: 0,
    right: 0,
    cursor: 'ew-resize'
  })
};
var globalState = {
  playingRef: undefined,
  muted: false,
  subtitles: false,
  instances: []
};

var VideoPlayer =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoPlayer, _Component);

  function VideoPlayer(props) {
    var _this;

    _classCallCheck(this, VideoPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoPlayer).call(this, props));
    _this.state = {
      playing: false,
      progress: 0,
      muted: globalState.muted,
      subtitles: props.subtitles || globalState.subtitles,
      loading: false,
      isFull: false
    };

    _this.updateProgress = function () {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          video = _assertThisInitialize.video;

      if (!video) {
        return;
      }

      _this.setState(function () {
        var progress = video.currentTime / video.duration;
        _this.props.onProgress && _this.props.onProgress(progress);
        return {
          progress: progress
        };
      });
    };

    _this.syncProgress = function () {
      _this.readTimeout = setTimeout(function () {
        _this.updateProgress();

        _this.syncProgress();
      }, 16);
    };

    _this.ref = function (ref) {
      _this.video = ref;
    };

    _this.onPlay = function () {
      if (globalState.playingRef && globalState.playingRef !== _this.video) {
        globalState.playingRef.pause();
      }

      globalState.playingRef = _this.video;

      _this.setState(function () {
        return {
          playing: true,
          loading: false
        };
      });

      _this.syncProgress();

      _this.props.onPlay && _this.props.onPlay();
    };

    _this.onPause = function () {
      _this.setState(function () {
        return {
          playing: false
        };
      });

      clearTimeout(_this.readTimeout);
      _this.props.onPause && _this.props.onPause();
    };

    _this.onLoadStart = function () {
      _this.setState(function () {
        return {
          loading: true
        };
      });
    };

    _this.onCanPlay = function () {
      _this.setState(function () {
        return {
          loading: false
        };
      });
    };

    _this.onLoadedMetaData = function () {
      _this.setTextTracksMode();

      _this.setState(function () {
        return {
          loading: false
        };
      });
    };

    _this.onVolumeChange = function () {
      if (!_this.props.forceMuted && !_this.props.cinemagraph && globalState.muted !== _this.video.muted) {
        _this.setMuted(_this.video.muted);
      }
    };

    _this.scrubRef = function (ref) {
      _this.scrubber = ref;
    };

    _this.scrub = function (event) {
      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          scrubber = _assertThisInitialize2.scrubber,
          video = _assertThisInitialize2.video;

      if (_this.scrubbing && scrubber && video && video.duration) {
        event.preventDefault();
        var rect = scrubber.getBoundingClientRect();
        var currentEvent = event;

        if (currentEvent.nativeEvent) {
          currentEvent = event.nativeEvent;
        }

        while (currentEvent.sourceEvent) {
          currentEvent = currentEvent.sourceEvent;
        }

        if (currentEvent.changedTouches) {
          currentEvent = currentEvent.changedTouches[0];
        }

        var progress = Math.min(1, Math.max((currentEvent.clientX - rect.left) / rect.width, 0));
        video.currentTime = video.duration * progress;

        _this.updateProgress();
      }
    };

    _this.scrubStart = function (event) {
      _this.scrubbing = true;

      if (event.type === 'mousedown') {
        var up = function up(e) {
          _this.scrubEnd(e);

          document.removeEventListener('mousemove', _this.scrub);
          document.removeEventListener('mouseup', up);
        };

        document.addEventListener('mousemove', _this.scrub);
        document.addEventListener('mouseup', up);
      }

      _this.scrub(event);
    };

    _this.scrubEnd = function (event) {
      _this.scrub(event);

      _this.scrubbing = false;
    };

    _this.setInstanceState = function (state) {
      _this.setState(state);
    };

    _this.handleKeyDown = function (event) {
      if (event.key === 'k' || !_this.state.isFull && event.keyCode === 32 // 32: spacebar
      ) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        }
    };

    _this.captureFocus = function () {
      _this.video.focus();
    };

    return _this;
  }

  _createClass(VideoPlayer, [{
    key: "toggle",
    value: function toggle() {
      var video = this.video;

      if (video) {
        if (video.paused || video.ended) {
          this.play();
        } else {
          this.pause();
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var video = this.video;
      video && video.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      var video = this.video;
      video && video.pause();
    }
  }, {
    key: "setTextTracksMode",
    value: function setTextTracksMode() {
      var subtitles = this.state.subtitles;
      var src = this.props.src;

      if (!this.video || !src.subtitles || subtitles === this._textTrackMode) {
        return;
      }

      if (this.video.textTracks && this.video.textTracks.length) {
        this.video.textTracks[0].mode = subtitles ? 'showing' : 'hidden';
        this._textTrackMode = subtitles;
      }
    }
  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      var next = {
        muted: muted
      };
      globalState.muted = next.muted;
      globalState.instances.forEach(function (setter) {
        setter(next);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        fullscreen: (0, _fullscreen.setupFullscreen)({
          onChange: function onChange() {
            var onFull = _this2.props.onFull;

            var shouldBeFull = _this2.state.fullscreen.element() === _this2.video;

            _this2.setState({
              isFull: shouldBeFull
            });

            onFull && onFull(shouldBeFull, true);
          },
          video: this.video
        })
      });
      globalState.instances.push(this.setInstanceState);

      if (!this.video) {
        return;
      }

      this.video.addEventListener('play', this.onPlay);
      this.video.addEventListener('pause', this.onPause);
      this.video.addEventListener('loadstart', this.onLoadStart);
      this.video.addEventListener('canplay', this.onCanPlay);
      this.video.addEventListener('canplaythrough', this.onCanPlay);
      this.video.addEventListener('loadedmetadata', this.onLoadedMetaData);
      this.video.addEventListener('volumechange', this.onVolumeChange);
      this.setTextTracksMode();

      if (this.video && !this.video.paused) {
        this.onPlay();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setTextTracksMode();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      globalState.instances = globalState.instances.filter(function (setter) {
        return setter !== _this3.setInstanceState;
      });

      if (globalState.playingRef === this.video) {
        globalState.playingRef = undefined;
      }

      this.video.removeEventListener('play', this.onPlay);
      this.video.removeEventListener('pause', this.onPause);
      this.video.removeEventListener('loadstart', this.onLoadStart);
      this.video.removeEventListener('canplay', this.onCanPlay);
      this.video.removeEventListener('canplaythrough', this.onCanPlay);
      this.video.removeEventListener('loadedmetadata', this.onLoadedMetaData);
      this.video.removeEventListener('volumechange', this.onVolumeChange);
      this.state.fullscreen && this.state.fullscreen.dispose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          src = _this$props.src,
          showPlay = _this$props.showPlay,
          size = _this$props.size,
          forceMuted = _this$props.forceMuted,
          autoPlay = _this$props.autoPlay,
          loop = _this$props.loop,
          cinemagraph = _this$props.cinemagraph,
          _this$props$attribute = _this$props.attributes,
          attributes = _this$props$attribute === void 0 ? {} : _this$props$attribute;
      var _this$state = this.state,
          playing = _this$state.playing,
          progress = _this$state.progress,
          muted = _this$state.muted,
          subtitles = _this$state.subtitles,
          loading = _this$state.loading,
          fullscreen = _this$state.fullscreen,
          isFull = _this$state.isFull;
      var cinemagraphAttributes = cinemagraph ? {
        loop: true,
        muted: true,
        autoPlay: true,
        playsInline: true,
        'webkit-playsinline': ''
      } : {};
      var fullWindow = this.props.fullWindow || !fullscreen;
      return _react.default.createElement("div", _extends({}, fullWindow && isFull ? styles.fullWindow : (0, _glamor.merge)(styles.wrapper, _Center.breakoutStyles[size]), {
        onClick: this.captureFocus
      }), _react.default.createElement("video", _extends({}, isFull ? styles.videoFullscreen : styles.video, attributes, {
        style: this.props.style,
        autoPlay: autoPlay,
        muted: forceMuted !== undefined ? forceMuted : muted,
        loop: loop
      }, cinemagraphAttributes, {
        ref: this.ref,
        controls: isFull && !fullWindow,
        controlsList: isFull ? 'nodownload' : undefined,
        onLoadedMetadata: this.onLoadedMetaData,
        crossOrigin: "anonymous",
        poster: src.thumbnail,
        tabIndex: "0",
        onKeyDown: this.handleKeyDown
      }), _react.default.createElement("source", {
        src: src.hls,
        type: "application/x-mpegURL"
      }), _react.default.createElement("source", {
        src: src.mp4,
        type: "video/mp4"
      }), !!src.subtitles && _react.default.createElement("track", {
        label: "Deutsch",
        kind: "subtitles",
        srcLang: "de",
        src: src.subtitles,
        default: true
      })), _react.default.createElement("div", _extends({}, styles.controls, {
        style: {
          opacity: playing ? 0 : 1
        },
        onClick: function onClick() {
          return _this4.toggle();
        }
      }), _react.default.createElement("div", _extends({}, styles.play, {
        style: {
          opacity: !showPlay || playing ? 0 : 1
        }
      }), _react.default.createElement(_Play.default, null)), _react.default.createElement("div", styles.icons, loading && _react.default.createElement(_Spinner.InlineSpinner, {
        size: 25
      }), ' ', !!src.subtitles && _react.default.createElement("span", {
        role: "button",
        title: "Untertitel ".concat(subtitles ? 'an' : 'aus'),
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          var next = {
            subtitles: !subtitles
          };
          globalState.subtitles = next.subtitles;
          globalState.instances.forEach(function (setter) {
            setter(next);
          });
        }
      }, _react.default.createElement(_Subtitles.default, {
        off: !subtitles
      })), ' ', forceMuted === undefined && !cinemagraph && _react.default.createElement("span", {
        role: "button",
        title: "Audio ".concat(muted ? 'aus' : 'an'),
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          _this4.setMuted(!muted);
        }
      }, _react.default.createElement(_Volume.default, {
        off: muted
      })), _react.default.createElement("span", {
        role: "button",
        title: "Vollbild",
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          if (fullWindow) {
            var onFull = _this4.props.onFull;
            var shouldBeFull = !isFull;

            _this4.setState({
              isFull: shouldBeFull
            });

            onFull && onFull(shouldBeFull, false);
          } else {
            fullscreen.request(_this4.video);
          }

          _this4.captureFocus();
        }
      }, _react.default.createElement(_Fullscreen.default, {
        off: !isFull
      })))), !cinemagraph && _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", _extends({}, styles.progress, {
        style: {
          width: "".concat(progress * 100, "%"),
          bottom: fullWindow && !playing ? 0 : undefined
        }
      })), _react.default.createElement("div", _extends({}, styles.scrub, {
        ref: this.scrubRef,
        onTouchStart: this.scrubStart,
        onTouchMove: this.scrub,
        onTouchEnd: this.scrubEnd,
        onMouseDown: this.scrubStart
      }))));
    }
  }]);

  return VideoPlayer;
}(_react.Component);

VideoPlayer.propTypes = {
  src: _propTypes.default.shape({
    hls: _propTypes.default.string.isRequired,
    mp4: _propTypes.default.string.isRequired,
    thumbnail: _propTypes.default.string.isRequired,
    subtitles: function subtitles(props, propName, componentName) {
      var value = props[propName];

      if (value && value.match(/^https?:/)) {
        return new Error("Invalid prop `".concat(propName, "` supplied to\n`").concat(componentName, "`. Subtitles should be loaded from a relative or absolute path.\nCrossOrigin subtitles do not work in older browsers.'"));
      }
    }
  }),
  size: _propTypes.default.oneOf(Object.keys(_Center.breakoutStyles)),
  showPlay: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  // ignores global muted state and sets muted
  forceMuted: _propTypes.default.bool,
  cinemagraph: _propTypes.default.bool,
  // arbitrary attributes like playsinline, specific ones win
  attributes: _propTypes.default.object,
  // mandate full window instead of fullscreen API
  fullWindow: _propTypes.default.bool,
  onFull: _propTypes.default.func
};
VideoPlayer.defaultProps = {
  showPlay: true,
  size: undefined
};
var _default = VideoPlayer;
exports.default = _default;