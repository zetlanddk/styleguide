"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rafDebounce = exports.intersperse = void 0;

var intersperse = function intersperse(list, separator) {
  if (list.length === 0) {
    return [];
  }

  return list.slice(1).reduce(function (items, item, i) {
    return items.concat([separator(item, i), item]);
  }, [list[0]]);
};

exports.intersperse = intersperse;

var rafDebounce = function rafDebounce(fn) {
  var next;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!next) {
      next = window.requestAnimationFrame(function () {
        next = undefined;
        fn.apply(void 0, args);
      });
    }

    return next;
  };
};

exports.rafDebounce = rafDebounce;