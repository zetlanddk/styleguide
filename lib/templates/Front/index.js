"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.subject = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("mdast-react-render/lib/utils");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _TeaserFront = require("../../components/TeaserFront");

var _Dossier = require("../../components/Dossier");

var _utils2 = require("../Article/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var image = {
  matchMdast: _utils.matchImageParagraph,
  component: function component() {
    return null;
  },
  isVoid: true
};
var subject = {
  matchMdast: (0, _utils.matchHeading)(2),
  component: function component(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        props = _objectWithoutProperties(_ref, ["children", "attributes"]);

    return _react.default.createElement(_TeaserFront.TeaserFrontSubject, _extends({
      attributes: attributes
    }, props), children);
  },
  props: function props(node, index, parent, _ref2) {
    var ancestors = _ref2.ancestors;
    var teaserGroup = ancestors.find(_utils2.matchTeaserGroup);
    var teaser = ancestors.find(_utils2.matchTeaser);
    return {
      color: teaser && teaser.data.color,
      collapsedColor: teaser && teaser.data.feuilleton && '#000',
      columns: teaserGroup ? teaserGroup.data.columns : undefined
    };
  },
  editorModule: 'headline',
  editorOptions: {
    type: 'FRONTSUBJECT',
    placeholder: 'Subject',
    depth: 2,
    isStatic: true
  },
  rules: _utils2.globalInlines
};
exports.subject = subject;

var DefaultLink = function DefaultLink(_ref3) {
  var children = _ref3.children;
  return children;
};

