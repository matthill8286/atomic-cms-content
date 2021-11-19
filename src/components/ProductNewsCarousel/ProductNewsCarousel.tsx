import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  ScrollSnapSlider,
  useWindowDimensions,
  ProductSponsoring,
  ProductTileProps,
  Product,
} from '@matthill8286/atomic-ui'
import { ProductNewsCarouselProps } from './ProductNewsCarousel.interface'
import { CarouselWrapper, TileFragment, TileWrapper } from './ProductNewsCarousel.styled'
import { NewsItem } from '../NewsItem'

export const ProductNewsCarousel: React.FC<ProductNewsCarouselProps> = ({
  loading = true,
  promoted,
  promotedIndex = 0,
  products = [],
  context = 'home-scroll-carousel',
  tileMargin = 'md',
  withOverflow = true,
  withGrid = false,
  showArrows = true,
  showBookmark = true,
  showSkills = true,
  showProvider,
  sponsoringDetails,
  showLock = false,
  videoFallbackImage,
  fixedArrowPosition = true,
  zeroArrowPosition = false,
  renderAddToBookmarkButton,
  title,
  tileWidth = 250,
  hideDummies = false,
  dataTest,
  withLQIP,
  withNativeLoading,
  withScrollbar = true,
  onProductClick = () => {
    return null
  },
  onSlideChange = () => {
    return null
  },
  onInView,
  arrowPrevClass,
  arrowNextClass,
}): JSX.Element | null => {
  const [scrolled, scrolledSet] = useState<boolean>(false)
  const { breakpoint } = useWindowDimensions()
  const [prevSlideIndex, setPrevSlideIndex] = useState(0)

  const productsPerSlideWithHook: any = true

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  useEffect(() => {
    if (inView && onInView !== undefined && !loading && products.length > 0) {
      onInView({ context })
    }
  }, [inView, loading, onInView, context, products])

  if (!products) {
    return null
  }

  const handleSlideChange = (productsPerSlide: number) => (nextSlideIndex: number) => {
    scrolledSet(false)
    const direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous'
    const slideIndex = nextSlideIndex / productsPerSlide
    setPrevSlideIndex(nextSlideIndex)
    const productsInSlide = products.slice(
      slideIndex * productsPerSlide,
      slideIndex * productsPerSlide + productsPerSlide
    )
    onSlideChange?.({
      products: productsInSlide,
      direction,
      assetAmount: productsPerSlide,
      pageNumber: slideIndex,
      context,
    })
  }

  const handleProductClick = (productsPerSlide: number) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    asset: Product | Partial<Product>,
    index: number,
    pageNumber: number
  ) => {
    if (scrolled) {
      event.preventDefault()
    }

    if (!asset.locked && onProductClick) {
      onProductClick({ asset, index, productsPerSlide, pageNumber, context })
    }
  }

  const tileSettings: Omit<ProductTileProps, 'product'> = {
    loading,
    fontSize: 'sm',
    sponsoringDetails: undefined,
    withEllipsis: true,
  }

  const renderProduct = (productsPerSlide: number) => (
    asset: Product | Partial<Product>,
    index: number
  ): JSX.Element => {
    const slideIndex = Math.floor(index / productsPerSlide)
    const isDummyTile = !withOverflow && !asset.description

    const assetTileProduct: Product | Partial<Product> = {
      ...asset,
    }

    // no wrapper in case of sponsored asset
    const Wrapper = sponsoringDetails?.isSponsored ? TileFragment : TileWrapper
    const productsWithSponsor = assetTileProduct?.sponsored
    const loading = tileSettings.loading || isDummyTile

    const newsArgs = {
      title: 'Carbon',
      description: 'Vorsteiner Spoiler',
      image: 'https://picsum.photos/350/200',
      buttonLink: '#',
      buttonLabel: 'Read More',
      newsText:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: '21/11/21',
    }

    return (
      <Wrapper
        hideDummy={isDummyTile && hideDummies && !scrolled}
        aria-rowindex={index}
        key={`ProductTile-${index}`}
        withLabels={productsWithSponsor}>
        <NewsItem {...newsArgs} />
      </Wrapper>
    )
  }

  const renderProducts = () => {
    if (!promoted)
      return [...products.map(renderProduct(productsPerSlideWithHook)), <div key="right-spacer" />]
    const promotedElement: (boolean | JSX.Element | null)[] = promoted ? [promoted] : []
    return [
      ...products.slice(0, promotedIndex).map(renderProduct(productsPerSlideWithHook)),
      ...promotedElement,
      ...products.slice(promotedIndex).map(renderProduct(productsPerSlideWithHook)),
      <div key="right-spacer" />,
    ]
  }

  return (
    <CarouselWrapper
      tileMargin={tileMargin}
      tileWidth={tileWidth}
      ref={ref}
      key={`Carousel-${products.length}`}
      {...(typeof dataTest !== 'undefined' && { 'data-test': dataTest })}>
      {sponsoringDetails ? (
        <ProductSponsoring layout="carousel" sponsoringDetails={sponsoringDetails} />
      ) : null}
      <ScrollSnapSlider
        slideWidth={tileWidth}
        isGridLayout
        withGrid={withGrid}
        showScrollbar={withScrollbar && products.length > 3}
        onScrollStart={() => {
          if (!scrolled) scrolledSet(true)
        }}
        onScrollEnd={handleSlideChange(productsPerSlideWithHook)}
        showArrows={showArrows && products.length > 3}
        arrowDataTest="scroll-snap-slider-arrow"
        arrowPrevClass={arrowPrevClass}
        arrowNextClass={arrowNextClass}
        fixedArrowPosition={fixedArrowPosition}
        zeroArrowPosition={zeroArrowPosition}
        title={title}>
        {renderProducts()}
      </ScrollSnapSlider>
    </CarouselWrapper>
  )
}
