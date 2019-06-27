"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextColor = exports.unsafeDatumFn = exports.deduplicate = exports.baseLineColor = exports.circleFill = exports.transparentAxisStroke = exports.subsup = exports.get3EqualDistTicks = exports.calculateAxis = exports.last = exports.getFormat = exports.measure = exports.sortBy = exports.runSort = exports.sortPropType = exports.groupBy = void 0;

var _d3Format = require("d3-format");

var _d3Array = require("d3-array");

var _d3Color = require("d3-color");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var groupBy = function groupBy(array, key) {
  var keys = [];
  var object = array.reduce(function (o, item, index) {
    var k = key(item, index) || '';

    if (!o[k]) {
      o[k] = [];
      keys.push(k);
    }

    o[k].push(item);
    return o;
  }, {});
  return keys.map(function (k) {
    return {
      key: k,
      values: object[k]
    };
  });
};

exports.groupBy = groupBy;

var sortPropType = _propTypes.default.oneOf(['none', 'ascending', 'descending']);

exports.sortPropType = sortPropType;

var runSort = function runSort(cmd, array) {
  var accessor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (d) {
    return d;
  };

  if (cmd !== 'none') {
    var compare = cmd === 'descending' ? _d3Array.descending : _d3Array.ascending;
    var original = [].concat(array);
    array.sort(function (a, b) {
      return compare(accessor(a), accessor(b)) || (0, _d3Array.ascending)(original.indexOf(a), original.indexOf(b));
    } // stable sort
    );
  }
};

exports.runSort = runSort;

var sortBy = function sortBy(array, accessor) {
  return [].concat(array).sort(function (a, b) {
    return (0, _d3Array.ascending)(accessor(a), accessor(b)) || (0, _d3Array.ascending)(array.indexOf(a), array.indexOf(b));
  } // stable sort
  );
};

exports.sortBy = sortBy;

var measure = function measure(onMeasure) {
  var ref;
  var rafHandle;

  var update = function update() {
    onMeasure(ref, ref.getBoundingClientRect());
  };

  return function (newRef) {
    ref = newRef;

    if (ref) {
      window.addEventListener('resize', update); // raf needed to wait for glamor css styles

      rafHandle = window.requestAnimationFrame(update);
    } else {
      window.removeEventListener('resize', update);
      window.cancelAnimationFrame(rafHandle);
    }
  };
};

exports.measure = measure;
var thousandSeparator = '.';
var swissNumbers = (0, _d3Format.formatLocale)({
  decimal: ',',
  thousands: thousandSeparator,
  grouping: [3],
  currency: ["CHF\xA0", '']
});

var formatPow = function formatPow(tLabel, baseValue) {
  var decimalFormat = swissNumbers.format('.0f');

  var _decimalFormat$split = decimalFormat(baseValue).split('.'),
      _decimalFormat$split2 = _slicedToArray(_decimalFormat$split, 1),
      n = _decimalFormat$split2[0];

  var scale = function scale(value) {
    return value;
  };

  var suffix = '';

  if (n.length > 9) {
    scale = function scale(value) {
      return value / Math.pow(10, 9);
    };

    suffix = tLabel(' Mrd.');
  } else if (n.length > 6) {
    scale = function scale(value) {
      return value / Math.pow(10, 6);
    };

    suffix = tLabel(' mio.');
  }

  return {
    scale: scale,
    suffix: suffix
  };
};

var sFormat = function sFormat(tLabel) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var pow = arguments.length > 2 ? arguments[2] : undefined;
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'r';
  var numberFormat4 = swissNumbers.format('d');
  var numberFormat5 = swissNumbers.format(',d');

  var numberFormat = function numberFormat(value) {
    if (String(Math.round(value)).length > 4) {
      return numberFormat5(value);
    }

    return numberFormat4(value);
  }; // we only round suffixed values to precision


  var numberFormatWithSuffix4 = swissNumbers.format(".".concat(precision).concat(type));
  var numberFormatWithSuffix5 = swissNumbers.format(",.".concat(precision).concat(type));

  var numberFormatWithSuffix = function numberFormatWithSuffix(value) {
    if (String(Math.round(value)).length > 4) {
      return numberFormatWithSuffix5(value);
    }

    return numberFormatWithSuffix4(value);
  };

  return function (value) {
    var fPow = pow || formatPow(tLabel, value);

    if (fPow.suffix) {
      return numberFormatWithSuffix(fPow.scale(value)) + fPow.suffix;
    }

    return numberFormat(fPow.scale(value));
  };
};

var getFormat = function getFormat(numberFormat, tLabel) {
  var specifier = (0, _d3Format.formatSpecifier)(numberFormat);

  if (specifier.type === 's') {
    return sFormat(tLabel, specifier.precision);
  }

  return swissNumbers.format(specifier);
};

exports.getFormat = getFormat;

