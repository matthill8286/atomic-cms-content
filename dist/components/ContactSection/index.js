var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/ContactSection/index.tsx",
    _this = this;

import React from 'react';
import { Row, Cell, Picture, Heading, Offset, Grid } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledPaddedSection } from "./ContactSection.styled";
export var ContactSection = function ContactSection(_ref) {
  var contactImage = _ref.contactImage,
      contactHeading = _ref.contactHeading,
      richTextContactSection = _ref.richTextContactSection,
      _ref$sectionColor = _ref.sectionColor,
      sectionColor = _ref$sectionColor === void 0 ? 'clear' : _ref$sectionColor,
      paddingTop = _ref.paddingTop,
      paddingBottom = _ref.paddingBottom;
  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, React.createElement(Offset, {
    colsXl: 1,
    colsLg: 1,
    colsMd: 0,
    colsSm: 0,
    colsXs: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, contactHeading && React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, React.createElement(Heading, {
    scale: "level-2",
    tag: "h2",
    color: "black",
    margin: "md 0",
    padding: "lg 0",
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, contactHeading))), React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, React.createElement(Cell, {
    columns: 6,
    colsLg: 6,
    colsMd: 4,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, React.createElement(StyledPaddedSection, {
    headingColor: "black",
    align: "flex-start",
    justify: "center",
    withPadding: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, Serializer(richTextContactSection.raw, ConfigurableGraphCmsHtmlSerializer({
    color: 'black',
    margins: '0 0 xs 0',
    inline: true,
    forceNewTab: true
  })))), React.createElement(Cell, {
    columns: 6,
    colsLg: 6,
    colsMd: 4,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, React.createElement(StyledPaddedSection, {
    align: "center",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, (contactImage === null || contactImage === void 0 ? void 0 : contactImage.url) && React.createElement(Picture, {
    alt: contactImage === null || contactImage === void 0 ? void 0 : contactImage.altText,
    src: contactImage === null || contactImage === void 0 ? void 0 : contactImage.url,
    width: "100%",
    height: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }))))))));
};
//# sourceMappingURL=index.js.map