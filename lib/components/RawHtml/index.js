"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _glamor = require("glamor");

var _styles = require("../Typography/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  default: (0, _glamor.css)({
    '& a': _objectSpread({}, _styles.link),
    '& ul, & ol': {
      overflow: 'hidden'
    }
  })
};

var RawHtml = function RawHtml(_ref) {
  var type = _ref.type,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML;
  return (0, _react.createElement)(type, _objectSpread({}, styles.default, {
    dangerouslySetInnerHTML: dangerouslySetInnerHTML
  }));
};

RawHtml.defaultProps = {
  type: 'span'
};
RawHtml.propTypes = {
  type: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func])
};
var _default = RawHtml;
exports.default = _default;