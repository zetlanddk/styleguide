"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DynamicComponent = _interopRequireDefault(require("../../components/DynamicComponent"));

var _ErrorBoundary = _interopRequireDefault(require("../../components/ErrorBoundary"));

var _Figure = require("../../components/Figure");

var _utils = require("mdast-react-render/lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var createDynamicComponent = function createDynamicComponent(_ref) {
  var t = _ref.t,
      dynamicComponentRequire = _ref.dynamicComponentRequire,
      insertButtonText = _ref.insertButtonText;
  return {
    matchMdast: (0, _utils.matchZone)('DYNAMIC_COMPONENT'),
    component: function component(_ref2) {
      var showException = _ref2.showException,
          _ref2$raw = _ref2.raw,
          raw = _ref2$raw === void 0 ? false : _ref2$raw,
          size = _ref2.size,
          props = _objectWithoutProperties(_ref2, ["showException", "raw", "size"]);

      var content = _react.default.createElement(_ErrorBoundary.default, {
        showException: showException,
        failureMessage: t('styleguide/DynamicComponent/error')
      }, _react.default.createElement(_DynamicComponent.default, _extends({
        size: size
      }, props)));

      if (raw) {
        return content;
      }

      return _react.default.createElement(_Figure.Figure, {
        size: size
      }, content);
    },
    props: function props(node) {
      var html = node.children.find(function (c) {
        return c.type === 'code' && c.lang === 'html';
      });
      return {
        raw: node.data.raw,
        size: node.data.size,
        src: node.data.src,
        html: html && html.value,
        props: node.data.props,
        loader: node.data.loader,
        require: dynamicComponentRequire
      };
    },
    editorModule: 'dynamiccomponent',
    editorOptions: {
      insertTypes: ['PARAGRAPH'],
      insertButtonText: insertButtonText
    },
    isVoid: true
  };
};

var _default = createDynamicComponent;
exports.default = _default;