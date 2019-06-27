"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _List.List;
  }
});
Object.defineProperty(exports, "UL", {
  enumerable: true,
  get: function get() {
    return _List.UnorderedList;
  }
});
Object.defineProperty(exports, "OL", {
  enumerable: true,
  get: function get() {
    return _List.OrderedList;
  }
});
Object.defineProperty(exports, "LI", {
  enumerable: true,
  get: function get() {
    return _List.ListItem;
  }
});
exports.Note = exports.A = exports.link = exports.StrikeThrough = exports.Cursive = exports.Emphasis = exports.Answer = exports.Question = exports.P = exports.Format = exports.Credit = exports.Subject = exports.Lead = exports.Subhead = exports.Headline = void 0;

var _react = _interopRequireDefault(require("react"));

var styles = _interopRequireWildcard(require("./styles"));

var _glamor = require("glamor");

var _mediaQueries = require("../../theme/mediaQueries");

var _fonts = require("../../theme/fonts");

var _styleMixins = require("../../lib/styleMixins");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _List = require("../List");

var _objectSpread2, _objectSpread3, _objectSpread4, _objectSpread6, _objectSpread8, _objectSpread9;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headline = (0, _glamor.css)(_objectSpread({}, styles.serifTitle30, (_objectSpread2 = {
  margin: '0 0 12px 0'
}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, styles.serifTitle58, {
  '[data-type*="meta"] > &': _objectSpread({}, styles.sansSerifMedium58),
  margin: '0 0 12px 0'
})), _defineProperty(_objectSpread2, "color", _colors.default.text), _defineProperty(_objectSpread2, ':first-child', {
  marginTop: 0
}), _defineProperty(_objectSpread2, ':last-child', {
  marginBottom: 0
}), _objectSpread2)));

var Headline = function Headline(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      props = _objectWithoutProperties(_ref, ["children", "attributes"]);

  return _react.default.createElement("h1", _extends({}, attributes, props, headline), children);
};

exports.Headline = Headline;
var subhead = (0, _glamor.css)(_objectSpread({}, styles.serifBold19, (_objectSpread3 = {
  margin: '36px 0 8px 0'
}, _defineProperty(_objectSpread3, _mediaQueries.mUp, _objectSpread({}, styles.serifBold24, {
  margin: '46px 0 12px 0'
})), _defineProperty(_objectSpread3, "color", _colors.default.text), _objectSpread3)));

var Subhead = function Subhead(_ref2) {
  var children = _ref2.children,
      attributes = _ref2.attributes,
      props = _objectWithoutProperties(_ref2, ["children", "attributes"]);

  return _react.default.createElement("h2", _extends({}, attributes, props, subhead), children);
};

exports.Subhead = Subhead;
var lead = (0, _glamor.css)(_objectSpread({}, styles.serifRegular19, (_objectSpread4 = {
  display: 'inline',
  margin: '0 0 10px 0'
}, _defineProperty(_objectSpread4, _mediaQueries.mUp, _objectSpread({}, styles.serifRegular23, {
  margin: '0 0 20px 0'
})), _defineProperty(_objectSpread4, "color", _colors.default.text), _objectSpread4)));

var Lead = function Lead(_ref3) {
  var children = _ref3.children,
      attributes = _ref3.attributes,
      props = _objectWithoutProperties(_ref3, ["children", "attributes"]);

  return _react.default.createElement("p", _extends({}, attributes, props, lead), children);
};

exports.Lead = Lead;

var subjectStyle = _objectSpread({
  color: '#8c8c8c',
  display: 'inline',
  margin: 0
}, styles.sansSerifRegular19, _defineProperty({}, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifRegular23, {
  lineHeight: '27px'
})));

var subject = (0, _glamor.css)(_objectSpread({}, subjectStyle));
var subjectWithChildren = (0, _glamor.css)(_objectSpread({}, subjectStyle, {
  paddingRight: '.2em',
  '&::after': {
    content: " "
  }
}));

var Subject = function Subject(_ref4) {
  var children = _ref4.children,
      attributes = _ref4.attributes,
      props = _objectWithoutProperties(_ref4, ["children", "attributes"]);

  var style = children && children.length > 0 ? subjectWithChildren : subject;
  return _react.default.createElement("h2", _extends({}, attributes, props, style), children);
};

exports.Subject = Subject;
var credit = (0, _glamor.css)(_objectSpread({
  margin: '10px 0 0 0'
}, styles.sansSerifRegular14, (_objectSpread6 = {}, _defineProperty(_objectSpread6, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifRegular15, {
  margin: '20px 0 0 0'
})), _defineProperty(_objectSpread6, "color", _colors.default.text), _objectSpread6)));

var Credit = function Credit(_ref5) {
  var children = _ref5.children,
      attributes = _ref5.attributes,
      props = _objectWithoutProperties(_ref5, ["children", "attributes"]);

  return _react.default.createElement("p", _extends({}, attributes, props, credit), children);
};

