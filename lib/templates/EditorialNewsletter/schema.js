"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Paragraph = _interopRequireWildcard(require("./email/Paragraph"));

var _Headlines = require("./email/Headlines");

var _HR = _interopRequireDefault(require("./email/HR"));

var _Blockquote = _interopRequireWildcard(require("./email/Blockquote"));

var _List = _interopRequireWildcard(require("./email/List"));

var _utils = require("mdast-react-render/lib/utils");

var _Figure = require("../../components/Figure");

var _utils2 = require("../Article/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchLast = function matchLast(node, index, parent) {
  return index === parent.children.length - 1;
};

var createNewsletterSchema = function createNewsletterSchema() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      Container = _ref.Container,
      Cover = _ref.Cover,
      CoverImage = _ref.CoverImage,
      Center = _ref.Center,
      Figure = _ref.Figure,
      Image = _ref.Image,
      Caption = _ref.Caption,
      Byline = _ref.Byline,
      Sub = _ref.Sub,
      Sup = _ref.Sup;

  var globalInlines = [{
    matchMdast: (0, _utils.matchType)('break'),
    component: _Paragraph.Br,
    isVoid: true
  }, {
    matchMdast: (0, _utils.matchType)('sub'),
    component: Sub,
    editorModule: 'mark',
    editorOptions: {
      type: 'sub'
    }
  }, {
    matchMdast: (0, _utils.matchType)('sup'),
    component: Sup,
    editorModule: 'mark',
    editorOptions: {
      type: 'sup'
    }
  }];
  var link = {
    matchMdast: (0, _utils.matchType)('link'),
    component: _Paragraph.Link,
    props: function props(node) {
      return {
        title: node.title,
        href: node.url
      };
    },
    editorModule: 'link'
  };
  var paragraph = {
    matchMdast: _utils.matchParagraph,
    component: _Paragraph.default,
    editorModule: 'paragraph',
    editorOptions: {
      formatButtonText: 'Paragraph'
    },
    rules: globalInlines.concat([link, {
      matchMdast: (0, _utils.matchType)('strong'),
      component: _Paragraph.Emphasis,
      editorModule: 'mark',
      editorOptions: {
        type: 'STRONG',
        mdastType: 'strong'
      }
    }, {
      matchMdast: (0, _utils.matchType)('emphasis'),
      component: _Paragraph.Cursive,
      editorModule: 'mark',
      editorOptions: {
        type: 'EMPHASIS',
        mdastType: 'emphasis'
      }
    }])
  };
  var figureCaption = {
    matchMdast: _utils.matchParagraph,
    component: Caption,
    editorModule: 'figureCaption',
    editorOptions: {
      isStatic: true,
      afterType: 'PARAGRAPH',
      insertAfterType: 'CENTER',
      placeholder: 'Legende'
    },
    rules: [{
      matchMdast: (0, _utils.matchType)('emphasis'),
      component: Byline,
      editorModule: 'paragraph',
      editorOptions: {
        type: 'BYLINE',
        placeholder: 'Credit'
      }
    }, link].concat(globalInlines)
  };
  var figure = {
    matchMdast: _utils2.matchFigure,
    component: Figure,
    editorModule: 'figure',
    editorOptions: {
      pixelNote: 'Auflösung: min. 1200x (proportionaler Schnitt)',
      insertButtonText: 'Bild',
      insertTypes: ['PARAGRAPH'],
      type: 'CENTERFIGURE'
    },
    rules: [{
      matchMdast: _utils.matchImageParagraph,
      component: Image,
      props: function props(node, index, parent) {
        var src = (0, _utils2.extractImage)(node);
        var displayWidth = 600;
        return _objectSpread({}, _Figure.FigureImage.utils.getResizedSrcs(src, displayWidth), {
          alt: node.children[0].alt
        });
      },
      editorModule: 'figureImage',
      isVoid: true
    }, figureCaption]
  };
  var cover = {
    matchMdast: function matchMdast(node, index, parent) {
      return (0, _utils2.matchFigure)(node) && index === 0;
    },
    component: Cover,
    editorModule: 'figure',
    editorOptions: {
      type: 'COVERFIGURE',
      afterType: 'PARAGRAPH',
      pixelNote: 'Auflösung: min. 2000x (proportionaler Schnitt)'
    },
    rules: [{
      matchMdast: _utils.matchImageParagraph,
      component: CoverImage,
      props: function props(node, index, parent) {
        var src = (0, _utils2.extractImage)(node);
        var displayWidth = 1280;
        var setMaxWidth = parent.data.size !== undefined;
        return _objectSpread({}, _Figure.FigureImage.utils.getResizedSrcs(src, displayWidth, setMaxWidth), {
          alt: node.children[0].alt
        });
      },
      editorModule: 'figureImage',
      editorOptions: {
        type: 'COVERFIGUREIMAGE'
      },
      isVoid: true
    }, figureCaption]
  };
  return {
    emailTemplate: 'newsletter-editorial',
    repoPrefix: 'newsletter-editorial-',
    getPath: _utils2.getDatePath,
    rules: [{
      matchMdast: (0, _utils.matchType)('root'),
      component: Container,
      editorModule: 'documentPlain',
      props: function props(node) {
        return {
          meta: node.meta || {}
        };
      },
      rules: [{
        matchMdast: function matchMdast() {
          return false;
        },
        editorModule: 'meta',
        editorOptions: {
          customFields: [{
            label: 'Format',
            key: 'format',
            ref: 'repo'
          }],
          additionalFields: ['emailSubject']
        }
      }, cover, {
        matchMdast: (0, _utils.matchZone)('CENTER'),
        component: Center,
        editorModule: 'center',
        props: function props(mdast, index, parent, _ref2) {
          var ancestors = _ref2.ancestors;
          return {
            meta: ancestors[ancestors.length - 1].meta || {}
          };
        },
        rules: [paragraph, figure, {
          matchMdast: (0, _utils.matchHeading)(2),
          component: _Headlines.H2,
          editorModule: 'headline',
          editorOptions: {
            type: 'h2',
            depth: 2,
            formatButtonText: 'Zwischentitel'
          }
        }, {
          matchMdast: (0, _utils.matchZone)('QUOTE'),
          component: _Blockquote.default,
          editorModule: 'quote',
          editorOptions: {
            insertButtonText: 'Zitat'
          },
          rules: [{
            matchMdast: function matchMdast(node, index, parent) {
              return (0, _utils.matchParagraph)(node) && (index === 0 || !matchLast(node, index, parent));
            },
            component: _Blockquote.BlockquoteText,
            editorModule: 'paragraph',
            editorOptions: {
              type: 'QUOTEP',
              placeholder: 'Zitat'
            },
            rules: [paragraph]
          }, {
            matchMdast: function matchMdast(node, index, parent) {
              return (0, _utils.matchParagraph)(node) && matchLast(node, index, parent);
            },
            component: _Blockquote.BlockquoteSource,
            editorModule: 'paragraph',
            editorOptions: {
              type: 'QUOTECITE',
              placeholder: 'Quellenangabe / Autor'
            },
            rules: [paragraph]
          }]
        }, {
          matchMdast: (0, _utils.matchType)('list'),
          component: _List.default,
          props: function props(node) {
            return {
              data: {
                ordered: node.ordered,
                start: node.start
              }
            };
          },
          editorModule: 'list',
          rules: [{
            matchMdast: (0, _utils.matchType)('listItem'),
            component: _List.ListItem,
            editorModule: 'listItem',
            rules: [paragraph]
          }]
        }, {
          matchMdast: (0, _utils.matchType)('thematicBreak'),
          component: _HR.default,
          editorModule: 'line',
          editorOptions: {
            insertButtonText: 'Trennlinie',
            insertTypes: ['PARAGRAPH']
          },
          isVoid: true
        }]
      }, {
        matchMdast: function matchMdast() {
          return false;
        },
        editorModule: 'specialchars'
      }]
    }]
  };
};

var _default = createNewsletterSchema;
exports.default = _default;