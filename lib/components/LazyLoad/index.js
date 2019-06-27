"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _helpers = require("../../lib/helpers");

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

var checkVisible = function checkVisible() {
  var height = window.innerHeight;
  var scrollY = window.pageYOffset;
  var scrollYEdge = scrollY + height;
  instances.all.forEach(function (instance) {
    if (!instance.state.visible) {
      if (instance.y - instance.props.offset * height < scrollYEdge) {
        instance.setState({
          visible: true
        });
      }
    }
  });
};

var onScroll = (0, _helpers.rafDebounce)(checkVisible);
var onResize = (0, _helpers.rafDebounce)(function () {
  var scrollY = window.pageYOffset;
  instances.all.forEach(function (instance) {
    if (instance.ref) {
      var rect = instance.ref.getBoundingClientRect();
      instance.y = rect.top + scrollY;
    } else {
      instance.y = undefined;
    }
  });
  checkVisible();
});
var instances = {
  add: function add(instance) {
    if (!instances.all.length) {
      window.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onResize);
    }

    instances.all.push(instance);
    onResize();
  },
  rm: function rm(instance) {
    instances.all.splice(instances.all.indexOf(instance), 1);

    if (!instances.all.length) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    }
  },
  all: []
};

var LazyLoad =
/*#__PURE__*/
function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LazyLoad);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LazyLoad)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.setRef = function (ref) {
      _this.ref = ref;
    };

    return _this;
  }

  _createClass(LazyLoad, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.add(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      instances.rm(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          attributes = _this$props.attributes,
          style = _this$props.style;
      var visible = this.props.visible || this.state.visible;
      return _react.default.createElement("span", _extends({
        ref: this.setRef
      }, attributes, {
        style: style
      }), visible ? children : null, !visible && !process.browser && _react.default.createElement("noscript", null, children));
    }
  }]);

  return LazyLoad;
}(_react.Component);

LazyLoad.defaultProps = {
  offset: 0.5
};
var _default = LazyLoad;
exports.default = _default;