"use strict";

var _tape = _interopRequireDefault(require("tape"));

var _remarkPreset = require("@orbiting/remark-preset");

var _InfoBox = require("../../components/InfoBox");

var _PullQuote = require("../../components/PullQuote");

var _Figure = require("../../components/Figure");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseFirst = function parseFirst(string) {
  return (0, _remarkPreset.parse)(string).children[0];
};

(0, _tape.default)('article.utils.getDisplayWidth: infobox', function (assert) {
  var regularInfobox = parseFirst("\n<section><h6>INFOBOX</h6>\n\n![](/static/landscape.jpg?size=2000x1411)\n\n<hr /></section>\n  ");
  assert.equal((0, _utils.getDisplayWidth)([regularInfobox]), _InfoBox.INFOBOX_IMAGE_SIZES[_InfoBox.INFOBOX_DEFAULT_IMAGE_SIZE]);
  var mInfobox = parseFirst("\n<section><h6>INFOBOX</h6>\n\n```\n{\"figureSize\": \"M\"}\n```\n\n<section><h6>FIGURE</h6>\n\n![](/static/landscape.jpg?size=2000x1411)\n\n<hr /></section>\n\n<hr /></section>\n  ");
  assert.equal((0, _utils.getDisplayWidth)([mInfobox]), _InfoBox.INFOBOX_IMAGE_SIZES['M']);
  assert.end();
});
(0, _tape.default)('article.utils.getDisplayWidth: pull quote', function (assert) {
  var pullQuote = parseFirst("\n<section><h6>QUOTE</h6>\n\n<section><h6>FIGURE</h6>\n\n![](/static/landscape.jpg?size=2000x1411)\n\n_Foto: Laurent Burst_\n\n<hr /></section>\n\n<hr /></section>\n  ");
  assert.equal((0, _utils.getDisplayWidth)([pullQuote]), _PullQuote.PULLQUOTE_IMAGE_SIZE);
  assert.end();
});
(0, _tape.default)('article.utils.getDisplayWidth: figure', function (assert) {
  var rootNode = (0, _remarkPreset.parse)("\n<section><h6>CENTER</h6>\n\n<section><h6>FIGURE</h6>\n\n![](/static/landscape.jpg?size=2000x1411)\n\n_Foto: Laurent Burst_\n\n<hr /></section>\n\n<hr /></section>\n  ");
  var center = rootNode.children[0];
  var figure = center.children[0];
  assert.equal((0, _utils.getDisplayWidth)([figure, center, rootNode]), _Figure.FIGURE_SIZES.center, 'center figure');
  var breakoutFigure = parseFirst("\n<section><h6>FIGURE</h6>\n\n```\n{\"size\": \"breakout\"}\n```\n\n![](/static/landscape.jpg?size=2000x1411)\n\nEtwas B\xF6ses _Foto: Laurent Burst_\n\n<hr /></section>\n  ");
  assert.equal((0, _utils.getDisplayWidth)([breakoutFigure, center, rootNode]), _Figure.FIGURE_SIZES.breakout, 'center figure');
  var e2eFigureRootNode = (0, _remarkPreset.parse)("\n<section><h6>FIGURE</h6>\n\n![](/static/landscape.jpg?size=2000x1411)\n\n_Foto: Laurent Burst_\n\n<hr /></section>\n  ");
  var e2eFigure = e2eFigureRootNode.children[0];
  assert.equal((0, _utils.getDisplayWidth)([e2eFigure, e2eFigureRootNode]), 1200, 'e2e figure');
  assert.end();
});