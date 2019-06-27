"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontFaces = exports.fontFamilies = void 0;

var _env = _interopRequireWildcard(require("./env"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fontFamilies = _objectSpread({
  serifTitle: 'Georgia-Bold, serif',
  serifRegular: 'Georgia, serif',
  serifItalic: 'Georgia-Italic, serif',
  serifBold: 'Georgia-Bold, serif',
  sansSerifRegular: 'Helvetica-Neue-Regular, Helvetica Neue, Helvetica, sans-serif',
  sansSerifItalic: 'Helvetica-Neue-Italic, Helvetica Neue, Helvetica, sans-serif',
  sansSerifMedium: 'Helvetica-Neue-Medium, Helvetica-Bold, sans-serif',
  monospaceRegular: 'Menlo, Courier, monospace',
  cursiveTitle: 'sans-serif'
}, (0, _env.getJson)('FONT_FAMILIES'));

exports.fontFamilies = fontFamilies;

var fontFaces = function fontFaces() {
  return _env.default.FONT_FACES || '';
};

exports.fontFaces = fontFaces;