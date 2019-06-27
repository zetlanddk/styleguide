"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slope = exports.Line = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _d3Array = require("d3-array");

var _d3Scale = require("d3-scale");

var _d3Shape = require("d3-shape");

var _d3Time = require("d3-time");

var _styles = require("../Typography/styles");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _timeFormat = require("../../lib/timeFormat");

var _Lines = _interopRequireWildcard(require("./Lines.layout"));

var _utils = require("./utils");

var _ColorLegend = _interopRequireDefault(require("./ColorLegend"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  columnTitle: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium14, {
    fill: _colors.default.text
  })),
  axisLabel: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, {
    fill: _colors.default.text
  })),
  axisYLine: (0, _glamor.css)({
    stroke: _utils.transparentAxisStroke,
    strokeWidth: '1px',
    shapeRendering: 'crispEdges'
  }),
  axisXLine: (0, _glamor.css)({
    stroke: _utils.baseLineColor,
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
  annotationText: (0, _glamor.css)(_objectSpread({
    fill: _colors.default.text
  }, _styles.sansSerifRegular12)),
  value: (0, _glamor.css)(_objectSpread({}, _Lines.VALUE_FONT, {
    fill: _colors.default.text
  })),
  valueMini: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium22)),
  label: (0, _glamor.css)(_objectSpread({}, _Lines.LABEL_FONT, {
    fill: _colors.default.text
  })),
  bandLegend: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, {
    color: _colors.default.text,
    whiteSpace: 'nowrap'
  })),
  bandBar: (0, _glamor.css)({
    display: 'inline-block',
    width: 24,
    height: 11,
    marginBottom: -1,
    backgroundColor: _colors.default.text,
    borderTop: "4px solid ".concat(_colors.default.divider),
    borderBottom: "4px solid ".concat(_colors.default.divider)
  })
};
var X_TICK_HEIGHT = 4;
var Y_LABEL_HEIGHT = 12;
var Y_GROUP_MARGIN = 20;

var last = function last(array, index) {
  return array.length - 1 === index;
};

var calculateLabelY = function calculateLabelY(linesWithLayout, propery) {
  var lastY = -Infinity;
  (0, _utils.sortBy)(linesWithLayout.filter(function (line) {
    return line["".concat(propery, "Value")];
  }), function (line) {
    return line["".concat(propery, "Y")];
  }).forEach(function (line) {
    var labelY = line["".concat(propery, "Y")];
    var nextY = lastY + Y_LABEL_HEIGHT;

    if (nextY > labelY) {
      labelY = nextY;
    }

    line["".concat(propery, "LabelY")] = lastY = labelY;
  });
};

