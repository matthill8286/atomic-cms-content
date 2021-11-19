function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Picture, CopyText, Heading, Link, Typo, Icon, styled, Table, TableHead, TableBody, TableRow, TableCell } from '@matthill8286/atomic-ui';
import { BLOCKS, INLINES } from '../../types';
import { documentToReactComponents } from '../../types/richtext';
import { EmbeddedPlayer } from '../EmbeddedPlayer';
import { StyleguideArrow } from '@matthill8286/atomic-icon-library';
var StyledTable = styled(Table).withConfig({
  displayName: "ConfigurableGraphCmsHtmlSerializer__StyledTable",
  componentId: "sc-1ngr5nm-0"
})(["width:100%;table-layout:auto;border-collapse:collapse;thead{background-color:lightgray;}td{border:1px solid black;padding:5px;text-align:left;vertical-align:top;}"]);

var getChildTagName = function getChildTagName(childNode) {
  return childNode.italic ? 'em' : childNode.code ? 'pre' : childNode.underline ? 'u' : 'p';
};

export var ConfigurableGraphCmsHtmlSerializer = function ConfigurableGraphCmsHtmlSerializer() {
  var customProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (render) {
    var _renderNode;

    var serialize = {
      renderNode: (_renderNode = {}, _defineProperty(_renderNode, BLOCKS.HEADING_1, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Heading, {
          tag: "h1",
          scale: "level-1",
          margin: customProps.margins || 'lg 0',
          color: customProps.headingColor,
          bold: !!customProps.bold || !!(childNode !== null && childNode !== void 0 && childNode.bold),
          textAlign: customProps.textAlign
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.HEADING_2, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Heading, {
          tag: "h2",
          scale: "level-2",
          margin: customProps.margins || 'lg 0',
          bold: !!customProps.bold || !!(childNode !== null && childNode !== void 0 && childNode.bold),
          color: customProps.headingColor,
          textAlign: customProps.textAlign
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.HEADING_3, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Heading, {
          tag: "h3",
          scale: "level-3",
          margin: customProps.margins || 'md 0',
          textAlign: customProps.textAlign,
          color: customProps.headingColor,
          bold: !!customProps.bold || !!(childNode !== null && childNode !== void 0 && childNode.bold)
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.HEADING_4, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Heading, {
          tag: "h4",
          scale: "level-4",
          margin: customProps.margins || 'md 0',
          bold: !!customProps.bold || !!(childNode !== null && childNode !== void 0 && childNode.bold),
          color: customProps.headingColor,
          textAlign: customProps.textAlign
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.HEADING_5, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Heading, {
          tag: "h5",
          scale: "level-5",
          margin: customProps.margins || 'sm 0',
          bold: !!customProps.bold || !!(childNode !== null && childNode !== void 0 && childNode.bold),
          color: customProps.headingColor,
          textAlign: customProps.textAlign
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.HEADING_6, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Heading, {
          tag: "h6",
          scale: "level-5",
          margin: customProps.margins || 'xs 0',
          bold: !!customProps.bold || !!(childNode !== null && childNode !== void 0 && childNode.bold),
          color: customProps.headingColor,
          textAlign: customProps.textAlign
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.PARAGRAPH, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(CopyText, {
          lineHeight: "md",
          color: customProps.color,
          tag: getChildTagName(childNode),
          fontSize: customProps.fontSize,
          weight: childNode !== null && childNode !== void 0 && childNode.bold ? 'bold' : 'normal',
          margin: customProps.margins,
          textAlign: customProps.contentAlign
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.EMBEDDED_ASSET, function (node, children) {
        return React.createElement(Picture, {
          src: node.src,
          alt: node.altText,
          width: '100%',
          height: '100%'
        });
      }), _defineProperty(_renderNode, BLOCKS.EMBEDDED_MEDIA, function (node, children) {
        return React.createElement(EmbeddedPlayer, {
          embedUrl: node.url,
          allowfullscreen: !!customProps.allowfullscreen,
          width: '100%',
          height: '100%'
        });
      }), _defineProperty(_renderNode, BLOCKS.UL_LIST, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Typo, {
          tag: "ul",
          weight: childNode !== null && childNode !== void 0 && childNode.bold ? 'bold' : 'normal',
          underline: !!childNode.underline,
          lineHeight: "lg"
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.OL_LIST, function (node, children) {
        var _customProps$fontSize;

        var childNode = node.children[0];
        return React.createElement(Typo, {
          tag: "ol",
          weight: childNode !== null && childNode !== void 0 && childNode.bold ? 'bold' : 'normal',
          underline: !!childNode.underline,
          lineHeight: "lg",
          fontSize: (_customProps$fontSize = customProps.fontSize) !== null && _customProps$fontSize !== void 0 ? _customProps$fontSize : 'sm',
          color: customProps.color
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.LIST_ITEM, function (node, children) {
        var _customProps$fontSize2;

        var childNode = node.children[0];
        return React.createElement(Typo, {
          tag: "li",
          lineHeight: "md",
          weight: childNode !== null && childNode !== void 0 && childNode.bold ? 'bold' : 'normal',
          underline: !!childNode.underline,
          fontSize: (_customProps$fontSize2 = customProps.fontSize) !== null && _customProps$fontSize2 !== void 0 ? _customProps$fontSize2 : 'sm',
          color: customProps.color
        }, children);
      }), _defineProperty(_renderNode, INLINES.HYPERLINK, function (node, children) {
        var childNode = node.children[0];
        return React.createElement(Link, {
          href: node.href,
          title: node.title,
          color: customProps.linkColor,
          scale: customProps.linkScale,
          bold: !!(childNode !== null && childNode !== void 0 && childNode.bold) || !!customProps.linkBold,
          underline: !!customProps.underline,
          inline: Boolean(customProps.inline) || true,
          target: node.openInNewTab ? '_blank' : customProps.forceNewTab ? '_blank' : '_self',
          iconLeft: customProps.withIconOnLink ? React.createElement(Icon, {
            color: "primary"
          }, React.createElement(StyleguideArrow, null)) : undefined
        }, children);
      }), _defineProperty(_renderNode, BLOCKS.TABLE, function (node, children) {
        return React.createElement(StyledTable, null, children);
      }), _defineProperty(_renderNode, BLOCKS.TABLE_HEAD, function (node, children) {
        return React.createElement(TableHead, null, children);
      }), _defineProperty(_renderNode, BLOCKS.TABLE_BODY, function (node, children) {
        return React.createElement(TableBody, null, children);
      }), _defineProperty(_renderNode, BLOCKS.TABLE_ROW, function (node, children) {
        return React.createElement(TableRow, null, children);
      }), _defineProperty(_renderNode, BLOCKS.TABLE_CELL, function (node, children) {
        return React.createElement(TableCell, null, children);
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
};
//# sourceMappingURL=ConfigurableGraphCmsHtmlSerializer.js.map