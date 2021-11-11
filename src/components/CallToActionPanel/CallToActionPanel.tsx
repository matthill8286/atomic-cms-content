import React, { FC } from 'react'
import {
  Grid,
  Cell,
  Row,
  ThemeColors,
  CallToActionPanel,
  CallToActionPanelProps,
} from '@matthill8286/atomic-ui'
import { CustomSection } from '../CustomSection'
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer'
import { Elements, RichTextRawDocument } from '../../types/richtext'

export type SelectableOrientation = 'left' | 'right'

const orientation: { [key in SelectableOrientation]: SelectableOrientation } = {
  right: 'right',
  left: 'left',
}

export interface PublicCallToActionPanelProps extends Omit<CallToActionPanelProps, 'alignment'> {
  sectionColor?: ThemeColors
  rightOrientation?: boolean
  routeContext?: string
  shoeFeatured?: boolean
  isOpenProduct?: boolean
  richTextCopy?: RichTextRawDocument | null
}

export const CmsCallToActionPanel: FC<PublicCallToActionPanelProps> = ({
  element,
  children,
  image,
  withLQIP = false,
  showReadMore,
  showMore,
  showFeatured,
  rightOrientation,
  sectionColor,
  richTextCopy,
}): JSX.Element => {
  return (
    <CustomSection color={sectionColor} paddingTop={0} paddingBottom={0}>
      <Grid>
        <Row noMargin>
          <Cell colsXl={12} colsLg={12} colsMd={8} colsSm={8} colsXs={4}>
            <CallToActionPanel
              image={image}
              withLQIP={withLQIP}
              showReadMore={showReadMore}
              showMore={showMore}
              showFeatured={showFeatured}
              element={element}
              richTextCopy={richTextCopy}
              alignment={rightOrientation ? orientation.right : orientation.left}
            />
            {children}
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  )
}
