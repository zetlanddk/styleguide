"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _glamor = require("glamor");

var _styleMixins = require("../../lib/styleMixins");

var _timeFormat = require("../../lib/timeFormat");

var _Center = require("../Center");

var _Spinner = require("../Spinner");

var _styles = require("../Typography/styles");

var _playArrow = _interopRequireDefault(require("react-icons/lib/md/play-arrow"));

var _pause = _interopRequireDefault(require("react-icons/lib/md/pause"));

var _close = _interopRequireDefault(require("react-icons/lib/md/close"));

var _fileDownload = _interopRequireDefault(require("react-icons/lib/md/file-download"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ZINDEX_AUDIOPLAYER_ICONS = 6;
var ZINDEX_AUDIOPLAYER_SCRUB = 3;
var ZINDEX_AUDIOPLAYER_PROGRESS = 2;
var ZINDEX_AUDIOPLAYER_BUFFER = 1;
var ZINDEX_AUDIOPLAYER_TOTAL = 0;
var PROGRESS_HEIGHT = 4;
var hoursDurationFormat = (0, _timeFormat.timeFormat)('%-H:%M:%S');
var minutesDurationFormat = (0, _timeFormat.timeFormat)('%-M:%S');
var CONTROLS_HEIGHT = 25;
var ICON_SPACING = 8;
var SIZE = {
  play: 30,
  close: 30,
  download: 22
};
var barStyle = {
  position: 'absolute',
  height: PROGRESS_HEIGHT,
  left: 0,
  right: 0
};
var buttonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  padding: 0
};
var styles = {
  wrapper: (0, _glamor.css)({
    position: 'relative',
    lineHeight: 0,
    ':focus': {
      outline: 'none'
    }
  }),
  audio: (0, _glamor.css)({
    height: 0,
    width: '100%',
    '::-webkit-media-controls-panel': {
      display: 'none !important'
    },
    '::--webkit-media-controls-play-button': {
      display: 'none !important'
    },
    '::-webkit-media-controls-start-playback-button': {
      display: 'none !important'
    }
  }),
  controls: (0, _glamor.css)({
    position: 'absolute',
    cursor: 'pointer',
    height: "".concat(CONTROLS_HEIGHT, "px")
  }),
  play: (0, _glamor.css)(_objectSpread({}, buttonStyle, {
    position: 'absolute',
    top: '50%',
    left: 0,
    marginTop: -15,
    textAlign: 'center'
  })),
  download: (0, _glamor.css)({
    position: 'absolute',
    top: '50%',
    left: SIZE.play + ICON_SPACING,
    marginTop: -10,
    textAlign: 'center'
  }),
  close: (0, _glamor.css)(_objectSpread({}, buttonStyle, {
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: -14,
    textAlign: 'center'
  })),
  scrubberTop: (0, _glamor.css)(_objectSpread({}, barStyle, {
    top: -PROGRESS_HEIGHT
  })),
  scrubberBottom: (0, _glamor.css)(_objectSpread({}, barStyle, {
    bottom: -PROGRESS_HEIGHT
  })),
  progress: (0, _glamor.css)({
    position: 'absolute',
    zIndex: ZINDEX_AUDIOPLAYER_PROGRESS,
    backgroundColor: _colors.default.primary,
    left: 0,
    height: PROGRESS_HEIGHT
  }),
  uiText: (0, _glamor.css)(_defineProperty({
    position: 'absolute',
    zIndex: ZINDEX_AUDIOPLAYER_ICONS,
    top: 1,
    cursor: 'pointer',
    fontSize: '16px',
    lineHeight: '25px',
    height: '30px',
    color: _colors.default.text
  }, _mediaQueries.mUp, {
    fontSize: '19px'
  })),
  time: (0, _glamor.css)(_objectSpread({}, _styleMixins.ellipsize, {
    fontSize: '19px'
  })),
  scrub: (0, _glamor.css)(_objectSpread({}, barStyle, {
    zIndex: ZINDEX_AUDIOPLAYER_SCRUB,
    height: 20,
    marginTop: -((20 + PROGRESS_HEIGHT) / 2),
    paddingTop: 20 / 2 - PROGRESS_HEIGHT / 2,
    cursor: 'ew-resize'
  })),
  buffer: (0, _glamor.css)(_objectSpread({}, barStyle, {
    zIndex: ZINDEX_AUDIOPLAYER_BUFFER
  })),
  totalDuration: (0, _glamor.css)(_objectSpread({}, barStyle, {
    backgroundColor: '#e8e8ed',
    zIndex: ZINDEX_AUDIOPLAYER_TOTAL
  })),
  timeRange: (0, _glamor.css)({
    backgroundColor: '#bebdcb',
    position: 'absolute',
    height: PROGRESS_HEIGHT
  }),
  sourceError: (0, _glamor.css)(_objectSpread({
    color: _colors.default.disabled,
    height: '25px'
  }, _styleMixins.ellipsize, _styles.sansSerifRegular12, _defineProperty({
    lineHeight: '25px'
  }, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular15, {
    lineHeight: '25px'
  })))),
  retry: (0, _glamor.css)(_objectSpread({}, _styles.link, {
    cursor: 'pointer'
  }))
};
var globalState = {
  playingRef: undefined,
  instances: []
};