var LineGroup = function LineGroup(props) {
  var lines = props.lines,
      mini = props.mini,
      title = props.title,
      y = props.y,
      yTicks = props.yTicks,
      yAxisFormat = props.yAxisFormat,
      x = props.x,
      xTicks = props.xTicks,
      xAccessor = props.xAccessor,
      xFormat = props.xFormat,
      width = props.width,
      yCut = props.yCut,
      yCutHeight = props.yCutHeight,
      yAnnotations = props.yAnnotations,
      band = props.band,
      endDy = props.endDy;

  var _y$range = y.range(),
      _y$range2 = _slicedToArray(_y$range, 1),
      height = _y$range2[0];

  var xAxisY = height + (yCut ? yCutHeight : 0);
  var pathGenerator = (0, _d3Shape.line)().x(function (d) {
    return x(xAccessor(d));
  }).y(function (d) {
    return y(d.value);
  });
  var bandArea = (0, _d3Shape.area)().x(function (d) {
    return x(xAccessor(d));
  }).y0(function (d) {
    return y(+d.datum["".concat(band, "_lower")]);
  }).y1(function (d) {
    return y(+d.datum["".concat(band, "_upper")]);
  });
  var linesWithLayout = lines.map(function (line) {
    return _objectSpread({}, line, {
      startX: x(xAccessor(line.start)),
      // we always render at end label outside of the chart area
      // even if the line ends in the middle of the graph
      endX: width,
      startY: y(line.start.value),
      endY: y(line.end.value)
    });
  });
  calculateLabelY(linesWithLayout, 'start');
  calculateLabelY(linesWithLayout, 'end');
  return _react.default.createElement("g", null, _react.default.createElement("text", _extends({
    dy: "1.7em"
  }, styles.columnTitle), _utils.subsup.svg(title)), !!yCut && _react.default.createElement("text", _extends({
    y: height + yCutHeight / 2,
    dy: "0.3em"
  }, styles.axisLabel), yCut), xTicks.map(function (tick, i) {
    var textAnchor = 'middle';

    if (last(xTicks, i)) {
      textAnchor = 'end';
    }

    if (i === 0) {
      textAnchor = 'start';
    }

    return _react.default.createElement("g", {
      key: "x".concat(tick),
      transform: "translate(".concat(x(tick), ",").concat(xAxisY, ")")
    }, _react.default.createElement("line", _extends({}, styles.axisXLine, {
      y2: X_TICK_HEIGHT
    })), _react.default.createElement("text", _extends({}, styles.axisLabel, {
      y: X_TICK_HEIGHT + 5,
      dy: "0.6em",
      textAnchor: textAnchor
    }), xFormat(tick)));
  }), linesWithLayout.map(function (_ref, i) {
    var line = _ref.line,
        startValue = _ref.startValue,
        endValue = _ref.endValue,
        endLabel = _ref.endLabel,
        highlighted = _ref.highlighted,
        stroked = _ref.stroked,
        start = _ref.start,
        startX = _ref.startX,
        startY = _ref.startY,
        startLabelY = _ref.startLabelY,
        end = _ref.end,
        endX = _ref.endX,
        endY = _ref.endY,
        endLabelY = _ref.endLabelY,
        lineColor = _ref.lineColor;
    return _react.default.createElement("g", {
      key: "line".concat(endLabel).concat(i)
    }, startValue && startValue !== endValue && _react.default.createElement("g", null, _react.default.createElement("line", {
      x1: startX - _Lines.Y_CONNECTOR_PADDING,
      x2: startX - _Lines.Y_CONNECTOR - _Lines.Y_CONNECTOR_PADDING,
      y1: startLabelY,
      y2: startLabelY,
      stroke: lineColor,
      strokeWidth: 3
    }), _react.default.createElement("text", _extends({}, styles.value, {
      dy: "0.3em",
      x: startX - _Lines.Y_CONNECTOR - _Lines.Y_CONNECTOR_PADDING * 2,
      y: startLabelY,
      textAnchor: "end"
    }), startValue)), band && _react.default.createElement("path", {
      fill: lineColor,
      fillOpacity: "0.2",
      d: bandArea(line)
    }), _react.default.createElement("path", {
      fill: "none",
      stroke: lineColor,
      strokeWidth: highlighted ? 6 : 3,
      strokeDasharray: stroked ? '6 2' : 'none',
      d: pathGenerator(line)
    }), endValue && _react.default.createElement("g", null, !mini && _react.default.createElement("line", {
      x1: endX + _Lines.Y_CONNECTOR_PADDING,
      x2: endX + _Lines.Y_CONNECTOR + _Lines.Y_CONNECTOR_PADDING,
      y1: endLabelY,
      y2: endLabelY,
      stroke: lineColor,
      strokeWidth: 3
    }), _react.default.createElement("text", {
      dy: endDy,
      x: mini ? endX : endX + _Lines.Y_CONNECTOR + _Lines.Y_CONNECTOR_PADDING * 2,
      y: mini ? endLabelY - Y_LABEL_HEIGHT : endLabelY,
      fill: _colors.default.text,
      textAnchor: mini ? 'end' : 'start'
    }, _react.default.createElement("tspan", styles[mini ? 'valueMini' : 'value'], endValue), endLabel && _react.default.createElement("tspan", styles.label, _utils.subsup.svg(endLabel)))));
  }), yTicks.map(function (tick, i) {
    return _react.default.createElement("g", {
      key: "y".concat(tick),
      transform: "translate(0,".concat(y(tick), ")")
    }, _react.default.createElement("line", _extends({}, styles.axisYLine, {
      x2: width,
      style: {
        stroke: tick === 0 ? _utils.baseLineColor : undefined
      }
    })), _react.default.createElement("text", _extends({}, styles.axisLabel, {
      dy: "-3px"
    }), yAxisFormat(tick, last(yTicks, i))));
  }), yAnnotations.map(function (annotation, i) {
    return _react.default.createElement("g", {
      key: "annotation-".concat(i),
      transform: "translate(0,".concat(y(annotation.value), ")")
    }, _react.default.createElement("line", _extends({
      x1: 0,
      x2: width
    }, styles.annotationLine)), _react.default.createElement("circle", _extends({
      r: "3.5",
      cx: annotation.x ? x(annotation.x) : 4
    }, styles.annotationCircle)), _react.default.createElement("text", _extends({
      x: width,
      textAnchor: "end",
      dy: annotation.dy || '-0.4em'
    }, styles.annotationText), annotation.label, " ", annotation.formattedValue));
  }));
};

