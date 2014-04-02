'use strict';


var _identity = function(val) {
  return val;
};

var _isFunction = function(obj) {
  return typeof obj === 'function';
};

var _isArray = function(obj) {
  return obj instanceof Array;
};

var _forIn = function(obj, cb) {
  var k;
  for (k in obj) {
    cb(obj[k], k, obj);
  }
  return obj;
};

var _forOwn = function(obj, cb) {
  var k;
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      cb(obj[k], k, obj);
    }
  }
  return obj;
};

var _find = function(ar, cb) {
  var i;
  for (i=0; i < ar.length; i++) {
    if (cb(ar[i])) {
      return ar[i];
    }
  }
};

var _findLast = function(ar, cb) {
  var i;
  for (i=ar.length-1; i>=0; i--) {
    if (cb(ar[i])) {
      return ar[i];
    }
  }
};

var _keys = function(obj) {
  var keys = [];
  _forOwn(obj, function(v, k) {
    keys.push(k);
  });
  return keys;
};

var _methods = function(obj) {
  var result = [],
    k;
  for (k in obj) {
    if (_isFunction(obj[k])) {
      result.push(k);
    }
  }
  return result.sort();
};

var _omit = function(obj, props) {
  var result = {},
    k;
  if (!_isArray(props)) {
    props = Array.prototype.slice.call(arguments, 1);
  }
  for (k in obj) {
    if (!~props.indexOf(k)) {
      result[k] = obj[k];
    }
  }
  return result;
};

var _pick = function(obj, props) {
  var result = {},
    k;
  if (!_isArray(props)) {
    props = Array.prototype.slice.call(arguments, 1);
  }
  for (k in obj) {
    if (~props.indexOf(k)) {
      result[k] = obj[k];
    }
  }
  return result;
};

var _extend = function(dest, src) {
  _forOwn(src, function(v, k) {
    dest[k] = v;
  });
  return dest;
};

var _defaults = function(dest, src) {
  _forOwn(src, function(v, k) {
    if (!(k in dest)) {
      dest[k] = v;
    }
  });
  return dest;
};

var _forEach = function(col, cb) {
  if (_isArray(col)) {
    for (var i = 0; i<col.length; i++) {
      cb(col[i], i, col);
    }
  } else {
    for (var k in col) {
      cb(col[k], k, col);
    }
  }
  return col;
};

var _map = function(col, cb) {
  var result = [];
  _forEach(col, function(v, k) {
    result.push(cb(v, k));
  });
  return result;
};

angular.module('parseRestApi')
  .factory('parseFunctionUtils', function () {
    var parseFunctionUtils;

    parseFunctionUtils = {
      identity: _identity,
      isFunction: _isFunction,
      isArray: _isArray,
      forIn: _forIn,
      forOwn: _forOwn,
      find: _find,
      findLast: _findLast,
      keys: _keys,
      methods: _methods,
      omit: _omit,
      pick: _pick,
      extend: _extend,
      defaults: _defaults,
      map: _map
    };
    return parseFunctionUtils;
  });
