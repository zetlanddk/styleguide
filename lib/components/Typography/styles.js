"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quoteText = exports.quote = exports.label = exports.hr = exports.p = exports.lead = exports.h2 = exports.h1 = exports.cursiveTitle20 = exports.cursiveTitle22 = exports.cursiveTitle26 = exports.cursiveTitle30 = exports.cursiveTitle32 = exports.cursiveTitle58 = exports.sansSerifMedium12 = exports.sansSerifMedium14 = exports.sansSerifMedium16 = exports.sansSerifMedium19 = exports.sansSerifMedium20 = exports.sansSerifMedium22 = exports.sansSerifMedium26 = exports.sansSerifMedium30 = exports.sansSerifMedium32 = exports.sansSerifMedium40 = exports.sansSerifMedium58 = exports.sansSerifRegular10 = exports.sansSerifRegular11 = exports.sansSerifRegular12 = exports.sansSerifRegular13 = exports.sansSerifRegular14 = exports.sansSerifRegular15 = exports.sansSerifRegular16 = exports.sansSerifRegular18 = exports.sansSerifRegular19 = exports.sansSerifRegular21 = exports.sansSerifRegular23 = exports.sansSerifRegular30 = exports.serifBold17 = exports.serifBold19 = exports.serifBold24 = exports.serifBold28 = exports.serifBold36 = exports.serifBold42 = exports.serifBold52 = exports.serifRegular14 = exports.serifRegular16 = exports.serifRegular17 = exports.serifRegular18 = exports.serifRegular19 = exports.serifRegular21 = exports.serifRegular23 = exports.serifRegular25 = exports.serifTitle20 = exports.serifTitle22 = exports.serifTitle26 = exports.serifTitle30 = exports.serifTitle32 = exports.serifTitle38 = exports.serifTitle58 = exports.link = void 0;

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _fonts = require("../../theme/fonts");

var _mediaQueries = require("../../theme/mediaQueries");

