"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = _interopRequireDefault(require("../schema"));

var _Container = _interopRequireDefault(require("./Container"));

var _Figure = _interopRequireDefault(require("./Figure"));

var _Center = _interopRequireDefault(require("../../../components/Center"));

var _Figure2 = require("../../../components/Figure");

var _Typography = require("../../../components/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var createSchema = function createSchema() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      args = _extends({}, _ref);

  return (0, _schema.default)(_objectSpread({
    Container: _Container.default,
    Cover: _Figure2.FigureCover,
    CoverImage: _Figure2.FigureImage,
    Center: _Center.default,
    Figure: _Figure.default,
    Image: _Figure2.FigureImage,
    Caption: _Figure2.FigureCaption,
    Byline: _Figure2.FigureByline,
    Sub: _Typography.Sub,
    Sup: _Typography.Sup
  }, args));
};

var _default = createSchema;
exports.default = _default;