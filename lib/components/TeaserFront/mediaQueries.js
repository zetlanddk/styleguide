"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dUp = exports.tUp = exports.mUp = exports.BreakPoints = void 0;
// These media queries are specific to the front teasers.
var BreakPoints = {
  mobile: 640,
  tablet: 1174,
  desktop: 1400
};
exports.BreakPoints = BreakPoints;
var mUp = "@media only screen and (min-width: ".concat(BreakPoints.mobile, "px)");
exports.mUp = mUp;
var tUp = "@media only screen and (min-width: ".concat(BreakPoints.tablet, "px)");
exports.tUp = tUp;
var dUp = "@media only screen and (min-width: ".concat(BreakPoints.desktop, "px)");
exports.dUp = dUp;