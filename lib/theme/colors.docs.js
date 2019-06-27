"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _catalog = require("catalog");

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n", "\n\n## Formats\n\n", "\n\n## Charts\n\nMost charts will use sequential colors, e.g. bars all in the first sequential color and one highlight in the second. Opposite colors are used for diverging ranges, with an optional neutral color in the middle.\n\n", "\n", "\n", "\n\n### Discrete\n\nFor categories, e.g. 10 lines in a chart, each representing a country.\n\n", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default() {
  return (0, _catalog.markdown)(_templateObject(), _react.default.createElement(_react.Fragment, null, _react.default.createElement(_catalog.CodeSpecimen, {
    lang: "js"
  }, "import { colors } from '@project-r/styleguide'"), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 3,
    name: "primary",
    value: _colors.default.primary
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 2,
    name: "secondary",
    value: _colors.default.secondary
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "disabled",
    value: _colors.default.disabled
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 3,
    name: "primaryBg",
    value: _colors.default.primaryBg
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 2,
    name: "secondaryBg",
    value: _colors.default.secondaryBg
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "divider",
    value: _colors.default.divider
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 4,
    name: "text",
    value: _colors.default.text
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 2,
    name: "lightText",
    value: _colors.default.lightText
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "error",
    value: _colors.default.error
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "online",
    value: _colors.default.online
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "social",
    value: _colors.default.social
  })), _react.default.createElement(_react.Fragment, null, _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "editorial",
    value: _colors.default.editorial
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "feuilleton",
    value: _colors.default.feuilleton
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "scribble",
    value: _colors.default.scribble
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "meta",
    value: _colors.default.meta
  })), _colors.default.sequential3.map(function (c, i) {
    return _react.default.createElement(_catalog.ColorSpecimen, {
      span: 1,
      name: "sequential.".concat(i),
      value: c
    });
  }), [].concat(_colors.default.opposite3).reverse().map(function (c, i) {
    return _react.default.createElement(_catalog.ColorSpecimen, {
      span: 1,
      name: "opposite.".concat(2 - i),
      value: c
    });
  }), _react.default.createElement(_catalog.ColorSpecimen, {
    span: 1,
    name: "neutral",
    value: _colors.default.neutral
  }), _colors.default.discrete.map(function (c, i) {
    return _react.default.createElement(_catalog.ColorSpecimen, {
      span: 1,
      name: "discrete.".concat(i),
      value: c
    });
  }));
};

exports.default = _default;