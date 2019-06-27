"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _d3Array = require("d3-array");

var _d3Scale = require("d3-scale");

var d3Intervals = _interopRequireWildcard(require("d3-time"));

var _styles = require("../Typography/styles");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _timeFormat = require("../../lib/timeFormat");

var _utils = require("./utils");

var _ColorLegend = _interopRequireDefault(require("./ColorLegend"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var intervals = Object.keys(d3Intervals).filter(function (key) {
  return key.match(/^time/) && key !== 'timeInterval';
}).reduce(function (all, key) {
  all[key.replace(/^time/, '').toLowerCase()] = d3Intervals[key];
  return all;
}, {});
var X_TICK_HEIGHT = 3;
var AXIS_BOTTOM_HEIGHT = 24;
var styles = {
  axisLabel: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, {
    fill: _colors.default.lightText
  })),
  axisYLine: (0, _glamor.css)({
    stroke: _utils.transparentAxisStroke,
    strokeWidth: '1px',
    shapeRendering: 'crispEdges'
  }),
  axisXLine: (0, _glamor.css)({
    stroke: _colors.default.divider,
    strokeWidth: '1px',
    shapeRendering: 'crispEdges'
  }),
  annotationCircle: (0, _glamor.css)({
    stroke: _colors.default.text,
    fill: _utils.circleFill
  }),
  annotationLine: (0, _glamor.css)({
    stroke: _colors.default.text,
    strokeWidth: '1px',
    fillRule: 'evenodd',
    strokeLinecap: 'round',
    strokeDasharray: '1,3',
    strokeLinejoin: 'round'
  }),
  annotationLineValue: (0, _glamor.css)({
    stroke: _colors.default.text,
    strokeWidth: '1px',
    shapeRendering: 'crispEdges'
  }),
  annotationValue: (0, _glamor.css)(_objectSpread({
    fill: _colors.default.text
  }, _styles.sansSerifMedium12)),
  annotationText: (0, _glamor.css)(_objectSpread({
    fill: _colors.default.text
  }, _styles.sansSerifRegular12))
};

