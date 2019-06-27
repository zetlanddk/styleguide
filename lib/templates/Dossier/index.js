"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dossier = require("../../components/Dossier");

var _Article = _interopRequireDefault(require("../Article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _ref2$dossierLabel = _ref2.dossierLabel,
      dossierLabel = _ref2$dossierLabel === void 0 ? 'Dossier' : _ref2$dossierLabel,
      _ref2$dossierHref = _ref2.dossierHref,
      dossierHref = _ref2$dossierHref === void 0 ? '/dossier' : _ref2$dossierHref,
      _ref2$customMetaField = _ref2.customMetaFields,
      customMetaFields = _ref2$customMetaField === void 0 ? [] : _ref2$customMetaField,
      _ref2$series = _ref2.series,
      series = _ref2$series === void 0 ? false : _ref2$series,
      _ref2$Link = _ref2.Link,
      Link = _ref2$Link === void 0 ? DefaultLink : _ref2$Link,
      _ref2$titleBlockPrepe = _ref2.titleBlockPrepend,
      titleBlockPrepend = _ref2$titleBlockPrepe === void 0 ? null : _ref2$titleBlockPrepe,
      _ref2$getPath = _ref2.getPath,
      getPath = _ref2$getPath === void 0 ? function (_ref3) {
    var slug = _ref3.slug;
    return "/dossier/".concat((slug || '').split('/').pop());
  } : _ref2$getPath,
      args = _objectWithoutProperties(_ref2, ["dossierLabel", "dossierHref", "customMetaFields", "series", "Link", "titleBlockPrepend", "getPath"]);

  return (0, _Article.default)(_objectSpread({
    repoPrefix: 'dossier-',
    getPath: getPath,
    titleBlockPrepend: [titleBlockPrepend, _react.default.createElement(_Dossier.DossierTag, {
      attributes: {
        contentEditable: false
      }
    }, dossierLabel)],
    customMetaFields: [{
      label: 'Diskussion',
      key: 'discussion',
      ref: 'repo'
    }].concat(_toConsumableArray(customMetaFields)),
    series: series,
    Link: Link
  }, args));
};

var _default = createSchema;
exports.default = _default;