var _objectSpread2, _objectSpread3, _objectSpread4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var link = {
  textDecoration: 'none',
  color: _colors.default.primary,
  ':visited': {
    color: _colors.default.primary
  },
  ':hover': {
    color: _colors.default.secondary
  } // serifTitle

};
exports.link = link;
var serifTitle58 = {
  fontFamily: _fonts.fontFamilies.serifTitle,
  fontSize: 58,
  fontWeight: 'normal',
  lineHeight: '60px'
};
exports.serifTitle58 = serifTitle58;
var serifTitle38 = {
  fontFamily: _fonts.fontFamilies.serifTitle,
  fontSize: 38,
  fontWeight: 'normal',
  lineHeight: '43px'
};
exports.serifTitle38 = serifTitle38;
var serifTitle32 = {
  fontFamily: _fonts.fontFamilies.serifTitle,
  fontSize: 32,
  fontWeight: 'normal',
  lineHeight: '34px'
};
exports.serifTitle32 = serifTitle32;
var serifTitle30 = {
  fontFamily: _fonts.fontFamilies.serifTitle,
  fontSize: 30,
  fontWeight: 'normal',
  lineHeight: '34px'
};
exports.serifTitle30 = serifTitle30;
var serifTitle26 = {
  fontFamily: _fonts.fontFamilies.serifTitle,
  fontSize: 26,
  fontWeight: 'normal',
  lineHeight: '28px'
};
exports.serifTitle26 = serifTitle26;
var serifTitle22 = {
  fontFamily: _fonts.fontFamilies.serifTitle,
  fontSize: 22,
  fontWeight: 'normal',
  lineHeight: '24px'
};
exports.serifTitle22 = serifTitle22;
var serifTitle20 = {
  fontFamily: _fonts.fontFamilies.serifTitle,
  fontSize: 20,
  fontWeight: 'normal',
  lineHeight: '22px' // serifRegular

};
exports.serifTitle20 = serifTitle20;
var serifRegular25 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 25,
  lineHeight: '33px'
};
exports.serifRegular25 = serifRegular25;
var serifRegular23 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 23,
  lineHeight: '30px'
};
exports.serifRegular23 = serifRegular23;
var serifRegular21 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 21,
  lineHeight: '32px'
};
exports.serifRegular21 = serifRegular21;
var serifRegular19 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 19,
  lineHeight: '30px'
};
exports.serifRegular19 = serifRegular19;
var serifRegular18 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 18,
  lineHeight: '24px'
};
exports.serifRegular18 = serifRegular18;
var serifRegular17 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 17,
  lineHeight: '26px'
};
exports.serifRegular17 = serifRegular17;
var serifRegular16 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 16,
  lineHeight: '24px'
};
exports.serifRegular16 = serifRegular16;
var serifRegular14 = {
  fontFamily: _fonts.fontFamilies.serifRegular,
  fontSize: 14,
  lineHeight: '19px' // serifBold

};
exports.serifRegular14 = serifRegular14;
var serifBold52 = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal',
  fontSize: 52,
  lineHeight: '56px',
  letterSpacing: -0.45
};
exports.serifBold52 = serifBold52;
var serifBold42 = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal',
  fontSize: 42,
  lineHeight: '48px',
  letterSpacing: -0.3
};
exports.serifBold42 = serifBold42;
var serifBold36 = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal',
  fontSize: 36,
  lineHeight: '38px',
  letterSpacing: -0.3
};
exports.serifBold36 = serifBold36;
var serifBold28 = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal',
  fontSize: 28,
  lineHeight: '33px'
};
exports.serifBold28 = serifBold28;
var serifBold24 = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal',
  fontSize: 24,
  lineHeight: '30px',
  letterSpacing: -0.21
};
exports.serifBold24 = serifBold24;
var serifBold19 = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal',
  fontSize: 19,
  lineHeight: '24px'
};
exports.serifBold19 = serifBold19;
var serifBold17 = {
  fontFamily: _fonts.fontFamilies.serifBold,
  fontWeight: 'normal',
  fontSize: 17,
  lineHeight: '26px' // sansSerifRegular

};
exports.serifBold17 = serifBold17;
var sansSerifRegular30 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 30,
  lineHeight: '35px',
  letterSpacing: -0.26
};
exports.sansSerifRegular30 = sansSerifRegular30;
var sansSerifRegular23 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 23,
  lineHeight: '30px'
};
exports.sansSerifRegular23 = sansSerifRegular23;
var sansSerifRegular21 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 21,
  lineHeight: '32px'
};
exports.sansSerifRegular21 = sansSerifRegular21;
var sansSerifRegular19 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 19,
  lineHeight: '30px'
};
exports.sansSerifRegular19 = sansSerifRegular19;
var sansSerifRegular18 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 18,
  lineHeight: '30px'
};
exports.sansSerifRegular18 = sansSerifRegular18;
var sansSerifRegular16 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 16,
  lineHeight: '25px'
};
exports.sansSerifRegular16 = sansSerifRegular16;
var sansSerifRegular15 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 15,
  lineHeight: '21px'
};
exports.sansSerifRegular15 = sansSerifRegular15;
var sansSerifRegular14 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 14,
  lineHeight: '17px'
};
exports.sansSerifRegular14 = sansSerifRegular14;
var sansSerifRegular13 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 13,
  lineHeight: '16px'
};
exports.sansSerifRegular13 = sansSerifRegular13;
var sansSerifRegular12 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 12,
  lineHeight: '15px'
};
exports.sansSerifRegular12 = sansSerifRegular12;
var sansSerifRegular11 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 11,
  lineHeight: '12px'
};
exports.sansSerifRegular11 = sansSerifRegular11;
var sansSerifRegular10 = {
  fontFamily: _fonts.fontFamilies.sansSerifRegular,
  fontWeight: 'normal',
  fontSize: 10,
  lineHeight: '12px' // sansSerifMedium

};
exports.sansSerifRegular10 = sansSerifRegular10;
var sansSerifMedium58 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 58,
  fontWeight: 'normal',
  lineHeight: '60px'
};
exports.sansSerifMedium58 = sansSerifMedium58;
var sansSerifMedium40 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontWeight: 'normal',
  fontSize: 40,
  lineHeight: '46px',
  letterSpacing: -0.35
};
exports.sansSerifMedium40 = sansSerifMedium40;
var sansSerifMedium32 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 32,
  fontWeight: 'normal',
  lineHeight: '34px'
};
exports.sansSerifMedium32 = sansSerifMedium32;
var sansSerifMedium30 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 30,
  fontWeight: 'normal',
  lineHeight: '34px'
};
exports.sansSerifMedium30 = sansSerifMedium30;
var sansSerifMedium26 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 26,
  fontWeight: 'normal',
  lineHeight: '28px'
};
exports.sansSerifMedium26 = sansSerifMedium26;
var sansSerifMedium22 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontWeight: 'normal',
  fontSize: 22,
  lineHeight: '28px',
  letterSpacing: 'normal'
};
exports.sansSerifMedium22 = sansSerifMedium22;
var sansSerifMedium20 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontWeight: 'normal',
  fontSize: 20,
  lineHeight: '24px',
  letterSpacing: 'normal'
};
exports.sansSerifMedium20 = sansSerifMedium20;
var sansSerifMedium19 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 19,
  fontWeight: 'normal',
  lineHeight: '30px'
};
exports.sansSerifMedium19 = sansSerifMedium19;
var sansSerifMedium16 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 16,
  fontWeight: 'normal',
  lineHeight: '25px'
};
exports.sansSerifMedium16 = sansSerifMedium16;
var sansSerifMedium14 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 14,
  fontWeight: 'normal',
  lineHeight: '17px'
};
exports.sansSerifMedium14 = sansSerifMedium14;
var sansSerifMedium12 = {
  fontFamily: _fonts.fontFamilies.sansSerifMedium,
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '15px' // cursiveTitle

};
exports.sansSerifMedium12 = sansSerifMedium12;
var cursiveTitle58 = {
  fontFamily: _fonts.fontFamilies.cursiveTitle,
  fontSize: 58,
  fontWeight: 'normal',
  lineHeight: '60px'
};
exports.cursiveTitle58 = cursiveTitle58;
var cursiveTitle32 = {
  fontFamily: _fonts.fontFamilies.cursiveTitle,
  fontSize: 32,
  fontWeight: 'normal',
  lineHeight: '34px'
};
exports.cursiveTitle32 = cursiveTitle32;
var cursiveTitle30 = {
  fontFamily: _fonts.fontFamilies.cursiveTitle,
  fontSize: 30,
  fontWeight: 'normal',
  lineHeight: '34px'
};
exports.cursiveTitle30 = cursiveTitle30;
var cursiveTitle26 = {
  fontFamily: _fonts.fontFamilies.cursiveTitle,
  fontSize: 26,
  fontWeight: 'normal',
  lineHeight: '28px'
};
exports.cursiveTitle26 = cursiveTitle26;
var cursiveTitle22 = {
  fontFamily: _fonts.fontFamilies.cursiveTitle,
  fontSize: 22,
  fontWeight: 'normal',
  lineHeight: '24px'
};
exports.cursiveTitle22 = cursiveTitle22;
var cursiveTitle20 = {
  fontFamily: _fonts.fontFamilies.cursiveTitle,
  fontSize: 20,
  fontWeight: 'normal',
  lineHeight: '22px'
};
exports.cursiveTitle20 = cursiveTitle20;

