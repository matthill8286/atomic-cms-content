var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/EmbeddedSection/index.tsx",
    _this = this;

import React from 'react';
import { Grid, Row, Cell, Heading } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledPaddedEmbedSection, StyledPaddedEmbed } from "./EmbeddedSection.styled";
export var EmbeddedSection = function EmbeddedSection(_ref) {
  var embeddedSection = _ref.embeddedSection,
      sectionColor = _ref.sectionColor,
      title = _ref.title;
  return React.createElement(CustomSection, {
    color: sectionColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, React.createElement(Heading, {
    scale: "level-2",
    textAlign: "center",
    margin: "xxxxl 0 sm 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, title))), React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, React.createElement(StyledPaddedEmbedSection, {
    overrideOver: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, React.createElement(StyledPaddedEmbed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, embeddedSection && Serializer(embeddedSection.raw, ConfigurableGraphCmsHtmlSerializer({
    textAlign: 'center'
  }))))))));
};
//# sourceMappingURL=index.js.map