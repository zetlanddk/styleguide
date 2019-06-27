"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CommentBodyBlockCode", {
  enumerable: true,
  get: function get() {
    return _BlockCode.default;
  }
});
Object.defineProperty(exports, "CommentBodyBlockQuote", {
  enumerable: true,
  get: function get() {
    return _Blockquote.default;
  }
});
Object.defineProperty(exports, "CommentBodyBlockQuoteNested", {
  enumerable: true,
  get: function get() {
    return _Blockquote.BlockQuoteNested;
  }
});
Object.defineProperty(exports, "CommentBodyBlockQuoteParagraph", {
  enumerable: true,
  get: function get() {
    return _Blockquote.BlockQuoteParagraph;
  }
});
Object.defineProperty(exports, "CommentBodyContainer", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "CommentBodyList", {
  enumerable: true,
  get: function get() {
    return _List.default;
  }
});
Object.defineProperty(exports, "CommentBodyListItem", {
  enumerable: true,
  get: function get() {
    return _List.ListItem;
  }
});
Object.defineProperty(exports, "CommentBodyParagraph", {
  enumerable: true,
  get: function get() {
    return _Paragraph.default;
  }
});
Object.defineProperty(exports, "CommentBodyCode", {
  enumerable: true,
  get: function get() {
    return _Paragraph.Code;
  }
});
Object.defineProperty(exports, "CommentBodyDefinition", {
  enumerable: true,
  get: function get() {
    return _Paragraph.Definition;
  }
});
Object.defineProperty(exports, "CommentBodyHeading", {
  enumerable: true,
  get: function get() {
    return _Paragraph.Heading;
  }
});

var _BlockCode = _interopRequireDefault(require("./BlockCode"));

var _Blockquote = _interopRequireWildcard(require("./Blockquote"));

var _Container = _interopRequireDefault(require("./Container"));

var _List = _interopRequireWildcard(require("./List"));

var _Paragraph = _interopRequireWildcard(require("./Paragraph"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }