import React from 'react';
import {TopTeaser} from '@matthill8286/atomic-ui';
import {prepareHeroContentProps} from '../../helpers';

/**
 * This will be the TopTeaser for only a few select pages
 */
export const PageHead = ({slices}: {slices: any[]}) => {
  return (
    <>
      {slices?.map(({pageComponents}: any, index: number) => {
        const keyProp = `${pageComponents?.__typename}_${index}`;
        switch (pageComponents?.__typename) {
          case 'HeroBanner':
            const heroProps =
              pageComponents && prepareHeroContentProps(pageComponents);
            return (
              heroProps && (
                <TopTeaser
                  key={keyProp}
                  link={null}
                  color={!heroProps?.heroImages && 'primary'}
                  heroImages={heroProps?.heroImages}
                  images={heroProps?.images}
                  height={{mobile: 300, tablet: 350, desktop: 400}}
                  content={{...heroProps}}
                />
              )
            );
          default:
            return null;
        }
      })}
    </>
  );
};
