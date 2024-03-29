import * as React from 'react';
import {Grid, Cell, Row, Offset} from '@matthill8286/atomic-ui';
import {AccordionSection, AccordionSchemaType} from '../AccordionSection';
import {FAQSectionProps} from './FaqSection.types';
import {StyledFAQ} from './FaqSection.styled';
import {CustomSection} from '../CustomSection';
import {Serializer, ConfigurableGraphCmsHtmlSerializer} from '../Serializer';

export * from './FaqSection.types';

export const FAQSection: React.FC<FAQSectionProps> = ({entries, headline}) => {
  return (
    <StyledFAQ>
      {headline && (headline.length > 0 || (headline as any)) && (
        <CustomSection>
          <Grid>
            <Row noMargin>
              <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
              <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
                {Serializer(
                  // @ts-ignore
                  headline.raw,
                  ConfigurableGraphCmsHtmlSerializer({})
                )}
              </Cell>
            </Row>
          </Grid>
        </CustomSection>
      )}
      `
      <AccordionSection
        // @ts-ignore
        entries={entries}
        schemaType={AccordionSchemaType.Faq}
        isLarge
        sectionColor="transparent"
      />
    </StyledFAQ>
  );
};
