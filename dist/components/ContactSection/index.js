import React from 'react';
import { Row, Cell, Picture, Heading, Offset, Grid } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer';
import { CustomSection } from '../CustomSection';
import { StyledPaddedSection } from './ContactSection.styled';
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
  }, contactHeading && React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Heading, {
    scale: "level-2",
    tag: "h2",
    color: "black",
    margin: "md 0",
    padding: "lg 0",
    textAlign: "center"
  }, contactHeading))), React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 6,
    colsLg: 6,
    colsMd: 4,
    colsSm: 8,
    colsXs: 4
  }, React.createElement(StyledPaddedSection, {
    color: "black",
    align: "flex-start",
    justify: "center"
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
    colsXs: 4
  }, React.createElement(StyledPaddedSection, {
    align: "center",
    justify: "center"
  }, (contactImage === null || contactImage === void 0 ? void 0 : contactImage.url) && React.createElement(Picture, {
    alt: contactImage === null || contactImage === void 0 ? void 0 : contactImage.altText,
    src: contactImage === null || contactImage === void 0 ? void 0 : contactImage.url,
    width: "100%",
    height: "100%"
  }))))))));
};
//# sourceMappingURL=index.js.map