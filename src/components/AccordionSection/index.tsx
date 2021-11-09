import * as React from 'react';
import {useLocation} from 'react-router';
import {Grid, Cell, Row, Offset, Accordion} from '@matthill8286/atomic-ui';
import {AccordionSectionProps} from './AccordionSection.types';
import {StyledAccordionWrapper} from './AccordionSection.styled';
import {CustomSection} from '../CustomSection';
import {Serializer, ConfigurableGraphCmsHtmlSerializer} from '../Serializer';

export * from './AccordionSection.types';

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  entries = [],
  sectionColor,
  textColor = 'grey6',
  isLarge,
  withIconsOnRight,
  customAccordionEntries,
}) => {
  const location = useLocation();
  const anchoredAccordion = entries.find(
    entry => location.hash === `#${entry.anchorId}`
  );
  const openedIndex = anchoredAccordion && entries.indexOf(anchoredAccordion);

  const mappedAccordionEntries = entries.map(entry => {
    const accordionTitleComponent =
      entry.entryHeadline &&
      Serializer(
        entry.entryHeadline.raw,
        ConfigurableGraphCmsHtmlSerializer({
          fontSize: 'md',
          color: 'grey6',
          margins: 'xxs 0',
        })
      );

    return {
      details:
        entry.entryContent &&
        Serializer(
          entry.entryContent.raw,
          ConfigurableGraphCmsHtmlSerializer({
            primaryColor: sectionColor,
            inline: true,
            underline: false,
            margins: 'xxs 0',
          })
        ),
      title: accordionTitleComponent,
    };
  });

  return (
    <CustomSection color={sectionColor}>
      <Grid>
        <Row>
          <Offset colsXs={0} colsSm={0} columns={1} />
          <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={8} colsXs={4}>
            <StyledAccordionWrapper textColor={textColor}>
              <Accordion
                isLarge={isLarge}
                withIconsOnRight={withIconsOnRight}
                customLabelHeading={{
                  bold: false,
                  margin: 'sm 0',
                  tag: 'div',
                }}
                labelPadding="xxs 0"
                entryPadding="0 0 sm"
                entries={mappedAccordionEntries}
                openedIndex={openedIndex}
              />
            </StyledAccordionWrapper>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
