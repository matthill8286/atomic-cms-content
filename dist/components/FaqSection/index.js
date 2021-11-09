var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/FaqSection/index.tsx",
    _this = this;

import * as React from 'react';
import { Grid, Cell, Row, Offset } from '@matthill8286/atomic-ui';
import { AccordionSection, AccordionSchemaType } from "../AccordionSection";
import { StyledFAQ } from "./FaqSection.styled";
import { CustomSection } from "../CustomSection";
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from "../Serializer";
export * from "./FaqSection.types";
export var FAQSection = function FAQSection(_ref) {
  var entries = _ref.entries,
      headline = _ref.headline;
  return React.createElement(StyledFAQ, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, headline && (headline.length > 0 || headline) && React.createElement(CustomSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, React.createElement(Offset, {
    colsXl: 1,
    colsLg: 1,
    colsMd: 1,
    colsSm: 1,
    colsXs: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 6,
    colsSm: 6,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, Serializer(headline.raw, ConfigurableGraphCmsHtmlSerializer({})))))), "`", React.createElement(AccordionSection, {
    entries: entries,
    schemaType: AccordionSchemaType.Faq,
    isLarge: true,
    sectionColor: "transparent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};
//# sourceMappingURL=index.js.map