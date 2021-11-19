import * as React from 'react';
import { Grid, Cell, Row, styled, media } from '@matthill8286/atomic-ui';
import { StyledMultiColumnTextSection } from './MultiColumnTextSection.styled';
import { CustomSection } from '../CustomSection';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer';
var StyledCustomSection = styled(CustomSection).withConfig({
  displayName: "MultiColumnSection__StyledCustomSection",
  componentId: "k5kfpz-0"
})(["column-count:2;column-gap:48px;padding-top:", ";", "{column-count:1;padding:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.lg;
}, media.maxMd);
export * from './MultiColumnTextSection.types';
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
    id: anchorId !== null && anchorId !== void 0 ? anchorId : undefined
  }, Serializer(richTextColumns.raw, ConfigurableGraphCmsHtmlSerializer({
    color: textColor,
    fontSize: '17px'
  })))))));
};
//# sourceMappingURL=MultiColumnSection.js.map