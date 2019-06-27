"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lUp = exports.mUp = exports.onlyS = exports.lBreakPoint = exports.mBreakPoint = void 0;
var mBreakPoint = 768;
exports.mBreakPoint = mBreakPoint;
var lBreakPoint = 1025;
exports.lBreakPoint = lBreakPoint;
var onlyS = "@media only screen and (max-width: ".concat(mBreakPoint - 1, "px)");
exports.onlyS = onlyS;
var mUp = "@media only screen and (min-width: ".concat(mBreakPoint, "px)");
exports.mUp = mUp;
var lUp = "@media only screen and (min-width: ".concat(lBreakPoint, "px)");
exports.lUp = lUp;