"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fieldHeight = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _fonts = require("../../theme/fonts");

var _mediaQueries = require("../../theme/mediaQueries");

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var xPadding = 0;
var yPadding = 9; // (40 - 22) / 2

var borderWidth = 1;
var lineHeight = 20;
var fieldHeight = 40;
exports.fieldHeight = fieldHeight;
var fieldStyle = (0, _glamor.css)({
  width: '100%',
  appearance: 'none',
  outline: 'none',
  verticalAlign: 'bottom',
  // yPadding can interfere with font
  padding: "0 ".concat(xPadding, "px"),
  textDecoration: 'none',
  height: fieldHeight,
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontSize: 22,
  boxSizing: 'border-box',
  backgroundColor: 'white',
  border: 'none',
  borderBottom: "solid ".concat(_colors.default.disabled, " ").concat(borderWidth, "px"),
  borderRadius: 0,
  color: _colors.default.text,
  ':focus': {
    borderColor: _colors.default.primary
  }
});
var fieldErrorStyle = (0, _glamor.css)({
  borderColor: _colors.default.error,
  ':focus': {
    borderColor: _colors.default.error
  }
});
var fieldIncStyle = (0, _glamor.css)({
  '::-ms-clear': {
    display: 'none'
  },
  '::-webkit-inner-spin-button': {
    appearance: 'none'
  },
  '::-webkit-outer-spin-button': {
    appearance: 'none'
  }
});
var fieldIconStyle = (0, _glamor.css)({
  paddingRight: fieldHeight
});
var containerStyle = (0, _glamor.css)({
  width: '100%',
  paddingTop: lineHeight,
  position: 'relative',
  display: 'inline-block',
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontSize: 22,
  lineHeight: "".concat(lineHeight, "px"),
  marginBottom: 15
});
var labelTextStyle = (0, _glamor.css)({
  position: 'absolute',
  left: xPadding,
  top: lineHeight + yPadding,
  color: _colors.default.disabled,
  transition: 'top 200ms, font-size 200ms'
});
var labelTextTopStyle = (0, _glamor.css)(_defineProperty({
  top: 3,
  fontSize: 12,
  lineHeight: '13px'
}, _mediaQueries.mUp, {
  top: 5,
  fontSize: 14,
  lineHeight: '15px'
}));
var labelTextFocusedStyle = (0, _glamor.css)({
  color: _colors.default.primary
});
var labelTextErrorStyle = (0, _glamor.css)({
  color: _colors.default.error
});
var whiteStyle = (0, _glamor.css)({
  backgroundColor: 'transparent',
  color: '#fff',
  borderColor: '#fff',
  ':focus': {
    borderColor: '#fff'
  }
});
var blackStyle = (0, _glamor.css)({
  backgroundColor: 'transparent',
  color: '#000',
  borderColor: '#000',
  ':focus': {
    borderColor: '#000'
  }
});
var arrowUpStyle = (0, _glamor.css)({
  position: 'absolute',
  right: 0,
  top: lineHeight + 3,
  cursor: 'pointer'
});
var arrowDownStyle = (0, _glamor.css)({
  position: 'absolute',
  right: 0,
  top: lineHeight + fieldHeight / 2 - 3,
  cursor: 'pointer'
});
var iconWrapperStyle = (0, _glamor.css)({
  position: 'absolute',
  right: 3,
  top: lineHeight + 5
});