var createSchema = function createSchema() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$Link = _ref4.Link,
      Link = _ref4$Link === void 0 ? DefaultLink : _ref4$Link;

  var credit = {
    matchMdast: _utils.matchParagraph,
    component: function component(_ref5) {
      var children = _ref5.children,
          attributes = _ref5.attributes;
      return _react.default.createElement(_TeaserFront.TeaserFrontCredit, {
        attributes: attributes
      }, children);
    },
    editorModule: 'paragraph',
    editorOptions: {
      type: 'FRONTCREDIT',
      placeholder: 'Credit',
      isStatic: true
    },
    rules: _toConsumableArray(_utils2.globalInlines).concat([{
      matchMdast: (0, _utils.matchType)('link'),
      props: function props(node, index, parent, _ref6) {
        var ancestors = _ref6.ancestors;
        var teaser = ancestors.find(_utils2.matchTeaser);
        return {
          title: node.title,
          href: node.url,
          color: teaser ? teaser.data.color : _colors.default.primary,
          collapsedColor: teaser && teaser.data.feuilleton ? '#000' : undefined
        };
      },
      component: function component(_ref7) {
        var children = _ref7.children,
            data = _ref7.data,
            props = _objectWithoutProperties(_ref7, ["children", "data"]);

        return _react.default.createElement(Link, {
          href: props.href,
          passHref: true
        }, _react.default.createElement(_TeaserFront.TeaserFrontCreditLink, props, children));
      },
      editorModule: 'link',
      editorOptions: {
        type: 'FRONTLINK'
      }
    }])
  };

  var title = function title(type, Headline) {
    return {
      matchMdast: (0, _utils.matchHeading)(1),
      component: function component(_ref8) {
        var children = _ref8.children,
            href = _ref8.href,
            props = _objectWithoutProperties(_ref8, ["children", "href"]);

        return _react.default.createElement(Link, {
          href: href,
          passHref: true
        }, _react.default.createElement("a", _extends({}, _utils2.styles.link, {
          href: href
        }), _react.default.createElement(Headline, props, children)));
      },
      props: function props(node, index, parent, _ref9) {
        var ancestors = _ref9.ancestors;
        var teaser = ancestors.find(_utils2.matchTeaser);
        var teaserGroup = ancestors.find(_utils2.matchTeaserGroup);
        return {
          kind: parent.data.kind,
          titleSize: parent.data.titleSize,
          href: teaser ? teaser.data.url : undefined,
          columns: teaserGroup ? teaserGroup.data.columns : undefined
        };
      },
      editorModule: 'headline',
      editorOptions: {
        type: type,
        placeholder: 'Titel',
        depth: 1,
        isStatic: true
      },
      rules: _utils2.globalInlines
    };
  };

  var lead = {
    matchMdast: (0, _utils.matchHeading)(4),
    component: function component(_ref10) {
      var children = _ref10.children,
          attributes = _ref10.attributes,
          props = _objectWithoutProperties(_ref10, ["children", "attributes"]);

      return _react.default.createElement(_TeaserFront.TeaserFrontLead, _extends({
        attributes: attributes
      }, props), children);
    },
    props: function props(node, index, parent, _ref11) {
      var ancestors = _ref11.ancestors;
      var teaserGroup = ancestors.find(_utils2.matchTeaserGroup);
      return {
        columns: teaserGroup ? teaserGroup.data.columns : undefined
      };
    },
    editorModule: 'headline',
    editorOptions: {
      type: 'FRONTLEAD',
      placeholder: 'Lead',
      depth: 4,
      isStatic: true
    },
    rules: _utils2.globalInlines
  };
  var format = {
    matchMdast: (0, _utils.matchHeading)(6),
    component: function component(_ref12) {
      var children = _ref12.children,
          attributes = _ref12.attributes,
          href = _ref12.href,
          color = _ref12.color,
          collapsedColor = _ref12.collapsedColor;
      return _react.default.createElement(_TeaserFront.TeaserFrontFormat, {
        color: color,
        collapsedColor: collapsedColor
      }, _react.default.createElement(Link, {
        href: href,
        passHref: true
      }, _react.default.createElement("a", _extends({
        href: href
      }, _utils2.styles.link), children)));
    },
    props: function props(node, index, parent, _ref13) {
      var ancestors = _ref13.ancestors;
      var teaser = ancestors.find(_utils2.matchTeaser);
      return {
        href: teaser ? teaser.data.formatUrl : undefined,
        color: teaser && teaser.data.feuilleton ? teaser.data.color || _colors.default.feuilleton : undefined,
        collapsedColor: teaser && teaser.data.feuilleton && teaser.data.teaserType === 'frontImage' ? '#000' : undefined
      };
    },
    editorModule: 'headline',
    editorOptions: {
      type: 'FRONTFORMAT',
      placeholder: 'Format',
      depth: 6,
      isStatic: true
    },
    rules: _utils2.globalInlines
  };
  var frontImageTeaser = {
    matchMdast: (0, _utils2.matchTeaserType)('frontImage'),
    props: function props(node, i) {
      return _objectSpread({
        image: (0, _utils2.extractImage)(node.children[0]),
        aboveTheFold: i < 2
      }, node.data);
    },
    component: function component(_ref14) {
      var children = _ref14.children,
          attributes = _ref14.attributes,
          props = _objectWithoutProperties(_ref14, ["children", "attributes"]);

      return _react.default.createElement(Link, {
        href: props.url
      }, _react.default.createElement(_TeaserFront.TeaserFrontImage, _extends({
        attributes: attributes
      }, props), children));
    },
    editorModule: 'teaser',
    editorOptions: {
      type: 'FRONTIMAGE',
      teaserType: 'frontImage',
      insertButtonText: 'Front Image',
      formOptions: ['textPosition', 'color', 'bgColor', 'center', 'kind', 'titleSize', 'image', 'byline', 'onlyImage', 'feuilleton']
    },
    rules: [image, title('FRONTIMAGETITLE', function (_ref15) {
      var children = _ref15.children,
          attributes = _ref15.attributes,
          kind = _ref15.kind,
          titleSize = _ref15.titleSize;
      var Component = kind === 'editorial' ? _TeaserFront.TeaserFrontImageHeadline.Editorial : _TeaserFront.TeaserFrontImageHeadline.Interaction;
      var sizes = {
        medium: titleSize === 'medium',
        large: titleSize === 'large',
        small: titleSize === 'small'
      };
      return _react.default.createElement(Component, _extends({
        attributes: attributes
      }, sizes), children);
    }), subject, lead, format, credit]
  };
  var frontSplitTeaser = {
    matchMdast: (0, _utils2.matchTeaserType)('frontSplit'),
    component: function component(_ref16) {
      var children = _ref16.children,
          attributes = _ref16.attributes,
          props = _objectWithoutProperties(_ref16, ["children", "attributes"]);

      return _react.default.createElement(Link, {
        href: props.url
      }, _react.default.createElement(_TeaserFront.TeaserFrontSplit, _extends({
        attributes: attributes
      }, props), children));
    },
    props: function props(node, i) {
      return _objectSpread({
        image: (0, _utils2.extractImage)(node.children[0]),
        aboveTheFold: i < 2
      }, node.data);
    },
    editorModule: 'teaser',
    editorOptions: {
      type: 'FRONTSPLIT',
      teaserType: 'frontSplit',
      insertButtonText: 'Front Split',
      formOptions: ['color', 'bgColor', 'center', 'image', 'byline', 'kind', 'titleSize', 'reverse', 'portrait', 'feuilleton']
    },
    rules: [image, title('FRONTSPLITTITLE', function (_ref17) {
      var children = _ref17.children,
          attributes = _ref17.attributes,
          kind = _ref17.kind,
          titleSize = _ref17.titleSize;
      var Component = kind === 'editorial' ? _TeaserFront.TeaserFrontSplitHeadline.Editorial : _TeaserFront.TeaserFrontSplitHeadline.Interaction;
      var sizes = {
        medium: titleSize === 'medium',
        large: titleSize === 'large'
      };
      return _react.default.createElement(Component, _extends({
        attributes: attributes
      }, sizes), children);
    }), subject, lead, format, credit]
  };
  var frontTypoTeaser = {
    matchMdast: (0, _utils2.matchTeaserType)('frontTypo'),
    component: function component(_ref18) {
      var children = _ref18.children,
          attributes = _ref18.attributes,
          props = _objectWithoutProperties(_ref18, ["children", "attributes"]);

      return _react.default.createElement(Link, {
        href: props.url
      }, _react.default.createElement(_TeaserFront.TeaserFrontTypo, _extends({
        attributes: attributes
      }, props), children));
    },
    props: function props(node) {
      return node.data;
    },
    editorModule: 'teaser',
    editorOptions: {
      type: 'FRONTTYPO',
      teaserType: 'frontTypo',
      insertButtonText: 'Front Typo',
      formOptions: ['color', 'bgColor', 'kind', 'titleSize', 'feuilleton']
    },
    rules: [image, title('FRONTTYPOTITLE', function (_ref19) {
      var children = _ref19.children,
          attributes = _ref19.attributes,
          kind = _ref19.kind,
          titleSize = _ref19.titleSize;
      var Component = kind === 'editorial' ? _TeaserFront.TeaserFrontTypoHeadline.Editorial : _TeaserFront.TeaserFrontTypoHeadline.Interaction;
      var sizes = {
        medium: titleSize === 'medium',
        large: titleSize === 'large',
        small: titleSize === 'small'
      };
      return _react.default.createElement(Component, _extends({
        attributes: attributes
      }, sizes), children);
    }), subject, lead, format, credit]
  };
  var frontTileTeaser = {
    matchMdast: (0, _utils2.matchTeaserType)('frontTile'),
    component: function component(_ref20) {
      var children = _ref20.children,
          attributes = _ref20.attributes,
          props = _objectWithoutProperties(_ref20, ["children", "attributes"]);

      return _react.default.createElement(Link, {
        href: props.url
      }, _react.default.createElement(_TeaserFront.TeaserFrontTile, _extends({
        attributes: attributes
      }, props), children));
    },
    props: function props(node, index, parent, _ref21) {
      var ancestors = _ref21.ancestors;
      var aboveTheFold = ancestors[1].children.indexOf(ancestors[0]) < 2;
      return _objectSpread({
        image: (0, _utils2.extractImage)(node.children[0]),
        aboveTheFold: aboveTheFold
      }, node.data);
    },
    editorModule: 'teaser',
    editorOptions: {
      type: 'FRONTTILE',
      teaserType: 'frontTile',
      showUI: false,
      formOptions: ['color', 'bgColor', 'center', 'titleSize', 'showImage', 'onlyImage', 'image', 'byline', 'kind', 'feuilleton']
    },
    rules: [image, title('FRONTTILETITLE', function (_ref22) {
      var children = _ref22.children,
          attributes = _ref22.attributes,
          kind = _ref22.kind,
          titleSize = _ref22.titleSize,
          columns = _ref22.columns;
      var Component = kind === 'editorial' ? _TeaserFront.TeaserFrontTileHeadline.Editorial : kind === 'scribble' ? _TeaserFront.TeaserFrontTileHeadline.Scribble : _TeaserFront.TeaserFrontTileHeadline.Interaction;
      var sizes = {
        medium: titleSize === 'medium'
      };
      return _react.default.createElement(Component, _extends({
        attributes: attributes,
        columns: columns
      }, sizes), children);
    }), subject, lead, format, credit]
  };
  var articleCollectionLead = {
    matchMdast: (0, _utils.matchHeading)(4),
    component: function component(_ref23) {
      var children = _ref23.children,
          attributes = _ref23.attributes;
      return _react.default.createElement(_Dossier.TeaserFrontDossierLead, {
        attributes: attributes
      }, children);
    },
    editorModule: 'headline',
    editorOptions: {
      type: 'ARTICLECOLLECTIONLEAD',
      placeholder: 'Lead',
      depth: 4,
      isStatic: true,
      optional: true
    },
    rules: _utils2.globalInlines
  };
  var articleTileLead = {
    matchMdast: (0, _utils.matchHeading)(4),
    component: function component(_ref24) {
      var children = _ref24.children,
          attributes = _ref24.attributes;
      return _react.default.createElement(_TeaserFront.TeaserFrontLead, {
        attributes: attributes,
        columns: 3
      }, children);
    },
    editorModule: 'headline',
    editorOptions: {
      type: 'ARTICLETILELEAD',
      placeholder: 'Lead',
      isStatic: true,
      depth: 4,
      optional: true
    },
    rules: _utils2.globalInlines
  };
  var articleTile = {
    matchMdast: (0, _utils2.matchTeaserType)('articleTile'),
    component: function component(_ref25) {
      var children = _ref25.children,
          attributes = _ref25.attributes,
          bgColor = _ref25.bgColor,
          props = _objectWithoutProperties(_ref25, ["children", "attributes", "bgColor"]);

      return _react.default.createElement(Link, {
        href: props.url
      }, _react.default.createElement(_TeaserFront.TeaserFrontTile, _extends({
        attributes: attributes
      }, props), children));
    },
    props: function props(node) {
      return _objectSpread({
        image: (0, _utils2.extractImage)(node.children[0])
      }, node.data);
    },
    // TMP: Disabled until editor integration
    editorModule: 'teaser',
    editorOptions: {
      type: 'ARTICLETILE',
      showUI: false,
      teaserType: 'articleTile',
      formOptions: ['image', 'byline', 'kind', 'showImage']
    },
    rules: [image, title('ARTICLETILETITLE', function (_ref26) {
      var children = _ref26.children,
          attributes = _ref26.attributes,
          kind = _ref26.kind;
      var Component = kind === 'editorial' ? _Dossier.DossierTileHeadline.Editorial : kind === 'scribble' ? _Dossier.DossierTileHeadline.Scribble : _Dossier.DossierTileHeadline.Interaction;
      return _react.default.createElement(Component, {
        attributes: attributes
      }, children);
    }), subject, articleTileLead, format, credit]
  };
  var articleTileRow = {
    matchMdast: (0, _utils.matchZone)('TEASERGROUP'),
    component: function component(_ref27) {
      var children = _ref27.children,
          attributes = _ref27.attributes,
          props = _objectWithoutProperties(_ref27, ["children", "attributes"]);

      return _react.default.createElement(_TeaserFront.TeaserFrontTileRow, _extends({
        columns: 3,
        attributes: attributes
      }, props), children);
    },
    editorModule: 'articleGroup',
    editorOptions: {
      type: 'ARTICLETILEROW'
    },
    rules: [articleTile]
  };
  var articleCollectionIntro = {
    matchMdast: function matchMdast(node) {
      return (0, _utils2.matchTeaserType)('dossierIntro')(node);
    },
    props: function props(node) {
      return _objectSpread({}, node.data, {
        image: (0, _utils2.extractImage)(node.children[0])
      });
    },
    component: function component(_ref28) {
      var children = _ref28.children,
          attributes = _ref28.attributes,
          props = _objectWithoutProperties(_ref28, ["children", "attributes"]);

      return _react.default.createElement(_Dossier.TeaserFrontDossierIntro, _extends({
        attributes: attributes
      }, props), children);
    },
    editorModule: 'dossierIntro',
    editorOptions: {
      type: 'ARTICLECOLLECTIONINTRO',
      formOptions: ['image', 'byline', 'kind']
    },
    rules: [image, {
      matchMdast: (0, _utils.matchHeading)(6),
      component: function component(_ref29) {
        var children = _ref29.children,
            attributes = _ref29.attributes;
        return _react.default.createElement(_Dossier.DossierTag, {
          attributes: attributes
        }, children);
      },
      editorModule: 'headline',
      editorOptions: {
        type: 'DOSSIERTAG',
        placeholder: 'Dossier',
        isStatic: true,
        depth: 6
      }
    }, title('ARTICLECOLLECTIONTITLE', function (_ref30) {
      var children = _ref30.children,
          attributes = _ref30.attributes,
          props = _objectWithoutProperties(_ref30, ["children", "attributes"]);

      return _react.default.createElement(Link, {
        href: props.url
      }, _react.default.createElement(_Dossier.TeaserFrontDossierHeadline, {
        attributes: attributes
      }, children));
    }), articleCollectionLead]
  };
  var frontArticleCollectionTeaser = {
    matchMdast: (0, _utils2.matchTeaserType)('frontArticleCollection'),
    component: function component(_ref31) {
      var children = _ref31.children,
          attributes = _ref31.attributes,
          props = _objectWithoutProperties(_ref31, ["children", "attributes"]);

      return _react.default.createElement(_Dossier.TeaserFrontDossier, _extends({
        attributes: attributes
      }, props), children);
    },
    // TMP: Disabled until editor integration
    editorModule: 'frontDossier',
    editorOptions: {
      type: 'FRONTARTICLECOLLECTION',
      insertButtonText: 'Artikelsammlung / Dossier'
    },
    rules: [articleCollectionIntro, articleTileRow, {
      matchMdast: _utils.matchParagraph,
      component: _Dossier.TeaserFrontDossierMore,
      editorModule: 'paragraph',
      editorOptions: {
        isStatic: true,
        placeholder: 'Mehr zum Thema-Link'
      },
      rules: _toConsumableArray(_utils2.globalInlines).concat([{
        matchMdast: (0, _utils.matchType)('link'),
        props: function props(node) {
          return {
            title: node.title,
            href: node.url
          };
        },
        component: function component(_ref32) {
          var children = _ref32.children,
              data = _ref32.data,
              props = _objectWithoutProperties(_ref32, ["children", "data"]);

          return _react.default.createElement(Link, {
            href: props.href,
            passHref: true
          }, _react.default.createElement("a", props, children));
        },
        editorModule: 'link',
        editorOptions: {
          type: 'FRONTLINK'
        }
      }])
    }]
  };
  var schema = {
    getPath: function getPath(_ref33) {
      var slug = _ref33.slug;
      return "/".concat((slug || '').split('/').pop());
    },
    rules: [{
      matchMdast: (0, _utils.matchType)('root'),
      // the document is not a node in slate and doesn't need attributes
      component: function component(_ref34) {
        var children = _ref34.children;
        return children;
      },
      editorModule: 'front',
      rules: [{
        matchMdast: function matchMdast() {
          return false;
        },
        editorModule: 'meta'
      }, frontImageTeaser, frontTypoTeaser, frontSplitTeaser, frontArticleCollectionTeaser, {
        matchMdast: function matchMdast(node) {
          return (0, _utils.matchZone)('TEASERGROUP')(node);
        },
        component: function component(_ref35) {
          var children = _ref35.children,
              attributes = _ref35.attributes,
              props = _objectWithoutProperties(_ref35, ["children", "attributes"]);

          return _react.default.createElement(_TeaserFront.TeaserFrontTileRow, _extends({
            attributes: attributes
          }, props), children);
        },
        editorModule: 'teasergroup',
        editorOptions: {
          type: 'FRONTTILEROW',
          insertButton: 'Front Tile Row'
        },
        rules: [frontTileTeaser]
      }, {
        matchMdast: function matchMdast() {
          return false;
        },
        editorModule: 'specialchars'
      }]
    }]
  };
  return schema;
};

var _default = createSchema;
exports.default = _default;