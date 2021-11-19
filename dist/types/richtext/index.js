var _defaultNodeRenderers, _defaultModifierRende;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { nodeToReactComponent } from './nodeListToReactComponents';
import { BLOCKS, MARKS } from '../index';
export * from './graphcms-richtext';
var defaultNodeRenderers = (_defaultNodeRenderers = {}, _defineProperty(_defaultNodeRenderers, BLOCKS.PARAGRAPH, function (node, children) {
  return React.createElement("p", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_1, function (node, children) {
  return React.createElement("h1", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_2, function (node, children) {
  return React.createElement("h2", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_3, function (node, children) {
  return React.createElement("h3", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_4, function (node, children) {
  return React.createElement("h4", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_5, function (node, children) {
  return React.createElement("h5", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HEADING_6, function (node, children) {
  return React.createElement("h6", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.UL_LIST, function (node, children) {
  return React.createElement("ul", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.OL_LIST, function (node, children) {
  return React.createElement("ol", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.LIST_ITEM, function (node, children) {
  return React.createElement("li", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.QUOTE, function (node, children) {
  return React.createElement("blockquote", null, children);
}), _defineProperty(_defaultNodeRenderers, BLOCKS.HR, function () {
  return React.createElement("hr", null);
}), _defaultNodeRenderers);
var defaultModifierRenderers = (_defaultModifierRende = {}, _defineProperty(_defaultModifierRende, MARKS.BOLD, function (text) {
  return React.createElement("b", null, text);
}), _defineProperty(_defaultModifierRende, MARKS.ITALIC, function (text) {
  return React.createElement("i", null, text);
}), _defineProperty(_defaultModifierRende, MARKS.UNDERLINE, function (text) {
  return React.createElement("u", null, text);
}), _defineProperty(_defaultModifierRende, MARKS.CODE, function (text) {
  return React.createElement("code", null, text);
}), _defaultModifierRende);
export function defaultInlineUpdated(type, node) {
  return React.createElement("span", {
    key: node.key
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