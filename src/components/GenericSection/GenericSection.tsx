import React, { FC } from 'react'
import { Row, Cell, TwelveColumn, Picture, Heading, Typo } from '@matthill8286/atomic-ui'
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer'
import { CustomSection } from '../CustomSection'
import { StyledPaddedSection } from './GenericSection.styled'
import { GenericSectionProps } from './GenericSection.types'

export const GenericSection: FC<GenericSectionProps> = ({
  featureImage,
  richTextSections,
  topTitle,
  description,
  sectionColor = 'primary',
  paddingTop,
  paddingBottom,
}) => {
  return (
    <CustomSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {featureImage && (
        <Picture alt="featureImage.alt" src={featureImage} width="100%" height="100%" />
      )}
      <CustomSection color={sectionColor ?? 'primary'} paddingTop="sm">
        <StyledPaddedSection>
          <Heading scale="level-2" textAlign="center" color="white" margin="md 0">
            {topTitle}
          </Heading>
          <Typo tag="p" fontSize="17px" color="white" textAlign="center" margin="md 0">
            {description}
          </Typo>
          <Row noMargin>
            {richTextSections?.map(({ document }, index) => (
              <Cell
                columns={(12 / richTextSections.length) as TwelveColumn}
                key={`RichText-${index}`}>
                <StyledPaddedSection>
                  {Serializer(
                    document?.raw,
                    // @ts-ignore
                    ConfigurableGraphCmsHtmlSerializer({
                      color: 'white',
                      headingColor: 'white',
                    })
                  )}
                </StyledPaddedSection>
              </Cell>
            ))}
          </Row>
        </StyledPaddedSection>
      </CustomSection>
    </CustomSection>
  )
}
