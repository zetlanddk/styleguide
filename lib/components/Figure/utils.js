"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResizedSrcs = void 0;

var _utils = require("mdast-react-render/lib/utils");

var _Center = require("../Center");

var getResizedSrcs = function getResizedSrcs(src, displayWidth) {
  var setMaxWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!src) {
    return {
      size: null
    };
  }

  var sizeInfo = (0, _utils.imageSizeInfo)(src);

  if (!sizeInfo) {
    return {
      src: src,
      size: null
    };
  }

  var size = {
    width: +sizeInfo.width,
    height: +sizeInfo.height
  };
  var maxWidth = size.width;
  var defaultWidth = Math.min(Math.max(displayWidth, // images could always be shown full width on mobile
  _Center.MAX_WIDTH_MOBILE), maxWidth);
  var resizedSrc = (0, _utils.imageResizeUrl)(src, "".concat(defaultWidth, "x"));
  var isHighRes = defaultWidth * 2 <= maxWidth; // add high res image

  var srcSet = [Math.round(defaultWidth * 0.5), defaultWidth, defaultWidth < maxWidth && (isHighRes ? defaultWidth * 2 : maxWidth)].filter(Boolean).map(function (size) {
    return [(0, _utils.imageResizeUrl)(src, "".concat(size, "x")), "".concat(size, "w")].join(' ');
  }).join(',');
  return {
    src: resizedSrc,
    srcSet: srcSet,
    maxWidth: setMaxWidth ? maxWidth : undefined,
    size: size
  };
};

exports.getResizedSrcs = getResizedSrcs;