exports.Credit = Credit;
var format = (0, _glamor.css)(_objectSpread({}, styles.sansSerifMedium16, _defineProperty({
  margin: '0 0 18px 0'
}, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifMedium20, {
  margin: '0 0 28px 0'
}))));

var Format = function Format(_ref6) {
  var children = _ref6.children,
      color = _ref6.color,
      attributes = _ref6.attributes,
      props = _objectWithoutProperties(_ref6, ["children", "color", "attributes"]);

  return _react.default.createElement("p", _extends({}, attributes, props, format, {
    style: {
      color: color
    }
  }), children);
};

exports.Format = Format;
var paragraph = (0, _glamor.css)(_objectSpread({
  color: _colors.default.text,
  margin: '22px 0 22px 0'
}, styles.serifRegular17, (_objectSpread8 = {}, _defineProperty(_objectSpread8, _mediaQueries.mUp, _objectSpread({}, styles.serifRegular19, {
  margin: '30px 0 30px 0'
})), _defineProperty(_objectSpread8, ':first-child', {
  marginTop: 0
}), _defineProperty(_objectSpread8, ':last-child', {
  marginBottom: 0
}), _defineProperty(_objectSpread8, 'h2 + &', {
  marginTop: 0
}), _objectSpread8)));

var P = function P(_ref7) {
  var children = _ref7.children,
      attributes = _ref7.attributes,
      props = _objectWithoutProperties(_ref7, ["children", "attributes"]);

  return _react.default.createElement("p", _extends({}, attributes, props, paragraph), children);
};

exports.P = P;
var question = (0, _glamor.css)(_objectSpread({}, styles.serifBold17, (_objectSpread9 = {
  margin: '36px 0 -14px 0'
}, _defineProperty(_objectSpread9, _mediaQueries.mUp, _objectSpread({}, styles.serifBold19, {
  lineHeight: '30px',
  margin: '46px 0 -18px 0'
})), _defineProperty(_objectSpread9, "color", _colors.default.text), _objectSpread9)));

var Question = function Question(_ref8) {
  var children = _ref8.children,
      attributes = _ref8.attributes,
      props = _objectWithoutProperties(_ref8, ["children", "attributes"]);

  return _react.default.createElement("p", _extends({}, attributes, props, question), children);
};

exports.Question = Question;
var Answer = P;
exports.Answer = Answer;
var emphasis = (0, _glamor.css)({
  fontWeight: 'normal',
  fontFamily: _fonts.fontFamilies.serifBold
});

var Emphasis = function Emphasis(_ref9) {
  var children = _ref9.children,
      attributes = _ref9.attributes,
      props = _objectWithoutProperties(_ref9, ["children", "attributes"]);

  return _react.default.createElement("strong", _extends({}, attributes, props, emphasis), children);
};

exports.Emphasis = Emphasis;
var cursive = (0, _glamor.css)({
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontFamily: _fonts.fontFamilies.serifItalic
});

var Cursive = function Cursive(_ref10) {
  var children = _ref10.children,
      attributes = _ref10.attributes,
      props = _objectWithoutProperties(_ref10, ["children", "attributes"]);

  return _react.default.createElement("em", _extends({}, attributes, props, cursive), children);
};

exports.Cursive = Cursive;
var strikeThrough = (0, _glamor.css)({
  textDecoration: 'line-through'
});

var StrikeThrough = function StrikeThrough(_ref11) {
  var children = _ref11.children,
      attributes = _ref11.attributes,
      props = _objectWithoutProperties(_ref11, ["children", "attributes"]);

  return _react.default.createElement("span", _extends({}, attributes, props, strikeThrough), children);
};

exports.StrikeThrough = StrikeThrough;
var link = (0, _glamor.css)(_objectSpread({}, _styleMixins.underline, {
  cursor: 'pointer',
  color: _colors.default.text,
  ':hover': {
    color: _colors.default.lightText
  }
}));
exports.link = link;

var A = function A(_ref12) {
  var children = _ref12.children,
      attributes = _ref12.attributes,
      props = _objectWithoutProperties(_ref12, ["children", "attributes"]);

  return _react.default.createElement("a", _extends({}, attributes, props, link), children);
};

exports.A = A;
var note = (0, _glamor.css)(_objectSpread({}, styles.sansSerifRegular12, _defineProperty({
  margin: '22px 0'
}, _mediaQueries.mUp, _objectSpread({}, styles.sansSerifRegular15, {
  margin: '30px 0'
}))));

var Note = function Note(_ref13) {
  var children = _ref13.children,
      attributes = _ref13.attributes,
      props = _objectWithoutProperties(_ref13, ["children", "attributes"]);

  return _react.default.createElement("p", _extends({}, attributes, props, note), children);
};

exports.Note = Note;