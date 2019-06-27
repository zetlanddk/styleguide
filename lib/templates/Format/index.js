"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Format = require("../../components/Format");

var _TitleBlock = _interopRequireDefault(require("../../components/TitleBlock"));

var Interaction = _interopRequireWildcard(require("../../components/Typography/Interaction"));

var _Article = _interopRequireWildcard(require("../Article"));

var _utils = require("mdast-react-render/lib/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DefaultLink = function DefaultLink(_ref) {
  var children = _ref.children;
  return children;
};

var createSchema = function createSchema() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$Link = _ref2.Link,
      Link = _ref2$Link === void 0 ? DefaultLink : _ref2$Link,
      _ref2$customMetaField = _ref2.customMetaFields,
      customMetaFields = _ref2$customMetaField === void 0 ? [] : _ref2$customMetaField,
      _ref2$series = _ref2.series,
      series = _ref2$series === void 0 ? false : _ref2$series,
      _ref2$titleBlockPrepe = _ref2.titleBlockPrepend,
      titleBlockPrepend = _ref2$titleBlockPrepe === void 0 ? null : _ref2$titleBlockPrepe,
      _ref2$titleBlockAppen = _ref2.titleBlockAppend,
      titleBlockAppend = _ref2$titleBlockAppen === void 0 ? null : _ref2$titleBlockAppen,
      titleBlockRule = _ref2.titleBlockRule,
      _ref2$getPath = _ref2.getPath,
      getPath = _ref2$getPath === void 0 ? function (_ref3) {
    var slug = _ref3.slug;
    return "/format/".concat((slug || '').split('/').pop());
  } : _ref2$getPath,
      args = _objectWithoutProperties(_ref2, ["Link", "customMetaFields", "series", "titleBlockPrepend", "titleBlockAppend", "titleBlockRule", "getPath"]);

  return (0, _Article.default)(_objectSpread({
    repoPrefix: 'format-',
    getPath: getPath,
    customMetaFields: [{
      label: 'Ebene',
      key: 'kind',
      items: [{
        value: 'editorial',
        text: 'Editorial'
      }, {
        value: 'meta',
        text: 'Meta'
      }, {
        value: 'scribble',
        text: 'Ameise'
      }, {
        value: 'feuilleton',
        text: 'Feuilleton'
      }]
    }, {
      label: 'Color',
      key: 'color'
    }, {
      label: 'Dossier',
      key: 'dossier',
      ref: 'repo'
    }, {
      label: 'Diskussion',
      key: 'discussion',
      ref: 'repo'
    }].concat(_toConsumableArray(customMetaFields)),
    series: series,
    titleBlockRule: titleBlockRule || {
      matchMdast: (0, _utils.matchZone)('TITLE'),
      component: function component(_ref4) {
        var children = _ref4.children,
            props = _objectWithoutProperties(_ref4, ["children"]);

        return _react.default.createElement(_TitleBlock.default, _extends({}, props, {
          center: true,
          Link: Link
        }), titleBlockPrepend, children, titleBlockAppend);
      },
      editorModule: 'title',
      editorOptions: {
        coverType: _Article.COVER_TYPE
      },
      rules: [{
        matchMdast: (0, _utils.matchHeading)(1),
        component: function component(_ref5) {
          var children = _ref5.children,
              attributes = _ref5.attributes;
          var Headline = Interaction.Headline;
          return _react.default.createElement(Headline, {
            attributes: attributes
          }, children);
        },
        editorModule: 'headline',
        editorOptions: {
          type: 'H1',
          placeholder: 'Titel',
          depth: 1,
          isStatic: true
        }
      }, {
        matchMdast: _utils.matchParagraph,
        component: function component() {
          return null;
        }
      }]
    },
    previewTeaser: function previewTeaser(props) {
      return _react.default.createElement("div", {
        style: {
          backgroundColor: '#fff',
          padding: '30px'
        }
      }, _react.default.createElement(_Format.FormatTag, {
        label: props.title,
        count: 17,
        color: props.color ? props.color : props.kind ? _colors.default[props.kind] : undefined
      }));
    }
  }, args));
};

var _default = createSchema;
exports.default = _default;