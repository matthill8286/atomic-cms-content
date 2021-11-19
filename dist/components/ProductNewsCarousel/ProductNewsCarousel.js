function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ScrollSnapSlider, useWindowDimensions, ProductSponsoring } from '@matthill8286/atomic-ui';
import { CarouselWrapper, TileFragment, TileWrapper } from './ProductNewsCarousel.styled';
export var ProductNewsCarousel = function ProductNewsCarousel(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? true : _ref$loading,
      promoted = _ref.promoted,
      _ref$promotedIndex = _ref.promotedIndex,
      promotedIndex = _ref$promotedIndex === void 0 ? 0 : _ref$promotedIndex,
      _ref$products = _ref.products,
      products = _ref$products === void 0 ? [] : _ref$products,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? 'home-scroll-carousel' : _ref$context,
      _ref$tileMargin = _ref.tileMargin,
      tileMargin = _ref$tileMargin === void 0 ? 'md' : _ref$tileMargin,
      _ref$withOverflow = _ref.withOverflow,
      withOverflow = _ref$withOverflow === void 0 ? true : _ref$withOverflow,
      _ref$withGrid = _ref.withGrid,
      withGrid = _ref$withGrid === void 0 ? false : _ref$withGrid,
      _ref$showArrows = _ref.showArrows,
      showArrows = _ref$showArrows === void 0 ? true : _ref$showArrows,
      _ref$showBookmark = _ref.showBookmark,
      showBookmark = _ref$showBookmark === void 0 ? true : _ref$showBookmark,
      _ref$showSkills = _ref.showSkills,
      showSkills = _ref$showSkills === void 0 ? true : _ref$showSkills,
      showProvider = _ref.showProvider,
      sponsoringDetails = _ref.sponsoringDetails,
      _ref$showLock = _ref.showLock,
      showLock = _ref$showLock === void 0 ? false : _ref$showLock,
      videoFallbackImage = _ref.videoFallbackImage,
      _ref$fixedArrowPositi = _ref.fixedArrowPosition,
      fixedArrowPosition = _ref$fixedArrowPositi === void 0 ? true : _ref$fixedArrowPositi,
      _ref$zeroArrowPositio = _ref.zeroArrowPosition,
      zeroArrowPosition = _ref$zeroArrowPositio === void 0 ? false : _ref$zeroArrowPositio,
      renderAddToBookmarkButton = _ref.renderAddToBookmarkButton,
      title = _ref.title,
      _ref$tileWidth = _ref.tileWidth,
      tileWidth = _ref$tileWidth === void 0 ? 250 : _ref$tileWidth,
      _ref$hideDummies = _ref.hideDummies,
      hideDummies = _ref$hideDummies === void 0 ? false : _ref$hideDummies,
      dataTest = _ref.dataTest,
      withLQIP = _ref.withLQIP,
      withNativeLoading = _ref.withNativeLoading,
      _ref$withScrollbar = _ref.withScrollbar,
      withScrollbar = _ref$withScrollbar === void 0 ? true : _ref$withScrollbar,
      _ref$onProductClick = _ref.onProductClick,
      onProductClick = _ref$onProductClick === void 0 ? function () {
    return null;
  } : _ref$onProductClick,
      _ref$onSlideChange = _ref.onSlideChange,
      onSlideChange = _ref$onSlideChange === void 0 ? function () {
    return null;
  } : _ref$onSlideChange,
      onInView = _ref.onInView,
      arrowPrevClass = _ref.arrowPrevClass,
      arrowNextClass = _ref.arrowNextClass;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      scrolled = _useState2[0],
      scrolledSet = _useState2[1];

  var _useWindowDimensions = useWindowDimensions(),
      breakpoint = _useWindowDimensions.breakpoint;

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      prevSlideIndex = _useState4[0],
      setPrevSlideIndex = _useState4[1];

  var productsPerSlideWithHook = true;

  var _useInView = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50px 0px'
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  useEffect(function () {
    if (inView && onInView !== undefined && !loading && products.length > 0) {
      onInView({
        context: context
      });
    }
  }, [inView, loading, onInView, context, products]);

  if (!products) {
    return null;
  }

  var handleSlideChange = function handleSlideChange(productsPerSlide) {
    return function (nextSlideIndex) {
      scrolledSet(false);
      var direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous';
      var slideIndex = nextSlideIndex / productsPerSlide;
      setPrevSlideIndex(nextSlideIndex);
      var productsInSlide = products.slice(slideIndex * productsPerSlide, slideIndex * productsPerSlide + productsPerSlide);
      onSlideChange === null || onSlideChange === void 0 ? void 0 : onSlideChange({
        products: productsInSlide,
        direction: direction,
        assetAmount: productsPerSlide,
        pageNumber: slideIndex,
        context: context
      });
    };
  };

  var handleProductClick = function handleProductClick(productsPerSlide) {
    return function (event, asset, index, pageNumber) {
      if (scrolled) {
        event.preventDefault();
      }

      if (!asset.locked && onProductClick) {
        onProductClick({
          asset: asset,
          index: index,
          productsPerSlide: productsPerSlide,
          pageNumber: pageNumber,
          context: context
        });
      }
    };
  };

  var tileSettings = {
    loading: loading,
    fontSize: 'sm',
    sponsoringDetails: undefined,
    withEllipsis: true
  };

  var renderProduct = function renderProduct(productsPerSlide) {
    return function (asset, index) {
      var slideIndex = Math.floor(index / productsPerSlide);
      var isDummyTile = !withOverflow && !asset.description;

      var assetTileProduct = _objectSpread({}, asset);

      var Wrapper = sponsoringDetails !== null && sponsoringDetails !== void 0 && sponsoringDetails.isSponsored ? TileFragment : TileWrapper;
      var productsWithSponsor = assetTileProduct === null || assetTileProduct === void 0 ? void 0 : assetTileProduct.sponsored;
      var loading = tileSettings.loading || isDummyTile;
      return React.createElement(Wrapper, {
        hideDummy: isDummyTile && hideDummies && !scrolled,
        "aria-rowindex": index,
        key: "ProductTile-".concat(index),
        withLabels: productsWithSponsor
      }, React.createElement("p", null, "Testing"));
    };
  };

  var renderProducts = function renderProducts() {
    if (!promoted) return [].concat(_toConsumableArray(products.map(renderProduct(productsPerSlideWithHook))), [React.createElement("div", {
      key: "right-spacer"
    })]);
    var promotedElement = promoted ? [promoted] : [];
    return [].concat(_toConsumableArray(products.slice(0, promotedIndex).map(renderProduct(productsPerSlideWithHook))), promotedElement, _toConsumableArray(products.slice(promotedIndex).map(renderProduct(productsPerSlideWithHook))), [React.createElement("div", {
      key: "right-spacer"
    })]);
  };

  return React.createElement(CarouselWrapper, _extends({
    tileMargin: tileMargin,
    tileWidth: tileWidth,
    ref: ref,
    key: "Carousel-".concat(products.length)
  }, typeof dataTest !== 'undefined' && {
    'data-test': dataTest
  }), sponsoringDetails ? React.createElement(ProductSponsoring, {
    layout: "carousel",
    sponsoringDetails: sponsoringDetails
  }) : null, React.createElement(ScrollSnapSlider, {
    slideWidth: tileWidth,
    isGridLayout: true,
    withGrid: withGrid,
    showScrollbar: withScrollbar && products.length > 3,
    onScrollStart: function onScrollStart() {
      if (!scrolled) scrolledSet(true);
    },
    onScrollEnd: handleSlideChange(productsPerSlideWithHook),
    showArrows: showArrows && products.length > 3,
    arrowDataTest: "scroll-snap-slider-arrow",
    arrowPrevClass: arrowPrevClass,
    arrowNextClass: arrowNextClass,
    fixedArrowPosition: fixedArrowPosition,
    zeroArrowPosition: zeroArrowPosition,
    title: title
  }, renderProducts()));
};
//# sourceMappingURL=ProductNewsCarousel.js.map