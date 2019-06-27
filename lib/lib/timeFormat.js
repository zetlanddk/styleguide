"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeParse = exports.timeFormat = void 0;

var _d3TimeFormat = require("d3-time-format");

var _deCH = _interopRequireDefault(require("d3-time-format/locale/de-CH"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = (0, _d3TimeFormat.timeFormatLocale)(_deCH.default);
var timeFormat = locale.format;
exports.timeFormat = timeFormat;
var timeParse = locale.parse;
exports.timeParse = timeParse;