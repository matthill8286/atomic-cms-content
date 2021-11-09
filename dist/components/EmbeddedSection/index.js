import React from 'react';
import { Grid, Row, Cell, Heading } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledPaddedEmbedSection, StyledPaddedEmbed } from "./EmbeddedSection.styled";
export var EmbeddedSection = function EmbeddedSection(_ref) {
  var embeddedSection = _ref.embeddedSection,
      sectionColor = _ref.sectionColor,
      title = _ref.title;
  return React.createElement(CustomSection, {
    color: sectionColor
  }, React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Heading, {
    scale: "level-2",
    textAlign: "center",
    margin: "xxxxl 0 sm 0"
  }, title))), React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 12
  }, React.createElement(StyledPaddedEmbedSection, {
    overrideOver: true
  }, React.createElement(StyledPaddedEmbed, null, embeddedSection && Serializer(embeddedSection.raw, ConfigurableGraphCmsHtmlSerializer({
    textAlign: 'center'
  }))))))));
};
//# sourceMappingURL=index.js.map