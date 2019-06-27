"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _zIndex = _interopRequireDefault(require("../../theme/zIndex"));

var _reactSwipeable = _interopRequireDefault(require("react-swipeable"));

var _close = _interopRequireDefault(require("react-icons/lib/md/close"));

var _Figure = require("../Figure");

var _NavOverlay = _interopRequireDefault(require("./NavOverlay"));

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

var fadeInDurationMs = 200;

var fadeIn = _glamor.css.keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});

var swipeAnimationDurationMs = 200;

var swipeAnimation = function swipeAnimation() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';

  var kfrms = _glamor.css.keyframes({
    '0%': _defineProperty({
      opacity: 1
    }, side, 0),
    '100%': _defineProperty({
      opacity: 0
    }, side, 60)
  });

  return "".concat(kfrms, " ").concat(swipeAnimationDurationMs, "ms ease-out");
};

var styles = {
  wrapper: (0, _glamor.css)({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: _zIndex.default.foreground
  }),
  gallery: (0, _glamor.css)({
    width: '100vw',
    height: '100vh',
    color: '#fff',
    background: '#000',
    display: 'flex',
    flexDirection: 'column',
    animation: "".concat(fadeIn, " ").concat(fadeInDurationMs, "ms ease-out")
  }),
  header: (0, _glamor.css)(_defineProperty({
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    transition: 'opacity 0.1s ease-in',
    padding: '30px 70px'
  }, _mediaQueries.onlyS, {
    padding: 15
  })),
  body: (0, _glamor.css)({
    display: 'flex',
    flex: '1 1 auto'
  }),
  counter: (0, _glamor.css)({
    flex: 1
  }),
  close: (0, _glamor.css)(_defineProperty({
    position: 'absolute',
    flex: 1,
    right: 68,
    top: 28
  }, _mediaQueries.onlyS, {
    right: 13,
    top: 13
  })),
  media: (0, _glamor.css)({
    height: '100px'
  }),
  caption: (0, _glamor.css)(_defineProperty({
    flex: '0 0 auto',
    padding: '15px 70px',
    transition: 'opacity 0.1s ease-in'
  }, _mediaQueries.onlyS, {
    padding: 15
  })),
  mediaItem: (0, _glamor.css)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    flex: 1,
    flexGrow: 1,
    opacity: 1
  }),
  mediaItemImage: (0, _glamor.css)(_defineProperty({
    flex: '0 0 auto',
    verticalAlign: 'bottom',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
  }, _mediaQueries.lUp, {
    animation: "".concat(fadeIn, " ").concat(fadeInDurationMs, "ms ease-out")
  })),
  closing: (0, _glamor.css)({
    animation: swipeAnimation('top')
  }),
  exitLeft: (0, _glamor.css)({
    animation: swipeAnimation('right')
  }),
  exitRight: (0, _glamor.css)({
    animation: swipeAnimation('left')
  })
};

var removeQuery = function removeQuery() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return url.split('?')[0];
};

