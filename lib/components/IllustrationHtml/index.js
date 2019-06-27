"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

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

var styles = {
  ai2html: (0, _glamor.css)({
    '& [data-min-width]': {
      display: 'none'
    },
    '& [data-min-width]:last-child': {
      display: 'block'
    }
  })
};

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
};

var IllustrationHtml =
/*#__PURE__*/
function (_Component) {
  _inherits(IllustrationHtml, _Component);

  function IllustrationHtml() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IllustrationHtml);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IllustrationHtml)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.setRef = function (ref) {
      _this.ref = ref;
    };

    _this.resize = function () {
      if (_this.ref) {
        // ai2html specific resize
        // - adapted from https://github.com/newsdev/ai2html/blob/b0bfda26aba31c5bf9d44c70dba02d4eec381ad6/_includes/resizer-script.html#L9
        var width = _this.ref.getBoundingClientRect().width;

        var elements = Array.prototype.slice.call(_this.ref.querySelectorAll('[data-min-width]'));
        elements.forEach(function (element) {
          var minwidth = element.getAttribute('data-min-width');
          var maxwidth = element.getAttribute('data-max-width');

          if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
            element.style.display = 'block';
          } else {
            element.style.display = 'none';
          }
        });
      }
    };

    return _this;
  }

  _createClass(IllustrationHtml, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
      this.resize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.resize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          code = _this$props.code,
          images = _this$props.images;
      var resolvedCode = code;
      images.forEach(function (image) {
        resolvedCode = resolvedCode.replace(new RegExp(escapeRegExp(image.ref), 'g'), image.url);
      });
      return _react.default.createElement("div", _extends({}, styles.ai2html, {
        ref: this.setRef,
        dangerouslySetInnerHTML: {
          __html: resolvedCode
        }
      }));
    }
  }]);

  return IllustrationHtml;
}(_react.Component);

IllustrationHtml.propTypes = {
  code: _propTypes.default.string.isRequired,
  images: _propTypes.default.arrayOf(_propTypes.default.shape({
    url: _propTypes.default.string.isRequired,
    ref: _propTypes.default.string.isRequired
  })).isRequired
};
var _default = IllustrationHtml;
exports.default = _default;