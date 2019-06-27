"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Article = _interopRequireDefault(require("../Article"));

var _utils = require("../Article/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var createSchema = function createSchema() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$customMetaFields = _ref.customMetaFields,
      customMetaFields = _ref$customMetaFields === void 0 ? [] : _ref$customMetaFields,
      _ref$getPath = _ref.getPath,
      getPath = _ref$getPath === void 0 ? function (args) {
    return "".concat((0, _utils.getDatePath)(args), "/diskussion");
  } : _ref$getPath,
      args = _objectWithoutProperties(_ref, ["customMetaFields", "getPath"]);

  return (0, _Article.default)(_objectSpread({
    repoPrefix: 'discussion-',
    getPath: getPath,
    customMetaFields: [{
      label: 'Beitrag-Maximallänge',
      key: 'commentsMaxLength'
    }, {
      label: 'Beitrag-Interval (ms)',
      key: 'commentsMinInterval'
    }, {
      label: 'Anonymity',
      key: 'discussionAnonymity',
      items: [{
        value: 'ALLOWED',
        text: 'Erlaubt'
      }, {
        value: 'ENFORCED',
        text: 'Zwingend'
      }, {
        value: 'FORBIDDEN',
        text: 'Verboten'
      }]
    }, {
      label: 'Format',
      key: 'format',
      ref: 'repo'
    }, {
      label: 'Dossier',
      key: 'dossier',
      ref: 'repo'
    }, {
      label: 'Diskussion geschlossen',
      key: 'discussionClosed',
      ref: 'bool'
    }, {
      label: 'Lange Beiträge zuklappen',
      key: 'collapsable',
      ref: 'bool'
    }, {
      label: 'Tag obligatorisch für neuen root-Beitrag',
      key: 'tagRequired',
      ref: 'bool'
    }, {
      label: 'Tags (kommasepariert)',
      key: 'tags'
    }].concat(_toConsumableArray(customMetaFields))
  }, args));
};

var _default = createSchema;
exports.default = _default;