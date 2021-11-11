import { action } from '@storybook/addon-actions'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { Product } from '@/types'
import {
  mockPlaylistCollections,
  newProductMocks,
} from '@/components/Organisms/ProductTile/elements/mockProduct'
import {
  ProductSponsoring,
  ProductStrategy,
  ProductTileLayout,
} from '@/components/Organisms/ProductTile'
import { ProductCarousel } from './ScrollProductCarousel'

const mockProducts = {
  asset1: newProductMocks[0],
  asset2: newProductMocks[1],
  asset3: newProductMocks[2],
}

export const assetNames = ['asset1', 'asset2', 'asset3']

const mockedProductsWithNames = () => {
  const products: Product[] = []

  for (let i = 0; i < assetNames.length; i++) {
    products.push(mockProducts[assetNames[i]])
  }

  return products
}

const usableProducts = [...mockedProductsWithNames(), ...mockedProductsWithNames()]
const showSponsoring = boolean('Show Sponsoring', false)

const knobs = () => ({
  loading: boolean('Loading', false),
  slidesPerPageSettings: {
    desktop: number('Desktop', 3),
    tablet: number('tablet', 2),
    mobileBig: number('Large mobile', 2),
    mobileSmall: number('Small mobile', 2),
  },
  showArrows: boolean('Arrows', true),
  playlistOrientation: select(
    'Playlist Orientation',
    ['portrait', 'landscape', undefined],
    'portrait'
  ),
  NoProductsComponent: <p>No Products here</p>,
  tileMargin: select('Tile Margin', ['xs', 'sm', 'md'], 'sm'),
  playlistView: select('Playlist Type', ['list', 'collection'], 'list'),
  title: boolean('With Title', false) ? customTitle() : undefined,
  tileWidth: number('TileWidth', 360),
  sponsoringDetails: {
    showUppercase: true,
    isSponsored: showSponsoring,
    label: text('Label', 'Sponsored Content'),
    title: text('Title', 'Sponsored Content Title'),
    infoText: text('Info Text', 'Some more information about this sponsored content'),
  },
  onProductClick: () => action('asset'),
  onLockClick: action('lock'),
  onSlideChange: action('slide changed'),
  renderAddToBookmarkButton: () => <div>Bookmark</div>,
  showNoProducts: boolean('With No Products', false),
})

const fixedWidth = () => boolean('With Grid', false)

const customTitle = () => (
  <>
    <ProductSponsoring
      sponsoringDetails={{
        isSponsored: true,
        showUppercase: true,
        label: 'Recommendations',
        title: 'Notification Title',
        infoText: 'Some random content so we can showcase sponsored asset content',
      }}
      layout="carousel"
    />
    <Heading bold scale="level-2" tag="h2" color="primary">
      Playlists
    </Heading>
  </>
)

storiesOf('Design System/Organisms/ProductCarousel', module)
  .add('Default', () => {
    if (fixedWidth()) {
      return (
        <ProductCarousel
          {...knobs()}
          showBadges
          title={customTitle()}
          context="dashboard"
          products={!knobs().showNoProducts ? usableProducts : []}
          sponsoringDetails={undefined}
          fixedArrowPosition={false}
          onProductClick={action('asset')}
          onLockClick={action('lock')}
          onSlideChange={action('slide changed')}
          withGrid
        />
      )
    }

    return (
      <ProductCarousel
        {...knobs()}
        showBadges
        title={customTitle()}
        context="homepage"
        products={!knobs().showNoProducts ? usableProducts : []}
        sponsoringDetails={undefined}
        fixedArrowPosition={false}
        onProductClick={action('asset')}
        onLockClick={action('lock')}
        onSlideChange={action('slide changed')}
      />
    )
  })
  .add('Playlist collection', () => {
    return (
      <ProductCarousel
        {...knobs()}
        showBookmark={false}
        fixedArrowPosition={false}
        context="webmobile-cms-landing-pages"
        playlistView="collection"
        title={
          <Heading bold scale="level-2">
            Your Collection
          </Heading>
        }
        slidesPerPageSettings={{
          desktop: 4,
          mobileBig: 1,
          mobileSmall: 1,
          tablet: 2,
        }}
        sponsoringDetails={{
          isSponsored: true,
          showUppercase: true,
          label: 'Your Playlists',
          title: 'Saved Playlists',
          infoText: 'Some random content so we can showcase sponsored asset content',
        }}
        products={[...mockPlaylistCollections]}
        onProductClick={action('asset')}
        onLockClick={action('lock')}
        onSlideChange={action('slide changed')}
      />
    )
  })
  .add('Playlists with disabled indexes', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <ProductCarousel
              NoProductsComponent={<>No Products Found</>}
              loading={false}
              slidesPerPageSettings={{ desktop: 3, tablet: 2, mobileBig: 1, mobileSmall: 1 }}
              tileWidth={380}
              strategyType={ProductStrategy.structured}
              context="search"
              title={
                <Heading bold scale="level-2">
                  Structured Strategy
                </Heading>
              }
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
              disabledProductIndexes={[1, 2, 3, 4]}
              products={usableProducts}
              onProductClick={action('asset')}
              onLockClick={action('lock')}
              onSlideChange={action('slide changed')}
              fixedArrowPosition={false}
            />
          </Cell>
        </Row>
      </Grid>
    )
  })
  .add('Playlists fixed width asset on desktop', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <ProductCarousel
              {...knobs()}
              NoProductsComponent={<>No Products Found</>}
              loading={false}
              context="dashboard"
              title={
                <Heading bold scale="level-2">
                  Fixed Width
                </Heading>
              }
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
              slidesPerPageSettings={{
                desktop: 4,
                mobileBig: 1,
                mobileSmall: 1,
                tablet: 2,
              }}
              products={[mockProducts.asset1, mockProducts.asset2, mockProducts.asset3]}
              onProductClick={action('asset')}
              onLockClick={action('lock')}
              onSlideChange={action('slide changed')}
              fixedArrowPosition={false}
            />
          </Cell>
        </Row>
      </Grid>
    )
  })
  .add('Playlists view landscape', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <ProductCarousel
              {...knobs()}
              NoProductsComponent={<>No Products Found</>}
              loading={false}
              context="dashboard"
              title={
                <Heading bold scale="level-2">
                  Your Bookmarks
                </Heading>
              }
              playlistView="list"
              playlistLayout={ProductTileLayout.listItem}
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
              slidesPerPageSettings={{
                desktop: 2,
                mobileBig: 1,
                mobileSmall: 1,
                tablet: 2,
              }}
              withScrollbar
              products={[
                mockProducts.asset1,
                mockProducts.asset2,
                mockProducts.asset3,
                mockProducts.asset1,
                mockProducts.asset2,
                mockProducts.asset3,
              ]}
              onProductClick={action('asset')}
              onLockClick={action('lock')}
              onSlideChange={action('slide changed')}
              fixedArrowPosition={false}
            />
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <CopyText display="flex" fontSize="lg">
              Due to the amount of information on this version of asset tile, the best viewing mode
              is 2 products per slide
            </CopyText>
          </Cell>
        </Row>
      </Grid>
    )
  })
