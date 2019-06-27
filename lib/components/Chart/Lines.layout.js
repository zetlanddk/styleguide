"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VALUE_FONT", {
  enumerable: true,
  get: function get() {
    return _styles.sansSerifMedium12;
  }
});
Object.defineProperty(exports, "LABEL_FONT", {
  enumerable: true,
  get: function get() {
    return _styles.sansSerifRegular12;
  }
});
exports.default = exports.Y_CONNECTOR_PADDING = exports.Y_CONNECTOR = void 0;

var _d3TimeFormat = require("d3-time-format");

var _d3Scale = require("d3-scale");

var _d3Array = require("d3-array");

var _textGauger = require("../../lib/textGauger");

var _utils = require("./utils");

var _styles = require("../Typography/styles");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COLUMN_TITLE_HEIGHT = 24;
var AXIS_TOP_HEIGHT = 24;
var AXIS_BOTTOM_HEIGHT = 24;
var AXIS_BOTTOM_CUTOFF_HEIGHT = 40;
var Y_CONNECTOR = 6;
exports.Y_CONNECTOR = Y_CONNECTOR;
var Y_CONNECTOR_PADDING = 4;
exports.Y_CONNECTOR_PADDING = Y_CONNECTOR_PADDING;
var Y_END_LABEL_SPACE = 3; // width of space between label and value

var valueGauger = (0, _textGauger.createTextGauger)(_styles.sansSerifMedium12, {
  dimension: 'width',
  html: true
});
var labelGauger = (0, _textGauger.createTextGauger)(_styles.sansSerifRegular12, {
  dimension: 'width',
  html: true
});

