import React, { FC } from 'react'
import { Grid, Row, Cell, Heading } from '@matthill8286/atomic-ui'
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer'
import { CustomSection } from '../CustomSection'
import { StyledPaddedEmbedSection, StyledPaddedEmbed } from './EmbeddedSection.styled'
import { EmbeddedSectionProps } from './EmbeddedSection.types'

export const EmbeddedSection: FC<EmbeddedSectionProps> = ({
  embeddedSection,
  sectionColor,
  title,
}) => {
  return (
    <CustomSection color={sectionColor}>
      <Grid>
        <Row noMargin>
          <Cell columns={12}>
            <Heading scale="level-2" textAlign="center" margin="xxxxl 0 sm 0">
              {title}
            </Heading>
          </Cell>
        </Row>
        <Row noMargin>
          <Cell columns={12}>
            <StyledPaddedEmbedSection overrideOver>
              <StyledPaddedEmbed>
                {embeddedSection &&
                  Serializer(
                    embeddedSection.raw,
                    // @ts-ignore
                    ConfigurableGraphCmsHtmlSerializer({
                      textAlign: 'center',
                    })
                  )}
              </StyledPaddedEmbed>
            </StyledPaddedEmbedSection>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  )
}
