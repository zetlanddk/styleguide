"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.ListItem = exports.OrderedList = exports.UnorderedList = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../Typography/styles");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _objectSpread3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WIDTH = 22;
var MARGIN = 8;
var styles = {
  list: (0, _glamor.css)({
    marginLeft: 0,
    paddingLeft: 0,
    listStyle: 'none',
    'li &': _defineProperty({}, _mediaQueries.mUp, {
      marginLeft: "".concat(WIDTH, "px")
    })
  }),
  unorderedBefore: (0, _glamor.css)({
    '& > li:before': _defineProperty({
      content: '–',
      position: 'absolute',
      left: 0
    }, _mediaQueries.mUp, {
      left: "-".concat(WIDTH, "px")
    })
  }),
  orderedBefore: (0, _glamor.css)({
    '& > li:before': _defineProperty({
      content: 'counter(start) ". "',
      counterIncrement: 'start',
      position: 'absolute',
      left: 0
    }, _mediaQueries.mUp, {
      left: "-".concat(WIDTH + MARGIN, "px"),
      width: "".concat(WIDTH, "px"),
      textAlign: 'right'
    })
  }),
  li: (0, _glamor.css)(_objectSpread({
    color: _colors.default.text,
    paddingLeft: "".concat(WIDTH, "px"),
    position: 'relative'
  }, _styles.serifRegular17, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _mediaQueries.mUp, _objectSpread({}, _styles.serifRegular19, {
    paddingLeft: 0
  })), _defineProperty(_objectSpread3, '& p:last-child', {
    marginBottom: 0
  }), _defineProperty(_objectSpread3, 'li &', _objectSpread({}, _styles.serifRegular14, _defineProperty({
    lineHeight: '22px',
    margin: '12px 0'
  }, _mediaQueries.mUp, _objectSpread({}, _styles.serifRegular17, {
    lineHeight: '28px',
    margin: '14px 0'
  })))), _defineProperty(_objectSpread3, 'ol > &', _defineProperty({
    paddingLeft: "".concat(WIDTH + MARGIN, "px")
  }, _mediaQueries.mUp, {
    paddingLeft: 0
  })), _objectSpread3)))
};
styles.listCompact = (0, _glamor.merge)(styles.list, {
  '& li, & li p': {
    margin: 0
  }
});

var UnorderedList = function UnorderedList(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      compact = _ref.compact;
  return _react.default.createElement("ul", _extends({}, attributes, (0, _glamor.css)(compact ? styles.listCompact : styles.list, styles.unorderedBefore)), children);
};

exports.UnorderedList = UnorderedList;
UnorderedList.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  compact: _propTypes.default.bool
};

var OrderedList = function OrderedList(_ref2) {
  var children = _ref2.children,
      attributes = _ref2.attributes,
      start = _ref2.start,
      compact = _ref2.compact;
  return _react.default.createElement("ol", _extends({
    start: start
  }, attributes, (0, _glamor.css)(compact ? styles.listCompact : styles.list, styles.orderedBefore, {
    counterReset: "start ".concat(start - 1)
  })), children);
};

exports.OrderedList = OrderedList;
OrderedList.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  start: _propTypes.default.number,
  compact: _propTypes.default.bool
};
OrderedList.defaultProps = {
  start: 1
};

var ListItem = function ListItem(_ref3) {
  var children = _ref3.children,
      _ref3$attributes = _ref3.attributes,
      attributes = _ref3$attributes === void 0 ? {} : _ref3$attributes,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? {} : _ref3$style;
  return _react.default.createElement("li", _extends({}, styles.li, attributes, {
    style: style
  }), children);
};

exports.ListItem = ListItem;
ListItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  attributes: _propTypes.default.object,
  style: _propTypes.default.object
};

var List = function List(_ref4) {
  var children = _ref4.children,
      data = _ref4.data,
      _ref4$attributes = _ref4.attributes,
      attributes = _ref4$attributes === void 0 ? {} : _ref4$attributes;
  return data.ordered ? _react.default.createElement(OrderedList, _extends({
    start: data.start
  }, attributes), children) : _react.default.createElement(UnorderedList, null, children);
};

exports.List = List;