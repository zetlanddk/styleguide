"use strict";

var _tape = _interopRequireDefault(require("tape"));

var _slug = require("./slug");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape.default)('lib.utils.slug', function (assert) {
  assert.equal((0, _slug.slug)('John Doe'), 'john-doe', 'lower case and no spaces');
  assert.equal((0, _slug.slug)('   John Doe   '), 'john-doe', 'trim');
  assert.equal((0, _slug.slug)('John   Doe'), 'john-doe', 'double space');
  assert.equal((0, _slug.slug)('@~John,.?-+=|/Doe!'), 'john-doe', 'invalid chars');
  assert.equal((0, _slug.slug)('äüöß'), 'aeueoess', 'umlaut german');
  assert.equal((0, _slug.slug)('âàçéêèëîïôùû'), 'aaceeeeiiouu', 'umlaut french');
  assert.end();
});