LineGroup.propTypes = {
  lines: _propTypes.default.arrayOf(_propTypes.default.shape({
    line: _propTypes.default.arrayOf(_propTypes.default.shape({
      value: _propTypes.default.number.isRequired
    })),
    start: _propTypes.default.shape({
      value: _propTypes.default.number.isRequired
    }),
    end: _propTypes.default.shape({
      value: _propTypes.default.number.isRequired
    }),
    highlighted: _propTypes.default.bool,
    stroked: _propTypes.default.bool,
    lineColor: _propTypes.default.string.isRequired,
    startValue: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]).isRequired,
    endValue: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]).isRequired
  })),
  mini: _propTypes.default.bool,
  title: _propTypes.default.string,
  y: _propTypes.default.func.isRequired,
  yCut: _propTypes.default.string,
  yCutHeight: _propTypes.default.number.isRequired,
  yTicks: _propTypes.default.array.isRequired,
  yAxisFormat: _propTypes.default.func.isRequired,
  yAnnotations: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.number.isRequired,
    label: _propTypes.default.string.isRequired
  })),
  x: _propTypes.default.func.isRequired,
  xTicks: _propTypes.default.array.isRequired,
  xAccessor: _propTypes.default.func.isRequired,
  xFormat: _propTypes.default.func.isRequired,
  endDy: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired,
  band: _propTypes.default.string
};