var TimeBarChart = function TimeBarChart(props) {
  var values = props.values,
      width = props.width,
      mini = props.mini,
      children = props.children,
      tLabel = props.tLabel,
      description = props.description,
      yAnnotations = props.yAnnotations,
      xAnnotations = props.xAnnotations;
  var paddingTop = 24;
  var data = values;

  if (props.filter) {
    var filter = (0, _utils.unsafeDatumFn)(props.filter);
    data = data.filter(filter);
  }

  var xParser = (0, _timeFormat.timeParse)(props.timeParse);
  var xParserFormat = (0, _timeFormat.timeFormat)(props.timeParse);

  var xNormalizer = function xNormalizer(d) {
    return xParserFormat(xParser(d));
  };

  data = data.filter(function (d) {
    return d.value && d.value.length > 0;
  }).map(function (d) {
    return {
      datum: d,
      x: xNormalizer(d[props.x]),
      value: +d.value
    };
  });

  var colorAccessor = function colorAccessor(d) {
    return d.datum[props.color];
  };

  var colorValues = [].concat(data.map(colorAccessor)).concat(props.colorLegendValues).filter(Boolean).filter(_utils.deduplicate);
  var colorRange = props.colorRanges[props.colorRange] || props.colorRange;

  if (!colorRange) {
    colorRange = colorValues.length > 3 ? props.colorRanges.discrete : props.colorRanges.sequential3;
  }

  var color = (0, _d3Scale.scaleOrdinal)(colorRange).domain(colorValues);
  var bars = (0, _utils.groupBy)(data, function (d) {
    return d.x;
  }).map(function (_ref) {
    var segments = _ref.values,
        x = _ref.key;
    return {
      segments: segments,
      up: segments.filter(function (segment) {
        return segment.value > 0;
      }).reduce(function (sum, segment) {
        return sum + segment.value;
      }, 0),
      down: segments.filter(function (segment) {
        return segment.value < 0;
      }).reduce(function (sum, segment) {
        return sum + segment.value;
      }, 0),
      x: x
    };
  });
  var innerHeight = props.height - (mini ? paddingTop + AXIS_BOTTOM_HEIGHT : 0);
  var y = (0, _d3Scale.scaleLinear)().domain(props.domain ? props.domain : [Math.min(0, (0, _d3Array.min)(bars, function (d) {
    return d.down;
  })), (0, _d3Array.max)(bars, function (d) {
    return d.up;
  })]).range([innerHeight, 0]);

  if (!props.domain) {
    y.nice(3);
  }

  bars.forEach(function (group) {
    var upValue = 0;
    var upPos = y(0);
    var downValue = 0;
    var downPos = y(0);
    group.segments.forEach(function (segment) {
      var isPositive = segment.value > 0;
      var baseValue = isPositive ? upValue : downValue;
      var y0 = y(baseValue);
      var y1 = y(baseValue + segment.value);
      var size = segment.height = Math.abs(y0 - y1);

      if (isPositive) {
        upPos -= size;
        segment.y = upPos;
        upValue += segment.value;
      } else {
        segment.y = downPos;
        downPos += size;
        downValue += segment.value;
      }
    });
  });
  var yAxis = (0, _utils.calculateAxis)(props.numberFormat, tLabel, y.domain(), tLabel(props.unit));
  var yTicks = props.yTicks || yAxis.ticks; // ensure highest value is last
  // - the last value is labled with the unit

  yTicks.sort(_d3Array.ascending);
  var xValues = data.map(function (d) {
    return d.x;
  }).concat(xAnnotations.reduce(function (years, annotation) {
    return years.concat(annotation.x, annotation.x1, annotation.x2);
  }, []).filter(Boolean).map(function (d) {
    return xNormalizer(d);
  }) // ensure format
  ).filter(_utils.deduplicate).map(xParser).sort(_d3Array.ascending).map(xParserFormat);
  var xPadding = props.padding;
  var x = (0, _d3Scale.scaleBand)().domain(xValues).range([xPadding, width - xPadding]).padding(props.xBandPadding).round(true);
  var xDomain = xValues;
  var interval = intervals[props.xInterval] || props.x === 'year' && props.timeParse === '%Y' && intervals.year;

  if (interval) {
    var gapsNeeded = Math.max(Math.ceil( // at least 26 px
    26 / Math.max(x.bandwidth(), 1)), 2 // at least 2 bars
    );
    xDomain = xValues.reduce(function (values, value, index, all) {
      values.push(value);
      var next = interval.offset(xParser(value), 1);

      if (all.indexOf(xParserFormat(next)) === -1 && index !== all.length - 1) {
        for (var i = 0; i < gapsNeeded; i++) {
          values.push("GAP|".concat(value, "|").concat(i));
        }
      }

      return values;
    }, []);
    x.domain(xDomain).round(true);
  }

  var barWidth = x.bandwidth();
  var barStep = x.step();
  var barPadding = barStep - barWidth;
  var xTicks;

  if (props.xTicks) {
    xTicks = props.xTicks.map(xNormalizer);
  } else {
    // 12px a average number width
    if (barStep >= xValues[0].length * 12) {
      xTicks = xValues;
    } else {
      xTicks = [xValues[0], xValues[xValues.length - 1]].filter(_utils.deduplicate);
    }
  }

  var xDomainLast = xDomain[xDomain.length - 1];
  var baseTick = y.domain()[0];
  var baseLines = xDomain.reduce(function (lines, xValue) {
    var previousLine = lines[lines.length - 1];
    var x1 = previousLine ? previousLine.x2 : 0;
    var x2 = xValue === xDomainLast ? width : x(xValue) + barStep;
    var gap = xValue.split('|')[0] === 'GAP';

    if (gap) {
      x2 -= barPadding;
    }

    if (previousLine && previousLine.gap === gap) {
      previousLine.x2 = x2;
    } else {
      lines.push({
        x1: x1,
        x2: x2,
        gap: gap
      });
    }

    return lines;
  }, []);
  var xFormat = (0, _timeFormat.timeFormat)(props.timeFormat || props.timeParse);
  return _react.default.createElement("div", null, _react.default.createElement("svg", {
    width: width,
    height: innerHeight + paddingTop + AXIS_BOTTOM_HEIGHT
  }, _react.default.createElement("desc", null, description), _react.default.createElement("g", {
    transform: "translate(0,".concat(paddingTop, ")")
  }, _react.default.createElement("g", {
    transform: "translate(0,".concat(innerHeight + 1, ")")
  }, baseLines.map(function (line, i) {
    return _react.default.createElement("line", _extends({
      key: i,
      x1: line.x1,
      x2: line.x2
    }, styles.axisXLine, {
      strokeDasharray: line.gap ? '2 2' : 'none'
    }));
  }), xTicks.map(function (tick) {
    return _react.default.createElement("g", {
      key: tick,
      transform: "translate(".concat(x(tick) + Math.round(barWidth / 2), ",0)")
    }, _react.default.createElement("line", _extends({}, styles.axisXLine, {
      y2: X_TICK_HEIGHT
    })), _react.default.createElement("text", _extends({}, styles.axisLabel, {
      y: X_TICK_HEIGHT + 5,
      dy: "0.6em",
      textAnchor: "middle"
    }), xFormat(xParser(tick))));
  })), xAnnotations.filter(function (annotation) {
    return annotation.ghost;
  }).map(function (annotation, i) {
    return _react.default.createElement("rect", {
      key: "ghost-".concat(i),
      x: x(xNormalizer(annotation.x)),
      y: y(annotation.value),
      width: barWidth,
      height: y(0) - y(annotation.value),
      shapeRendering: "crispEdges",
      fill: _colors.default.divider
    });
  }), bars.map(function (bar) {
    return _react.default.createElement("g", {
      key: bar.x,
      transform: "translate(".concat(x(bar.x), ",0)")
    }, bar.segments.map(function (segment, i) {
      return _react.default.createElement("rect", {
        key: i,
        y: segment.y,
        width: barWidth,
        height: segment.height,
        shapeRendering: "crispEdges",
        fill: color(colorAccessor(segment))
      });
    }));
  }), yTicks.map(function (tick, i) {
    return _react.default.createElement("g", {
      key: tick,
      transform: "translate(0,".concat(y(tick), ")")
    }, tick !== baseTick && _react.default.createElement("line", _extends({}, styles.axisYLine, {
      x2: width
    })), _react.default.createElement("text", _extends({}, styles.axisLabel, {
      dy: "-3px"
    }), yAxis.axisFormat(tick, (0, _utils.last)(yTicks, i))));
  }), yAnnotations.map(function (annotation, i) {
    return _react.default.createElement("g", {
      key: "y-annotation-".concat(i),
      transform: "translate(0,".concat(y(annotation.value), ")")
    }, _react.default.createElement("line", _extends({
      x1: 0,
      x2: width
    }, styles.annotationLine)), _react.default.createElement("circle", _extends({
      r: "3.5",
      cx: annotation.x ? x(xNormalizer(annotation.x)) : 4
    }, styles.annotationCircle)), _react.default.createElement("text", _extends({
      x: width,
      textAnchor: "end",
      dy: annotation.dy || '-0.4em'
    }, styles.annotationText), tLabel(annotation.label), " ", yAxis.format(annotation.value)));
  }), xAnnotations.map(function (annotation, i) {
    var range = annotation.x1 !== undefined && annotation.x2 !== undefined;
    var x1 = range ? x(xNormalizer(annotation.x1)) : x(xNormalizer(annotation.x));
    var x2 = range ? x(xNormalizer(annotation.x2)) + barWidth : x1 + Math.max(barWidth, 8);
    var compact = width < 500;
    var tx = x1;

    if (compact) {
      tx -= range ? 0 : barWidth * 2;
    } else {
      tx += (x2 - x1) / 2;
    }

    var textAnchor = compact ? 'start' : 'middle';
    return _react.default.createElement("g", {
      key: "x-annotation-".concat(i),
      transform: "translate(0,".concat(y(annotation.value), ")")
    }, _react.default.createElement("line", _extends({
      x1: x1,
      x2: x2
    }, range ? styles.annotationLine : styles.annotationLineValue)), _react.default.createElement("circle", _extends({
      r: "3.5",
      cx: x1
    }, styles.annotationCircle)), range && _react.default.createElement("circle", _extends({
      r: "3.5",
      cx: x2
    }, styles.annotationCircle)), _react.default.createElement("text", _extends({
      x: tx,
      textAnchor: textAnchor,
      dy: "-1.8em"
    }, styles.annotationText), tLabel(annotation.label)), _react.default.createElement("text", _extends({
      x: tx,
      textAnchor: textAnchor,
      dy: "-0.5em"
    }, styles.annotationValue), tLabel(annotation.valuePrefix), yAxis.format(annotation.value)));
  }))), _react.default.createElement("div", null, !mini && _react.default.createElement(_ColorLegend.default, {
    inline: true,
    values: [].concat(props.colorLegend && (props.colorLegendValues || colorValues).map(function (colorValue) {
      return {
        color: color(colorValue),
        label: tLabel(colorValue)
      };
    })).filter(Boolean)
  }), children));
};

TimeBarChart.propTypes = {
  children: _propTypes.default.node,
  values: _propTypes.default.array.isRequired,
  padding: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired,
  mini: _propTypes.default.bool,
  height: _propTypes.default.number.isRequired,
  color: _propTypes.default.string,
  colorRange: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  colorLegend: _propTypes.default.bool,
  colorLegendValues: _propTypes.default.arrayOf(_propTypes.default.string),
  colorRanges: _propTypes.default.shape({
    sequential3: _propTypes.default.array.isRequired,
    discrete: _propTypes.default.array.isRequired
  }).isRequired,
  domain: _propTypes.default.arrayOf(_propTypes.default.number),
  yTicks: _propTypes.default.arrayOf(_propTypes.default.number),
  yAnnotations: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.number.isRequired,
    label: _propTypes.default.string.isRequired,
    x: _propTypes.default.string,
    dy: _propTypes.default.string
  })).isRequired,
  timeParse: _propTypes.default.string.isRequired,
  timeFormat: _propTypes.default.string,
  xBandPadding: _propTypes.default.number.isRequired,
  x: _propTypes.default.string.isRequired,
  xInterval: _propTypes.default.oneOf(Object.keys(intervals)),
  xTicks: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),
  xAnnotations: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.number.isRequired,
    label: _propTypes.default.string,
    x: _propTypes.default.string
  })).isRequired,
  unit: _propTypes.default.string,
  numberFormat: _propTypes.default.string.isRequired,
  filter: _propTypes.default.string,
  tLabel: _propTypes.default.func.isRequired,
  description: _propTypes.default.string
};
TimeBarChart.defaultProps = {
  x: 'year',
  xBandPadding: 0.25,
  timeParse: '%Y',
  numberFormat: 's',
  height: 240,
  padding: 50,
  unit: '',
  colorLegend: true,
  yAnnotations: [],
  xAnnotations: []
};
var _default = TimeBarChart;
exports.default = _default;