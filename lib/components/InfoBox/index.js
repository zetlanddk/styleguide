"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "InfoBox", {
  enumerable: true,
  get: function get() {
    return _InfoBox.default;
  }
});
Object.defineProperty(exports, "INFOBOX_IMAGE_SIZES", {
  enumerable: true,
  get: function get() {
    return _InfoBox.IMAGE_SIZES;
  }
});
Object.defineProperty(exports, "INFOBOX_DEFAULT_IMAGE_SIZE", {
  enumerable: true,
  get: function get() {
    return _InfoBox.DEFAULT_IMAGE_SIZE;
  }
});
Object.defineProperty(exports, "InfoBoxText", {
  enumerable: true,
  get: function get() {
    return _Text.default;
  }
});
Object.defineProperty(exports, "InfoBoxTitle", {
  enumerable: true,
  get: function get() {
    return _Title.default;
  }
});

var _InfoBox = _interopRequireWildcard(require("./InfoBox"));

var _Text = _interopRequireDefault(require("./Text"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }