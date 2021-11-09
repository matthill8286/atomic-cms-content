function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { CopyText, Link, Heading, Lists, Picture, Icon, IconRightArrow } from '@matthill8286/atomic-ui';
import { BLOCKS, MARKS, INLINES } from "../../types";
import { isInline } from "../../types/richtext/helpers";
export var GraphCmsHtmlSerializer = function GraphCmsHtmlSerializer(render) {
  var _renderModifier, _renderNode;

  var serialize = {
    renderModifier: (_renderModifier = {}, _defineProperty(_renderModifier, MARKS.BOLD, function (text) {
      return React.createElement(CopyText, {
        tag: "strong"
      }, text);
    }), _defineProperty(_renderModifier, MARKS.ITALIC, function (text) {
      return React.createElement(CopyText, {
        tag: "em"
      }, text);
    }), _defineProperty(_renderModifier, MARKS.UNDERLINE, function (text) {
      return React.createElement(CopyText, {
        tag: "u"
      }, text);
    }), _defineProperty(_renderModifier, MARKS.CODE, function (text) {
      return React.createElement(CopyText, {
        tag: "code"
      }, text);
    }), _renderModifier),
    renderNode: (_renderNode = {}, _defineProperty(_renderNode, BLOCKS.PARAGRAPH, function (node, children) {
      return React.createElement(CopyText, {
        bold: false,
        weight: "regular",
        lineHeight: "lg",
        fontSize: "sm",
        withMargins: true
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.EMBEDDED_ASSET, function (node, children) {
      return React.createElement(Picture, {
        src: node.src,
        alt: node.alt,
        width: node.width,
        height: node.height
      });
    }), _defineProperty(_renderNode, BLOCKS.HEADING_1, function (node, children) {
      return React.createElement(Heading, {
        tag: "h1",
        scale: "level-1",
        margin: "0 0 lg 0",
        fontFamily: "branded"
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_2, function (node, children) {
      return React.createElement(Heading, {
        tag: "h2",
        scale: "level-2",
        margin: "0 0 lg 0",
        bold: true,
        color: "black"
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_3, function (node, children) {
      return React.createElement(Heading, {
        tag: "h3",
        scale: "level-3",
        margin: "0 0 md 0",
        bold: true,
        color: "black"
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_4, function (node, children) {
      return React.createElement(Heading, {
        tag: "h4",
        scale: "level-4",
        margin: "0 0 sm 0",
        color: "black"
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_5, function (node, children) {
      return React.createElement(Heading, {
        tag: "h4",
        fontFamily: "branded",
        color: "black",
        margin: "0 0 sm 0",
        fontSize: "xl",
        scale: "level-4"
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_6, function (node, children) {
      return React.createElement(Heading, {
        tag: "h4",
        fontFamily: "branded",
        color: "black",
        margin: "0 0 sm 0",
        fontSize: "xl",
        scale: "level-4"
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.OL_LIST, function (node, children) {
      return React.createElement(Lists, {
        ordered: true,
        withMargin: true
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.UL_LIST, function (node, children) {
      return React.createElement(Lists, {
        withMargin: true
      }, children);
    }), _defineProperty(_renderNode, INLINES.HYPERLINK, function (node, children) {
      return React.createElement(Link, {
        href: node.href,
        title: node.title,
        iconLeft: React.createElement(Icon, {
          color: "primary"
        }, React.createElement(IconRightArrow, null)),
        underline: true,
        inline: !!isInline(node),
        target: node.openInNewTab ? '_blank' : '_self'
      }, children);
    }), _renderNode),
    renderText: function renderText(text) {
      return text.split('\n').reduce(function (children, textSegment, index) {
        return [].concat(_toConsumableArray(children), [index > 0 && React.createElement("br", {
          key: index
        }), textSegment]);
      }, []);
    }
  };
  return documentToReactComponents(render, serialize);
};
//# sourceMappingURL=GraphCmsHtmlSerializer.js.map