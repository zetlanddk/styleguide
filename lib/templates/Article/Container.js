"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMeta = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  container: (0, _glamor.css)({
    display: 'block',
    backgroundColor: '#fff'
  })
};

var DocumentContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(DocumentContainer, _Component);

  function DocumentContainer(props) {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DocumentContainer);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DocumentContainer)).call.apply(_getPrototypeOf2, [this, props].concat(args)));
    _this.subscriptions = [];

    _this.subscribe = function (f) {
      return _this.subscriptions.push(f);
    };

    _this.unsubscribe = function (f) {
      _this.subscriptions = _this.subscriptions.filter(function (subscription) {
        return subscription !== f;
      });
    };

    _this.makeMetaContext = function (_ref) {
      var meta = _ref.meta;
      return {
        meta: _objectSpread({}, meta.toJS ? meta.toJS() : meta, {
          subscribe: _this.subscribe,
          unsubscribe: _this.unsubscribe
        })
      };
    };

    _this.state = _this.makeMetaContext(props);
    return _this;
  }

  _createClass(DocumentContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.meta !== this.props.meta) {
        this.setState(this.makeMetaContext(nextProps), function () {
          _this2.subscriptions.forEach(function (f) {
            return f();
          });
        });
      }
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var meta = this.state.meta;
      return {
        meta: meta
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("article", styles.container, children);
    }
  }]);

  return DocumentContainer;
}(_react.Component);

DocumentContainer.childContextTypes = {
  meta: _propTypes.default.object
};
var _default = DocumentContainer;
exports.default = _default;

var getComponentDisplayName = function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
};

var withMeta = function withMeta(ComposedComponent) {
  var WithMeta =
  /*#__PURE__*/
  function (_Component2) {
    _inherits(WithMeta, _Component2);

    function WithMeta() {
      var _getPrototypeOf3;

      var _this3;

      _classCallCheck(this, WithMeta);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(WithMeta)).call.apply(_getPrototypeOf3, [this].concat(args)));

      _this3.subscription = function () {
        return _this3.forceUpdate();
      };

      return _this3;
    }

    _createClass(WithMeta, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.context.meta.subscribe(this.subscription);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.meta.unsubscribe(this.subscription);
      }
    }, {
      key: "render",
      value: function render() {
        var meta = this.context.meta;
        return _react.default.createElement(ComposedComponent, _extends({
          meta: meta
        }, this.props));
      }
    }]);

    return WithMeta;
  }(_react.Component);

  WithMeta.displayName = "WithMeta(".concat(getComponentDisplayName(ComposedComponent), ")");
  WithMeta.contextTypes = {
    meta: _propTypes.default.object
  };
  return WithMeta;
};

exports.withMeta = withMeta;