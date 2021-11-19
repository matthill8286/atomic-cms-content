import React from 'react';
import { Grid, Cell, Row, Offset, Heading } from '@matthill8286/atomic-ui';
import { StyledTextSection } from './TextSection.styled';
import { CustomSection } from '../CustomSection';
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from '../Serializer';
export * from './TextSection.types';
export var TextSection = function TextSection(_ref) {
  var richText = _ref.richText,
      title = _ref.title,
      sectionColor = _ref.sectionColor,
      branded = _ref.branded,
      active = _ref.active,
      anchorId = _ref.anchorId,
      textColor = _ref.textColor,
      headingColor = _ref.headingColor,
      headingsBold = _ref.headingsBold,
      paddingTop = _ref.paddingTop,
      paddingBottom = _ref.paddingBottom,
      _ref$withHeading = _ref.withHeading,
      withHeading = _ref$withHeading === void 0 ? true : _ref$withHeading;
  return React.createElement(CustomSection, {
    color: branded ? 'primary' : sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
  }, React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Offset, {
    colsXl: 1,
    colsLg: 1,
    colsMd: 0,
    colsSm: 0,
    colsXs: 0
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4
  }, withHeading ? React.createElement(Heading, {
    color: branded ? 'white' : headingColor,
    weight: headingsBold ? 'bold' : 'normal',
    scale: "level-3",
    textAlign: branded ? 'center' : 'left',
    margin: "sm 0 xl"
  }, title) : null, React.createElement(StyledTextSection, {
    color: sectionColor,
    active: active,
    id: anchorId !== null && anchorId !== void 0 ? anchorId : undefined
  }, Serializer(richText.raw, ConfigurableGraphCmsHtmlSerializer({
    inline: true,
    bold: headingsBold,
    color: textColor,
    fontSize: '17px',
    textAlign: branded ? 'center' : 'left',
    headingColor: branded ? 'white' : headingColor
  })))))));
};
//# sourceMappingURL=index.js.map