"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Lollipop = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _glamor = require("glamor");

var _d3Scale = require("d3-scale");

var _d3Array = require("d3-array");

var _styles = require("../Typography/styles");

var _fonts = require("../../theme/fonts");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styleMixins = require("../../lib/styleMixins");

var _utils = require("./utils");

var _ColorLegend = _interopRequireDefault(require("./ColorLegend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COLUMN_PADDING = 20;
var COLUMN_TITLE_HEIGHT = 30;
var BAR_LABEL_HEIGHT = 15;
var AXIS_BOTTOM_HEIGHT = 20;
var AXIS_BOTTOM_PADDING = 8;
var X_TICK_TEXT_MARGIN = 0;
var BAR_STYLES = {
  lollipop: {
    highlighted: {
      marginTop: 4,
      height: 6,
      stroke: 4,
      popHeight: 14,
      marginBottom: 16
    },
    normal: {
      marginTop: 4,
      height: 3,
      stroke: 3,
      popHeight: 13,
      marginBottom: 9
    }
  },
  small: {
    highlighted: {
      marginTop: 0,
      height: 24,
      marginBottom: 16
    },
    normal: {
      marginTop: 0,
      height: 16,
      marginBottom: 9
    }
  },
  large: {
    highlighted: {
      marginTop: 0,
      height: 40,
      marginBottom: 40
    },
    normal: {
      marginTop: 0,
      height: 24,
      marginBottom: 16
    }
  },
  inline: {
    withSecondary: {
      marginTop: 0,
      height: 50,
      marginBottom: 9,
      fontSize: 16,
      secondaryFontSize: 12,
      inlineTop: 6
    },
    normal: {
      marginTop: 0,
      height: 20,
      marginBottom: 9,
      fontSize: 12,
      inlineTop: 2
    }
  }
};

var last = function last(array, index) {
  return array.length - 1 === index;
};

var styles = {
  groupTitle: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifMedium14, {
    fill: _colors.default.text
  })),
  barLabel: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, {
    fill: _colors.default.text
  })),
  barLabelLink: (0, _glamor.css)(_objectSpread({}, _styleMixins.underline, {
    ':hover': {
      fill: _colors.default.lightText
    }
  })),
  inlineLabel: (0, _glamor.css)({
    fontFamily: _fonts.fontFamilies.sansSerifRegular,
    fontWeight: 'normal'
  }),
  axisLabel: (0, _glamor.css)(_objectSpread({}, _styles.sansSerifRegular12, {
    fill: _colors.default.lightText
  })),
  axisXLine: (0, _glamor.css)({
    stroke: _utils.transparentAxisStroke,
    strokeWidth: '1px',
    shapeRendering: 'crispEdges'
  }),
  bandLegend: (0, _glamor.css)({
    whiteSpace: 'nowrap'
  }),
  bandBar: (0, _glamor.css)({
    display: 'inline-block',
    width: 24,
    height: 8,
    backgroundColor: _colors.default.divider,
    borderRadius: '4px'
  })
};

