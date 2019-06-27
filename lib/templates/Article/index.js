"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.COVER_TYPE = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("./Container"));

var _Center = _interopRequireDefault(require("../../components/Center"));

var _BlockQuote = require("../../components/BlockQuote");

var _TitleBlock = _interopRequireDefault(require("../../components/TitleBlock"));

var _Typography = require("../../components/Typography");

var Editorial = _interopRequireWildcard(require("../../components/Typography/Editorial"));

var Interaction = _interopRequireWildcard(require("../../components/Typography/Interaction"));

var Scribble = _interopRequireWildcard(require("../../components/Typography/Scribble"));

var _TeaserFeed = require("../../components/TeaserFeed");

var _IllustrationHtml = _interopRequireDefault(require("../../components/IllustrationHtml"));

var _Csv = _interopRequireDefault(require("../../components/Chart/Csv"));

var _Chart = require("../../components/Chart");

var _ErrorBoundary = _interopRequireDefault(require("../../components/ErrorBoundary"));

var _Figure = require("../../components/Figure");

var _PullQuote = require("../../components/PullQuote");

var _List = require("../../components/List");

var _InfoBox = require("../../components/InfoBox");

var _Social = require("../../components/Social");

var _Video = require("../../components/Video");

var _VideoPlayer = require("../../components/VideoPlayer");

var _AudioPlayer = require("../../components/AudioPlayer");

var _utils = require("mdast-react-render/lib/utils");

var _utils2 = require("./utils");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _teasers = _interopRequireDefault(require("./teasers"));

