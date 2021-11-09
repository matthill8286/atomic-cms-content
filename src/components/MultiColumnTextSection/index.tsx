import * as React from 'react';
import {Grid, Cell, Row, styled, media} from '@matthill8286/atomic-ui';
import {MultiColumnTextSectionSectionProps} from '#/src/staticPages/components';
import {StyledMultiColumnTextSection} from './MultiColumnTextSection.styled';
import {CustomSection} from '../CustomSection';
import {ConfigurableGraphCmsHtmlSerializer, Serializer} from '../Serializer';

const StyledCustomSection = styled(CustomSection)`
  column-count: 2;
  column-gap: 48px;
  padding-top: ${({theme}) => theme.spacing.base.lg};

  ${media.maxMd} {
    column-count: 1;
    padding: 0;
  }
`;

export * from './MultiColumnTextSection.types';

export const MultiColumnTextSection: React.FC<MultiColumnTextSectionSectionProps> =
  ({richTextColumns, sectionColor, anchorId, textColor = 'grey5'}) => {
    return (
      <Grid>
        <Row noMargin>
          <Cell colsXl={12} colsLg={12} colsMd={8} colsSm={8} colsXs={4}>
            <StyledCustomSection color={sectionColor}>
              <StyledMultiColumnTextSection
                color={textColor}
                id={anchorId ?? undefined}
              >
                {Serializer(
                  richTextColumns,
                  ConfigurableGraphCmsHtmlSerializer({
                    // @ts-ignore
                    color: textColor,
                    fontSize: '17px',
                  })
                )}
              </StyledMultiColumnTextSection>
            </StyledCustomSection>
          </Cell>
        </Row>
      </Grid>
    );
  };
