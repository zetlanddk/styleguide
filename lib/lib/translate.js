"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFormatter = exports.createPlaceholderFormatter = void 0;

var createPlaceholderFormatter = function createPlaceholderFormatter() {
  var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var formatter = function formatter() {
    return placeholder;
  };

  formatter.elements = function () {
    return [placeholder];
  };

  formatter.first = formatter;
  formatter.first.elements = formatter.elements;
  formatter.pluralize = formatter;
  formatter.pluralize.elements = formatter.elements;
  return formatter;
};

exports.createPlaceholderFormatter = createPlaceholderFormatter;

var createFormatter = function createFormatter(translations) {
  var index = translations.reduce(function (accumulator, translation) {
    accumulator[translation.key] = translation.value;
    return accumulator;
  }, {});

  var formatter = function formatter(key, replacements, missingValue) {
    var message = index[key] || (missingValue !== undefined ? missingValue : "TK(".concat(key, ")"));

    if (replacements) {
      Object.keys(replacements).forEach(function (replacementKey) {
        message = message.replace("{".concat(replacementKey, "}"), replacements[replacementKey]);
      });
    }

    return message;
  };

  var firstKey = function firstKey(keys) {
    return keys.find(function (k) {
      return index[k] !== undefined;
    }) || keys[keys.length - 1];
  };

  var pluralizationKeys = function pluralizationKeys(baseKey, replacements) {
    return ["".concat(baseKey, "/").concat(replacements.count), "".concat(baseKey, "/other")];
  };

  formatter.first = function (keys, replacements, missingValue) {
    return formatter(firstKey(keys), replacements, missingValue);
  };

  formatter.pluralize = function (baseKey, replacements, missingValue) {
    return formatter.first(pluralizationKeys(baseKey, replacements), replacements, missingValue);
  };

  var createReplacementReducer = function createReplacementReducer(replacements) {
    return function (r, part) {
      if (part[0] === '{') {
        r.push(replacements[part.slice(1, -1)] || '');
      } else {
        r.push(part);
      }

      return r;
    };
  };

  formatter.elements = function (key, replacements, missingValue) {
    return formatter(key, undefined, missingValue).split(/(\{[^{}]+\})/g).filter(Boolean).reduce(createReplacementReducer(replacements), []);
  };

  formatter.first.elements = function (keys, replacements, missingValue) {
    return formatter.elements(firstKey(keys), replacements, missingValue);
  };

  formatter.pluralize.elements = function (baseKey, replacements, missingValue) {
    return formatter.first.elements(pluralizationKeys(baseKey, replacements), replacements, missingValue);
  };

  return formatter;
};

exports.createFormatter = createFormatter;