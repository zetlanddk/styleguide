"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.underline = exports.ellipsize = void 0;
var ellipsize = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};
exports.ellipsize = ellipsize;
var underline = {
  textDecoration: 'underline',
  textDecorationSkip: 'ink'
};
exports.underline = underline;