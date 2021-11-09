var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/GenericSection/index.tsx",
    _this = this;

import React from 'react';
import { Row, Cell, Picture, Heading, Typo } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledPaddedSection } from "./GenericSection.styled";
export var GenericSection = function GenericSection(_ref) {
  var featureImage = _ref.featureImage,
      richTextSections = _ref.richTextSections,
      topTitle = _ref.topTitle,
      description = _ref.description,
      _ref$sectionColor = _ref.sectionColor,
      sectionColor = _ref$sectionColor === void 0 ? 'primary' : _ref$sectionColor,
      paddingTop = _ref.paddingTop,
      paddingBottom = _ref.paddingBottom;
  return React.createElement(CustomSection, {
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, featureImage && React.createElement(Picture, {
    alt: "featureImage.alt",
    src: featureImage,
    width: "100%",
    height: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), React.createElement(CustomSection, {
    color: sectionColor !== null && sectionColor !== void 0 ? sectionColor : 'primary',
    paddingTop: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, React.createElement(StyledPaddedSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, React.createElement(Heading, {
    scale: "level-2",
    textAlign: "center",
    color: "white",
    margin: "md 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, topTitle), React.createElement(Typo, {
    tag: "p",
    fontSize: "17px",
    color: "white",
    textAlign: "center",
    margin: "md 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, description), React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, richTextSections === null || richTextSections === void 0 ? void 0 : richTextSections.map(function (_ref2, index) {
    var document = _ref2.document;
    return React.createElement(Cell, {
      columns: 12 / richTextSections.length,
      key: "RichText-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, React.createElement(StyledPaddedSection, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, Serializer(document === null || document === void 0 ? void 0 : document.raw, ConfigurableGraphCmsHtmlSerializer({
      color: 'white',
      headingColor: 'white'
    }))));
  })))));
};
//# sourceMappingURL=index.js.map