import React from 'react'
import {
  CmsCallToActionPanel,
  ConfigurableGraphCmsHtmlSerializer,
  CustomSection,
  Serializer,
} from '../../components'
import { CallToActionPlaylistProps } from './CallToActionWithPlaylist.interface'

export const CallToActionWithPlaylist = React.memo<CallToActionPlaylistProps>(
  ({ slices, sectionColor, routeContext }) => {
    return (
      <CustomSection color={sectionColor} paddingTop={0} paddingBottom={0}>
        {slices?.map(
          (
            {
              pageComponents: {
                button,
                heading,
                image,
                staticProductTile,
                rightOrientation,
                staticPlaylists,
                id,
                name,
                __typename,
                richTextCopy,
              },
              size,
              showScrollbar,
            },
            index: number
          ) => {
            const keyProp = `${__typename}_${index}`
            switch (__typename) {
              case 'CallToActionPanel':
                return (
                  <CmsCallToActionPanel
                    key={keyProp}
                    sectionColor="white"
                    element={{
                      buttonLabel: button?.text,
                      headline: heading,
                      href: button?.href,
                      route: button?.to,
                    }}
                    richTextCopy={Serializer(
                      richTextCopy?.raw,
                      // @ts-ignore
                      ConfigurableGraphCmsHtmlSerializer({
                        textAlign: 'left',
                        contentAlign: 'left',
                      })
                    )}
                    showReadMore={false}
                    showFeatured
                    isOpenProduct
                    asset={staticProductTile}
                    routeContext={routeContext}
                    rightOrientation={rightOrientation}
                    image={image}
                  />
                )
              default:
                return null
            }
          }
        )}
      </CustomSection>
    )
  }
)
