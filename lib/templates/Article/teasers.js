"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Interaction = _interopRequireWildcard(require("../../components/Typography/Interaction"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _utils = require("mdast-react-render/lib/utils");

var _utils2 = require("./utils");

var _TeaserFront = require("../../components/TeaserFront");

var _Dossier = require("../../components/Dossier");

var _Front = require("../Front");

var _Center = require("../../components/Center");

var Editorial = _interopRequireWildcard(require("../../components/Typography/Editorial"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var articleTileSubject = _objectSpread({}, _Front.subject, {
  props: function props(node, index, parent, _ref) {
    var ancestors = _ref.ancestors;
    var teaser = ancestors.find(_utils2.matchTeaser);
    return {
      color: teaser && teaser.data.color ? teaser.data.color : '#000',
      columns: 3
    };
  }
});

var createTeasers = function createTeasers(_ref2) {
  var t = _ref2.t,
      Link = _ref2.Link;

  var teaserTitle = function teaserTitle(type, Headline) {
    return {
      matchMdast: (0, _utils.matchHeading)(1),
      component: function component(_ref3) {
        var children = _ref3.children,
            href = _ref3.href,
            props = _objectWithoutProperties(_ref3, ["children", "href"]);

        return _react.default.createElement(Link, {
          href: href,
          passHref: true
        }, _react.default.createElement("a", _extends({}, _utils2.styles.link, {
          href: href
        }), _react.default.createElement(Headline, props, children)));
      },
      props: function props(node, index, parent, _ref4) {
        var ancestors = _ref4.ancestors;
        var teaser = ancestors.find(_utils2.matchTeaser);
        return {
          kind: parent.data.kind === 'feuilleton' ? 'editorial' : parent.data.kind,
          titleSize: parent.data.titleSize,
          href: teaser ? teaser.data.url : undefined
        };
      },
      editorModule: 'headline',
      editorOptions: {
        type: type,
        placeholder: 'Titel',
        isStatic: true,
        depth: 1
      },
      rules: _utils2.globalInlines
    };
  };

  var articleTileLead = {
    matchMdast: (0, _utils.matchHeading)(4),
    component: function component(_ref5) {
      var children = _ref5.children,
          attributes = _ref5.attributes,
          props = _objectWithoutProperties(_ref5, ["children", "attributes"]);

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
  var teaserFormat = {
    matchMdast: (0, _utils.matchHeading)(6),
    component: function component(_ref6) {
      var children = _ref6.children,
          attributes = _ref6.attributes,
          formatColor = _ref6.formatColor,
          href = _ref6.href;
      return _react.default.createElement(Editorial.Format, {
        attributes: attributes,
        color: formatColor
      }, _react.default.createElement(Link, {
        href: href,
        passHref: true
      }, _react.default.createElement("a", _extends({
        href: href
      }, _utils2.styles.link), children)));
    },
    props: function props(node, index, parent, _ref7) {
      var ancestors = _ref7.ancestors;
      var teaser = ancestors.find(_utils2.matchTeaser);
      var data = teaser && teaser.data;
      return {
        formatColor: data ? data.formatColor ? data.formatColor : data.kind ? _colors.default[data.kind] : undefined : undefined,
        href: data ? data.formatUrl : undefined
      };
    },
    editorModule: 'headline',
    editorOptions: {
      type: 'FRONTFORMAT',
      placeholder: 'Format',
      isStatic: true,
      depth: 6,
      optional: true
    },
    rules: _utils2.globalInlines
  };
  var teaserCredit = {
    matchMdast: _utils.matchParagraph,
    component: function component(_ref8) {
      var children = _ref8.children,
          attributes = _ref8.attributes;
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
      props: function props(node) {
        return {
          title: node.title,
          href: node.url,
          color: _colors.default.text
        };
      },
      component: function component(_ref9) {
        var children = _ref9.children,
            data = _ref9.data,
            props = _objectWithoutProperties(_ref9, ["children", "data"]);

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
  var articleTile = {
    matchMdast: (0, _utils2.matchTeaserType)('articleTile'),
    component: function component(_ref10) {
      var children = _ref10.children,
          attributes = _ref10.attributes,
          props = _objectWithoutProperties(_ref10, ["children", "attributes"]);

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
    editorModule: 'teaser',
    editorOptions: {
      type: 'ARTICLETILE',
      teaserType: 'articleTile',
      showUI: false,
      formOptions: ['formatColor', 'showImage', 'image', 'kind']
    },
    rules: [_utils2.skipMdastImage, teaserTitle('ARTICLETILETITLE', function (_ref11) {
      var children = _ref11.children,
          attributes = _ref11.attributes,
          kind = _ref11.kind;
      var Component = kind === 'editorial' ? _Dossier.DossierTileHeadline.Editorial : kind === 'scribble' ? _Dossier.DossierTileHeadline.Scribble : _Dossier.DossierTileHeadline.Interaction;
      return _react.default.createElement(Component, {
        attributes: attributes
      }, children);
    }), articleTileSubject, articleTileLead, teaserFormat, teaserCredit]
  };
  var articleTileRow = {
    matchMdast: function matchMdast(node) {
      return (0, _utils.matchZone)('TEASERGROUP')(node);
    },
    component: function component(_ref12) {
      var children = _ref12.children,
          attributes = _ref12.attributes,
          props = _objectWithoutProperties(_ref12, ["children", "attributes"]);

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
  return {
    articleCollection: {
      matchMdast: (0, _utils.matchZone)('ARTICLECOLLECTION'),
      component: function component(_ref13) {
        var children = _ref13.children,
            attributes = _ref13.attributes,
            unauthorized = _ref13.unauthorized,
            unauthorizedText = _ref13.unauthorizedText;
        return unauthorized ? unauthorizedText ? _react.default.createElement(Interaction.P, {
          style: {
            backgroundColor: _colors.default.primaryBg,
            padding: '10px 20px'
          }
        }, unauthorizedText) : null : _react.default.createElement(_Center.Breakout, {
          size: "breakout",
          attributes: attributes
        }, children);
      },
      props: function props(node) {
        return {
          unauthorized: node.data.membersOnly && !node.children.length,
          unauthorizedText: node.data.unauthorizedText
        };
      },
      editorModule: 'articleCollection',
      editorOptions: {
        type: 'ARTICLECOLLECTION',
        insertButtonText: 'Artikelsammlung',
        insertTypes: ['PARAGRAPH'],
        formOptions: []
      },
      rules: [{
        matchMdast: (0, _utils.matchHeading)(2),
        component: function component(_ref14) {
          var children = _ref14.children,
              attributes = _ref14.attributes;
          return _react.default.createElement(_Dossier.DossierSubheader, {
            attributes: attributes
          }, children);
        },
        editorModule: 'headline',
        editorOptions: {
          type: 'ARTICLECOLLECTIONSUBHEADER',
          placeholder: 'Artikelsammlung',
          depth: 2,
          isStatic: true
        }
      }, articleTileRow]
    }
  };
};

var _default = createTeasers;
exports.default = _default;