var last = function last(array, index) {
  return array.length - 1 === index;
};

exports.last = last;

var calculateAxis = function calculateAxis(numberFormat, tLabel, domain) {
  var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var _domain = _slicedToArray(domain, 2),
      min = _domain[0],
      max = _domain[1];

  var step = (max - min) / 2;
  var ticks = [min, min < 0 && max > 0 ? 0 : min + step, max];
  var format = swissNumbers.format;
  var specifier = (0, _d3Format.formatSpecifier)(numberFormat);
  var formatter = getFormat(numberFormat, tLabel);
  var regularFormat;
  var lastFormat;

  if (specifier.type === '%') {
    var fullStep = +(step * 100).toFixed(specifier.precision);
    var fullMax = +(max * 100).toFixed(specifier.precision);
    specifier.precision = (0, _d3Format.precisionFixed)(fullStep - Math.floor(fullStep) || fullMax - Math.floor(fullMax));
    lastFormat = format(specifier.toString());
    specifier.type = 'f';
    var regularFormatInner = format(specifier.toString());

    regularFormat = function regularFormat(value) {
      return regularFormatInner(value * 100);
    };
  } else if (specifier.type === 's') {
    var magnitude = (0, _d3Array.max)([max - (min > 0 ? min : 0), min].map(Math.abs));
    var pow = formatPow(tLabel, Math.max(0, min) + magnitude / 2);
    var scaledStep = pow.scale(step);
    var scaledMax = pow.scale(max);
    specifier.precision = (0, _d3Format.precisionFixed)(scaledStep - Math.floor(scaledStep) || scaledMax - Math.floor(scaledMax));
    lastFormat = sFormat(tLabel, specifier.precision, pow, 'f');
    regularFormat = sFormat(tLabel, specifier.precision, {
      scale: pow.scale,
      suffix: ''
    }, 'f');
  } else {
    specifier.precision = (0, _d3Format.precisionFixed)(step - Math.floor(step) || max - Math.floor(max));
    lastFormat = regularFormat = format(specifier.toString());
  }

  var axisFormat = function axisFormat(value, isLast) {
    return isLast ? "".concat(lastFormat(value), " ").concat(unit) : regularFormat(value);
  };

  return {
    ticks: ticks,
    format: formatter,
    axisFormat: axisFormat
  };
};

exports.calculateAxis = calculateAxis;

var get3EqualDistTicks = function get3EqualDistTicks(scale) {
  var range = scale.range();
  return [scale.invert(range[0]), scale.invert(range[0] + (range[1] - range[0]) / 2), scale.invert(range[1])];
};

exports.get3EqualDistTicks = get3EqualDistTicks;

var subSupSplitter = function subSupSplitter(createTag) {
  return function (input) {
    if (!input) {
      return input;
    }

    return input.split(/(<sub>|<sup>)([^<]+)<\/su[bp]>/g).reduce(function (elements, text, i) {
      if (text === '<sub>' || text === '<sup>') {
        elements.nextElement = text.replace('<', '').replace('>', '');
      } else {
        if (elements.nextElement) {
          elements.push(createTag(elements.nextElement, elements.nextElement + i, text));
          elements.nextElement = null;
        } else {
          elements.push(text);
        }
      }

      return elements;
    }, []);
  };
};

var subsup = subSupSplitter(function (tag, key, text) {
  return (0, _react.createElement)(tag, {
    key: key
  }, text);
});
exports.subsup = subsup;
subsup.svg = subSupSplitter(function (tag, key, text) {
  var dy = tag === 'sub' ? '0.25em' : '-0.5em';
  return _react.default.createElement(_react.Fragment, {
    key: key
  }, _react.default.createElement("tspan", {
    dy: dy,
    fontSize: "75%"
  }, text), _react.default.createElement("tspan", {
    dy: "-".concat(dy)
  }, "\u200B"));
});
var transparentAxisStroke = 'rgba(0,0,0,0.17)';
exports.transparentAxisStroke = transparentAxisStroke;
var circleFill = '#fff';
exports.circleFill = circleFill;
var baseLineColor = _colors.default.text;
exports.baseLineColor = baseLineColor;

var deduplicate = function deduplicate(d, i, all) {
  return all.indexOf(d) === i;
}; // This is unsafe
// - all props that are passed to unsafeDatumFn should not be user defined
//   currently: filter, columnFilter.test, category, highlight
// eslint-disable-next-line no-new-func


exports.deduplicate = deduplicate;

var unsafeDatumFn = function unsafeDatumFn(code) {
  return new Function('datum', "return ".concat(code));
};

exports.unsafeDatumFn = unsafeDatumFn;

var getTextColor = function getTextColor(bgColor) {
  var color = (0, _d3Color.rgb)(bgColor);
  var yiq = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

exports.getTextColor = getTextColor;