"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _catalog = require("catalog");

var _ = require("./");

var _d3Array = require("d3-array");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["## Default Props"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n## All Props\n\n", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["### ", "\n\n  ", "\n\n  ", "\n\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypeNames = new Map();
Object.keys(_propTypes.default).forEach(function (key) {
  propTypeNames.set(_propTypes.default[key], key);
  propTypeNames.set(_propTypes.default[key].isRequired, key);
});
propTypeNames.set(_utils.sortPropType, 'string');

var isSubType = function isSubType(Component) {
  return Component.base || Component.extends;
};

var charts = Object.keys(_.ReactCharts);
var baseCharts = charts.filter(function (key) {
  return !isSubType(_.ReactCharts[key]);
}).filter(function (key) {
  return _.ReactCharts[key].propTypes;
});
var props = baseCharts.reduce(function (all, chart) {
  var propTypes = _.ReactCharts[chart].propTypes;
  var props = Object.keys(propTypes).map(function (key) {
    return {
      key: key,
      type: propTypeNames.get(propTypes[key]),
      chart: chart
    };
  });
  return all.concat(props);
}, []);
var IGNORE_KEYS = [// for react usage only
't', 'children', 'values', 'width', 'colorRanges', // should not really be used
'mini', 'description', 'filter'];
var propByName = (0, _utils.groupBy)(props, function (d) {
  return d.key;
}).filter(function (group) {
  return IGNORE_KEYS.indexOf(group.key) === -1;
}).sort(function (a, b) {
  return (0, _d3Array.descending)(a.values.length, b.values.length) || (0, _d3Array.ascending)(a.key, b.key);
});
var examples = {
  color: '`"category"`',
  colorLegend: '`true`',
  colorRange: '`["#d62728", "#9467bd"]`',
  numberFormat: '`".2%"`',
  xTicks: '`[2005, 2010, 2015]`',
  colorSort: '`"none"`',
  category: '`"datum.country === \'CH\' ? \'CH\' : \'andere\'"`',
  column: '`"category"`',
  columnSort: '`"none"`',
  columnFilter: '`[{"title": "CH", "test": "datum.country === \'CH\'"}, {"title": "Andere", "test": "datum.country !== \'CH\'"}]`',
  columns: '`3`',
  band: '`confidence95`',
  domain: '`[2005, 2015]`',
  height: '`300`'
};
var comments = {
  color: 'column name',
  colorSort: 'see `"sort"`',
  columnSort: '`see `"sort"`',
  sort: '`"none"`, `"ascending"`, `"descending"`',
  colorRange: 'or presets: `"discrete"`, `"sequential3"`, `"diverging1"`, `"diverging1n"`, `"diverging2"`, `"diverging3"`',
  colorLegend: 'force (`true`) or suppress (`false`) color legend, auto if not set',
  timeParse: 'see [d3-time-format](https://github.com/d3/d3-time-format#locale_format)',
  timeFormat: 'see [d3-time-format](https://github.com/d3/d3-time-format#locale_format)',
  numberFormat: 'see [d3-format](https://github.com/d3/d3-format#locale_format)',
  xTicks: 'same format as your x data',
  category: 'js expression, data row available as `datum`',
  columns: 'number of columns, normally 1 up to 4',
  domain: 'same format as your data',
  height: 'higher than 320 is usually bad on mobile'
};
var manualType = {
  colorRange: 'array, string',
  xTicks: 'array'
};
var options = propByName.map(function (_ref) {
  var key = _ref.key,
      values = _ref.values;
  return {
    Name: "`\"".concat(key, "\":`"),
    Example: examples[key],
    Type: values.map(function (d) {
      return d.type;
    }).filter(Boolean).filter(_utils.deduplicate).join(', ') || manualType[key],
    Charts: values.map(function (d) {
      return d.chart;
    }).join(', '),
    Comment: comments[key]
  };
});

if (process.env.NODE_ENV === 'production') {
  options.forEach(function (option) {
    delete option.Type;
  });
}

var chartPages = charts.map(function (key) {
  var _ReactCharts$key = _.ReactCharts[key],
      base = _ReactCharts$key.base,
      wrap = _ReactCharts$key.wrap,
      defaultProps = _ReactCharts$key.defaultProps;
  var label = 'Default props:';

  if (base) {
    label = "Based on ".concat(base, " with different default props:");
  } else if (wrap) {
    label = "Wraps ".concat(wrap, " with additional default props:");
  }

  return (0, _catalog.markdown)(_templateObject(), key, label, _react.default.createElement(_catalog.TableSpecimen, {
    rows: Object.keys(defaultProps).map(function (key) {
      return {
        Name: key,
        Value: "`".concat(JSON.stringify(defaultProps[key]), "`")
      };
    })
  }));
});
var allProps = (0, _catalog.markdown)(_templateObject2(), _react.default.createElement(_catalog.TableSpecimen, {
  rows: options
}));

var _default = function _default() {
  return _react.default.createElement(_react.Fragment, null, allProps, (0, _catalog.markdown)(_templateObject3()), chartPages);
};

exports.default = _default;