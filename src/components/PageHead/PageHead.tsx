import React from 'react'
import { Teaser } from '@matthill8286/atomic-ui'
import { prepareHeroContentProps } from '../../helpers'

/**
 * This will be the TopTeaser for only a few select pages
 */
export const PageHead = ({ slices }: { slices: any[] }) => {
  return (
    <>
      {slices?.map(({ pageComponents }: any, index: number) => {
        const keyProp = `${pageComponents?.__typename}_${index}`
        switch (pageComponents?.__typename) {
          case 'HeroBanner':
            const heroProps = pageComponents && prepareHeroContentProps(pageComponents)
            return (
              heroProps && (
                <Teaser
                  key={keyProp}
                  color={!heroProps?.heroImages ? 'primary' : 'white'}
                  image={heroProps?.heroImages.xl}
                  headline={heroProps.name}
                />
              )
            )
          default:
            return null
        }
      })}
    </>
  )
}
