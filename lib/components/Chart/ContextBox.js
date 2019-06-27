"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ContextBoxValue = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = require("../Typography");

var _styles = require("../Typography/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var boxStyle = (0, _glamor.css)(_objectSpread({
  position: 'absolute',
  backgroundColor: '#fff',
  color: _colors.default.text,
  boxShadow: '0 2px 8px rgba(0,0,0,.2)'
}, _styles.sansSerifRegular14, {
  lineHeight: '1.1em',
  padding: '12px 16px',
  pointerEvents: 'none',
  zIndex: 10,
  minWidth: 200
}));
var boxPosition = {
  top: {
    center: (0, _glamor.css)({
      transform: 'translateX(-50%) translateY(-100%)'
    }),
    left: (0, _glamor.css)({
      transform: 'translateX(-15%) translateY(-100%)'
    }),
    right: (0, _glamor.css)({
      transform: 'translateX(-85%) translateY(-100%)'
    })
  },
  below: {
    center: (0, _glamor.css)({
      transform: 'translateX(-50%) translateY(0)'
    }),
    left: (0, _glamor.css)({
      transform: 'translateX(-15%) translateY(0)'
    }),
    right: (0, _glamor.css)({
      transform: 'translateX(-85%) translateY(0)'
    })
  }
};
var notchStyle = (0, _glamor.css)({
  position: 'absolute',
  width: 0,
  height: 0,
  borderStyle: 'solid',
  borderWidth: '8px 7.5px 0 7.5px',
  borderColor: "#fff transparent transparent transparent"
});
var notchPosition = {
  top: {
    center: (0, _glamor.css)({
      bottom: -8,
      transform: 'translateX(-50%)',
      left: '50%'
    }),
    left: (0, _glamor.css)({
      bottom: -8,
      transform: 'translateX(-50%)',
      left: '15%'
    }),
    right: (0, _glamor.css)({
      bottom: -8,
      transform: 'translateX(50%)',
      right: '15%'
    })
  },
  below: {
    center: (0, _glamor.css)({
      top: -8,
      transform: 'translateX(-50%) rotate(180deg)',
      left: '50%'
    }),
    left: (0, _glamor.css)({
      top: -8,
      transform: 'translateX(-50%) rotate(180deg)',
      left: '15%'
    }),
    right: (0, _glamor.css)({
      top: -8,
      transform: 'translateX(50%) rotate(180deg)',
      right: '15%'
    })
  }
};
var labeledValueStyle = (0, _glamor.css)({
  fontSize: 14,
  lineHeight: '20px',
  borderBottom: "1px solid ".concat(_colors.default.divider),
  paddingBottom: 10,
  marginBottom: 5,
  color: '#000',
  ':last-child': {
    borderBottom: 'none',
    paddingBottom: 5,
    marginBottom: 0
  }
});

var ContextBoxValue = function ContextBoxValue(_ref) {
  var label = _ref.label,
      children = _ref.children;

  if (!children) {
    return null;
  }

  return _react.default.createElement("div", labeledValueStyle, !!label && _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Typography.Interaction.Emphasis, null, label), _react.default.createElement("br", null)), children);
};

exports.ContextBoxValue = ContextBoxValue;
ContextBoxValue.propTypes = {
  label: _propTypes.default.string,
  children: _propTypes.default.node
};

var ContextBox = function ContextBox(_ref2) {
  var yOrientation = _ref2.orientation,
      x = _ref2.x,
      y = _ref2.y,
      contextWidth = _ref2.contextWidth,
      children = _ref2.children;
  var maxWidth = Math.min(400, contextWidth);
  var xOrientation = 'center';

  if (contextWidth - x < maxWidth / 2) {
    xOrientation = 'right';
  } else if (x < maxWidth / 2) {
    xOrientation = 'left';
  }

  return _react.default.createElement("div", _extends({}, boxStyle, {
    className: boxPosition[yOrientation][xOrientation],
    style: {
      left: x,
      top: y,
      maxWidth: maxWidth
    }
  }), _react.default.createElement("div", null, children), _react.default.createElement("div", _extends({}, notchStyle, {
    className: notchPosition[yOrientation][xOrientation]
  })));
};

ContextBox.defaultProps = {
  orientation: 'top'
};
ContextBox.propTypes = {
  x: _propTypes.default.number.isRequired,
  y: _propTypes.default.number.isRequired,
  contextWidth: _propTypes.default.number.isRequired,
  orientation: _propTypes.default.oneOf(['top', 'below']).isRequired,
  children: _propTypes.default.node
};
var _default = ContextBox;
exports.default = _default;