var ArrowUp = function ArrowUp(_ref) {
  var size = _ref.size,
      fill = _ref.fill,
      props = _objectWithoutProperties(_ref, ["size", "fill"]);

  return _react.default.createElement("svg", _extends({}, props, {
    fill: fill
  }, arrowUpStyle, {
    width: size,
    height: size,
    viewBox: "0 0 24 24"
  }), _react.default.createElement("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var ArrowDown = function ArrowDown(_ref2) {
  var size = _ref2.size,
      fill = _ref2.fill,
      props = _objectWithoutProperties(_ref2, ["size", "fill"]);

  return _react.default.createElement("svg", _extends({}, props, {
    fill: fill
  }, arrowDownStyle, {
    width: size,
    height: size,
    viewBox: "0 0 24 24"
  }), _react.default.createElement("path", {
    d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var Field =
/*#__PURE__*/
function (_Component) {
  _inherits(Field, _Component);

  function Field(props, context) {
    var _this;

    _classCallCheck(this, Field);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Field).call(this, props, context));
    _this.state = {
      isFocused: false,
      isValidating: false,
      isDirty: false,
      value: ''
    };

    _this.inputRef = function (ref) {
      return _this.input = ref;
    };

    return _this;
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _onChange = _this$props.onChange,
          name = _this$props.name,
          autoComplete = _this$props.autoComplete,
          type = _this$props.type,
          sim = _this$props.simulate,
          label = _this$props.label,
          error = _this$props.error,
          renderInput = _this$props.renderInput,
          onInc = _this$props.onInc,
          onDec = _this$props.onDec,
          isFocusedFromProps = _this$props.isFocused,
          icon = _this$props.icon;
      var simulationClassName;
      var isFocused = this.state.isFocused;

      if (sim) {
        isFocused = sim.indexOf('focus') !== -1;
        simulationClassName = (0, _glamor.simulate)(sim).toString();
      }

      if (isFocusedFromProps !== undefined) {
        isFocused = isFocusedFromProps;
      }

      var _this$state = this.state,
          isValidating = _this$state.isValidating,
          isDirty = _this$state.isDirty;
      var value = this.props.value !== undefined ? this.props.value : this.state.value;
      var colorStyle;

      if (this.props.black) {
        colorStyle = blackStyle;
      }

      if (this.props.white) {
        colorStyle = whiteStyle;
      }

      var hasIncrease = !!onInc;
      var hasDecrease = !!onDec;
      var hasError = !!error;
      var labelStyle = isFocused || value || hasError ? (0, _glamor.merge)(labelTextStyle, labelTextTopStyle, isFocused && labelTextFocusedStyle, hasError && labelTextErrorStyle, colorStyle) : (0, _glamor.merge)(labelTextStyle, colorStyle);
      var incStyle = hasIncrease ? fieldIncStyle : undefined;
      var iconStyle = icon ? fieldIconStyle : undefined;
      var fStyle = hasError ? (0, _glamor.merge)(fieldStyle, fieldErrorStyle, incStyle, colorStyle, iconStyle) : (0, _glamor.merge)(fieldStyle, incStyle, colorStyle, iconStyle);
      return _react.default.createElement("label", containerStyle, renderInput({
        name: name,
        autoComplete: autoComplete,
        type: type,
        ref: this.inputRef,
        onChange: function onChange(event) {
          var v = event.target.value;

          if (_onChange) {
            _onChange(event, v, isValidating);

            _this2.setState(function () {
              return {
                isDirty: true
              };
            });
          } else {
            _this2.setState(function () {
              return {
                isDirty: true,
                value: v
              };
            });
          }
        },
        value: value,
        onFocus: function onFocus() {
          return _this2.setState(function () {
            return {
              isFocused: true
            };
          });
        },
        onBlur: function onBlur(event) {
          var v = event.target.value;

          if (!isValidating && _onChange && isDirty) {
            _onChange(event, v, true);
          }

          _this2.setState(function (state) {
            return {
              isFocused: false,
              isValidating: state.isDirty
            };
          });
        },
        className: [fStyle.toString(), simulationClassName].filter(Boolean).join(' ')
      }), _react.default.createElement("span", labelStyle, error || label), hasDecrease && _react.default.createElement(ArrowDown, {
        fill: isFocused ? _colors.default.primary : _colors.default.disabled,
        size: fieldHeight / 2,
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          onDec();

          if (_this2.input) {
            _this2.input.focus();
          }
        }
      }), hasIncrease && _react.default.createElement(ArrowUp, {
        fill: isFocused ? _colors.default.primary : _colors.default.disabled,
        size: fieldHeight / 2,
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          onInc();

          if (_this2.input) {
            _this2.input.focus();
          }
        }
      }), icon && _react.default.createElement("span", iconWrapperStyle, icon));
    }
  }]);

  return Field;
}(_react.Component);

Field.propTypes = {
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  renderInput: _propTypes.default.func.isRequired,
  isFocused: _propTypes.default.bool,
  icon: _propTypes.default.node
};
Field.defaultProps = {
  renderInput: function renderInput(props) {
    return _react.default.createElement("input", props);
  }
};
var _default = Field;
exports.default = _default;