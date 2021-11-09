var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/GroupRichTextSection/index.tsx",
    _this = this;

import * as React from 'react';
import { Card, Grid, Cell, Row, Offset } from '@matthill8286/atomic-ui';
import { StyledCardRichText, StyledGroupRichText } from "./GroupRichTextSection.styled";
import { CustomSection } from "../CustomSection";
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from "../Serializer";
export * from "./GroupRichTextSection.types";

var renderTextRows = function renderTextRows(fields) {
  return fields.map(function (field, index) {
    return field.textField && React.createElement(CustomSection, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, React.createElement(Grid, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, Serializer(field.textField, ConfigurableGraphCmsHtmlSerializer({}))));
  });
};

export var GroupRichTextSection = function GroupRichTextSection(_ref) {
  var fields = _ref.fields,
      sectionColor = _ref.sectionColor,
      anchorId = _ref.anchorId;
  return React.createElement(StyledGroupRichText, {
    id: anchorId !== null && anchorId !== void 0 ? anchorId : undefined,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, React.createElement(CustomSection, {
    color: sectionColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
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
      lineNumber: 43,
      columnNumber: 13
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
      lineNumber: 44,
      columnNumber: 13
    }
  }, React.createElement(Card, {
    elevation: 0,
    elevationHover: 0,
    padding: "md",
    shape: "rounded-big",
    surface: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, React.createElement(StyledCardRichText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, renderTextRows(fields))))))));
};
//# sourceMappingURL=index.js.map