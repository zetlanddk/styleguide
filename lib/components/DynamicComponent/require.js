"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireFrom = requireFrom;
// d3-require Version 1.1.0 Copyright 2018 Observable, Inc.
// Stripped down version
// - removed default resolver, only requireFrom
// currently our setup explodes with template literals or async/await

/* eslint-disable */
var modules = new Map();
var queue = [];
var map = queue.map;
var some = queue.some;
var hasOwnProperty = queue.hasOwnProperty;

function string(value) {
  return typeof value === "string" ? value : "";
}

function requireFrom(resolver) {
  var requireBase = requireRelative(null);

  function requireAbsolute(url) {
    if (typeof url !== "string") return url;
    var module = modules.get(url);
    if (!module) modules.set(url, module = new Promise(function (resolve, reject) {
      var script = document.createElement("script");

      script.onload = function () {
        try {
          resolve(queue.pop()(requireRelative(url)));
        } catch (error) {
          reject(new Error("invalid module"));
        }

        script.remove();
      };

      script.onerror = function () {
        reject(new Error("unable to load module"));
        script.remove();
      };

      script.async = true;
      script.src = url;
      window.define = define;
      document.head.appendChild(script);
    }));
    return module;
  }

  function requireRelative(base) {
    return function (name) {
      return Promise.resolve(resolver(name, base)).then(requireAbsolute);
    };
  }

  function requireAlias(aliases) {
    return requireFrom(function (name, base) {
      if (name in aliases) {
        name = aliases[name], base = null;
        if (typeof name !== "string") return name;
      }

      return resolver(name, base);
    });
  }

  function require(name) {
    return arguments.length > 1 ? Promise.all(map.call(arguments, requireBase)).then(merge) : requireBase(name);
  }

  require.alias = requireAlias;
  require.resolve = resolver;
  return require;
}

function merge(modules) {
  var o = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = modules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var m = _step.value;

      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          if (m[k] == null) Object.defineProperty(o, k, {
            get: getter(m, k)
          });else o[k] = m[k];
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return o;
}

function getter(object, name) {
  return function () {
    return object[name];
  };
}

function isexports(name) {
  return name + "" === "exports";
}

function define(name, dependencies, factory) {
  var n = arguments.length;
  if (n < 2) factory = name, dependencies = [];else if (n < 3) factory = dependencies, dependencies = typeof name === "string" ? [] : name;
  queue.push(some.call(dependencies, isexports) ? function (require) {
    var exports = {};
    return Promise.all(map.call(dependencies, function (name) {
      return isexports(name += "") ? exports : require(name);
    })).then(function (dependencies) {
      factory.apply(null, dependencies);
      return exports;
    });
  } : function (require) {
    return Promise.all(map.call(dependencies, require)).then(function (dependencies) {
      return typeof factory === "function" ? factory.apply(null, dependencies) : factory;
    });
  });
}

define.amd = {};