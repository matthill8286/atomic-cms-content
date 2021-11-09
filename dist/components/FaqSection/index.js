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
  return React.createElement(StyledFAQ, null, headline && (headline.length > 0 || headline) && React.createElement(CustomSection, null, React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Offset, {
    colsXl: 1,
    colsLg: 1,
    colsMd: 1,
    colsSm: 1,
    colsXs: 0
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 6,
    colsSm: 6,
    colsXs: 4
  }, Serializer(headline.raw, ConfigurableGraphCmsHtmlSerializer({})))))), "`", React.createElement(AccordionSection, {
    entries: entries,
    schemaType: AccordionSchemaType.Faq,
    isLarge: true,
    sectionColor: "transparent"
  }));
};
//# sourceMappingURL=index.js.map