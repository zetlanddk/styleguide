"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fullscreen = _interopRequireDefault(require("react-icons/lib/md/fullscreen"));

var _fullscreenExit = _interopRequireDefault(require("react-icons/lib/md/fullscreen-exit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var size = _ref.size,
      fill = _ref.fill,
      off = _ref.off;

  if (off) {
    return _react.default.createElement(_fullscreen.default, {
      size: size,
      height: size,
      fill: fill,
      style: {
        verticalAlign: 'inherit'
      }
    });
  } else {
    return _react.default.createElement(_fullscreenExit.default, {
      size: size,
      height: size,
      fill: fill,
      style: {
        verticalAlign: 'inherit'
      }
    });
  }
};

Icon.defaultProps = {
  size: 24,
  fill: '#fff',
  off: true
};
var _default = Icon;
exports.default = _default;