import React from 'react'
import { Grid, Cell, Row, Offset, Heading } from '@matthill8286/atomic-ui'
import { TextSectionProps } from './TextSection.types'
import { StyledTextSection } from './TextSection.styled'
import { CustomSection } from '../CustomSection'
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from '../Serializer'

export * from './TextSection.types'

export const TextSection: React.FC<TextSectionProps> = ({
  richText,
  title,
  sectionColor,
  branded,
  active,
  anchorId,
  textColor,
  headingColor,
  headingsBold,
  paddingTop,
  paddingBottom,
  withHeading = true,
}) => {
  return (
    <CustomSection
      color={branded ? 'primary' : sectionColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}>
      <Grid>
        <Row noMargin>
          <Offset colsXl={1} colsLg={1} colsMd={0} colsSm={0} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={8} colsSm={8} colsXs={4}>
            {withHeading ? (
              <Heading
                color={branded ? 'white' : headingColor}
                weight={headingsBold ? 'bold' : 'normal'}
                scale="level-3"
                textAlign={branded ? 'center' : 'left'}
                margin="sm 0 xl">
                {title}
              </Heading>
            ) : null}
            <StyledTextSection color={sectionColor} active={active} id={anchorId ?? undefined}>
              {Serializer(
                richText.raw,
                // @ts-ignore
                ConfigurableGraphCmsHtmlSerializer({
                  inline: true,
                  bold: headingsBold,
                  color: textColor,
                  fontSize: '17px',
                  textAlign: branded ? 'center' : 'left',
                  headingColor: branded ? 'white' : headingColor,
                })
              )}
            </StyledTextSection>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  )
}
