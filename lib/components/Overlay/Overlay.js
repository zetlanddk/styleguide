"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayRenderer = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _zIndex = _interopRequireDefault(require("../../theme/zIndex"));

var _mediaQueries = require("../../theme/mediaQueries");

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

var styles = {
  root: (0, _glamor.css)(_defineProperty({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: _zIndex.default.overlay,
    transition: 'opacity .12s ease-in-out',
    background: 'rgba(0,0,0,.2)'
  }, _mediaQueries.mUp, {
    overflowY: 'auto'
  })),
  inner: (0, _glamor.css)(_defineProperty({
    position: 'relative',
    zIndex: 1,
    // to establish a stacking context
    background: 'white',
    height: '100vh',
    boxShadow: '0 0 6px rgba(0,0,0,.2)',
    overflowY: 'auto'
  }, _mediaQueries.mUp, {
    maxWidth: '600px',
    minHeight: '60vh',
    height: 'auto',
    margin: '20vh auto 20vh',
    overflowY: 'visible'
  }))
};

var Overlay =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Overlay, _PureComponent);

  function Overlay(props) {
    var _this;

    _classCallCheck(this, Overlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Overlay).call(this, props));
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // This timeout may not be required, but the fade-in won't work without
      // this inside the catalog.
      this.fadeInTimeout = setTimeout(function () {
        _this2.setState({
          isVisible: true
        });
      }); // The code below is used to block scrolling of the page behind the overlay.
      // The trick is to add overflow:hidden and position:relative to the body
      // element. The later scrolls the page to the top, to counter that we shift
      // the whole page up by the appropriate offset and restore the scroll offset
      // when the overlay is dismissed.

      this.pageYOffset = window.pageYOffset;
      document.documentElement.style.top = "-".concat(this.pageYOffset, "px");
      document.documentElement.style.position = 'relative';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.left = '0';
      document.body.style.right = '0';
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.fadeInTimeout); // Remove scroll block and scroll page back to its original Y-offset.

      document.documentElement.style.top = '';
      document.documentElement.style.position = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, this.pageYOffset);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(OverlayRenderer, _extends({}, this.props, {
        isVisible: this.state.isVisible
      }));
    }
  }]);

  return Overlay;
}(_react.PureComponent);

Overlay.propTypes = {
  children: _propTypes.default.node.isRequired,
  onClose: _propTypes.default.func.isRequired
};
var _default = Overlay; // This is the actual Overlay component that is rendered. We export this so we
// can document the overlay in the catalog without affecting 'document.body'.

exports.default = _default;

var OverlayRenderer =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(OverlayRenderer, _PureComponent2);

  function OverlayRenderer(props) {
    var _this3;

    _classCallCheck(this, OverlayRenderer);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(OverlayRenderer).call(this, props)); // This event handler is attached to the background of the overlay.

    _this3.close = function (e) {
      if (e.target === e.currentTarget) {
        _this3.props.onClose();
      }
    };

    return _this3;
  }

  _createClass(OverlayRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isVisible = _this$props.isVisible,
          mUpStyle = _this$props.mUpStyle,
          children = _this$props.children;
      return _react.default.createElement("div", _extends({}, styles.root, {
        style: {
          opacity: isVisible ? 1 : 0
        },
        onClick: this.close
      }), _react.default.createElement("div", (0, _glamor.merge)(styles.inner, mUpStyle && _defineProperty({}, _mediaQueries.mUp, mUpStyle)), children));
    }
  }]);

  return OverlayRenderer;
}(_react.PureComponent);

exports.OverlayRenderer = OverlayRenderer;
OverlayRenderer.propTypes = {
  mUpStyle: _propTypes.default.shape({
    maxWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    marginTop: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    marginBottom: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),
  children: _propTypes.default.node.isRequired,
  isVisible: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired
};