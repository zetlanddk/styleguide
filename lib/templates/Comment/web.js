"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = _interopRequireDefault(require("./schema"));

var _web = require("../../components/CommentBody/web");

var Editorial = _interopRequireWildcard(require("../../components/Typography/Editorial"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var createSchema = function createSchema() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      args = _extends({}, _ref);

  return (0, _schema.default)(_objectSpread({
    BlockCode: _web.CommentBodyBlockCode,
    BlockQuote: _web.CommentBodyBlockQuote,
    BlockQuoteNested: _web.CommentBodyBlockQuoteNested,
    BlockQuoteParagraph: _web.CommentBodyBlockQuoteParagraph,
    Code: _web.CommentBodyCode,
    Container: _web.CommentBodyContainer,
    Cursive: Editorial.Cursive,
    Definition: _web.CommentBodyDefinition,
    Emphasis: Editorial.Emphasis,
    Heading: _web.CommentBodyHeading,
    Link: Editorial.A,
    List: _web.CommentBodyList,
    ListItem: _web.CommentBodyListItem,
    Paragraph: _web.CommentBodyParagraph,
    StrikeThrough: Editorial.StrikeThrough
  }, args));
};

var _default = createSchema;
exports.default = _default;