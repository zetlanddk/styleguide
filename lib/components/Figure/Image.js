"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _utils = require("mdast-react-render/lib/utils");

var _utils2 = require("./utils");

var _Image = _interopRequireDefault(require("../LazyLoad/Image"));

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
  image: (0, _glamor.css)({
    display: 'block',
    width: '100%'
  }),
  maxWidth: (0, _glamor.css)({
    display: 'block',
    position: 'relative'
  })
};

var Image =
/*#__PURE__*/
function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          srcSet = _this$props.srcSet,
          alt = _this$props.alt,
          _this$props$attribute = _this$props.attributes,
          attributes = _this$props$attribute === void 0 ? {} : _this$props$attribute,
          maxWidth = _this$props.maxWidth,
          sizeProp = _this$props.size,
          aboveTheFold = _this$props.aboveTheFold,
          _this$props$enableGal = _this$props.enableGallery,
          enableGallery = _this$props$enableGal === void 0 ? true : _this$props$enableGal;

      var _onClick = enableGallery && this.context.toggleGallery ? this.context.toggleGallery : function () {};

      var size = sizeProp || sizeProp === undefined && (0, _utils.imageSizeInfo)(src);
      var aspectRatio = size ? size.width / size.height : undefined;
      var image = isFinite(aspectRatio) ? _react.default.createElement(_Image.default, {
        attributes: attributes,
        visible: aboveTheFold,
        aspectRatio: aspectRatio,
        src: src,
        srcSet: srcSet,
        alt: alt,
        onClick: function onClick() {
          return _onClick(src);
        }
      }) : _react.default.createElement("img", _extends({}, attributes, styles.image, {
        src: src,
        srcSet: srcSet,
        alt: alt,
        onClick: function onClick() {
          return _onClick(src);
        }
      }));

      if (maxWidth) {
        return _react.default.createElement("span", _extends({}, styles.maxWidth, {
          style: {
            maxWidth: maxWidth
          }
        }), image);
      }

      return image;
    }
  }]);

  return Image;
}(_react.Component);

Image.propTypes = {
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string,
  alt: _propTypes.default.string,
  size: _propTypes.default.shape({
    width: _propTypes.default.number,
    height: _propTypes.default.number
  }),
  maxWidth: _propTypes.default.number,
  aboveTheFold: _propTypes.default.bool
};
Image.contextTypes = {
  toggleGallery: _propTypes.default.func
};
Image.utils = {
  getResizedSrcs: _utils2.getResizedSrcs
};
var _default = Image;
exports.default = _default;