var h1 = _objectSpread({}, serifBold36, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _mediaQueries.mUp, _objectSpread({}, serifBold52)), _defineProperty(_objectSpread2, "color", _colors.default.text), _defineProperty(_objectSpread2, "margin", '30px 0 20px 0'), _defineProperty(_objectSpread2, ':first-child', {
  marginTop: 0
}), _defineProperty(_objectSpread2, ':last-child', {
  marginBottom: 0
}), _objectSpread2));

exports.h1 = h1;

var h2 = _objectSpread({}, serifBold19, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _mediaQueries.mUp, _objectSpread({}, serifBold24)), _defineProperty(_objectSpread3, "color", _colors.default.text), _defineProperty(_objectSpread3, "margin", '30px 0 20px 0'), _defineProperty(_objectSpread3, ':first-child', {
  marginTop: 0
}), _defineProperty(_objectSpread3, ':last-child', {
  marginBottom: 0
}), _objectSpread3));

exports.h2 = h2;

var lead = _objectSpread({}, serifRegular25, {
  color: _colors.default.text,
  margin: '20px 0 20px 0'
});

exports.lead = lead;

var p = _objectSpread({
  color: _colors.default.text
}, serifRegular16, (_objectSpread4 = {}, _defineProperty(_objectSpread4, _mediaQueries.mUp, _objectSpread({}, serifRegular21)), _defineProperty(_objectSpread4, "margin", '20px 0 20px 0'), _defineProperty(_objectSpread4, ':first-child', {
  marginTop: 0
}), _defineProperty(_objectSpread4, ':last-child', {
  marginBottom: 0
}), _objectSpread4));

exports.p = p;
var hr = {
  border: 0,
  height: 1,
  color: _colors.default.divider,
  backgroundColor: _colors.default.divider,
  marginTop: 30,
  marginBottom: 30
};
exports.hr = hr;

var label = _objectSpread({}, sansSerifRegular14, {
  color: _colors.default.secondary
});

exports.label = label;

var quote = _objectSpread({}, sansSerifRegular21, {
  color: _colors.default.text
});

exports.quote = quote;
var quoteText = {};
exports.quoteText = quoteText;