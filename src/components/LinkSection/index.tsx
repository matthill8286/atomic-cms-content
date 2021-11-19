import * as React from 'react'
import { Grid, Cell, Row, Link, Icon, Offset } from '@matthill8286/atomic-ui'
import { LinkSectionProps } from './LinkSection.types'
import { CustomSection } from '../CustomSection'
import { OtherRightArrow } from '@matthill8286/atomic-icon-library'

export * from './LinkSection.types'

export const LinkSection: React.FC<LinkSectionProps> = ({
  link,
  label,
  anchorId,
  sectionColor,
  decorationColor = 'primary',
  textColor = 'black',
  onClick,
}) => {
  return (
    <CustomSection id={anchorId} color={sectionColor}>
      <Grid>
        <Row>
          <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
            <Link
              iconLeft={
                <Icon color="primary">
                  <OtherRightArrow />
                </Icon>
              }
              onClick={onClick}
              color={textColor}
              scale="large"
              target={link?.target || '_self'}
              href={link?.url || ''}
              underline
              decorationColor={decorationColor}>
              {label}
            </Link>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  )
}
