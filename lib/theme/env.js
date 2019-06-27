"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJson = exports.default = void 0;
var ENV = typeof window !== 'undefined' && (window.ENV || window.__NEXT_DATA__ && window.__NEXT_DATA__.env) || process.env || {};
var SG_ENV = {};
var SG_PREFIX = /^(REACT_APP_)?SG_(.+)$/;
Object.keys(ENV).forEach(function (key) {
  var matches = key.match(SG_PREFIX);

  if (matches) {
    SG_ENV[matches[2]] = ENV[key];
  }
});
var _default = SG_ENV;
exports.default = _default;

var getJson = function getJson(key) {
  return SG_ENV[key] && JSON.parse(SG_ENV[key]) || {};
};

exports.getJson = getJson;