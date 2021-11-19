function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import 'jest-styled-components';
import React from 'react';
import { ProductNewsCarousel } from './ProductNewsCarousel';
import { mockProducts, mountWithThemeAndRouter, productNames, renderWithThemeAndRouter, ScrollSnapSlider, SkeletonBlockItem } from '@matthill8286/atomic-ui';
describe('Product News Carousel', function () {
  var carouselProps;
  var products = [];

  for (var i = 0; i < productNames.length; i++) {
    products.push(mockProducts[productNames[i]]);
  }

  beforeEach(function () {
    carouselProps = {
      loading: false,
      lazyLoad: true,
      tileWidth: 375,
      context: 'dashboard',
      products: [].concat(products),
      NoProductsComponent: null,
      onProductClick: function onProductClick() {},
      onSlideChange: function onSlideChange() {}
    };
  });
  it('renders the Scroll Snap Slider', function () {
    var wrapper = renderWithThemeAndRouter(React.createElement(ProductNewsCarousel, carouselProps));
    expect(wrapper).toBeDefined();
  });
  describe('with loading state', function () {
    it.skip('renders as skeleton', function () {
      var wrapper = mountWithThemeAndRouter(React.createElement(ProductNewsCarousel, _extends({}, carouselProps, {
        loading: true
      })));
      expect(wrapper).toBeDefined();
      expect(wrapper.find(ScrollSnapSlider)).toBeDefined();
      expect(wrapper.find(SkeletonBlockItem).length).toEqual(3);
    });
  });
  describe('with promoted element', function () {
    var PromotedElement = function PromotedElement() {
      return React.createElement("div", null, "I am Promoted");
    };

    it('renders given element', function () {
      var wrapper = mountWithThemeAndRouter(React.createElement(ProductNewsCarousel, _extends({}, carouselProps, {
        promotedIndex: 2,
        promoted: React.createElement(PromotedElement, null)
      })));
      expect(wrapper).toBeDefined();
      expect(wrapper.find(PromotedElement)).toBeDefined();
    });
  });
});
//# sourceMappingURL=ProductNewsCarousel.test.js.map