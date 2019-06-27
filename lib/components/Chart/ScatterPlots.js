"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _ColorLegend = _interopRequireDefault(require("./ColorLegend"));

var _d3Scale = require("d3-scale");

var _d3Array = require("d3-array");

var _ContextBox = _interopRequireWildcard(require("./ContextBox"));

var _utils = require("./utils");

var _styles = require("../Typography/styles");

var _colors = _interopRequireDefault(require("../../theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var X_TICK_HEIGHT = 6;
var scales = {
  linear: _d3Scale.scaleLinear,
  log: _d3Scale.scaleLog
};
var styles = {
  axisLabel: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, {
    fill: _colors.default.text
  })),
  axisLine: (0, _glamor.css)({
    stroke: _utils.transparentAxisStroke,
    strokeWidth: '1px',
    shapeRendering: 'crispEdges'
  })
};

var ScatterPlot =
/*#__PURE__*/
function (_Component) {
  _inherits(ScatterPlot, _Component);

  function ScatterPlot() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScatterPlot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScatterPlot)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setContainerRef", function (ref) {
      _this.container = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setHoverRectRef", function (ref) {
      _this.hoverRect = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "measure", function () {
      var _this$container$getBo = _this.container.getBoundingClientRect(),
          left = _this$container$getBo.left,
          top = _this$container$getBo.top;

      if (_this.state.left !== left || _this.state.top !== top) {
        _this.setState({
          left: left,
          top: top
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focus", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          left = _this$state.left;

      if (top === undefined || left === undefined || !_this.symbols) {
        return;
      }

      var hoverTouch = false;
      var currentEvent = event;

      if (currentEvent.changedTouches) {
        hoverTouch = true;
        currentEvent = currentEvent.changedTouches[0];
      }

      var focusX = currentEvent.clientX - left;
      var focusY = currentEvent.clientY - top;

      var withDistance = _this.symbols.map(function (symbol) {
        return {
          symbol: symbol,
          distance: Math.sqrt(Math.pow(symbol.cx - focusX, 2) + Math.pow(symbol.cy - focusY, 2)) - symbol.r
        };
      });

      var hover = withDistance.filter(function (_ref) {
        var distance = _ref.distance;
        return distance < 1;
      });

      if (hover.length === 0) {
        var minDistance = (0, _d3Array.min)(withDistance, function (d) {
          return d.distance;
        });

        if (minDistance < 10) {
          hover = withDistance.filter(function (_ref2) {
            var distance = _ref2.distance;
            return distance === minDistance;
          });
        }
      }

      if (hover.length) {
        event.preventDefault();
      }

      hover = hover.map(function (_ref3) {
        var symbol = _ref3.symbol;
        return symbol;
      });

      _this.setState({
        hover: hover,
        hoverTouch: hoverTouch
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blur", function () {
      _this.setState({
        hover: []
      });
    });

    _this.state = {
      hover: []
    };
    return _this;
  }

  _createClass(ScatterPlot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.measure);
      this.hoverRect.addEventListener('touchstart', this.focus, {
        passive: false
      });
      this.hoverRect.addEventListener('touchmove', this.focus);
      this.hoverRect.addEventListener('touchend', this.blur);
      this.measure();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.measure();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.hoverRect.removeEventListener('touchstart', this.focus);
      this.hoverRect.removeEventListener('touchmove', this.focus);
      this.hoverRect.removeEventListener('touchend', this.blur);
      window.removeEventListener('resize', this.measure);
    }
  }, {
    key: "renderHover",
    value: function renderHover(_ref4) {
      var width = _ref4.width,
          height = _ref4.height,
          xFormat = _ref4.xFormat,
          yFormat = _ref4.yFormat;
      var _this$state2 = this.state,
          hover = _this$state2.hover,
          hoverTouch = _this$state2.hoverTouch;

      if (!hover.length) {
        return null;
      }

      var props = this.props;
      var _hover$sort$ = hover.sort(function (a, b) {
        return (0, _d3Array.ascending)(a.cy, b.cy);
      })[0],
          cx = _hover$sort$.cx,
          cy = _hover$sort$.cy,
          r = _hover$sort$.r;
      var top = hoverTouch || cy > height / 3;
      var yOffset = r + (hoverTouch ? 40 : 12);
      return _react.default.createElement(_ContextBox.default, {
        orientation: top ? 'top' : 'below',
        x: cx,
        y: cy + (top ? -yOffset : yOffset),
        contextWidth: width
      }, hover.map(function (_ref5, i) {
        var value = _ref5.value;
        return _react.default.createElement(_ContextBox.ContextBoxValue, {
          key: "".concat(value.datum[props.label]).concat(i),
          label: value.datum[props.label]
        }, yFormat(value.y), " ", (0, _utils.subsup)(props.yUnit), _react.default.createElement("br", null), xFormat(value.x), " ", (0, _utils.subsup)(props.xUnit));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var width = props.width,
          description = props.description,
          children = props.children,
          values = props.values,
          tLabel = props.tLabel,
          opacity = props.opacity;
      var data = values.filter(function (d) {
        return d[props.x] && d[props.x].length > 0 && d[props.y] && d[props.y].length > 0;
      }).map(function (d) {
        return {
          datum: d,
          x: +d[props.x],
          y: +d[props.y],
          size: +d[props.size] || 0
        };
      });
      var paddingTop = 15;
      var paddingRight = 1;
      var paddingBottom = 50;
      var paddingLeft = props.paddingLeft;
      var innerWidth = props.width - paddingLeft - paddingRight;
      var height = props.height || innerWidth * props.heightRatio + paddingTop + paddingBottom;
      var innerHeight = height - paddingTop - paddingBottom; // setup x axis

      var xValues = data.map(function (d) {
        return d.x;
      });

      if (props.xTicks) {
        xValues = xValues.concat(props.xTicks);
      }

      var x = scales[props.xScale]().domain((0, _d3Array.extent)(xValues)).range([paddingLeft, paddingLeft + innerWidth]);
      var xNice = props.xNice === undefined ? Math.min(Math.max(Math.round(innerWidth / 150), 3), 5) : props.xNice;

      if (xNice) {
        x.nice(xNice);
      }

      var xAxis = (0, _utils.calculateAxis)(props.xNumberFormat || props.numberFormat, tLabel, x.domain()); // xUnit is rendered separately

      var xTicks = props.xTicks || (props.xScale === 'log' ? (0, _utils.get3EqualDistTicks)(x) : xAxis.ticks); // ensure highest value is last: the last value is labled with the unit

      xTicks.sort(_d3Array.ascending); // setup y axis

      var yValues = data.map(function (d) {
        return d.y;
      });

      if (props.yTicks) {
        yValues = yValues.concat(props.yTicks);
      }

      var y = scales[props.yScale]().domain((0, _d3Array.extent)(yValues)).range([innerHeight + paddingTop, paddingTop]);
      var yNice = props.yNice === undefined ? Math.min(Math.max(Math.round(innerHeight / 150), 3), 5) : props.yNice;

      if (yNice) {
        y.nice(yNice);
      }

      var yAxis = (0, _utils.calculateAxis)(props.yNumberFormat || props.numberFormat, tLabel, y.domain(), tLabel(props.yUnit));
      var yTicks = props.yTicks || (props.yScale === 'log' ? (0, _utils.get3EqualDistTicks)(y) : yAxis.ticks); // ensure highest value is last: the last value is labled with the unit

      yTicks.sort(_d3Array.ascending);

      var colorAccessor = function colorAccessor(d) {
        return d.datum[props.color];
      };

      var colorValues = [].concat(data.map(colorAccessor)).concat(props.colorLegendValues).filter(_utils.deduplicate).filter(Boolean);
      (0, _utils.runSort)(props.colorSort, colorValues);
      var size = (0, _d3Scale.scaleSqrt)().domain((0, _d3Array.extent)(data, function (d) {
        return d.size;
      })).range(props.sizeRange);
      var colorRange = props.colorRanges[props.colorRange] || props.colorRange;

      if (!colorRange) {
        colorRange = colorValues.length > 3 ? props.colorRanges.discrete : props.colorRanges.sequential3;
      }

      var color = (0, _d3Scale.scaleOrdinal)(colorRange).domain(colorValues);
      this.symbols = data.map(function (value, i) {
        return {
          key: "symbol".concat(i),
          value: value,
          cx: x(value.x),
          cy: y(value.y),
          r: size(value.size)
        };
      });
      return _react.default.createElement("div", {
        style: {
          position: 'relative'
        }
      }, _react.default.createElement("svg", {
        width: width,
        height: height,
        ref: this.setContainerRef
      }, _react.default.createElement("desc", null, description), this.symbols.map(function (symbol, i) {
        return _react.default.createElement("circle", {
          key: symbol.key,
          style: {
            opacity: opacity
          },
          fill: color(colorAccessor(symbol.value)),
          cx: symbol.cx,
          cy: symbol.cy,
          r: symbol.r
        });
      }), this.state.hover.map(function (symbol, i) {
        return _react.default.createElement("circle", {
          key: "hover".concat(symbol.key),
          fill: "none",
          stroke: "#000",
          cx: symbol.cx,
          cy: symbol.cy,
          r: symbol.r
        });
      }), yTicks.map(function (tick, i) {
        return _react.default.createElement("g", {
          key: tick,
          transform: "translate(0,".concat(y(tick), ")")
        }, _react.default.createElement("line", _extends({}, styles.axisLine, {
          x2: width - paddingRight,
          style: {
            stroke: tick === 0 ? _utils.baseLineColor : undefined
          }
        })), _react.default.createElement("text", _extends({}, styles.axisLabel, {
          dy: "-3px"
        }), _utils.subsup.svg(yAxis.axisFormat(tick, (0, _utils.last)(yTicks, i)))));
      }), xTicks.map(function (tick, i) {
        var textAnchor = 'middle';

        if ((0, _utils.last)(xTicks, i)) {
          textAnchor = 'end';
        }

        if (i === 0 && paddingLeft < 20) {
          textAnchor = 'start';
        }

        return _react.default.createElement("g", {
          key: "x".concat(tick),
          transform: "translate(".concat(x(tick), ",").concat(paddingTop + innerHeight + X_TICK_HEIGHT, ")")
        }, _react.default.createElement("line", _extends({}, styles.axisLine, {
          y2: -(innerHeight + X_TICK_HEIGHT),
          style: {
            stroke: tick === 0 ? _utils.baseLineColor : undefined
          }
        })), _react.default.createElement("text", _extends({}, styles.axisLabel, {
          y: 5,
          dy: "0.6em",
          textAnchor: textAnchor
        }), _utils.subsup.svg(xAxis.axisFormat(tick, (0, _utils.last)(xTicks, i)))));
      }), _react.default.createElement("text", _extends({
        x: paddingLeft + innerWidth,
        y: paddingTop + innerHeight + 28 + X_TICK_HEIGHT,
        textAnchor: "end"
      }, styles.axisLabel), props.xUnit), _react.default.createElement("rect", {
        fill: "transparent",
        width: width,
        height: height,
        onMouseEnter: this.focus,
        onMouseMove: this.focus,
        onMouseLeave: this.blur,
        ref:
        /* touch events are added via ref for { passive: false } on touchstart
         * react does not support setting passive, which defaults to true in newer browsers
         * https://github.com/facebook/react/issues/6436
         */
        this.setHoverRectRef
      })), this.renderHover({
        width: width,
        height: height,
        xFormat: xAxis.format,
        yFormat: yAxis.format
      }), _react.default.createElement(_ColorLegend.default, {
        inline: true,
        values: [].concat(props.colorLegend && (props.colorLegendValues || colorValues).map(function (colorValue) {
          return {
            color: color(colorValue),
            label: colorValue
          };
        })).filter(Boolean)
      }), children);
    }
  }]);

  return ScatterPlot;
}(_react.Component);

ScatterPlot.propTypes = {
  children: _propTypes.default.node,
  values: _propTypes.default.array.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number,
  heightRatio: _propTypes.default.number,
  paddingLeft: _propTypes.default.number.isRequired,
  x: _propTypes.default.string.isRequired,
  xUnit: _propTypes.default.string,
  xNice: _propTypes.default.number,
  xTicks: _propTypes.default.arrayOf(_propTypes.default.number),
  xScale: _propTypes.default.oneOf(Object.keys(scales)),
  xNumberFormat: _propTypes.default.string,
  y: _propTypes.default.string.isRequired,
  yUnit: _propTypes.default.string,
  yNice: _propTypes.default.number,
  yTicks: _propTypes.default.arrayOf(_propTypes.default.number),
  yScale: _propTypes.default.oneOf(Object.keys(scales)),
  yNumberFormat: _propTypes.default.string,
  numberFormat: _propTypes.default.string.isRequired,
  opacity: _propTypes.default.number.isRequired,
  color: _propTypes.default.string,
  colorLegend: _propTypes.default.bool,
  colorLegendValues: _propTypes.default.arrayOf(_propTypes.default.string),
  colorRange: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  colorRanges: _propTypes.default.shape({
    sequential3: _propTypes.default.array.isRequired,
    discrete: _propTypes.default.array.isRequired
  }).isRequired,
  colorSort: _utils.sortPropType,
  size: _propTypes.default.string.isRequired,
  sizeRange: _propTypes.default.arrayOf(_propTypes.default.number.isRequired).isRequired,
  label: _propTypes.default.string.isRequired,
  tLabel: _propTypes.default.func.isRequired,
  description: _propTypes.default.string
};
ScatterPlot.defaultProps = {
  x: 'value',
  y: 'value',
  xScale: 'linear',
  yScale: 'linear',
  opacity: 1,
  numberFormat: 's',
  colorLegend: true,
  paddingLeft: 30,
  size: 'size',
  sizeRange: [4, 10],
  label: 'label',
  heightRatio: 1
};
var _default = ScatterPlot;
exports.default = _default;