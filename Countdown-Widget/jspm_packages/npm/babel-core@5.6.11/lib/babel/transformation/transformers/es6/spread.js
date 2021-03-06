/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getSpreadLiteral(spread, scope) {
  if (scope.hub.file.isLoose("es6.spread") && !t.isIdentifier(spread.argument, { name: "arguments" })) {
    return spread.argument;
  } else {
    return scope.toArray(spread.argument, true);
  }
}

function hasSpread(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (t.isSpreadElement(nodes[i])) {
      return true;
    }
  }
  return false;
}

function build(props, scope) {
  var nodes = [];

  var _props = [];

  var push = function push() {
    if (!_props.length) return;
    nodes.push(t.arrayExpression(_props));
    _props = [];
  };

  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    if (t.isSpreadElement(prop)) {
      push();
      nodes.push(getSpreadLiteral(prop, scope));
    } else {
      _props.push(prop);
    }
  }

  push();

  return nodes;
}

var metadata = {
  group: "builtin-advanced"
};

exports.metadata = metadata;
var visitor = {
  ArrayExpression: function ArrayExpression(node, parent, scope) {
    var elements = node.elements;
    if (!hasSpread(elements)) return;

    var nodes = build(elements, scope);
    var first = nodes.shift();

    if (!t.isArrayExpression(first)) {
      nodes.unshift(first);
      first = t.arrayExpression([]);
    }

    return t.callExpression(t.memberExpression(first, t.identifier("concat")), nodes);
  },

  CallExpression: function CallExpression(node, parent, scope) {
    var args = node.arguments;
    if (!hasSpread(args)) return;

    var contextLiteral = t.identifier("undefined");

    node.arguments = [];

    var nodes;
    if (args.length === 1 && args[0].argument.name === "arguments") {
      nodes = [args[0].argument];
    } else {
      nodes = build(args, scope);
    }

    var first = nodes.shift();
    if (nodes.length) {
      node.arguments.push(t.callExpression(t.memberExpression(first, t.identifier("concat")), nodes));
    } else {
      node.arguments.push(first);
    }

    var callee = node.callee;

    if (this.get("callee").isMemberExpression()) {
      var temp = scope.maybeGenerateMemoised(callee.object);
      if (temp) {
        callee.object = t.assignmentExpression("=", temp, callee.object);
        contextLiteral = temp;
      } else {
        contextLiteral = callee.object;
      }
      t.appendToMemberExpression(callee, t.identifier("apply"));
    } else {
      node.callee = t.memberExpression(node.callee, t.identifier("apply"));
    }

    node.arguments.unshift(contextLiteral);
  },

  NewExpression: function NewExpression(node, parent, scope, file) {
    var args = node.arguments;
    if (!hasSpread(args)) return;

    var nodes = build(args, scope);

    var context = t.arrayExpression([t.literal(null)]);

    args = t.callExpression(t.memberExpression(context, t.identifier("concat")), nodes);

    return t.newExpression(t.callExpression(t.memberExpression(file.addHelper("bind"), t.identifier("apply")), [node.callee, args]), []);
  }
};
exports.visitor = visitor;