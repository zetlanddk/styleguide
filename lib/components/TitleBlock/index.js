"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Center = require("../Center");

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: (0, _glamor.css)(_defineProperty({
    maxWidth: _Center.MAX_WIDTH + _Center.PADDING * 2,
    margin: '0 auto 40px auto',
    paddingTop: 30,
    paddingLeft: _Center.PADDING,
    paddingRight: _Center.PADDING
  }, _mediaQueries.mUp, {
    paddingTop: 40,
    margin: '0 auto 70px auto'
  }))
};

var TitleBlock = function TitleBlock(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      center = _ref.center;
  return _react.default.createElement("section", _extends({}, attributes, styles.container, {
    style: {
      textAlign: center ? 'center' : undefined,
      maxWidth: center ? _Center.MAX_WIDTH + _Center.BREAKOUT + _Center.PADDING : undefined
    }
  }), children);
};

TitleBlock.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  center: _propTypes.default.bool
};
var _default = TitleBlock;
exports.default = _default;