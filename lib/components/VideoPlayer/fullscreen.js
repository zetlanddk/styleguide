"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupFullscreen = void 0;
var apiSurfaces = [// Canonical non-prefixed API
['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // contemporary webkit
['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // legacy webkit (Safari 5.1)
['webkitRequestFullScreen', 'webkitCancelFullScreen', // That's why we check apiSurface[1] for feature detection below.
'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], // IE11
// https://msdn.microsoft.com/en-us/library/dn265028(v=vs.85).aspx
['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];

var getFullscreenApi = function getFullscreenApi() {
  var api = {};
  var canonicalSurface = apiSurfaces[0];
  apiSurfaces.some(function (apiSurface) {
    if (!document[apiSurface[1]]) {
      return false;
    }

    apiSurface.forEach(function (method, index) {
      api[canonicalSurface[index]] = apiSurface[index];
    });
    return true;
  });
  return api.requestFullscreen ? api : null;
};

var setupFullscreen = function setupFullscreen(_ref) {
  var onChange = _ref.onChange,
      video = _ref.video;

  if (typeof document === 'undefined') {
    return;
  }

  var api = getFullscreenApi();

  if (!api) {
    if (video && video.webkitEnterFullscreen) {
      // iOS provides fullscreen on video element directly instead of document.
      return {
        request: function request(video) {
          video.webkitEnterFullscreen();
        },
        element: function element() {
          return video;
        },
        dispose: function dispose() {}
      };
    }

    return;
  }

  document.addEventListener(api.fullscreenchange, onChange, false);
  return {
    request: function request(elem) {
      var subject = elem || document.documentElement;
      subject[api.requestFullscreen]();
    },
    element: function element() {
      return document[api.fullscreenElement];
    },
    dispose: function dispose() {
      document.removeEventListener(api.fullscreenchange, onChange, false);
    }
  };
};

exports.setupFullscreen = setupFullscreen;