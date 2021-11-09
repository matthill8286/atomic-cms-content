var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/Serializer/GraphCmsHtmlSerializer.tsx",
    _this = this;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

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
        tag: "strong",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 36
        }
      }, text);
    }), _defineProperty(_renderModifier, MARKS.ITALIC, function (text) {
      return React.createElement(CopyText, {
        tag: "em",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 38
        }
      }, text);
    }), _defineProperty(_renderModifier, MARKS.UNDERLINE, function (text) {
      return React.createElement(CopyText, {
        tag: "u",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 34
        }
      }, text);
    }), _defineProperty(_renderModifier, MARKS.CODE, function (text) {
      return React.createElement(CopyText, {
        tag: "code",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 29
        }
      }, text);
    }), _renderModifier),
    renderNode: (_renderNode = {}, _defineProperty(_renderNode, BLOCKS.PARAGRAPH, function (node, children) {
      return React.createElement(CopyText, {
        bold: false,
        weight: "regular",
        lineHeight: "lg",
        fontSize: "sm",
        withMargins: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.EMBEDDED_ASSET, function (node, children) {
      return React.createElement(Picture, {
        src: node.src,
        alt: node.alt,
        width: node.width,
        height: node.height,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      });
    }), _defineProperty(_renderNode, BLOCKS.HEADING_1, function (node, children) {
      return React.createElement(Heading, {
        tag: "h1",
        scale: "level-1",
        margin: "0 0 lg 0",
        fontFamily: "branded",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_2, function (node, children) {
      return React.createElement(Heading, {
        tag: "h2",
        scale: "level-2",
        margin: "0 0 lg 0",
        bold: true,
        color: "black",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_3, function (node, children) {
      return React.createElement(Heading, {
        tag: "h3",
        scale: "level-3",
        margin: "0 0 md 0",
        bold: true,
        color: "black",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_4, function (node, children) {
      return React.createElement(Heading, {
        tag: "h4",
        scale: "level-4",
        margin: "0 0 sm 0",
        color: "black",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_5, function (node, children) {
      return React.createElement(Heading, {
        tag: "h4",
        fontFamily: "branded",
        color: "black",
        margin: "0 0 sm 0",
        fontSize: "xl",
        scale: "level-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.HEADING_6, function (node, children) {
      return React.createElement(Heading, {
        tag: "h4",
        fontFamily: "branded",
        color: "black",
        margin: "0 0 sm 0",
        fontSize: "xl",
        scale: "level-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.OL_LIST, function (node, children) {
      return React.createElement(Lists, {
        ordered: true,
        withMargin: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, BLOCKS.UL_LIST, function (node, children) {
      return React.createElement(Lists, {
        withMargin: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }, children);
    }), _defineProperty(_renderNode, INLINES.HYPERLINK, function (node, children) {
      return React.createElement(Link, {
        href: node.href,
        title: node.title,
        iconLeft: React.createElement(Icon, {
          color: "primary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }
        }, React.createElement(IconRightArrow, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 17
          }
        })),
        underline: true,
        inline: !!isInline(node),
        target: node.openInNewTab ? '_blank' : '_self',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }
      }, children);
    }), _renderNode),
    renderText: function renderText(text) {
      return text.split('\n').reduce(function (children, textSegment, index) {
        return [].concat(_toConsumableArray(children), [index > 0 && React.createElement("br", {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 45
          }
        }), textSegment]);
      }, []);
    }
  };
  return documentToReactComponents(render, serialize);
};
//# sourceMappingURL=GraphCmsHtmlSerializer.js.map