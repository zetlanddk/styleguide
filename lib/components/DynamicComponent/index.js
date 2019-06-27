"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createRequire = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var glamor = _interopRequireWildcard(require("glamor"));

var styleguide = _interopRequireWildcard(require("../../lib.js"));

var styleguideChart = _interopRequireWildcard(require("../../chart.js"));

var _require = require("./require");

var _Loader = _interopRequireDefault(require("../Loader"));

var _env = _interopRequireDefault(require("../../theme/env"));

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

var DEFAULT_WHITELIST = (_env.default.DYNAMIC_COMPONENT_BASE_URLS || '').split(',').filter(Boolean);

var createRequire = function createRequire() {
  var whitelist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_WHITELIST;
  var whitelisted = ['/', './'].concat(whitelist);
  return (0, _require.requireFrom)(function (name) {
    if (whitelisted.some(function (base) {
      return name.startsWith(base);
    })) {
      return name;
    }

    return "./".concat(name);
  }).alias({
    react: _react.default,
    'prop-types': _propTypes.default,
    glamor: glamor,
    '@project-r/styleguide': styleguide,
    '@project-r/styleguide/chart': styleguideChart
  });
};

exports.createRequire = createRequire;

var DynamicComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DynamicComponent, _Component);

  function DynamicComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DynamicComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DynamicComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(DynamicComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.require(this.props.src).then(function (module) {
        _this2.setState({
          LoadedComponent: module.hasOwnProperty('default') ? module['default'] : module
        });
      }).catch(function (error) {
        _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var LoadedComponent = this.state.LoadedComponent;
      var error = this.state.error || !this.props.src && new Error('Missing src');

      if (error) {
        throw error;
      }

      if (LoadedComponent) {
        return _react.default.createElement(LoadedComponent, _extends({
          require: this.props.require
        }, this.props.props));
      }

      var _this$props = this.props,
          html = _this$props.html,
          loaderProps = _this$props.loaderProps;

      if (html) {
        return _react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: html
          }
        });
      }

      return _react.default.createElement(_Loader.default, _extends({}, loaderProps, {
        loading: true
      }));
    }
  }]);

  return DynamicComponent;
}(_react.Component);

DynamicComponent.propTypes = {
  src: _propTypes.default.string.isRequired,
  html: _propTypes.default.string,
  props: _propTypes.default.object,
  loaderProps: _propTypes.default.object,
  require: _propTypes.default.func.isRequired
};
DynamicComponent.defaultProps = {
  require: createRequire()
};
var _default = DynamicComponent;
exports.default = _default;