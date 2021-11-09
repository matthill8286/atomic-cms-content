import React, {FC} from 'react';
import {
  Row,
  Cell,
  TwelveColumn,
  Picture,
  Heading,
  Offset,
  Grid,
} from '@matthill8286/atomic-ui';
import {ConfigurableGraphCmsHtmlSerializer, Serializer} from '../Serializer';

import {CustomSection} from '../CustomSection';
import {StyledPaddedSection} from './ContactSection.styled';
import {ContactSectionProps} from './ContactSection.types';
import {StyledTextSection} from '../TextSection/TextSection.styled';

export const ContactSection: FC<ContactSectionProps> = ({
  contactImage,
  contactHeading,
  richTextContactSection,
  sectionColor = 'clear',
  paddingTop,
  paddingBottom,
}) => {
  return (
    <CustomSection
      color={sectionColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Grid>
        <Row noMargin>
          <Offset colsXl={1} colsLg={1} colsMd={0} colsSm={0} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={8} colsSm={8} colsXs={4}>
            {contactHeading && (
              <Row noMargin>
                <Cell columns={12 as TwelveColumn}>
                  <Heading
                    scale="level-2"
                    tag="h2"
                    color="black"
                    margin="md 0"
                    padding="lg 0"
                    textAlign="center"
                  >
                    {contactHeading}
                  </Heading>
                </Cell>
              </Row>
            )}
            <Row noMargin>
              <Cell
                columns={6 as TwelveColumn}
                colsLg={6}
                colsMd={4}
                colsSm={8}
                colsXs={4}
              >
                <StyledPaddedSection
                  headingColor="black"
                  align="flex-start"
                  justify="center"
                  withPadding="false"
                >
                  {Serializer(
                    richTextContactSection.raw,
                    ConfigurableGraphCmsHtmlSerializer({
                      color: 'black',
                      margins: '0 0 xs 0',
                      inline: true,
                      forceNewTab: true,
                    })
                  )}
                </StyledPaddedSection>
              </Cell>
              <Cell
                columns={6 as TwelveColumn}
                colsLg={6}
                colsMd={4}
                colsSm={8}
                colsXs={4}
              >
                <StyledPaddedSection align="center" justify="center">
                  {contactImage?.url && (
                    <Picture
                      alt={contactImage?.altText}
                      src={contactImage?.url}
                      width="100%"
                      height="100%"
                    />
                  )}
                </StyledPaddedSection>
              </Cell>
            </Row>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