var BarChart = function BarChart(props) {
  var values = props.values,
      width = props.width,
      mini = props.mini,
      children = props.children,
      tLabel = props.tLabel,
      description = props.description,
      band = props.band,
      bandLegend = props.bandLegend,
      showBarValues = props.showBarValues,
      inlineValue = props.inlineValue,
      inlineValueUnit = props.inlineValueUnit,
      inlineLabel = props.inlineLabel,
      inlineSecondaryLabel = props.inlineSecondaryLabel,
      link = props.link;
  var possibleColumns = Math.floor(width / (props.minInnerWidth + COLUMN_PADDING));
  var columns = possibleColumns >= props.columns ? props.columns : Math.max(possibleColumns, 1);
  var columnWidth = Math.floor((width - COLUMN_PADDING * (columns - 1)) / columns) - 1; // filter and map data to clean objects 

  var data = values;

  if (props.filter) {
    var filter = (0, _utils.unsafeDatumFn)(props.filter);
    data = data.filter(filter);
  }

  data = data.filter(function (d) {
    return d.value && d.value.length > 0;
  }).map(function (d) {
    return {
      datum: d,
      label: d[props.y],
      value: +d.value
    };
  }); // compute category

  if (props.category) {
    var categorize = (0, _utils.unsafeDatumFn)(props.category);
    data.forEach(function (d) {
      d.category = categorize(d.datum);
    });
  } // sort by value (default lowest on top)


  (0, _utils.runSort)(props.sort, data, function (d) {
    return d.value;
  }); // group data into columns

  var groupedData;

  if (props.columnFilter) {
    groupedData = props.columnFilter.map(function (_ref) {
      var test = _ref.test,
          title = _ref.title;
      var filter = (0, _utils.unsafeDatumFn)(test);
      return {
        key: title,
        values: data.filter(function (d) {
          return filter(d.datum);
        })
      };
    });
    data = groupedData.reduce(function (all, group) {
      return all.concat(group.values);
    }, []);
  } else {
    groupedData = (0, _utils.groupBy)(data, function (d) {
      return d.datum[props.column];
    });
  }

  (0, _utils.runSort)(props.columnSort, groupedData, function (d) {
    return d.key;
  }); // compute colors

  var colorAccessor = props.color ? function (d) {
    return d.datum[props.color];
  } : function (d) {
    return d.category;
  };
  var colorValues = [].concat(data.map(colorAccessor)).concat(props.colorLegendValues).filter(Boolean).filter(_utils.deduplicate);
  (0, _utils.runSort)(props.colorSort, colorValues);
  var colorRange = props.colorRanges[props.colorRange] || props.colorRange;

  if (!colorRange) {
    colorRange = colorValues.length > 3 ? props.colorRanges.discrete : props.colorRanges.sequential3;
  }

  var color = (0, _d3Scale.scaleOrdinal)(colorRange).domain(colorValues);
  var highlight = props.highlight ? (0, _utils.unsafeDatumFn)(props.highlight) : function () {
    return false;
  };
  var inlineBarStyle = !!inlineValue || !!inlineLabel; // first layout run, set y position

  var barStyle = inlineBarStyle ? BAR_STYLES.inline : BAR_STYLES[props.barStyle];
  groupedData = groupedData.map(function (_ref2) {
    var groupData = _ref2.values,
        title = _ref2.key;
    var gY = 0;

    if (title) {
      gY += COLUMN_TITLE_HEIGHT;
    }

    var firstBarY;
    var stackedBars = (0, _utils.groupBy)(groupData, function (d) {
      return d.label;
    });
    var marginBottom = 0;
    var bars = stackedBars.map(function (_ref3) {
      var segments = _ref3.values;
      var first = segments[0];
      var style = inlineBarStyle ? barStyle[first.datum[inlineSecondaryLabel] ? 'withSecondary' : 'normal'] : barStyle[highlight(first.datum) ? 'highlighted' : 'normal'];
      gY += marginBottom;
      var labelY = gY;

      if (first.label) {
        gY += BAR_LABEL_HEIGHT;
      }

      gY += style.marginTop;
      var y = gY;

      if (firstBarY === undefined) {
        firstBarY = gY;
      }

      gY += style.height;
      marginBottom = style.marginBottom;
      var barSegments = segments;
      (0, _utils.runSort)(props.colorSort, barSegments, colorAccessor);
      return {
        labelY: labelY,
        y: y,
        style: style,
        height: style.height,
        segments: barSegments,
        first: first,
        max: barSegments.reduce(function (sum, segment) {
          return sum + Math.max(0, segment.value);
        }, 0),
        min: barSegments.reduce(function (sum, segment) {
          return sum + Math.min(0, segment.value);
        }, 0)
      };
    });
    return {
      title: title,
      bars: bars,
      max: (0, _d3Array.max)(bars, function (bar) {
        return bar.max;
      }),
      min: (0, _d3Array.min)(bars, function (bar) {
        return bar.min;
      }),
      height: gY,
      firstBarY: firstBarY
    };
  }); // setup x scale

  var xDomain = props.domain || [Math.min(0, (0, _d3Array.min)(groupedData.map(function (d) {
    return d.min;
  }))), Math.max(0, (0, _d3Array.max)(groupedData.map(function (d) {
    return d.max;
  })))];
  var x = (0, _d3Scale.scaleLinear)().domain(xDomain).range([0, columnWidth]);

  if (!props.domain) {
    x.nice(3);
  }

  var xAxis = (0, _utils.calculateAxis)(props.numberFormat, tLabel, x.domain()); // stack bars

  groupedData.forEach(function (group) {
    group.bars.forEach(function (bar) {
      var xZero = x(0);
      var xPosPositiv = xZero;
      var xPosNegativ = xZero;
      bar.segments.forEach(function (d, i) {
        d.color = color(colorAccessor(d));
        var size = x(d.value) - xZero;
        d.x = size > 0 ? Math.floor(xPosPositiv) : Math.ceil(xPosNegativ + size);
        d.width = Math.ceil(Math.abs(size)) + (size && last(bar.segments, i) ? 1 : 0);

        if (size > 0) {
          xPosPositiv += size;
        } else {
          xPosNegativ += size;
        }
      });
    });
  }); // rows and columns

  var yPos = 0;
  (0, _utils.groupBy)(groupedData, function (d, i) {
    return Math.floor(i / columns);
  }).forEach(function (_ref4) {
    var groups = _ref4.values;
    var height = (0, _d3Array.max)(groups.map(function (d) {
      return d.height;
    }));
    groups.forEach(function (group, column) {
      group.groupHeight = height;
      group.y = yPos;
      group.x = column * (columnWidth + COLUMN_PADDING);
    });
    yPos += height + (!inlineValue ? AXIS_BOTTOM_HEIGHT : 0);
  });
  var isLollipop = props.barStyle === 'lollipop';
  var xTicks = props.xTicks || xAxis.ticks;
  var highlightZero = xTicks.indexOf(0) !== -1 && xTicks[0] !== 0;
  return _react.default.createElement("div", null, _react.default.createElement("svg", {
    width: width,
    height: yPos
  }, _react.default.createElement("desc", null, description), groupedData.map(function (group) {
    return _react.default.createElement("g", {
      key: "group".concat(group.title || 1),
      transform: "translate(".concat(group.x, ",").concat(group.y, ")")
    }, _react.default.createElement("text", _extends({
      dy: "1.5em"
    }, styles.groupTitle), group.title), group.bars.map(function (bar) {
      var href = bar.first.datum[link];

      var barLabel = _react.default.createElement("text", _extends({}, styles.barLabel, href && styles.barLabelLink, {
        y: bar.labelY,
        dy: "0.9em",
        x: x(0) + (highlightZero ? bar.max <= 0 ? -2 : 2 : 0),
        textAnchor: bar.max <= 0 ? 'end' : 'start'
      }), _utils.subsup.svg(bar.first.label));

      if (href) {
        barLabel = _react.default.createElement("a", {
          xlinkHref: href
        }, barLabel);
      }

      return _react.default.createElement("g", {
        key: "bar".concat(bar.y)
      }, barLabel, bar.segments.map(function (segment, i) {
        var isLast = last(bar.segments, i);
        var valueTextStartAnchor = segment.value >= 0 && isLast || segment.value < 0 && i !== 0;
        var inlineFill = (0, _utils.getTextColor)(segment.color);
        var inlineEndAnchor = isLast && i !== 0;
        return _react.default.createElement("g", {
          key: "seg".concat(i),
          transform: "translate(0,".concat(bar.y, ")")
        }, _react.default.createElement("rect", {
          x: segment.x,
          fill: segment.color,
          width: segment.width,
          height: bar.height
        }), (inlineValue || inlineLabel) && _react.default.createElement(_react.Fragment, null, _react.default.createElement("text", _extends({}, styles.inlineLabel, {
          x: segment.x + (inlineEndAnchor ? segment.width - 5 : 5),
          y: bar.style.inlineTop,
          dy: "1em",
          fontSize: bar.style.fontSize,
          fill: inlineFill,
          textAnchor: inlineEndAnchor ? 'end' : 'start'
        }), _utils.subsup.svg([inlineValue && xAxis.format(segment.value), inlineValueUnit && inlineValueUnit, inlineLabel && segment.datum[inlineLabel]].join(' '))), inlineSecondaryLabel && _react.default.createElement("text", _extends({}, styles.inlineLabel, {
          x: segment.x + (inlineEndAnchor ? segment.width - 5 : 5),
          y: bar.style.inlineTop + bar.style.fontSize + 5,
          dy: "1em",
          fontSize: bar.style.secondaryFontSize,
          fill: inlineFill,
          textAnchor: inlineEndAnchor ? 'end' : 'start'
        }), _utils.subsup.svg(segment.datum[inlineSecondaryLabel]))), isLollipop && band && _react.default.createElement("rect", {
          rx: bar.style.popHeight / 2,
          ry: bar.style.popHeight / 2,
          x: x(+segment.datum["".concat(band, "_lower")]),
          y: bar.height / 2 - bar.style.popHeight / 2,
          width: x(+segment.datum["".concat(band, "_upper")]) - x(+segment.datum["".concat(band, "_lower")]),
          height: bar.style.popHeight,
          fill: segment.color,
          fillOpacity: "0.3"
        }), isLollipop && _react.default.createElement("circle", {
          cx: segment.x + segment.width,
          cy: bar.height / 2,
          r: Math.floor(bar.style.popHeight - bar.style.stroke / 2) / 2,
          fill: _utils.circleFill,
          stroke: segment.color,
          strokeWidth: bar.style.stroke
        }), showBarValues && _react.default.createElement("text", _extends({}, styles.barLabel, {
          x: valueTextStartAnchor ? segment.x + segment.width + 4 : segment.x + (segment.value >= 0 ? segment.width : 0) - 4,
          textAnchor: valueTextStartAnchor ? 'start' : 'end',
          y: bar.height / 2,
          dy: ".35em"
        }), xAxis.format(segment.value)));
      }));
    }), !inlineValue && _react.default.createElement("g", {
      transform: "translate(0,".concat(group.groupHeight + AXIS_BOTTOM_PADDING, ")")
    }, xTicks.map(function (tick, i) {
      var textAnchor = 'middle';
      var isLast = last(xTicks, i);

      if (isLast) {
        textAnchor = 'end';
      }

      if (i === 0) {
        textAnchor = 'start';
      }

      var highlightTick = tick === 0 && highlightZero;
      return _react.default.createElement("g", {
        key: "tick".concat(tick),
        transform: "translate(".concat(x(tick), ",0)")
      }, _react.default.createElement("line", _extends({}, styles.axisXLine, {
        y1: -AXIS_BOTTOM_PADDING - group.groupHeight + group.firstBarY,
        y2: -AXIS_BOTTOM_PADDING,
        style: {
          stroke: highlightTick ? _utils.baseLineColor : undefined
        }
      })), _react.default.createElement("text", _extends({}, styles.axisLabel, {
        y: X_TICK_TEXT_MARGIN,
        dy: "0.6em",
        textAnchor: textAnchor,
        style: {
          fill: highlightTick ? _colors.default.text : undefined
        }
      }), xAxis.axisFormat(tick, isLast)));
    })));
  })), _react.default.createElement("div", null, _react.default.createElement(_ColorLegend.default, {
    inline: true,
    values: [].concat(props.colorLegend && (props.colorLegendValues || colorValues).map(function (colorValue) {
      return {
        color: color(colorValue),
        label: colorValue
      };
    })).concat(!mini && band && bandLegend && {
      label: _react.default.createElement("span", styles.bandLegend, _react.default.createElement("span", styles.bandBar), " ".concat(bandLegend))
    }).filter(Boolean)
  }), children));
};

