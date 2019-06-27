"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TeaserFrontImage", {
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
});
Object.defineProperty(exports, "TeaserFrontTypo", {
  enumerable: true,
  get: function get() {
    return _Typo.default;
  }
});
Object.defineProperty(exports, "TeaserFrontSplit", {
  enumerable: true,
  get: function get() {
    return _Split.default;
  }
});
Object.defineProperty(exports, "TeaserFrontTile", {
  enumerable: true,
  get: function get() {
    return _Tile.default;
  }
});
Object.defineProperty(exports, "TeaserFrontTileRow", {
  enumerable: true,
  get: function get() {
    return _Tile.TeaserFrontTileRow;
  }
});
Object.defineProperty(exports, "TeaserFrontFormat", {
  enumerable: true,
  get: function get() {
    return _Format.default;
  }
});
Object.defineProperty(exports, "TeaserFrontLead", {
  enumerable: true,
  get: function get() {
    return _Lead.default;
  }
});
Object.defineProperty(exports, "TeaserFrontSubject", {
  enumerable: true,
  get: function get() {
    return _Subject.default;
  }
});
Object.defineProperty(exports, "TeaserFrontCredit", {
  enumerable: true,
  get: function get() {
    return _Credit.default;
  }
});
Object.defineProperty(exports, "TeaserFrontCreditLink", {
  enumerable: true,
  get: function get() {
    return _CreditLink.default;
  }
});
exports.TeaserFrontTileHeadline = exports.TeaserFrontTypoHeadline = exports.TeaserFrontSplitHeadline = exports.TeaserFrontImageHeadline = void 0;

var _ImageHeadline = _interopRequireWildcard(require("./ImageHeadline"));

var _SplitHeadline = _interopRequireWildcard(require("./SplitHeadline"));

var _TypoHeadline = _interopRequireWildcard(require("./TypoHeadline"));

var _TileHeadline = _interopRequireWildcard(require("./TileHeadline"));

var _Image = _interopRequireDefault(require("./Image"));

var _Typo = _interopRequireDefault(require("./Typo"));

var _Split = _interopRequireDefault(require("./Split"));

var _Tile = _interopRequireWildcard(require("./Tile"));

var _Format = _interopRequireDefault(require("./Format"));

var _Lead = _interopRequireDefault(require("./Lead"));

var _Subject = _interopRequireDefault(require("./Subject"));

var _Credit = _interopRequireDefault(require("./Credit"));

var _CreditLink = _interopRequireDefault(require("./CreditLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TeaserFrontImageHeadline = _objectSpread({}, _ImageHeadline);

exports.TeaserFrontImageHeadline = TeaserFrontImageHeadline;

var TeaserFrontSplitHeadline = _objectSpread({}, _SplitHeadline);

exports.TeaserFrontSplitHeadline = TeaserFrontSplitHeadline;

var TeaserFrontTypoHeadline = _objectSpread({}, _TypoHeadline);

exports.TeaserFrontTypoHeadline = TeaserFrontTypoHeadline;

var TeaserFrontTileHeadline = _objectSpread({}, _TileHeadline);

exports.TeaserFrontTileHeadline = TeaserFrontTileHeadline;