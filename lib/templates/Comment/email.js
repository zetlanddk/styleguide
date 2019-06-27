"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = _interopRequireDefault(require("./schema"));

var _email = require("../../components/CommentBody/email");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var createSchema = function createSchema() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      args = _extends({}, _ref);

  return (0, _schema.default)(_objectSpread({
    BlockCode: _email.BlockCode,
    BlockQuote: _email.BlockQuote,
    BlockQuoteNested: _email.BlockQuoteNested,
    BlockQuoteParagraph: _email.BlockQuoteParagraph,
    Code: _email.Code,
    Container: _email.Container,
    Cursive: _email.Cursive,
    Definition: _email.Definition,
    Emphasis: _email.Emphasis,
    Heading: _email.Heading,
    Link: _email.Link,
    List: _email.List,
    ListItem: _email.ListItem,
    Paragraph: _email.Paragraph,
    StrikeThrough: _email.StrikeThrough
  }, args));
};

var _default = createSchema;
exports.default = _default;