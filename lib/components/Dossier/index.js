"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TeaserFrontDossier", {
  enumerable: true,
  get: function get() {
    return _Teaser.default;
  }
});
Object.defineProperty(exports, "TeaserFrontDossierIntro", {
  enumerable: true,
  get: function get() {
    return _TeaserIntro.default;
  }
});
Object.defineProperty(exports, "TeaserFrontDossierHeadline", {
  enumerable: true,
  get: function get() {
    return _Headline.default;
  }
});
Object.defineProperty(exports, "TeaserFrontDossierLead", {
  enumerable: true,
  get: function get() {
    return _Lead.default;
  }
});
Object.defineProperty(exports, "TeaserFrontDossierMore", {
  enumerable: true,
  get: function get() {
    return _More.default;
  }
});
Object.defineProperty(exports, "DossierTag", {
  enumerable: true,
  get: function get() {
    return _Tag.default;
  }
});
Object.defineProperty(exports, "DossierSubheader", {
  enumerable: true,
  get: function get() {
    return _Subheader.default;
  }
});
exports.DossierTileHeadline = void 0;

var _DossierTileHeadline = _interopRequireWildcard(require("./TileHeadline"));

var _Teaser = _interopRequireDefault(require("./Teaser"));

var _TeaserIntro = _interopRequireDefault(require("./TeaserIntro"));

var _Headline = _interopRequireDefault(require("./Headline"));

var _Lead = _interopRequireDefault(require("./Lead"));

var _More = _interopRequireDefault(require("./More"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _Subheader = _interopRequireDefault(require("./Subheader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DossierTileHeadline = _objectSpread({}, _DossierTileHeadline);

exports.DossierTileHeadline = DossierTileHeadline;