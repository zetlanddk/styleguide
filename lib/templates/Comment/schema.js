"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("mdast-react-render/lib/utils");

var _Typography = require("../../components/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var createCommentSchema = function createCommentSchema() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      BlockCode = _ref.BlockCode,
      BlockQuote = _ref.BlockQuote,
      BlockQuoteNested = _ref.BlockQuoteNested,
      BlockQuoteParagraph = _ref.BlockQuoteParagraph,
      Code = _ref.Code,
      Container = _ref.Container,
      Cursive = _ref.Cursive,
      Definition = _ref.Definition,
      Emphasis = _ref.Emphasis,
      Heading = _ref.Heading,
      Link = _ref.Link,
      List = _ref.List,
      ListItem = _ref.ListItem,
      Paragraph = _ref.Paragraph,
      StrikeThrough = _ref.StrikeThrough;

  var ellipsizeHref = function ellipsizeHref() {
    var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (href.length > 50) {
      return href.substr(0, 35) + '…' + href.substr(href.length - 10, href.length);
    }

    return href;
  };

  var screenHref = function screenHref(href) {
    if (href.match(/^(https?:|\/|#)/)) {
      return {
        safe: href
      };
    }

    return {
      unknown: href
    };
  };

  var SafeA = function SafeA(_ref2) {
    var children = _ref2.children,
        text = _ref2.text,
        href = _ref2.href,
        props = _objectWithoutProperties(_ref2, ["children", "text", "href"]);

    var screenedHref = screenHref(href);
    var ellipsizedHref = children && children[0] === href && ellipsizeHref(screenedHref.safe);
    return _react.default.createElement(Link, _extends({}, props, {
      href: screenedHref.safe
    }), text || ellipsizedHref || children, screenedHref.unknown && " [".concat(screenedHref.unknown, "]"));
  };

  var globalInlines = [{
    matchMdast: (0, _utils.matchType)('break'),
    component: function component() {
      return _react.default.createElement("br", null);
    }
  }, {
    matchMdast: _utils.matchImage,
    props: function props(node) {
      return {
        title: node.title,
        text: node.alt,
        href: node.url
      };
    },
    component: SafeA
  }, {
    matchMdast: (0, _utils.matchType)('link'),
    props: function props(node) {
      return {
        title: node.title,
        href: node.url
      };
    },
    component: SafeA
  }, // Make sure text like [...] is preserved.
  {
    matchMdast: (0, _utils.matchType)('linkReference'),
    props: function props(node) {
      return {
        identifier: node.identifier,
        url: node.url,
        referenceType: node.referenceType
      };
    },
    component: function component(_ref3) {
      var children = _ref3.children,
          identifier = _ref3.identifier,
          url = _ref3.url,
          referenceType = _ref3.referenceType;

      if (referenceType === 'shortcut') {
        return _react.default.createElement("span", null, "[", identifier, "]");
      } else {
        return _react.default.createElement("span", null, children, " [", identifier, "]");
      }
    }
  }, {
    matchMdast: (0, _utils.matchType)('imageReference'),
    props: function props(node) {
      return {
        identifier: node.identifier,
        alt: node.alt
      };
    },
    component: function component(_ref4) {
      var identifier = _ref4.identifier,
          alt = _ref4.alt;
      return _react.default.createElement("span", null, alt, " [", identifier, "]");
    }
  }, {
    matchMdast: (0, _utils.matchType)('emphasis'),
    component: Cursive
  }, {
    matchMdast: (0, _utils.matchType)('strong'),
    component: Emphasis
  }, {
    matchMdast: (0, _utils.matchType)('delete'),
    component: StrikeThrough
  }, {
    matchMdast: (0, _utils.matchType)('inlineCode'),
    props: function props(node) {
      return {
        value: node.value
      };
    },
    component: function component(_ref5) {
      var value = _ref5.value,
          props = _objectWithoutProperties(_ref5, ["value"]);

      return _react.default.createElement(Code, props, value);
    }
  }, {
    matchMdast: (0, _utils.matchType)('html'),
    props: function props(node) {
      return {
        value: node.value
      };
    },
    component: function component(_ref6) {
      var value = _ref6.value;
      return _react.default.createElement("span", null, value);
    }
  }];
  var heading = {
    matchMdast: (0, _utils.matchType)('heading'),
    component: Heading
  };
  var paragraph = {
    matchMdast: _utils.matchParagraph,
    component: Paragraph,
    rules: globalInlines.concat()
  };
  var blockCode = {
    matchMdast: (0, _utils.matchType)('code'),
    props: function props(node) {
      return {
        value: node.value
      };
    },
    component: function component(_ref7) {
      var value = _ref7.value;
      return _react.default.createElement(BlockCode, null, value);
    }
  };
  var list = {
    matchMdast: (0, _utils.matchType)('list'),
    component: List,
    props: function props(node) {
      return {
        data: {
          ordered: node.ordered,
          start: node.start,
          compact: !node.loose
        }
      };
    },
    rules: [{
      matchMdast: (0, _utils.matchType)('listItem'),
      component: ListItem,
      rules: [paragraph]
    }]
  };
  var thematicBreak = {
    matchMdast: (0, _utils.matchType)('thematicBreak'),
    component: _Typography.HR
  };
  var blockLevelHtml = {
    matchMdast: (0, _utils.matchType)('html'),
    props: function props(node) {
      return {
        value: node.value
      };
    },
    component: function component(_ref8) {
      var value = _ref8.value;
      return _react.default.createElement(Paragraph, null, value);
    }
  };
  var definition = {
    matchMdast: (0, _utils.matchType)('definition'),
    props: function props(node) {
      return {
        identifier: node.identifier,
        url: node.url
      };
    },
    component: function component(_ref9) {
      var identifier = _ref9.identifier,
          url = _ref9.url;
      return _react.default.createElement(Definition, null, "[", identifier, "] ", _react.default.createElement(SafeA, {
        href: url
      }, url));
    }
  };
  var blockquoteParagraph = {
    matchMdast: _utils.matchParagraph,
    component: BlockQuoteParagraph,
    rules: globalInlines.concat()
  };
  var blockQuoteNested = {
    matchMdast: (0, _utils.matchType)('blockquote'),
    component: BlockQuoteNested
  };
  var blockQuote = {
    matchMdast: (0, _utils.matchType)('blockquote'),
    component: BlockQuote,
    rules: [blockquoteParagraph, heading, blockQuoteNested, blockCode, list, thematicBreak, blockLevelHtml, definition]
  };
  return {
    rules: [{
      matchMdast: (0, _utils.matchType)('root'),
      component: Container,
      rules: [heading, paragraph, blockQuote, blockCode, list, thematicBreak, blockLevelHtml, definition]
    }]
  };
};

var _default = createCommentSchema;
exports.default = _default;