var LineChart = function LineChart(props) {
  var width = props.width,
      mini = props.mini,
      children = props.children,
      description = props.description,
      band = props.band,
      bandLegend = props.bandLegend,
      endDy = props.endDy;

  var _layout = (0, _Lines.default)(props),
      data = _layout.data,
      groupedData = _layout.groupedData,
      xParser = _layout.xParser,
      xAccessor = _layout.xAccessor,
      y = _layout.y,
      yAxis = _layout.yAxis,
      yCut = _layout.yCut,
      yCutHeight = _layout.yCutHeight,
      yAnnotations = _layout.yAnnotations,
      colorLegend = _layout.colorLegend,
      colorLegendValues = _layout.colorLegendValues,
      paddingLeft = _layout.paddingLeft,
      paddingRight = _layout.paddingRight,
      columnHeight = _layout.columnHeight;

  var possibleColumns = Math.floor(width / (props.minInnerWidth + paddingLeft + paddingRight));
  var columns = props.columns;

  if (possibleColumns < props.columns) {
    columns = Math.max(possibleColumns, 1); // decrease columns if it does not lead to new rows
    // e.g. four items, 4 desired columns, 3 possible => go with 2 columns

    if (Math.ceil(groupedData.length / columns) === Math.ceil(groupedData.length / (columns - 1))) {
      columns -= 1;
    }
  }

  var columnWidth = Math.floor(width / columns) - 1;
  var innerWidth = columnWidth - paddingLeft - paddingRight;
  var xValues = data.map(xAccessor);
  var x;
  var xTicks;

  var xFormat = function xFormat(d) {
    return d;
  };

  if (props.xScale === 'time') {
    xFormat = (0, _timeFormat.timeFormat)(props.timeFormat);
    var xTimes = xValues.map(function (d) {
      return d.getTime();
    });
    var domainTime = [(0, _d3Array.min)(xTimes), (0, _d3Array.max)(xTimes)];
    var domain = domainTime.map(function (d) {
      return new Date(d);
    });
    var yearInteval = Math.round(_d3Time.timeYear.count(domain[0], domain[1]) / 3);

    var time1 = _d3Time.timeYear.offset(domain[0], yearInteval).getTime();

    var time2 = _d3Time.timeYear.offset(domain[1], -yearInteval).getTime();

    x = (0, _d3Scale.scaleTime)().domain(domain);
    xTicks = [domainTime[0], (0, _utils.sortBy)(xTimes, function (d) {
      return Math.abs(d - time1);
    })[0], (0, _utils.sortBy)(xTimes, function (d) {
      return Math.abs(d - time2);
    })[0], domainTime[1]].filter(_utils.deduplicate).map(function (d) {
      return new Date(d);
    });
  } else {
    var _domain = xValues.filter(_utils.deduplicate);

    x = (0, _d3Scale.scalePoint)().domain(_domain);

    if (_domain.length > 5) {
      var maxIndex = _domain.length - 1;
      xTicks = [_domain[0], _domain[Math.round(maxIndex * 0.33)], _domain[Math.round(maxIndex * 0.66)], _domain[maxIndex]].filter(_utils.deduplicate);
    } else {
      xTicks = _domain;
    }
  }

  if (mini) {
    xTicks = [xTicks[0], xTicks[xTicks.length - 1]];
  }

  if (props.xTicks) {
    xTicks = props.xTicks.map(xParser);
  }

  x.range([0, innerWidth]);
  var groups = groupedData.map(function (g) {
    return g.key;
  });
  (0, _utils.runSort)(props.columnSort, groups);
  var rows = Math.ceil(groups.length / columns);
  var gx = (0, _d3Scale.scaleOrdinal)().domain(groups).range((0, _d3Array.range)(columns).map(function (d) {
    return d * columnWidth;
  }));
  var gy = (0, _d3Scale.scaleOrdinal)().domain(groups).range((0, _d3Array.range)(groups.length).map(function (d) {
    var row = Math.floor(d / columns);
    return row * columnHeight + row * Y_GROUP_MARGIN;
  }));
  return _react.default.createElement("div", null, _react.default.createElement("svg", {
    width: width,
    height: rows * columnHeight + (rows - 1) * Y_GROUP_MARGIN
  }, _react.default.createElement("desc", null, description), groupedData.map(function (_ref2) {
    var lines = _ref2.values,
        key = _ref2.key;
    return _react.default.createElement("g", {
      key: key || 1,
      transform: "translate(".concat(gx(key) + paddingLeft, ",").concat(gy(key), ")")
    }, _react.default.createElement(LineGroup, {
      mini: mini,
      title: key,
      lines: lines,
      x: x,
      xTicks: xTicks,
      xAccessor: xAccessor,
      xFormat: xFormat,
      y: y,
      yTicks: props.yTicks || yAxis.ticks,
      yAxisFormat: yAxis.axisFormat,
      band: band,
      yCut: yCut,
      yCutHeight: yCutHeight,
      yAnnotations: yAnnotations,
      endDy: endDy,
      width: innerWidth
    }));
  })), _react.default.createElement("div", null, _react.default.createElement("div", {
    style: {
      paddingLeft: paddingLeft,
      paddingRight: paddingRight
    }
  }, _react.default.createElement(_ColorLegend.default, {
    inline: true,
    values: [].concat(props.colorLegend && colorLegend && colorLegendValues).concat(!mini && band && bandLegend && {
      label: _react.default.createElement("span", styles.bandLegend, _react.default.createElement("span", styles.bandBar), " ".concat(bandLegend))
    }).filter(Boolean)
  })), children));
};

