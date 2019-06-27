"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _mediaQueries = require("../../../theme/mediaQueries");

var _css;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  pre: (0, _glamor.css)({
    margin: '20px auto',
    whiteSpace: 'pre-wrap'
  }),
  code: (0, _glamor.css)((_css = {
    backgroundColor: '#f7f7f7',
    display: 'block',
    fontSize: '90%',
    margin: 0,
    padding: '0 15px 12px 15px'
  }, _defineProperty(_css, _mediaQueries.mUp, {
    padding: '0 25px 20px 25px',
    '&:first-child': {
      paddingTop: '20px'
    }
  }), _defineProperty(_css, '&:first-child', {
    paddingTop: '12px'
  }), _css))
};

var _default = function _default(_ref) {
  var children = _ref.children;
  return _react.default.createElement("pre", styles.pre, _react.default.createElement("code", styles.code, children));
};

exports.default = _default;