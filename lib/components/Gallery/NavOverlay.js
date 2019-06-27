"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chevronLeft = _interopRequireDefault(require("react-icons/lib/md/chevron-left"));

var _chevronRight = _interopRequireDefault(require("react-icons/lib/md/chevron-right"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _zIndex = _interopRequireDefault(require("../../theme/zIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  nav: (0, _glamor.css)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    height: '100vh',
    color: '#fff',
    zIndex: _zIndex.default.overlay,
    '& .left': {
      justifyContent: 'flex-start'
    },
    '& .right': {
      justifyContent: 'flex-end'
    }
  }),
  navClose: (0, _glamor.css)({
    position: 'fixed',
    width: 120,
    height: 120,
    top: 8,
    right: 8
  }),
  navArea: (0, _glamor.css)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    padding: '0 30px',
    opacity: 0,
    transition: 'opacity 0.1s linear',
    ':hover': {
      transition: 'opacity 0.5s linear',
      opacity: '0.7'
    }
  }),
  navButton: (0, _glamor.css)(_defineProperty({
    color: '#fff',
    display: 'none'
  }, _mediaQueries.lUp, {
    display: 'block'
  }))
};

var NavOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavOverlay, _React$Component);

  function NavOverlay(props) {
    var _this;

    _classCallCheck(this, NavOverlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavOverlay).call(this, props));
    _this.ref = null;

    _this.setRef = function (ref) {
      return _this.ref = ref;
    };

    var handleClickLeft = props.handleClickLeft,
        handleClickRight = props.handleClickRight,
        onClose = props.onClose;

    _this.handleKeyUp = function (event) {
      switch (event.keyCode) {
        case 37:
          handleClickLeft && handleClickLeft();
          break;

        case 39:
          handleClickRight && handleClickRight();
          break;

        case 27:
          onClose();
          break;

        default:
          break;
      }
    };

    return _this;
  }

  _createClass(NavOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ref && this.ref.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleClickLeft = _this$props.handleClickLeft,
          handleClickRight = _this$props.handleClickRight,
          onClose = _this$props.onClose,
          handleClick = _this$props.handleClick;
      return _react.default.createElement("div", _extends({
        ref: this.setRef
      }, styles.nav, {
        onKeyUp: this.handleKeyUp,
        tabIndex: -1
      }), handleClickLeft && _react.default.createElement("div", _extends({}, styles.navArea, {
        className: "left",
        onClick: handleClickLeft
      }), _react.default.createElement("div", styles.navButton, _react.default.createElement(_chevronLeft.default, {
        size: 48
      }))), _react.default.createElement("div", _extends({}, styles.navArea, {
        onClick: handleClick
      })), handleClickRight && _react.default.createElement("div", _extends({}, styles.navArea, {
        className: "right",
        onClick: handleClickRight
      }), _react.default.createElement("div", styles.navButton, _react.default.createElement(_chevronRight.default, {
        size: 48
      }))), _react.default.createElement("div", _extends({}, styles.navClose, {
        onClick: onClose
      })));
    }
  }]);

  return NavOverlay;
}(_react.default.Component);

NavOverlay.propTypes = {
  handleClickLeft: _propTypes.default.func,
  handleClickRight: _propTypes.default.func,
  onClose: _propTypes.default.func.isRequired
};
var _default = NavOverlay;
exports.default = _default;