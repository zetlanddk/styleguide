"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inQuotes = void 0;
var defaultMarks = {
  outerOpening: '«',
  outerClosing: '»',
  innerOpening: '‹',
  innerClosing: '›'
};

var inQuotes = function inQuotes(str) {
  var marks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMarks;
  var quotedStr = str.trim();

  if (quotedStr.startsWith(marks.outerOpening) && quotedStr.endsWith(marks.outerClosing)) {
    return quotedStr;
  }

  quotedStr = quotedStr.replace(marks.outerOpening, marks.innerOpening).replace(marks.outerClosing, marks.innerClosing);
  return marks.outerOpening + quotedStr + marks.outerClosing;
};

exports.inQuotes = inQuotes;