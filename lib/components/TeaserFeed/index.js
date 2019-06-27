"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeaserFeed = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("./Container"));

var Headlines = _interopRequireWildcard(require("./Headline"));

var _Lead = _interopRequireDefault(require("./Lead"));

var _Credit = _interopRequireDefault(require("./Credit"));

var _glamor = require("glamor");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _mdastReactRender = require("mdast-react-render");

var _timeFormat = require("../../lib/timeFormat");

var _Typography = require("../Typography");

var _utils = require("mdast-react-render/lib/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var dateFormat = (0, _timeFormat.timeFormat)('%d.%m.%Y');
var styles = {
  link: (0, _glamor.css)({
    color: 'inherit',
    textDecoration: 'none'
  })
};
var br = {
  matchMdast: (0, _utils.matchType)('break'),
  component: function component() {
    return _react.default.createElement("br", null);
  },
  isVoid: true
};
var link = {
  matchMdast: (0, _utils.matchType)('link'),
  props: function props(node) {
    return {
      title: node.title,
      href: node.url
    };
  },
  component: _Typography.Editorial.A
};
var creditSchema = {
  rules: [link, br]
};

var DefaultLink = function DefaultLink(_ref) {
  var children = _ref.children,
      path = _ref.path;
  return children;
};

var TeaserFeed = function TeaserFeed(_ref2) {
  var metaKind = _ref2.kind,
      metaColor = _ref2.color,
      template = _ref2.template,
      format = _ref2.format,
      path = _ref2.path,
      title = _ref2.title,
      description = _ref2.description,
      credits = _ref2.credits,
      publishDate = _ref2.publishDate,
      _ref2$Link = _ref2.Link,
      Link = _ref2$Link === void 0 ? DefaultLink : _ref2$Link;
  var formatMeta = format && format.meta || {};
  var Headline = formatMeta.kind === 'meta' || metaKind === 'meta' || template === 'format' ? Headlines.Interaction : formatMeta.kind === 'scribble' || metaKind === 'scribble' ? Headlines.Scribble : Headlines.Editorial;
  var borderColor = formatMeta.title ? formatMeta.color || _colors.default[formatMeta.kind] : template === 'format' ? metaColor || _colors.default[metaKind] : undefined;
  var titleColor = metaColor ? metaColor : template === 'format' ? borderColor : undefined;
  return _react.default.createElement(_Container.default, {
    format: format,
    color: borderColor,
    Link: Link
  }, _react.default.createElement(Headline, {
    style: {
      color: titleColor
    }
  }, _react.default.createElement(Link, {
    href: path,
    passHref: true
  }, _react.default.createElement("a", _extends({}, styles.link, {
    href: path
  }), title))), _react.default.createElement(_Lead.default, null, _react.default.createElement(Link, {
    href: path,
    passHref: true
  }, _react.default.createElement("a", _extends({}, styles.link, {
    href: path
  }), description))), _react.default.createElement(_Credit.default, null, credits && credits.length > 0 ? (0, _mdastReactRender.renderMdast)(credits, creditSchema) : !!publishDate && dateFormat(new Date(publishDate))));
};

exports.TeaserFeed = TeaserFeed;