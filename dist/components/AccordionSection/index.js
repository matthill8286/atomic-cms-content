var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/AccordionSection/index.tsx",
    _this = this;

import * as React from 'react';
import { useLocation } from 'react-router';
import { Grid, Cell, Row, Offset, Accordion } from '@matthill8286/atomic-ui';
import { StyledAccordionWrapper } from "./AccordionSection.styled";
import { CustomSection } from "../CustomSection";
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from "../Serializer";
export * from "./AccordionSection.types";
export var AccordionSection = function AccordionSection(_ref) {
  var _ref$entries = _ref.entries,
      entries = _ref$entries === void 0 ? [] : _ref$entries,
      sectionColor = _ref.sectionColor,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? 'grey6' : _ref$textColor,
      isLarge = _ref.isLarge,
      withIconsOnRight = _ref.withIconsOnRight,
      customAccordionEntries = _ref.customAccordionEntries;
  var location = useLocation();
  var anchoredAccordion = entries.find(function (entry) {
    return location.hash === "#".concat(entry.anchorId);
  });
  var openedIndex = anchoredAccordion && entries.indexOf(anchoredAccordion);
  var mappedAccordionEntries = entries.map(function (entry) {
    var accordionTitleComponent = entry.entryHeadline && Serializer(entry.entryHeadline.raw, ConfigurableGraphCmsHtmlSerializer({
      fontSize: 'md',
      color: 'grey6',
      margins: 'xxs 0'
    }));
    return {
      details: entry.entryContent && Serializer(entry.entryContent.raw, ConfigurableGraphCmsHtmlSerializer({
        primaryColor: sectionColor,
        inline: true,
        underline: false,
        margins: 'xxs 0'
      })),
      title: accordionTitleComponent
    };
  });
  return React.createElement(CustomSection, {
    color: sectionColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, React.createElement(Offset, {
    colsXs: 0,
    colsSm: 0,
    columns: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 6,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, React.createElement(StyledAccordionWrapper, {
    textColor: textColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, React.createElement(Accordion, {
    isLarge: isLarge,
    withIconsOnRight: withIconsOnRight,
    customLabelHeading: {
      bold: false,
      margin: 'sm 0',
      tag: 'div'
    },
    labelPadding: "xxs 0",
    entryPadding: "0 0 sm",
    entries: mappedAccordionEntries,
    openedIndex: openedIndex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }))))));
};
//# sourceMappingURL=index.js.map