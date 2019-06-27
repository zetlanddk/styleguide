"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slug = void 0;
var diacritics = [{
  base: 'a',
  letters: ['â', 'à']
}, {
  base: 'c',
  letters: ['ç']
}, {
  base: 'e',
  letters: ['é', 'ê', 'è', 'ë']
}, {
  base: 'i',
  letters: ['î', 'ï']
}, {
  base: 'o',
  letters: ['ô']
}, {
  base: 'u',
  letters: ['ù', 'û']
}, {
  base: 'ss',
  letters: ['ß']
}, {
  base: 'ae',
  letters: ['ä']
}, {
  base: 'ue',
  letters: ['ü']
}, {
  base: 'oe',
  letters: ['ö']
}];
var diacriticsMap = diacritics.reduce(function (map, diacritic) {
  diacritic.letters.forEach(function (letter) {
    map[letter] = diacritic.base;
  });
  return map;
}, {});

var slug = function slug(string) {
  return string.toLowerCase().replace(/[^\u0000-\u007E]/g, function (a) {
    return diacriticsMap[a] || a;
  }).replace(/[^0-9a-z]+/g, ' ').trim().replace(/\s+/g, '-');
};

exports.slug = slug;