var _dynamicComponent = _interopRequireDefault(require("./dynamicComponent"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var link = {
  matchMdast: (0, _utils.matchType)('link'),
  props: function props(node) {
    return {
      title: node.title,
      href: node.url
    };
  },
  component: Editorial.A,
  editorModule: 'link',
  rules: _utils2.globalInlines
};
var editorialFormatting = [{
  matchMdast: (0, _utils.matchType)('strong'),
  component: Editorial.Emphasis,
  editorModule: 'mark',
  editorOptions: {
    type: 'STRONG',
    mdastType: 'strong'
  },
  rules: _utils2.globalInlines
}, {
  matchMdast: (0, _utils.matchType)('emphasis'),
  component: Editorial.Cursive,
  editorModule: 'mark',
  editorOptions: {
    type: 'EMPHASIS',
    mdastType: 'emphasis'
  },
  rules: _utils2.globalInlines
}];
var paragraph = {
  matchMdast: _utils.matchParagraph,
  component: Editorial.P,
  editorModule: 'paragraph',
  editorOptions: {
    formatButtonText: 'Paragraph'
  },
  rules: _toConsumableArray(_utils2.globalInlines).concat(editorialFormatting, [_objectSpread({}, link, {
    rules: _toConsumableArray(_utils2.globalInlines).concat(editorialFormatting)
  })])
};
var figureImage = {
  matchMdast: _utils.matchImageParagraph,
  component: _Figure.FigureImage,
  props: function props(node, index, parent, _ref) {
    var ancestors = _ref.ancestors;
    var src = (0, _utils2.extractImage)(node);
    var displayWidth = (0, _utils2.getDisplayWidth)(ancestors);
    var enableGallery = parent.data ? !parent.data.excludeFromGallery : true;
    return _objectSpread({}, _Figure.FigureImage.utils.getResizedSrcs(src, displayWidth), {
      alt: node.children[0].alt,
      enableGallery: enableGallery
    });
  },
  editorModule: 'figureImage',
  isVoid: true
};
var figureByLine = {
  matchMdast: (0, _utils.matchType)('emphasis'),
  component: _Figure.FigureByline,
  editorModule: 'paragraph',
  editorOptions: {
    type: 'BYLINE',
    placeholder: 'Credit'
  }
};
var figureCaption = {
  matchMdast: _utils.matchParagraph,
  component: _Figure.FigureCaption,
  editorModule: 'figureCaption',
  editorOptions: {
    isStatic: true,
    placeholder: 'Legende'
  },
  rules: [figureByLine, link].concat(_toConsumableArray(_utils2.globalInlines))
};
var figure = {
  matchMdast: _utils2.matchFigure,
  component: _Figure.Figure,
  props: function props(node) {
    return {
      size: node.data.size
    };
  },
  editorModule: 'figure',
  editorOptions: {
    pixelNote: 'Auflösung: min. 1200x, für E2E min. 2000x (proportionaler Schnitt)',
    sizes: [{
      label: 'Edge to Edge',
      props: {
        size: undefined
      },
      parent: {
        kinds: ['document', 'block'],
        types: ['CENTER']
      },
      unwrap: true
    }, {
      label: 'Gross',
      props: {
        size: 'breakout'
      },
      parent: {
        kinds: ['document', 'block'],
        types: ['CENTER']
      },
      wrap: 'CENTER'
    }, {
      label: 'Normal',
      props: {
        size: undefined
      },
      parent: {
        kinds: ['document', 'block'],
        types: ['CENTER']
      },
      wrap: 'CENTER'
    }]
  },
  rules: [figureImage, figureCaption]
};

var centerFigureCaption = _objectSpread({}, figureCaption, {
  editorOptions: _objectSpread({}, figureCaption.editorOptions, {
    type: 'CENTERFIGURECAPTION',
    afterType: 'PARAGRAPH',
    insertAfterType: 'CENTER'
  }),
  rules: [_objectSpread({}, figureByLine, {
    editorOptions: _objectSpread({}, figureByLine.editorOptions, {
      type: 'CENTERBYLINE'
    })
  }), link].concat(_toConsumableArray(_utils2.globalInlines))
});

var centerFigure = _objectSpread({}, figure, {
  editorOptions: _objectSpread({}, figure.editorOptions, {
    insertButtonText: 'Bild',
    insertTypes: ['PARAGRAPH'],
    type: 'CENTERFIGURE'
  }),
  rules: [figureImage, centerFigureCaption]
});

var interactionFormatting = [{
  matchMdast: (0, _utils.matchType)('strong'),
  component: Interaction.Emphasis,
  editorModule: 'mark',
  editorOptions: {
    type: 'STRONG',
    // ToDo: Change to INTERACTIONSTRONG (pending contextual editor UI)
    mdastType: 'strong'
  }
}, {
  matchMdast: (0, _utils.matchType)('emphasis'),
  component: Interaction.Cursive,
  editorModule: 'mark',
  editorOptions: {
    type: 'EMPHASIS',
    // ToDo: Change to INTERACTIONEMPHASIS (pending contextual editor UI)
    mdastType: 'emphasis'
  }
}];

var interactionParagraphRules = _toConsumableArray(_utils2.globalInlines).concat(interactionFormatting, [_objectSpread({}, link, {
  rules: _toConsumableArray(_utils2.globalInlines).concat(interactionFormatting)
})]);

var infoBox = {
  matchMdast: _utils2.matchInfoBox,
  component: _InfoBox.InfoBox,
  props: function props(node) {
    return {
      size: node.data.size,
      figureSize: node.children.find(_utils2.matchFigure) ? node.data.figureSize || _InfoBox.INFOBOX_DEFAULT_IMAGE_SIZE : undefined,
      figureFloat: node.data.figureFloat
    };
  },
  editorModule: 'infobox',
  editorOptions: {
    insertButtonText: 'Infobox',
    insertTypes: ['PARAGRAPH']
  },
  rules: [{
    matchMdast: (0, _utils.matchHeading)(3),
    component: _InfoBox.InfoBoxTitle,
    editorModule: 'headline',
    editorOptions: {
      type: 'INFOH',
      depth: 3,
      placeholder: 'Title',
      isStatic: true
    },
    rules: _utils2.globalInlines
  }, _objectSpread({}, figure, {
    editorOptions: _objectSpread({}, figure.editorOptions, {
      type: 'INFOFIGURE'
    }),
    rules: [figureImage, _objectSpread({}, figureCaption, {
      editorOptions: {
        type: 'INFOFIGURECAPTION',
        placeholder: 'Legende',
        isStatic: true
      }
    })]
  }), {
    matchMdast: _utils.matchParagraph,
    component: _InfoBox.InfoBoxText,
    editorModule: 'paragraph',
    editorOptions: {
      type: 'INFOP',
      placeholder: 'Infotext'
    },
    rules: interactionParagraphRules
  }]
};
var blockQuote = {
  matchMdast: (0, _utils.matchZone)('BLOCKQUOTE'),
  props: function props(node) {
    return {
      isEmpty: node.children && node.children.length === 1 && !node.children[0].children
    };
  },
  component: function component(_ref2) {
    var isEmpty = _ref2.isEmpty,
        node = _ref2.node,
        children = _ref2.children,
        attributes = _ref2.attributes;
    return isEmpty ? null : _react.default.createElement(_BlockQuote.BlockQuote, {
      attributes: attributes
    }, children);
  },
  editorModule: 'blockquote',
  editorOptions: {
    insertButtonText: 'Block-Zitat'
  },
  rules: [{
    matchMdast: (0, _utils.matchType)('blockquote'),
    component: _BlockQuote.BlockQuoteParagraph,
    editorModule: 'paragraph',
    editorOptions: {
      type: 'BLOCKQUOTEPARAGRAPH',
      placeholder: 'Zitat-Absatz'
    },
    rules: [{
      matchMdast: _utils.matchParagraph,
      component: function component(_ref3) {
        var children = _ref3.children;
        return children;
      },
      rules: interactionParagraphRules
    }]
  }, figureCaption]
};
var pullQuote = {
  matchMdast: _utils2.matchQuote,
  component: _PullQuote.PullQuote,
  props: function props(node) {
    return {
      size: node.data.size,
      hasFigure: !!node.children.find(_utils2.matchFigure)
    };
  },
  editorModule: 'quote',
  editorOptions: {
    insertButtonText: 'Zitat',
    insertTypes: ['PARAGRAPH']
  },
  rules: [figure, {
    matchMdast: function matchMdast(node, index, parent) {
      return (0, _utils.matchParagraph)(node) && (index === 0 || index === 1 && (0, _utils2.matchFigure)(parent.children[0]) || !(0, _utils2.matchLast)(node, index, parent));
    },
    component: _PullQuote.PullQuoteText,
    editorModule: 'paragraph',
    editorOptions: {
      type: 'QUOTEP',
      placeholder: 'Zitat'
    },
    rules: _toConsumableArray(_utils2.globalInlines).concat([link])
  }, {
    matchMdast: function matchMdast(node, index, parent) {
      return (0, _utils.matchParagraph)(node) && (0, _utils2.matchLast)(node, index, parent);
    },
    component: _PullQuote.PullQuoteSource,
    editorModule: 'paragraph',
    editorOptions: {
      type: 'QUOTECITE',
      placeholder: 'Quellenangabe / Autor',
      isStatic: true,
      afterType: 'PARAGRAPH',
      insertAfterType: 'CENTER'
    },
    rules: _toConsumableArray(_utils2.globalInlines).concat([link])
  }]
};
var COVER_TYPE = 'COVERFIGURE';
exports.COVER_TYPE = COVER_TYPE;

var mdastToString = function mdastToString(node) {
  return node ? node.value || node.children && node.children.map(mdastToString).join('') || '' : '';
};

var cover = {
  matchMdast: function matchMdast(node, index) {
    return (0, _utils2.matchFigure)(node) && index === 0;
  },
  component: _Figure.FigureCover,
  props: function props(node, index, parent, _ref4) {
    var ancestors = _ref4.ancestors;
    var text;
    var rootNode = ancestors[ancestors.length - 1];
    var meta = rootNode.meta;
    var headline = ((rootNode.children.find((0, _utils.matchZone)('TITLE')) || {}).children || []).find((0, _utils.matchHeading)(1));

    if (meta.coverText && headline) {
      var Headline = rootNode.format && rootNode.format.meta && rootNode.format.meta.kind === 'meta' ? Interaction.Headline : Editorial.Headline;

      var element = _react.default.createElement(Headline, {
        style: {
          color: meta.coverText.color,
          fontSize: meta.coverText.fontSize,
          lineHeight: meta.coverText.lineHeight || 1.03
        }
      }, mdastToString(headline));

      text = {
        element: element,
        anchor: meta.coverText.anchor,
        offset: meta.coverText.offset
      };
    }

    return {
      size: node.data.size,
      text: text
    };
  },
  editorModule: 'figure',
  editorOptions: {
    type: COVER_TYPE,
    gallery: false,
    afterType: 'PARAGRAPH',
    insertAfterType: 'CENTER',
    pixelNote: 'Auflösung: min. 2000x (proportionaler Schnitt)',
    sizes: [{
      label: 'Edge to Edge',
      props: {
        size: undefined
      }
    }, {
      label: 'Gross',
      props: {
        size: 'breakout'
      }
    }, {
      label: 'Zentriert',
      props: {
        size: 'center'
      }
    }, {
      label: 'Klein',
      props: {
        size: 'tiny'
      }
    }]
  },
  rules: [{
    matchMdast: _utils.matchImageParagraph,
    component: _Figure.FigureImage,
    props: function props(node, index, parent) {
      var src = (0, _utils2.extractImage)(node);
      var displayWidth = _Figure.FIGURE_SIZES[parent.data.size] || 1500;
      var setMaxWidth = parent.data.size !== undefined;
      return _objectSpread({}, _Figure.FigureImage.utils.getResizedSrcs(src, displayWidth, setMaxWidth), {
        aboveTheFold: true,
        alt: node.children[0].alt
      });
    },
    editorModule: 'figureImage',
    isVoid: true
  }, figureCaption]
};
var logbook = {
  matchMdast: (0, _utils.matchZone)('LOGBOOK'),
  component: function component(_ref5) {
    var children = _ref5.children;
    return _react.default.createElement("div", null, children);
  },
  editorModule: 'logbook',
  editorOptions: {
    insertButtonText: 'Logbuch'
  },
  rules: [{
    matchMdast: (0, _utils.matchHeading)(2),
    component: Editorial.Subhead,
    editorModule: 'headline',
    editorOptions: {
      placeholder: 'Titel',
      type: 'LOGBOOK_TITLE',
      depth: 2,
      isStatic: true
    },
    rules: _utils2.globalInlines
  }, {
    matchMdast: _utils.matchParagraph,
    component: Editorial.Credit,
    editorModule: 'paragraph',
    editorOptions: {
      type: 'LOGBOOK_CREDIT',
      placeholder: 'Autoren, Datum',
      isStatic: true,
      afterType: 'PARAGRAPH',
      insertAfterType: 'CENTER'
    },
    rules: _toConsumableArray(_utils2.globalInlines).concat([link])
  }]
};
var mdastPlaceholder = "\u2063";

var DefaultLink = function DefaultLink(_ref6) {
  var children = _ref6.children;
  return children;
};

var createSchema = function createSchema() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref7$documentEditorO = _ref7.documentEditorOptions,
      documentEditorOptions = _ref7$documentEditorO === void 0 ? {} : _ref7$documentEditorO,
      _ref7$customMetaField = _ref7.customMetaFields,
      customMetaFields = _ref7$customMetaField === void 0 ? [{
    label: 'Bildergalerie',
    key: 'gallery',
    ref: 'bool'
  }, {
    label: 'Diskussion geschlossen',
    key: 'discussionClosed',
    ref: 'bool'
  }, {
    label: 'Format',
    key: 'format',
    ref: 'repo'
  }, {
    label: 'Dossier',
    key: 'dossier',
    ref: 'repo'
  }, {
    label: 'Diskussion',
    key: 'discussion',
    ref: 'repo'
  }] : _ref7$customMetaField,
      titleBlockRule = _ref7.titleBlockRule,
      _ref7$titleBlockPrepe = _ref7.titleBlockPrepend,
      titleBlockPrepend = _ref7$titleBlockPrepe === void 0 ? null : _ref7$titleBlockPrepe,
      _ref7$titleBlockAppen = _ref7.titleBlockAppend,
      titleBlockAppend = _ref7$titleBlockAppen === void 0 ? null : _ref7$titleBlockAppen,
      _ref7$repoPrefix = _ref7.repoPrefix,
      repoPrefix = _ref7$repoPrefix === void 0 ? 'article-' : _ref7$repoPrefix,
      _ref7$series = _ref7.series,
      series = _ref7$series === void 0 ? true : _ref7$series,
      _ref7$Link = _ref7.Link,
      Link = _ref7$Link === void 0 ? DefaultLink : _ref7$Link,
      _ref7$getPath = _ref7.getPath,
      getPath = _ref7$getPath === void 0 ? _utils2.getDatePath : _ref7$getPath,
      _ref7$t = _ref7.t,
      t = _ref7$t === void 0 ? function () {
    return '';
  } : _ref7$t,
      dynamicComponentRequire = _ref7.dynamicComponentRequire,
      previewTeaser = _ref7.previewTeaser,
      _ref7$getVideoPlayerP = _ref7.getVideoPlayerProps,
      getVideoPlayerProps = _ref7$getVideoPlayerP === void 0 ? function (props) {
    return props;
  } : _ref7$getVideoPlayerP;

  var teasers = (0, _teasers.default)({
    t: t,
    Link: Link
  });
  return {
    repoPrefix: repoPrefix,
    getPath: getPath,
    rules: [{
      matchMdast: (0, _utils.matchType)('root'),
      component: _Container.default,
      props: function props(node) {
        return {
          meta: node.meta
        };
      },
      editorModule: 'documentPlain',
      editorOptions: documentEditorOptions,
      rules: [{
        matchMdast: function matchMdast() {
          return false;
        },
        editorModule: 'meta',
        editorOptions: {
          series: series,
          customFields: customMetaFields,
          teaser: previewTeaser || function (props) {
            return _react.default.createElement("div", {
              style: {
                backgroundColor: '#fff',
                padding: '30px 30px 1px'
              }
            }, _react.default.createElement(_TeaserFeed.TeaserFeed, props));
          }
        }
      }, cover, titleBlockRule || {
        matchMdast: (0, _utils.matchZone)('TITLE'),
        component: function component(_ref8) {
          var children = _ref8.children,
              format = _ref8.format,
              props = _objectWithoutProperties(_ref8, ["children", "format"]);

          return _react.default.createElement(_TitleBlock.default, _extends({}, props, {
            format: format,
            Link: Link
          }), titleBlockPrepend, format && format.meta && _react.default.createElement(Editorial.Format, {
            color: format.meta.color || _colors.default[format.meta.kind],
            contentEditable: false
          }, _react.default.createElement(Link, {
            href: format.meta.path,
            passHref: true
          }, _react.default.createElement("a", _extends({}, _utils2.styles.link, {
            href: format.meta.path
          }), format.meta.title))), children, titleBlockAppend);
        },
        props: function props(node, index, parent, _ref9) {
          var ancestors = _ref9.ancestors;
          return {
            center: node.data.center,
            format: ancestors[ancestors.length - 1].format
          };
        },
        editorModule: 'title',
        editorOptions: {
          coverType: COVER_TYPE
        },
        rules: [{
          matchMdast: (0, _utils.matchHeading)(1),
          component: function component(_ref10) {
            var children = _ref10.children,
                attributes = _ref10.attributes,
                format = _ref10.format,
                coverText = _ref10.coverText;
            var Headline = format && format.meta && format.meta.kind === 'meta' ? Interaction.Headline : format && format.meta && format.meta.kind === 'scribble' ? Scribble.Headline : Editorial.Headline;

            var element = _react.default.createElement(Headline, {
              attributes: attributes
            }, children);

            if (coverText) {
              return _react.default.createElement(_Figure.CoverTextTitleBlockHeadline, null, element);
            }

            return element;
          },
          props: function props(node, index, parent, _ref11) {
            var ancestors = _ref11.ancestors;
            var rootNode = ancestors[ancestors.length - 1];
            return {
              format: rootNode.format,
              coverText: rootNode.meta.coverText
            };
          },
          rules: _utils2.globalInlines,
          editorModule: 'headline',
          editorOptions: {
            type: 'H1',
            placeholder: 'Titel',
            depth: 1,
            isStatic: true
          }
        }, {
          matchMdast: (0, _utils.matchHeading)(2),
          component: function component(_ref12) {
            var children = _ref12.children,
                attributes = _ref12.attributes,
                props = _objectWithoutProperties(_ref12, ["children", "attributes"]);

            return _react.default.createElement(Editorial.Subject, _extends({
              attributes: attributes
            }, props), children);
          },
          editorModule: 'headline',
          editorOptions: {
            type: 'SUBJECT',
            placeholder: 'Subject',
            depth: 2,
            isStatic: true
          },
          rules: _utils2.globalInlines
        }, {
          matchMdast: function matchMdast(node, index, parent) {
            var numHeadings = parent.children.filter(function (child) {
              return child.type === 'heading';
            }).length;
            return (0, _utils.matchParagraph)(node) && index === numHeadings;
          },
          component: function component(_ref13) {
            var children = _ref13.children,
                props = _objectWithoutProperties(_ref13, ["children"]);

            if (children && children.length === 1 && children[0] === mdastPlaceholder) {
              return null;
            }

            return _react.default.createElement(Editorial.Lead, _extends({
              children: children
            }, props));
          },
          editorModule: 'paragraph',
          editorOptions: {
            type: 'LEAD',
            placeholder: 'Lead',
            mdastPlaceholder: mdastPlaceholder,
            isStatic: true
          },
          rules: _toConsumableArray(_utils2.globalInlines).concat([link])
        }, {
          matchMdast: _utils.matchParagraph,
          component: Editorial.Credit,
          editorModule: 'paragraph',
          editorOptions: {
            type: 'CREDIT',
            placeholder: 'Autoren, Datum',
            isStatic: true,
            afterType: 'PARAGRAPH',
            insertAfterType: 'CENTER'
          },
          rules: _toConsumableArray(_utils2.globalInlines).concat([link])
        }]
      }, {
        matchMdast: (0, _utils.matchZone)('CENTER'),
        component: _Center.default,
        // prevent empty data object forward to component
        // - Center spreads all props onto its div
        props: function props() {
          return {};
        },
        editorModule: 'center',
        rules: [{
          matchMdast: (0, _utils.matchHeading)(2),
          component: Editorial.Subhead,
          editorModule: 'headline',
          editorOptions: {
            type: 'H2',
            depth: 2,
            formatButtonText: 'Zwischentitel'
          },
          rules: _utils2.globalInlines
        }, {
          matchMdast: (0, _utils.matchZone)('FIGUREGROUP'),
          component: _Figure.FigureGroup,
          props: function props(node) {
            return {
              size: 'breakout',
              columns: node.data.columns
            };
          },
          rules: [figure, centerFigureCaption],
          editorModule: 'figuregroup',
          editorOptions: {
            insertButtonText: 'Bildergruppe',
            insertTypes: ['PARAGRAPH']
          }
        }, {
          matchMdast: (0, _utils.matchType)('list'),
          component: _List.List,
          props: function props(node) {
            return {
              data: {
                ordered: node.ordered,
                start: node.start,
                compact: !node.loose
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
          component: _Typography.HR,
          editorModule: 'line',
          editorOptions: {
            insertButtonText: 'Trennlinie',
            insertTypes: ['PARAGRAPH']
          },
          isVoid: true
        }, {
          matchMdast: (0, _utils.matchZone)('EMBEDTWITTER'),
          component: function component(_ref14) {
            var attributes = _ref14.attributes,
                data = _ref14.data,
                url = _ref14.url;
            return _react.default.createElement(_Social.Tweet, _extends({
              attributes: attributes
            }, data, {
              date: new Date(data.createdAt)
            }));
          },
          props: function props(node) {
            return {
              data: _objectSpread({}, node.data, {
                url: node.children[0].children[0].url
              })
            };
          },
          editorModule: 'embedTwitter',
          editorOptions: {
            lookupType: 'PARAGRAPH'
          },
          isVoid: true
        }, logbook, {
          matchMdast: (0, _utils.matchZone)('EMBEDVIDEO'),
          component: function component(_ref15) {
            var attributes = _ref15.attributes,
                data = _ref15.data,
                url = _ref15.url;

            if (data.forceAudio && data.src) {
              return _react.default.createElement(_AudioPlayer.AudioPlayer, _extends({
                attributes: attributes
              }, data, {
                t: t
              }));
            }

            if (data.src) {
              return _react.default.createElement(_VideoPlayer.VideoPlayer, _extends({
                attributes: attributes
              }, getVideoPlayerProps(data), {
                t: t
              }));
            }

            return _react.default.createElement(_Video.Video, _extends({
              attributes: attributes
            }, data, {
              t: t,
              date: new Date(data.createdAt)
            }));
          },
          props: function props(node) {
            return {
              data: _objectSpread({}, node.data, {
                url: node.children[0].children[0].url
              })
            };
          },
          editorModule: 'embedVideo',
          editorOptions: {
            lookupType: 'PARAGRAPH',
            sizes: [{
              label: 'Normal',
              props: {
                size: undefined
              }
            }, {
              label: 'Gross',
              props: {
                size: 'breakout'
              }
            }, {
              label: 'Mittel',
              props: {
                size: 'narrow'
              }
            }, {
              label: 'Klein',
              props: {
                size: 'tiny'
              }
            }]
          },
          isVoid: true
        }, infoBox, pullQuote, paragraph, {
          matchMdast: (0, _utils.matchZone)('NOTE'),
          component: function component(_ref16) {
            var children = _ref16.children;
            return children;
          },
          editorModule: 'blocktext',
          editorOptions: {
            mdastType: 'zone',
            identifier: 'NOTE',
            formatButtonText: 'Notiz',
            isStatic: true
          },
          rules: [{
            matchMdast: _utils.matchParagraph,
            component: Editorial.Note,
            editorModule: 'paragraph',
            editorOptions: {
              type: 'NOTEP',
              placeholder: 'Anmerkung',
              isStatic: true,
              afterType: 'PARAGRAPH',
              insertAfterType: 'CENTER'
            },
            rules: interactionParagraphRules
          }]
        }, {
          matchMdast: (0, _utils.matchZone)('CHART'),
          component: _Figure.Figure,
          props: function props(node) {
            return {
              size: node.data.size
            };
          },
          editorModule: 'chart',
          editorOptions: {
            insertButtonText: 'Chart',
            insertTypes: ['PARAGRAPH']
          },
          rules: [{
            matchMdast: (0, _utils.matchHeading)(3),
            component: _Chart.ChartTitle,
            editorModule: 'headline',
            editorOptions: {
              type: 'CHARTTITLE',
              placeholder: 'Titel',
              depth: 3,
              isStatic: true
            },
            rules: _utils2.globalInlines
          }, {
            matchMdast: function matchMdast(node, index, parent) {
              return (0, _utils.matchParagraph)(node) && !(0, _utils2.matchLast)(node, index, parent);
            },
            component: _Chart.ChartLead,
            editorModule: 'paragraph',
            editorOptions: {
              type: 'CHARTLEAD',
              placeholder: 'Lead',
              isStatic: true
            },
            rules: interactionParagraphRules
          }, {
            matchMdast: (0, _utils.matchType)('code'),
            component: function component(_ref17) {
              var showException = _ref17.showException,
                  props = _objectWithoutProperties(_ref17, ["showException"]);

              return _react.default.createElement(_ErrorBoundary.default, {
                showException: showException,
                failureMessage: t('styleguide/charts/error')
              }, _react.default.createElement(_Csv.default, props));
            },
            props: function props(node, index, parent, _ref18) {
              var ancestors = _ref18.ancestors;
              var zone = ancestors.find((0, _utils.matchZone)('CHART'));
              return {
                t: t,
                config: zone.data,
                values: node.value
              };
            },
            editorModule: 'chartCanvas'
          }, {
            matchMdast: function matchMdast(node, index, parent) {
              return (0, _utils.matchParagraph)(node) && (0, _utils2.matchLast)(node, index, parent);
            },
            component: Editorial.Note,
            props: function props() {
              return {
                style: {
                  marginTop: 10
                }
              };
            },
            editorModule: 'paragraph',
            editorOptions: {
              type: 'CHARTNOTE',
              placeholder: 'Quelle',
              isStatic: true,
              afterType: 'PARAGRAPH',
              insertAfterType: 'CENTER'
            },
            rules: interactionParagraphRules
          }]
        }, centerFigure, teasers.articleCollection, blockQuote, {
          matchMdast: (0, _utils.matchZone)('HTML'),
          component: _IllustrationHtml.default,
          props: function props(node) {
            var code = node.children.find(function (c) {
              return c.type === 'code';
            });
            var deepNodes = node.children.reduce(function (children, child) {
              return children.concat(child).concat(child.children);
            }, []).filter(Boolean);
            var images = deepNodes.filter(_utils.matchImage).map(function (image) {
              return {
                ref: image.alt,
                url: image.url
              };
            });
            return {
              code: code && code.value,
              images: images
            };
          },
          editorModule: 'html',
          editorOptions: {
            insertTypes: ['PARAGRAPH'],
            insertButtonText: 'HTML Illustration'
          },
          isVoid: true
        }, (0, _dynamicComponent.default)({
          t: t,
          dynamicComponentRequire: dynamicComponentRequire,
          insertButtonText: 'Dynamic Component'
        })]
      }, centerFigure, (0, _dynamicComponent.default)({
        t: t,
        dynamicComponentRequire: dynamicComponentRequire
      }), {
        matchMdast: function matchMdast() {
          return false;
        },
        editorModule: 'specialchars'
      }]
    }]
  };
};

var _default = createSchema;
exports.default = _default;