var Gallery =
/*#__PURE__*/
function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));
    var startItemIndex = props.items.findIndex(function (i) {
      return removeQuery(i.src) === removeQuery(props.startItemSrc);
    });
    _this.state = {
      index: startItemIndex > -1 ? startItemIndex : 0,
      focus: false,
      exitLeft: false,
      exitRight: false,
      closing: false
    };

    _this.handleClickLeft = function () {
      var total = _this.props.items.length;

      _this.setState(function (prevState) {
        return {
          index: prevState.index !== 0 ? prevState.index - 1 : total - 1,
          exitLeft: false,
          exitRight: false
        };
      });
    };

    _this.handleClickRight = function () {
      var total = _this.props.items.length - 1;

      _this.setState(function (prevState) {
        return {
          index: prevState.index !== total ? prevState.index + 1 : 0,
          exitLeft: false,
          exitRight: false
        };
      });
    };

    _this.toggleFocus = function () {
      _this.setState(function (prevState) {
        return {
          focus: !prevState.focus
        };
      });
    };

    _this.handleSwipeDown = function () {
      return _this.setState({
        closing: true
      }, (0, _debounce.default)(props.onClose, swipeAnimationDurationMs));
    };

    _this.handleSwipeLeft = function () {
      return _this.setState({
        exitLeft: true
      }, (0, _debounce.default)(_this.handleClickRight, swipeAnimationDurationMs * 0.7));
    };

    _this.handleSwipeRight = function () {
      return _this.setState({
        exitRight: true
      }, (0, _debounce.default)(_this.handleClickLeft, swipeAnimationDurationMs * 0.7));
    };

    return _this;
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          index = _this$state.index,
          exitLeft = _this$state.exitLeft,
          exitRight = _this$state.exitRight,
          closing = _this$state.closing,
          focus = _this$state.focus;
      var _this$props = this.props,
          onClose = _this$props.onClose,
          items = _this$props.items;
      var currentItem = items[index];
      var total = this.props.items.length;
      var reorderedItems = items.slice(index).concat(items.slice(0, index));
      var preloadItems = total >= 5 ? reorderedItems.slice(0, 3).concat(reorderedItems.slice(-2)) : reorderedItems;
      var resizeStep = Math.ceil(window.innerWidth / 500) * 500;
      var enableNavigation = total > 1;
      return _react.default.createElement("div", styles.wrapper, _react.default.createElement(_reactSwipeable.default, {
        onSwipedDown: this.handleSwipeDown,
        onSwipedLeft: enableNavigation ? this.handleSwipeLeft : undefined,
        onSwipedRight: enableNavigation ? this.handleSwipeRight : undefined,
        delta: 10,
        preventDefaultTouchmoveEvent: true,
        stopPropagation: true
      }, _react.default.createElement(_NavOverlay.default, {
        handleClickLeft: enableNavigation ? this.handleClickLeft : undefined,
        handleClickRight: enableNavigation ? this.handleClickRight : undefined,
        handleClick: this.toggleFocus,
        onClose: onClose
      }), _react.default.createElement("div", styles.gallery, _react.default.createElement("div", _extends({}, styles.header, {
        style: {
          opacity: focus ? 0 : 1
        }
      }), enableNavigation && _react.default.createElement("div", styles.counter, index + 1, "/", total), _react.default.createElement("div", _extends({}, styles.close, {
        onClick: onClose
      }), _react.default.createElement(_close.default, {
        size: 24
      }))), _react.default.createElement("div", styles.body, _react.default.createElement("div", _extends({}, styles.mediaItem, exitLeft && styles.exitLeft, exitRight && styles.exitRight, closing && styles.closing), [exitLeft, exitRight, closing].some(Boolean) || _react.default.createElement(_Spinner.default, null), preloadItems.map(function (item, i) {
        var _FigureImage$utils$ge = _Figure.FigureImage.utils.getResizedSrcs(item.src, resizeStep),
            src = _FigureImage$utils$ge.src,
            srcSet = _FigureImage$utils$ge.srcSet;

        return _react.default.createElement("img", _extends({
          key: item.src,
          alt: item.alt
        }, styles.mediaItemImage, {
          src: src,
          srcSet: srcSet,
          style: {
            display: currentItem.src === item.src ? 'block' : 'none'
          }
        }));
      }))), _react.default.createElement("div", _extends({}, styles.caption, {
        style: {
          opacity: focus ? 0 : 1
        }
      }), _react.default.createElement(_Figure.FigureCaption, null, "".concat(currentItem.caption, " "), currentItem.credit && _react.default.createElement(_Figure.FigureByline, null, currentItem.credit))))));
    }
  }]);

  return Gallery;
}(_react.Component);

Gallery.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string,
    caption: _propTypes.default.string,
    credit: _propTypes.default.string
  })),
  startItemSrc: _propTypes.default.string,
  onClose: _propTypes.default.func.isRequired
};
Gallery.defaultProps = {
  items: []
};
var _default = Gallery;
exports.default = _default;