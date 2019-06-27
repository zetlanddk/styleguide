"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ChartLead = exports.ChartTitle = exports.ReactCharts = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _utils = require("./utils");

var _Bars = _interopRequireWildcard(require("./Bars"));

var _TimeBars = _interopRequireDefault(require("./TimeBars"));

var _Lines = require("./Lines");

var _ScatterPlots = _interopRequireDefault(require("./ScatterPlots"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mediaQueries = require("../../theme/mediaQueries");

var _styles = require("../Typography/styles");

var _objectSpread2, _objectSpread3;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ReactCharts = {
  Bar: _Bars.default,
  Lollipop: _Bars.Lollipop,
  TimeBar: _TimeBars.default,
  Line: _Lines.Line,
  Slope: _Lines.Slope,
  ScatterPlot: _ScatterPlots.default
};
exports.ReactCharts = ReactCharts;

var createRanges = function createRanges(_ref) {
  var neutral = _ref.neutral,
      sequential3 = _ref.sequential3,
      opposite3 = _ref.opposite3,
      discrete = _ref.discrete;
  var oppositeReversed = [].concat(opposite3).reverse();
  return {
    diverging1: [sequential3[1], opposite3[1]],
    diverging1n: [sequential3[1], neutral, opposite3[1]],
    diverging2: _toConsumableArray(sequential3.slice(0, 2)).concat(_toConsumableArray(oppositeReversed.slice(0, 2))),
    diverging3: _toConsumableArray(sequential3).concat(_toConsumableArray(oppositeReversed)),
    sequential3: sequential3,
    discrete: discrete
  };
};

var colorRanges = createRanges(_colors.default);
var styles = {
  h: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium19, (_objectSpread2 = {
    lineHeight: '25px'
  }, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifMedium22)), _defineProperty(_objectSpread2, "color", _colors.default.text), _defineProperty(_objectSpread2, "margin", 0), _defineProperty(_objectSpread2, "marginBottom", 15), _defineProperty(_objectSpread2, '& + p', {
    marginTop: -15
  }), _objectSpread2))),
  p: (0, _glamor.css)(_objectSpread({
    color: _colors.default.text
  }, _styles.sansSerifRegular16, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _mediaQueries.mUp, _objectSpread({}, _styles.sansSerifRegular19)), _defineProperty(_objectSpread3, "margin", 0), _defineProperty(_objectSpread3, "marginBottom", 15), _objectSpread3)))
};

var ChartTitle = function ChartTitle(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement("h3", _extends({}, props, styles.h), children);
};

exports.ChartTitle = ChartTitle;

var ChartLead = function ChartLead(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement("p", _extends({}, props, styles.p), children);
};

exports.ChartLead = ChartLead;

var Chart =
/*#__PURE__*/
function (_Component) {
  _inherits(Chart, _Component);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, props));
    _this.state = {
      width: 290
    };
    _this.measure = (0, _utils.measure)(function (ref, _ref4) {
      var width = _ref4.width;

      if (width !== _this.state.width) {
        _this.setState({
          width: width
        });
      }
    });
    return _this;
  }

  _createClass(Chart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fixedWidth = _this$props.width,
          config = _this$props.config,
          tLabel = _this$props.tLabel;
      var width = fixedWidth || this.state.width;
      var ReactChart = ReactCharts[config.type];
      return _react.default.createElement("div", {
        ref: fixedWidth ? undefined : this.measure,
        style: {
          maxWidth: config.maxWidth
        }
      }, !!width && _react.default.createElement(ReactChart, _extends({}, config, {
        tLabel: tLabel,
        colorRanges: colorRanges,
        width: width,
        values: this.props.values,
        description: config.description
      })));
    }
  }]);

  return Chart;
}(_react.Component);

Chart.propTypes = {
  values: _propTypes.default.array.isRequired,
  config: _propTypes.default.shape({
    type: _propTypes.default.oneOf(Object.keys(ReactCharts)).isRequired,
    description: _propTypes.default.string,
    maxWidth: _propTypes.default.number
  }).isRequired,
  width: _propTypes.default.number,
  tLabel: _propTypes.default.func.isRequired
};
Chart.defaultProps = {
  tLabel: function tLabel(identity) {
    return identity;
  }
};
var _default = Chart;
exports.default = _default;