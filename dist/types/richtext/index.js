var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/types/richtext/index.tsx",
    _this = this,
    _defaultNodeRenderers,
    _defaultModifierRende;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { nodeToReactComponent } from "./nodeListToReactComponents";
import { INLINES, MARKS, BLOCKS } from "../index";
var defaultNodeRenderers = (_defaultNodeRenderers = {}, _defineProperty(_defaultNodeRenderers, BLOCKS.PARAGRAPH, function (node, children) {
  return React.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_1, function (node, children) {
  return React.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_2, function (node, children) {
  return React.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_3, function (node, children) {
  return React.createElement("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_4, function (node, children) {
  return React.createElement("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_5, function (node, children) {
  return React.createElement("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_6, function (node, children) {
  return React.createElement("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.UL_LIST, function (node, children) {
  return React.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 41
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.OL_LIST, function (node, children) {
  return React.createElement("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 41
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.LIST_ITEM, function (node, children) {
  return React.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 43
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.QUOTE, function (node, children) {
  return React.createElement("blockquote", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 39
    }
  }, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HR, function () {
  return React.createElement("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 22
    }
  });
}), _defineProperty(_defaultNodeRenderers, INLINES.EMBEDDED_ENTRY, function (node) {
  return defaultInlineUpdated(INLINES.EMBEDDED_ENTRY, node);
}), _defaultNodeRenderers);
var defaultModifierRenderers = (_defaultModifierRende = {}, _defineProperty(_defaultModifierRende, MARKS.BOLD, function (text) {
  return React.createElement("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, text);
}), _defineProperty(_defaultModifierRende, MARKS.ITALIC, function (text) {
  return React.createElement("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 27
    }
  }, text);
}), _defineProperty(_defaultModifierRende, MARKS.UNDERLINE, function (text) {
  return React.createElement("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 30
    }
  }, text);
}), _defineProperty(_defaultModifierRende, MARKS.CODE, function (text) {
  return React.createElement("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, text);
}), _defaultModifierRende);
export function defaultInlineUpdated(type, node) {
  return React.createElement("span", {
    key: node.key,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  }, node.type);
}
export function documentToReactComponents(richTextDocument) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!richTextDocument) {
    return null;
  }

  return nodeToReactComponent(richTextDocument, {
    renderNode: _objectSpread(_objectSpread({}, defaultNodeRenderers), options.renderNode),
    renderModifier: _objectSpread(_objectSpread({}, defaultModifierRenderers), options.renderModifier),
    renderText: options.renderText
  });
}
//# sourceMappingURL=index.js.map