BarChart.propTypes = {
  children: _propTypes.default.node,
  values: _propTypes.default.array.isRequired,
  width: _propTypes.default.number.isRequired,
  mini: _propTypes.default.bool,
  domain: _propTypes.default.array,
  y: _propTypes.default.string,
  xTicks: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number])),
  barStyle: _propTypes.default.oneOf(Object.keys(BAR_STYLES)),
  band: _propTypes.default.string,
  bandLegend: _propTypes.default.string,
  sort: _utils.sortPropType,
  column: _propTypes.default.string,
  columnSort: _utils.sortPropType,
  columnFilter: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    test: _propTypes.default.string.isRequired
  })),
  highlight: _propTypes.default.string,
  stroke: _propTypes.default.string,
  color: _propTypes.default.string,
  colorRange: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  colorSort: _utils.sortPropType,
  colorLegend: _propTypes.default.bool,
  colorLegendValues: _propTypes.default.arrayOf(_propTypes.default.string),
  colorRanges: _propTypes.default.shape({
    diverging2: _propTypes.default.array.isRequired,
    sequential3: _propTypes.default.array.isRequired,
    discrete: _propTypes.default.array.isRequired
  }).isRequired,
  category: _propTypes.default.string,
  numberFormat: _propTypes.default.string.isRequired,
  filter: _propTypes.default.string,
  minInnerWidth: _propTypes.default.number.isRequired,
  columns: _propTypes.default.number.isRequired,
  tLabel: _propTypes.default.func.isRequired,
  description: _propTypes.default.string,
  showBarValues: _propTypes.default.bool
};
BarChart.defaultProps = {
  columns: 1,
  minInnerWidth: 140,
  barStyle: 'small',
  numberFormat: 's'
};

var Lollipop = function Lollipop(props) {
  return _react.default.createElement(BarChart, props);
};

exports.Lollipop = Lollipop;
Lollipop.defaultProps = {
  barStyle: 'lollipop' // Lollipop has additional default props

};
Lollipop.wrap = 'Bar';
var _default = BarChart;
exports.default = _default;