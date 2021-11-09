import * as React from 'react';
import { Grid, Cell, Row, styled, media } from '@matthill8286/atomic-ui';
import { StyledMultiColumnTextSection } from "./MultiColumnTextSection.styled";
import { CustomSection } from "../CustomSection";
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
var StyledCustomSection = styled(CustomSection).withConfig({
  displayName: "MultiColumnTextSection__StyledCustomSection",
  componentId: "sc-14wpwym-0"
})(["\n  column-count: 2;\n  column-gap: 48px;\n  padding-top: ", ";\n\n  ", " {\n    column-count: 1;\n    padding: 0;\n  }\n"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.lg;
}, media.maxMd);
export * from "./MultiColumnTextSection.types";
export var MultiColumnTextSection = function MultiColumnTextSection(_ref2) {
  var richTextColumns = _ref2.richTextColumns,
      sectionColor = _ref2.sectionColor,
      anchorId = _ref2.anchorId,
      _ref2$textColor = _ref2.textColor,
      textColor = _ref2$textColor === void 0 ? 'grey5' : _ref2$textColor;
  return React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    colsXl: 12,
    colsLg: 12,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4
  }, React.createElement(StyledCustomSection, {
    color: sectionColor
  }, React.createElement(StyledMultiColumnTextSection, {
    color: textColor,
    id: anchorId !== null && anchorId !== void 0 ? anchorId : undefined
  }, Serializer(richTextColumns, ConfigurableGraphCmsHtmlSerializer({
    color: textColor,
    fontSize: '17px'
  })))))));
};
//# sourceMappingURL=index.js.map