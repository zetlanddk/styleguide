"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextGauger = void 0;

var _memoize = _interopRequireDefault(require("lodash/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var measurementDiv = (0, _memoize.default)(function () {
  var div = document.createElement('div');
  div.className = 'DOMMEASUREMENTOUTLET';
  div.style.position = 'fixed';
  div.style.top = '-100%';
  div.style.visibility = 'hidden';
  div.style.pointerEvents = 'none';
  document.body.appendChild(div);
  return div;
}, function () {
  return '';
});
var createTextGauger = (0, _memoize.default)(function (_ref, _ref2) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight;
  var dimension = _ref2.dimension,
      html = _ref2.html;

  if (typeof document === 'undefined') {
    return function (text) {
      // SSR approximation
      return fontSize * 0.6 * text.length;
    };
  }

  var element = document.createElement('span');
  element.style.fontFamily = fontFamily;
  element.style.fontSize = fontSize;
  element.style.lineHeight = lineHeight;
  measurementDiv().appendChild(element);

  if (html) {
    return (0, _memoize.default)(function (text) {
      element.innerHTML = text;
      return element.getBoundingClientRect()[dimension];
    });
  }

  return (0, _memoize.default)(function (text) {
    element.textContent = text;
    return element.getBoundingClientRect()[dimension];
  });
}, function (_ref3, _ref4) {
  var fontFamily = _ref3.fontFamily,
      fontSize = _ref3.fontSize,
      lineHeight = _ref3.lineHeight;
  var dimension = _ref4.dimension,
      html = _ref4.html;
  return [fontFamily, fontSize, lineHeight, dimension, html].join();
});
exports.createTextGauger = createTextGauger;