var getFormattedTime = function getFormattedTime(secs) {
  var totalSeconds = secs;
  var hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  var dateTime = new Date(null);
  !!hours && dateTime.setHours(hours);
  !!minutes && dateTime.setMinutes(minutes);
  !!seconds && dateTime.setSeconds(seconds);
  return !!hours ? hoursDurationFormat(dateTime) : minutesDurationFormat(dateTime);
};

var AudioPlayer =
/*#__PURE__*/
function (_Component) {
  _inherits(AudioPlayer, _Component);

  function AudioPlayer(props) {
    var _this;

    _classCallCheck(this, AudioPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioPlayer).call(this, props));
    _this.state = {
      playEnabled: false,
      playing: false,
      progress: 0,
      loading: false,
      buffered: null,
      sourceError: false
    };

    _this.updateProgress = function () {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          audio = _assertThisInitialize.audio;

      if (!audio) {
        return;
      }

      _this.setState(function () {
        var progress = audio.currentTime / audio.duration;
        _this.props.onProgress && _this.props.onProgress(progress);
        return {
          progress: progress,
          buffered: audio.buffered
        };
      });

      _this.formattedCurrentTime = getFormattedTime(audio.currentTime);
    };

    _this.syncProgress = function () {
      _this.readTimeout = setTimeout(function () {
        _this.updateProgress();

        _this.syncProgress();
      }, 16);
    };

    _this.containerRef = function (ref) {
      _this.container = ref;
    };

    _this.ref = function (ref) {
      _this.audio = ref;
    };

    _this.onPlay = function () {
      if (globalState.playingRef && globalState.playingRef !== _this.audio) {
        globalState.playingRef.pause();
      }

      globalState.playingRef = _this.audio;

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
          playEnabled: true,
          loading: false,
          sourceError: false
        };
      });
    };

    _this.onLoadedMetaData = function () {
      _this.setState(function () {
        return {
          playEnabled: true,
          // iOS won't fire canPlay, so rely on meta data.
          loading: false,
          sourceError: false
        };
      });
    };

    _this.onSourceError = function () {
      _this.setState(function () {
        return {
          sourceError: true,
          loading: false
        };
      });
    };

    _this.scrubRef = function (ref) {
      _this.scrubber = ref;
    };

    _this.scrub = function (event) {
      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          scrubber = _assertThisInitialize2.scrubber,
          audio = _assertThisInitialize2.audio;

      if (_this.scrubbing && scrubber && audio && audio.duration) {
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
        audio.currentTime = audio.duration * progress;

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

    _this.toggle = function () {
      var _assertThisInitialize3 = _assertThisInitialized(_assertThisInitialized(_this)),
          audio = _assertThisInitialize3.audio;

      if (audio) {
        if (audio.paused || audio.ended) {
          _this.play();
        } else {
          _this.pause();
        }
      }
    };

    return _this;
  }

  _createClass(AudioPlayer, [{
    key: "play",
    value: function play() {
      var audio = this.audio;
      audio && audio.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      var audio = this.audio;
      audio && audio.pause();
    }
  }, {
    key: "reload",
    value: function reload() {
      var audio = this.audio;

      if (audio) {
        this.setState(function () {
          return {
            loading: true
          };
        });
        audio.load();
      }
    }
  }, {
    key: "setFormattedTimes",
    value: function setFormattedTimes() {
      if (!this.audio || !this.audio.duration) {
        return;
      }

      this.formattedDuration = getFormattedTime(this.audio.duration);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      globalState.instances.push(this.setInstanceState);

      if (!this.audio) {
        return;
      }

      this.audio.addEventListener('play', this.onPlay);
      this.audio.addEventListener('pause', this.onPause);
      this.audio.addEventListener('loadstart', this.onLoadStart);
      this.audio.addEventListener('canplay', this.onCanPlay);
      this.audio.addEventListener('canplaythrough', this.onCanPlay);
      this.audio.addEventListener('loadedmetadata', this.onLoadedMetaData);
      this.setFormattedTimes();

      if (this.audio && !this.audio.paused) {
        this.onPlay();
      }

      var autoPlay = this.props.autoPlay;
      autoPlay && this.container && this.container.focus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setFormattedTimes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      globalState.instances = globalState.instances.filter(function (setter) {
        return setter !== _this2.setInstanceState;
      });

      if (globalState.playingRef === this.audio) {
        globalState.playingRef = undefined;
      }

      this.audio.removeEventListener('play', this.onPlay);
      this.audio.removeEventListener('pause', this.onPause);
      this.audio.removeEventListener('loadstart', this.onLoadStart);
      this.audio.removeEventListener('progress', this.onProgress);
      this.audio.removeEventListener('canplay', this.onCanPlay);
      this.audio.removeEventListener('canplaythrough', this.onCanPlay);
      this.audio.removeEventListener('loadedmetadata', this.onLoadedMetaData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          src = _this$props.src,
          size = _this$props.size,
          _this$props$attribute = _this$props.attributes,
          attributes = _this$props$attribute === void 0 ? {} : _this$props$attribute,
          autoPlay = _this$props.autoPlay,
          style = _this$props.style,
          t = _this$props.t,
          height = _this$props.height,
          closeHandler = _this$props.closeHandler,
          download = _this$props.download,
          scrubberPosition = _this$props.scrubberPosition,
          timePosition = _this$props.timePosition,
          controlsPadding = _this$props.controlsPadding;
      var _this$state = this.state,
          playEnabled = _this$state.playEnabled,
          playing = _this$state.playing,
          progress = _this$state.progress,
          loading = _this$state.loading,
          buffered = _this$state.buffered,
          sourceError = _this$state.sourceError;
      var isVideo = src.mp4 || src.hls;
      var leftIconsWidth = SIZE.play + (download ? SIZE.download + ICON_SPACING : 0);
      var rightIconsWidth = closeHandler ? SIZE.close : 0;
      var uiTextStyle = {
        maxWidth: "calc(100% - ".concat(leftIconsWidth + rightIconsWidth + 20, "px)"),
        left: timePosition === 'left' ? leftIconsWidth + 10 : 'auto',
        right: timePosition === 'right' ? rightIconsWidth + 10 : 'auto'
      };
      var timeRanges = [];

      if (buffered && buffered.length) {
        for (var i = 0; i < buffered.length; i++) {
          timeRanges.push({
            start: buffered.start(i),
            end: buffered.end(i)
          });
        }
      }

      return _react.default.createElement("div", _extends({}, (0, _glamor.merge)(styles.wrapper, _Center.breakoutStyles[size]), {
        ref: this.containerRef,
        style: _objectSpread({}, style, {
          height: "".concat(height, "px")
        }),
        tabIndex: "0",
        role: "region",
        "aria-label": t('styleguide/AudioPlayer/aria')
      }), !isVideo && _react.default.createElement("audio", _extends({}, styles.audio, attributes, {
        ref: this.ref,
        autoPlay: autoPlay,
        onLoadedMetadata: this.onLoadedMetaData,
        crossOrigin: "anonymous"
      }), src.mp3 && _react.default.createElement("source", {
        src: src.mp3,
        type: "audio/mpeg",
        onError: this.onSourceError
      }), src.aac && _react.default.createElement("source", {
        src: src.aac,
        type: "audio/mp4",
        onError: this.onSourceError
      }), src.ogg && _react.default.createElement("source", {
        src: src.ogg,
        type: "audio/ogg",
        onError: this.onSourceError
      })), isVideo && _react.default.createElement("video", _extends({}, styles.audio, attributes, {
        ref: this.ref,
        autoPlay: autoPlay,
        onLoadedMetadata: this.onLoadedMetaData,
        crossOrigin: "anonymous",
        playsInline: true,
        "webkit-playsinline": ""
      }), src.hls && _react.default.createElement("source", {
        src: src.hls,
        type: "application/x-mpegURL",
        onError: this.onSourceError
      }), src.mp4 && _react.default.createElement("source", {
        src: src.mp4,
        type: "video/mp4",
        onError: this.onSourceError
      })), _react.default.createElement("div", _extends({}, styles.controls, {
        style: {
          top: Math.ceil((height - CONTROLS_HEIGHT) / 2),
          left: controlsPadding,
          right: controlsPadding
        }
      }), _react.default.createElement("button", _extends({}, styles.play, {
        onClick: playEnabled ? this.toggle : null,
        title: t("styleguide/AudioPlayer/".concat(playing ? 'pause' : 'play')),
        "aria-live": "assertive"
      }), !playing && _react.default.createElement(_playArrow.default, {
        size: SIZE.play,
        fill: playEnabled ? '#000' : _colors.default.disabled
      }), playing && _react.default.createElement(_pause.default, {
        size: SIZE.play,
        fill: "#000"
      })), download && _react.default.createElement("div", styles.download, playEnabled && _react.default.createElement("a", {
        href: src.mp3 || src.aac || src.mp4,
        download: true,
        title: t('styleguide/AudioPlayer/download')
      }, _react.default.createElement(_fileDownload.default, {
        size: SIZE.download,
        fill: '#000'
      })), !playEnabled && _react.default.createElement(_fileDownload.default, {
        size: SIZE.download,
        fill: _colors.default.disabled
      })), closeHandler && _react.default.createElement("button", _extends({
        title: t('styleguide/AudioPlayer/close')
      }, styles.close, {
        onClick: closeHandler
      }), _react.default.createElement(_close.default, {
        size: SIZE.close,
        fill: '#000'
      })), _react.default.createElement("div", _extends({}, styles.uiText, {
        style: uiTextStyle
      }), loading && _react.default.createElement(_Spinner.InlineSpinner, {
        size: 25,
        title: t('styleguide/AudioPlayer/loading')
      }), _react.default.createElement("div", _extends({}, styles.time, {
        tabIndex: "0"
      }), this.formattedCurrentTime && this.formattedCurrentTime, this.formattedCurrentTime && this.formattedDuration && ' / ', this.formattedDuration && this.formattedDuration), sourceError && !loading && _react.default.createElement("div", styles.sourceError, t('styleguide/AudioPlayer/sourceError'), ' ', _react.default.createElement("span", _extends({
        onClick: function onClick() {
          return _this3.reload();
        }
      }, styles.retry), t('styleguide/AudioPlayer/sourceErrorTryAgain'))))), _react.default.createElement("div", scrubberPosition === 'bottom' ? styles.scrubberBottom : styles.scrubberTop, _react.default.createElement("div", _extends({}, styles.progress, {
        style: {
          width: "".concat(progress * 100, "%")
        }
      })), _react.default.createElement("div", _extends({}, styles.scrub, {
        ref: this.scrubRef,
        onTouchStart: this.scrubStart,
        onTouchMove: this.scrub,
        onTouchEnd: this.scrubEnd,
        onMouseDown: this.scrubStart
      })), _react.default.createElement("div", styles.buffer, this.audio && timeRanges.map(function (_ref, index) {
        var start = _ref.start,
            end = _ref.end;
        return _react.default.createElement("span", _extends({
          key: index
        }, styles.timeRange, {
          style: {
            left: "".concat(start / _this3.audio.duration * 100, "%"),
            width: "".concat((end - start) / _this3.audio.duration * 100, "%")
          }
        }));
      })), _react.default.createElement("div", styles.totalDuration)));
    }
  }]);

  return AudioPlayer;
}(_react.Component);

AudioPlayer.propTypes = {
  src: _propTypes.default.shape({
    mp3: _propTypes.default.string,
    aac: _propTypes.default.string,
    ogg: _propTypes.default.string,
    hls: _propTypes.default.string,
    mp4: _propTypes.default.string
  }),
  autoPlay: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_Center.breakoutStyles)),
  attributes: _propTypes.default.object,
  height: _propTypes.default.number,
  style: _propTypes.default.object,
  closeHandler: _propTypes.default.func,
  download: _propTypes.default.bool,
  scrubberPosition: _propTypes.default.oneOf(['top', 'bottom']),
  timePosition: _propTypes.default.oneOf(['left', 'right']),
  controlsPadding: _propTypes.default.number
};
AudioPlayer.defaultProps = {
  autoPlay: false,
  size: undefined,
  height: 44,
  style: {},
  download: false,
  scrubberPosition: 'top',
  timePosition: 'right',
  controlsPadding: 0
};
var _default = AudioPlayer;
exports.default = _default;