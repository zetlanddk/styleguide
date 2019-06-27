"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = require("../Typography");

var _Spinner = _interopRequireDefault(require("../Spinner"));

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

var P = _Typography.Interaction.P;
var styles = {
  error: (0, _glamor.css)({
    color: _colors.default.error
  }),
  message: (0, _glamor.css)({
    position: 'absolute',
    top: '50%',
    marginTop: 30,
    width: '100%',
    textAlign: 'center'
  }),
  spacer: (0, _glamor.css)({
    position: 'relative',
    minHeight: 120,
    height: '100%',
    minWidth: '100%'
  })
};

var ErrorMessage = function ErrorMessage(_ref) {
  var error = _ref.error;
  return _react.default.createElement(P, styles.error, error.graphQLErrors && error.graphQLErrors.length ? error.graphQLErrors.map(function (e) {
    return e.message;
  }).join(', ') : error.toString());
};

var Spacer = function Spacer(_ref2) {
  var style = _ref2.style,
      children = _ref2.children;
  return _react.default.createElement("div", _extends({}, styles.spacer, {
    style: style
  }), children);
};

var Loader =
/*#__PURE__*/
function (_Component) {
  _inherits(Loader, _Component);

  function Loader(props) {
    var _this;

    _classCallCheck(this, Loader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loader).call(this, props));
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(Loader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeout = setTimeout(function () {
        return _this2.setState({
          visible: true
        });
      }, this.props.delay);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.state.visible;
      var _this$props = this.props,
          style = _this$props.style,
          message = _this$props.message,
          loading = _this$props.loading,
          error = _this$props.error,
          render = _this$props.render,
          ErrorContainer = _this$props.ErrorContainer;

      if (loading && !visible) {
        return _react.default.createElement(Spacer, {
          style: style
        });
      } else if (loading) {
        return _react.default.createElement(Spacer, {
          style: style
        }, _react.default.createElement(_Spinner.default, null), !!message && _react.default.createElement(P, styles.message, message));
      } else if (error) {
        return _react.default.createElement(ErrorContainer, null, _react.default.createElement(ErrorMessage, {
          error: error
        }));
      }

      return render();
    }
  }]);

  return Loader;
}(_react.Component);

Loader.defaultProps = {
  delay: 500,
  render: function render() {
    return null;
  },
  ErrorContainer: function ErrorContainer(_ref3) {
    var children = _ref3.children;
    return children;
  }
};
var _default = Loader;
exports.default = _default;