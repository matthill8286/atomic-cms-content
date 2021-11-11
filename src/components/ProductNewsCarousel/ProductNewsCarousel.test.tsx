import 'jest-styled-components'
import React from 'react'
import { ProductNewsCarousel } from './ProductNewsCarousel'
import { ProductNewsCarouselProps } from './ProductNewsCarousel.interface'
import {
  mockProducts,
  mountWithThemeAndRouter,
  productNames,
  renderWithThemeAndRouter,
  ScrollSnapSlider,
  SkeletonBlockItem,
  Product,
} from '@matthill8286/atomic-ui'

describe('Product News Carousel', () => {
  let carouselProps: ProductNewsCarouselProps
  const products: Product[] = []

  for (let i = 0; i < productNames.length; i++) {
    products.push(mockProducts[productNames[i]])
  }

  beforeEach(() => {
    carouselProps = {
      loading: false,
      lazyLoad: true,
      tileWidth: 375,
      context: 'dashboard',
      products: [...products],
      NoProductsComponent: null,
      onProductClick: () => {},
      onSlideChange: () => {},
    }
  })

  it('renders the Scroll Snap Slider', () => {
    const wrapper = renderWithThemeAndRouter(<ProductNewsCarousel {...carouselProps} />)
    expect(wrapper).toBeDefined()
  })

  describe('with loading state', () => {
    it.skip('renders as skeleton', () => {
      const wrapper = mountWithThemeAndRouter(<ProductNewsCarousel {...carouselProps} loading />)
      expect(wrapper).toBeDefined()
      expect(wrapper.find(ScrollSnapSlider)).toBeDefined()
      expect(wrapper.find(SkeletonBlockItem).length).toEqual(3)
    })
  })

  describe('with promoted element', () => {
    const PromotedElement: React.FC = () => <div>I am Promoted</div>
    it('renders given element', () => {
      const wrapper = mountWithThemeAndRouter(
        <ProductNewsCarousel {...carouselProps} promotedIndex={2} promoted={<PromotedElement />} />
      )
      expect(wrapper).toBeDefined()
      expect(wrapper.find(PromotedElement)).toBeDefined()
    })
  })
})
