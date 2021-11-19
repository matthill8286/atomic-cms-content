import React from 'react';
import { Row, Cell, Picture, Heading, Typo } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer';
import { CustomSection } from '../CustomSection';
import { StyledPaddedSection } from './GenericSection.styled';
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
    paddingBottom: paddingBottom
  }, featureImage && React.createElement(Picture, {
    alt: "featureImage.alt",
    src: featureImage,
    width: "100%",
    height: "100%"
  }), React.createElement(CustomSection, {
    color: sectionColor !== null && sectionColor !== void 0 ? sectionColor : 'primary',
    paddingTop: "sm"
  }, React.createElement(StyledPaddedSection, null, React.createElement(Heading, {
    scale: "level-2",
    textAlign: "center",
    color: "white",
    margin: "md 0"
  }, topTitle), React.createElement(Typo, {
    tag: "p",
    fontSize: "17px",
    color: "white",
    textAlign: "center",
    margin: "md 0"
  }, description), React.createElement(Row, {
    noMargin: true
  }, richTextSections === null || richTextSections === void 0 ? void 0 : richTextSections.map(function (_ref2, index) {
    var document = _ref2.document;
    return React.createElement(Cell, {
      columns: 12 / richTextSections.length,
      key: "RichText-".concat(index)
    }, React.createElement(StyledPaddedSection, null, Serializer(document === null || document === void 0 ? void 0 : document.raw, ConfigurableGraphCmsHtmlSerializer({
      color: 'white',
      headingColor: 'white'
    }))));
  })))));
};
//# sourceMappingURL=GenericSection.js.map