LineChart.propTypes = {
  children: _propTypes.default.node,
  values: _propTypes.default.array.isRequired,
  width: _propTypes.default.number.isRequired,
  mini: _propTypes.default.bool,
  x: _propTypes.default.string.isRequired,
  xScale: _propTypes.default.oneOf(['time', 'ordinal']),
  xSort: _utils.sortPropType,
  xTicks: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  timeParse: _propTypes.default.string.isRequired,
  timeFormat: _propTypes.default.string.isRequired,
  column: _propTypes.default.string,
  columnSort: _utils.sortPropType,
  columnFilter: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    test: _propTypes.default.string.isRequired
  })),
  highlight: _propTypes.default.string,
  stroke: _propTypes.default.string,
  labelFilter: _propTypes.default.string,
  color: _propTypes.default.string,
  colorSort: _utils.sortPropType,
  colorRange: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  colorRanges: _propTypes.default.shape({
    sequential3: _propTypes.default.array.isRequired,
    discrete: _propTypes.default.array.isRequired
  }).isRequired,
  colorLegend: _propTypes.default.bool,
  colorLegendValues: _propTypes.default.arrayOf(_propTypes.default.string),
  category: _propTypes.default.string,
  band: _propTypes.default.string,
  bandLegend: _propTypes.default.string,
  numberFormat: _propTypes.default.string.isRequired,
  zero: _propTypes.default.bool.isRequired,
  filter: _propTypes.default.string,
  startValue: _propTypes.default.bool.isRequired,
  endLabel: _propTypes.default.bool.isRequired,
  endDy: _propTypes.default.string.isRequired,
  minInnerWidth: _propTypes.default.number.isRequired,
  columns: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  paddingRight: _propTypes.default.number,
  paddingLeft: _propTypes.default.number,
  unit: _propTypes.default.string,
  yNice: _propTypes.default.number,
  yTicks: _propTypes.default.arrayOf(_propTypes.default.number),
  yAnnotations: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.number.isRequired,
    label: _propTypes.default.string.isRequired,
    x: _propTypes.default.string,
    dy: _propTypes.default.string
  })),
  tLabel: _propTypes.default.func.isRequired,
  description: _propTypes.default.string
};

var Line = function Line(props) {
  return _react.default.createElement(LineChart, props);
};

exports.Line = Line;
Line.defaultProps = {
  x: 'year',
  xScale: 'time',
  timeParse: '%Y',
  timeFormat: '%Y',
  numberFormat: '.0%',
  zero: true,
  unit: '',
  startValue: false,
  endLabel: true,
  endDy: '0.3em',
  minInnerWidth: 110,
  columns: 1,
  height: 240,
  colorLegend: true,
  yNice: 3
};

var Slope = function Slope(props) {
  return _react.default.createElement(LineChart, props);
};

exports.Slope = Slope;
Slope.defaultProps = {
  x: 'year',
  xScale: 'ordinal',
  timeParse: '%Y',
  timeFormat: '%Y',
  numberFormat: '.0%',
  zero: true,
  unit: '',
  startValue: true,
  endLabel: false,
  endDy: '0.3em',
  minInnerWidth: 90,
  columns: 2,
  height: 240,
  colorLegend: true,
  yNice: 3 // Additional Info for Docs
  // - Line is the master chart and «owns» the prop types

};
Line.propTypes = LineChart.propTypes; // - Slope just has different default props

Slope.base = 'Line';