var _default = function _default(props) {
  var values = props.values,
      mini = props.mini,
      yAnnotations = props.yAnnotations;
  var data = values;

  if (props.filter) {
    var filter = (0, _utils.unsafeDatumFn)(props.filter);
    data = data.filter(filter);
  }

  var xParser = function xParser(x) {
    return x;
  };

  if (props.xScale === 'time') {
    xParser = (0, _d3TimeFormat.timeParse)(props.timeParse);
  }

  data = data.filter(function (d) {
    return d.value && d.value.length > 0;
  }).map(function (d) {
    return {
      datum: d,
      x: xParser(d[props.x]),
      value: +d.value
    };
  });

  if (props.category) {
    var categorize = (0, _utils.unsafeDatumFn)(props.category);
    data.forEach(function (d) {
      d.category = categorize(d.datum);
    });
  }

  var xAccessor = function xAccessor(d) {
    return d.x;
  };

  (0, _utils.runSort)(props.xSort, data, xAccessor);
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

  var lineGroup = props.category ? function (d) {
    return d.category;
  } : function (d) {
    return d.datum[props.color];
  };
  var yCutHeight = mini ? 25 : AXIS_BOTTOM_CUTOFF_HEIGHT;
  var paddingTop = AXIS_TOP_HEIGHT + (props.column ? COLUMN_TITLE_HEIGHT : 0);
  var paddingBottom = AXIS_BOTTOM_HEIGHT + (props.zero ? 0 : yCutHeight);
  var innerHeight = mini ? props.height - paddingTop - paddingBottom : props.height;
  var columnHeight = innerHeight + paddingTop + paddingBottom;
  var yValues = data.map(function (d) {
    return d.value;
  });

  if (yAnnotations) {
    yValues = yValues.concat(yAnnotations.map(function (d) {
      return d.value;
    }));
  }

  if (props.yTicks) {
    yValues = yValues.concat(props.yTicks);
  }

  var minValue = (0, _d3Array.min)(yValues);
  var y = (0, _d3Scale.scaleLinear)().domain([props.zero ? Math.min(0, minValue) : minValue, (0, _d3Array.max)(yValues)]).nice(props.yNice).range([innerHeight + paddingTop, paddingTop]);
  var colorAccessor = props.color ? function (d) {
    return d.datum[props.color];
  } : function (d) {
    return d.category;
  };
  var colorValues = [].concat(data.map(colorAccessor)).concat(props.colorLegendValues).filter(_utils.deduplicate).filter(Boolean);
  (0, _utils.runSort)(props.colorSort, colorValues);
  var colorRange = props.colorRanges[props.colorRange] || props.colorRange;

  if (!colorRange) {
    colorRange = colorValues.length > 3 ? props.colorRanges.discrete : props.colorRanges.sequential3;
  }

  var color = (0, _d3Scale.scaleOrdinal)(colorRange).domain(colorValues);
  var unit = props.unit,
      tLabel = props.tLabel;
  var yCut;

  if (!props.zero) {
    yCut = tLabel('Achse gekürzt');
  }

  var yAxis = (0, _utils.calculateAxis)(props.numberFormat, tLabel, y.domain(), unit);
  var yFormat = yAxis.format;
  var startValue = !mini && props.startValue;
  var endLabel = !mini && props.endLabel && colorValues.length > 0;
  var startValueSizes = [];
  var endValueSizes = [];
  var endLabelSizes = [];
  var highlight = props.highlight ? (0, _utils.unsafeDatumFn)(props.highlight) : function () {
    return false;
  };
  var stroke = props.stroke ? (0, _utils.unsafeDatumFn)(props.stroke) : function () {
    return false;
  };
  var labelFilter = props.labelFilter ? (0, _utils.unsafeDatumFn)(props.labelFilter) : function () {
    return true;
  };
  groupedData = groupedData.map(function (_ref2) {
    var values = _ref2.values,
        key = _ref2.key;
    return {
      key: key,
      values: (0, _utils.groupBy)(values, lineGroup)
    };
  }).map(function (_ref3) {
    var lines = _ref3.values,
        key = _ref3.key;
    var linesWithLabels = lines.map(function (_ref4) {
      var line = _ref4.values;
      var start = line[0];
      var end = line[line.length - 1];
      var label = labelFilter(start.datum);
      return {
        line: line,
        start: start,
        end: end,
        highlighted: highlight(start.datum),
        stroked: stroke(start.datum),
        lineColor: color(colorAccessor(start)),
        startValue: label && startValue && yFormat(start.value),
        endValue: label && yFormat(end.value),
        endLabel: label && endLabel && " ".concat(colorAccessor(end))
      };
    });

    if (startValue) {
      startValueSizes = startValueSizes.concat(linesWithLabels.map(function (line) {
        return line.startValue ? valueGauger(line.startValue) : 0;
      }));
    }

    if (!mini) {
      endValueSizes = endValueSizes.concat(linesWithLabels.map(function (line) {
        return line.endValue ? valueGauger(line.endValue) : 0;
      }));

      if (endLabel) {
        endLabelSizes = endLabelSizes.concat(linesWithLabels.map(function (line) {
          return line.endLabel ? labelGauger(line.endLabel) + Y_END_LABEL_SPACE : 0;
        }));
      }
    }

    return {
      key: key,
      values: linesWithLabels
    };
  });
  var colorLegend = !mini && colorValues.length > 0 && !endLabel;
  var paddingLeft = 0;
  var paddingRight = 0;
  var whiteSpacePadding = groupedData.length > 1 && props.columns > 1 ? 15 : 0;

  if (!mini) {
    var yConnectorSize = Y_CONNECTOR + Y_CONNECTOR_PADDING * 2;
    var startValueSize = startValue ? Math.ceil((0, _d3Array.max)(startValueSizes) + yConnectorSize) : 0;
    var endValueSize = Math.ceil((0, _d3Array.max)(endValueSizes) + yConnectorSize);

    if (startValue) {
      paddingLeft = paddingRight = Math.max(startValueSize, endValueSize) + whiteSpacePadding;
    } else {
      paddingRight = endValueSize + whiteSpacePadding;
    }

    if (endLabel) {
      var endLabelSize = Math.ceil((0, _d3Array.max)(endLabelSizes));

      if (startValueSize + endValueSize + endLabelSize > props.width - props.minInnerWidth) {
        colorLegend = true;
        groupedData.forEach(function (_ref5) {
          var lines = _ref5.values;
          lines.forEach(function (line) {
            line.endLabel = false;
          });
        });
      } else {
        if (startValue) {
          paddingLeft = startValueSize + whiteSpacePadding;
        }

        paddingRight = endValueSize + endLabelSize + whiteSpacePadding;
      }
    }

    if (props.paddingRight !== undefined) {
      paddingRight = props.paddingRight + whiteSpacePadding;
    }

    if (props.paddingLeft !== undefined) {
      paddingLeft = props.paddingLeft + whiteSpacePadding;
    }
  } // transform all color values (always visible on small screens) and group titles for display


  var colorValuesForLegend = (props.colorLegendValues || data.filter(function (d) {
    return labelFilter(d.datum);
  }).map(colorAccessor)).filter(_utils.deduplicate).filter(Boolean);
  (0, _utils.runSort)(props.colorSort, colorValuesForLegend);
  var colorLegendValues = colorValuesForLegend.map(function (value) {
    return {
      color: color(value),
      label: (0, _utils.subsup)(value)
    };
  });
  var translatedYAnnotations = (yAnnotations || []).map(function (d) {
    return _objectSpread({
      formattedValue: yFormat(d.value)
    }, d, {
      label: d.label,
      x: d.x ? xParser(d.x) : undefined
    });
  });
  return {
    data: data,
    groupedData: groupedData,
    xParser: xParser,
    xAccessor: xAccessor,
    y: y,
    yAxis: yAxis,
    yCut: yCut,
    yCutHeight: yCutHeight,
    yAnnotations: translatedYAnnotations,
    colorLegend: colorLegend,
    colorLegendValues: colorLegendValues,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    columnHeight: columnHeight
  };
};

exports.default = _default;