"use strict";

var _tape = _interopRequireDefault(require("tape"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape.default)('getResizedSrcs: no size info', function (assert) {
  var props = (0, _utils.getResizedSrcs)('image.jpg', 2000);
  assert.equal(props.src, 'image.jpg');
  assert.equal(props.size, null);
  assert.equal(props.srcSet, undefined);
  assert.equal(props.maxWidth, undefined);
  assert.end();
});
(0, _tape.default)('getResizedSrcs: undefined src', function (assert) {
  var props = {};
  assert.doesNotThrow(function () {
    props = (0, _utils.getResizedSrcs)(undefined, 2000);
  }, 'handle undefined src gracefully');
  assert.equal(props.src, undefined);
  assert.equal(props.size, null);
  assert.equal(props.srcSet, undefined);
  assert.equal(props.maxWidth, undefined);
  assert.end();
});
(0, _tape.default)('getResizedSrcs: size info', function (assert) {
  var props = (0, _utils.getResizedSrcs)('image.jpg?size=4500x2500', 2000);
  assert.equal(props.src, 'image.jpg?size=4500x2500&resize=2000x');
  assert.deepEqual(props.size, {
    width: 4500,
    height: 2500
  });
  assert.equal(props.srcSet, 'image.jpg?size=4500x2500&resize=1000x 1000w,image.jpg?size=4500x2500&resize=2000x 2000w,image.jpg?size=4500x2500&resize=4000x 4000w');
  assert.equal(props.maxWidth, 4500);
  assert.end();
});
(0, _tape.default)('getResizedSrcs: undefined maxWidth if setMaxWidth is false', function (assert) {
  var props = (0, _utils.getResizedSrcs)('image.jpg?size=4500x2500', 2000, false);
  assert.equal(props.src, 'image.jpg?size=4500x2500&resize=2000x');
  assert.deepEqual(props.size, {
    width: 4500,
    height: 2500
  });
  assert.equal(props.srcSet, 'image.jpg?size=4500x2500&resize=1000x 1000w,image.jpg?size=4500x2500&resize=2000x 2000w,image.jpg?size=4500x2500&resize=4000x 4000w');
  assert.equal(props.maxWidth, undefined);
  assert.end();
});
(0, _tape.default)('getResizedSrcs: skip retina if src is too small', function (assert) {
  var props = (0, _utils.getResizedSrcs)('image.jpg?size=2000x1500', 2000);
  assert.equal(props.src, 'image.jpg?size=2000x1500&resize=2000x');
  assert.deepEqual(props.size, {
    width: 2000,
    height: 1500
  }); // no retina if it would be bigger or equal to the source

  assert.equal(props.srcSet, 'image.jpg?size=2000x1500&resize=1000x 1000w,image.jpg?size=2000x1500&resize=2000x 2000w');
  assert.equal(props.maxWidth, 2000);
  assert.end();
});
(0, _tape.default)('getResizedSrcs: add semi retina if src is too small for full retina', function (assert) {
  var props = (0, _utils.getResizedSrcs)('image.jpg?size=3000x1500', 2000);
  assert.equal(props.src, 'image.jpg?size=3000x1500&resize=2000x');
  assert.deepEqual(props.size, {
    width: 3000,
    height: 1500
  }); // no retina if it would be bigger or equal to the source

  assert.equal(props.srcSet, 'image.jpg?size=3000x1500&resize=1000x 1000w,image.jpg?size=3000x1500&resize=2000x 2000w,image.jpg?size=3000x1500&resize=3000x 3000w');
  assert.equal(props.maxWidth, 3000);
  assert.end();
});