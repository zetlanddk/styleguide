"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatePath = exports.styles = exports.skipMdastImage = exports.globalInlines = exports.getDisplayWidth = exports.extractImage = exports.matchTeaserType = exports.matchTeaserGroup = exports.matchTeaser = exports.matchLast = exports.matchFigure = exports.matchQuote = exports.matchInfoBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _d3TimeFormat = require("d3-time-format");

var _Typography = require("../../components/Typography");

var _utils = require("mdast-react-render/lib/utils");

var _Figure = require("../../components/Figure");

var _PullQuote = require("../../components/PullQuote");

var _InfoBox = require("../../components/InfoBox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchInfoBox = (0, _utils.matchZone)('INFOBOX');
exports.matchInfoBox = matchInfoBox;
var matchQuote = (0, _utils.matchZone)('QUOTE');
exports.matchQuote = matchQuote;
var matchFigure = (0, _utils.matchZone)('FIGURE');
exports.matchFigure = matchFigure;

var matchLast = function matchLast(node, index, parent) {
  return index === parent.children.length - 1;
};

exports.matchLast = matchLast;
var matchTeaser = (0, _utils.matchZone)('TEASER');
exports.matchTeaser = matchTeaser;
var matchTeaserGroup = (0, _utils.matchZone)('TEASERGROUP');
exports.matchTeaserGroup = matchTeaserGroup;

var matchTeaserType = function matchTeaserType(teaserType) {
  return function (node) {
    return matchTeaser(node) && node.data.teaserType === teaserType;
  };
};

exports.matchTeaserType = matchTeaserType;

var extractImage = function extractImage(node) {
  return (0, _utils.matchImageParagraph)(node) ? node.children[0].url : undefined;
};

exports.extractImage = extractImage;

var getDisplayWidth = function getDisplayWidth(ancestors) {
  var infobox = ancestors.find(matchInfoBox);

  if (infobox) {
    return _InfoBox.INFOBOX_IMAGE_SIZES[infobox.data.figureSize || _InfoBox.INFOBOX_DEFAULT_IMAGE_SIZE];
  }

  var quote = ancestors.find(matchQuote);

  if (quote) {
    return _PullQuote.PULLQUOTE_IMAGE_SIZE;
  }

  var figure = ancestors.find(matchFigure);

  if (figure) {
    if (figure.data.size) {
      return _Figure.FIGURE_SIZES[figure.data.size];
    } // child of root === e2e, root === ancestor[-1]


    if (ancestors.indexOf(figure) === ancestors.length - 2) {
      return 1200;
    }
  }

  return _Figure.FIGURE_SIZES.center;
};

exports.getDisplayWidth = getDisplayWidth;
var nestedInlines = [{
  matchMdast: (0, _utils.matchType)('sub'),
  component: _Typography.Sub,
  editorModule: 'mark',
  editorOptions: {
    type: 'sub'
  }
}, {
  matchMdast: (0, _utils.matchType)('sup'),
  component: _Typography.Sup,
  editorModule: 'mark',
  editorOptions: {
    type: 'sup'
  }
}];
var globalInlines = nestedInlines.concat([{
  matchMdast: (0, _utils.matchType)('break'),
  component: function component() {
    return _react.default.createElement("br", null);
  },
  isVoid: true
}]);
exports.globalInlines = globalInlines;
var skipMdastImage = {
  matchMdast: _utils.matchImageParagraph,
  component: function component() {
    return null;
  },
  isVoid: true
};
exports.skipMdastImage = skipMdastImage;
var styles = {
  link: (0, _glamor.css)({
    color: 'inherit',
    textDecoration: 'none'
  })
};
exports.styles = styles;
var slugDateFormat = (0, _d3TimeFormat.timeFormat)('%Y/%m/%d');

var getDatePath = function getDatePath(_ref) {
  var publishDate = _ref.publishDate,
      slug = _ref.slug;
  return "/".concat(slugDateFormat(publishDate), "/").concat((slug || '').split('/').pop());
};

exports.getDatePath = getDatePath;