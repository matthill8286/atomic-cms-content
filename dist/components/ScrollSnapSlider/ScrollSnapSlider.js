var _excluded = ["slidesPerPageSettings", "title", "withGrid", "isGridLayout", "showArrows", "showScrollbar", "fixedArrowPosition", "zeroArrowPosition", "overEdgePosition", "arrowPrevClass", "arrowNextClass", "arrowDataTest", "showArrowsOnHover", "slideWidth", "onScrollStart", "onScrollEnd", "onSlidesVisibilityChange", "onSlideVisible", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect } from 'react';
import { Slider } from '@lifarl/react-scroll-snap-slider';
import { NavArrow } from './NavArrow';
import { Scrollbar } from './Scrollbar';
import { StyledHeading, StyledOverflowWrapper, StyledWrapper, StyledHeadingNoGrid, StyledGridScrollbar } from './ScrollSnapSlider.styled';
var scrollSnapPolyfill = typeof window !== 'undefined' ? require('css-scroll-snap-polyfill') : null;
export { StyledCarousel as StyledScrollSnapSliderCarousel, StyledSlider as StyledScrollSnapSliderSlider, StyledUl as StyledScrollSnapSliderList, StyledSlide as StyledScrollSnapSliderSlide, StyledNavWrapper as StyledScrollSnapSliderNavWrapper, StyledArrow as StyledScrollSnapSliderArrow } from '@lifarl/react-scroll-snap-slider';
export { StyledScrollbar as StyledScrollSnapSliderScrollbar } from './ScrollSnapSlider.styled';
export var ScrollSnapSlider = React.forwardRef(function (_ref, externalRef) {
  var _internalRef$current2;

  var slidesPerPageSettings = _ref.slidesPerPageSettings,
      title = _ref.title,
      _ref$withGrid = _ref.withGrid,
      withGrid = _ref$withGrid === void 0 ? false : _ref$withGrid,
      _ref$isGridLayout = _ref.isGridLayout,
      isGridLayout = _ref$isGridLayout === void 0 ? true : _ref$isGridLayout,
      _ref$showArrows = _ref.showArrows,
      showArrows = _ref$showArrows === void 0 ? true : _ref$showArrows,
      _ref$showScrollbar = _ref.showScrollbar,
      showScrollbar = _ref$showScrollbar === void 0 ? false : _ref$showScrollbar,
      _ref$fixedArrowPositi = _ref.fixedArrowPosition,
      fixedArrowPosition = _ref$fixedArrowPositi === void 0 ? true : _ref$fixedArrowPositi,
      _ref$zeroArrowPositio = _ref.zeroArrowPosition,
      zeroArrowPosition = _ref$zeroArrowPositio === void 0 ? false : _ref$zeroArrowPositio,
      _ref$overEdgePosition = _ref.overEdgePosition,
      overEdgePosition = _ref$overEdgePosition === void 0 ? false : _ref$overEdgePosition,
      arrowPrevClass = _ref.arrowPrevClass,
      arrowNextClass = _ref.arrowNextClass,
      arrowDataTest = _ref.arrowDataTest,
      _ref$showArrowsOnHove = _ref.showArrowsOnHover,
      showArrowsOnHover = _ref$showArrowsOnHove === void 0 ? true : _ref$showArrowsOnHove,
      slideWidth = _ref.slideWidth,
      onScrollStart = _ref.onScrollStart,
      onScrollEnd = _ref.onScrollEnd,
      onSlidesVisibilityChange = _ref.onSlidesVisibilityChange,
      onSlideVisible = _ref.onSlideVisible,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  useEffect(function () {
    scrollSnapPolyfill();
  }, []);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rerender = _React$useState2[1];

  var internalRef = React.useRef(null);

  var renderCustomArrow = function renderCustomArrow(_ref2) {
    var direction = _ref2.direction,
        ref = _ref2.ref,
        _onClick = _ref2.onClick;
    return React.createElement(NavArrow, {
      direction: direction,
      ref: ref,
      onClick: function onClick() {
        return _onClick(direction);
      },
      showArrows: showArrows,
      fixedArrowPosition: fixedArrowPosition,
      zeroArrowPosition: zeroArrowPosition
    });
  };

  var setRefs = React.useCallback(function (carouselRef) {
    internalRef.current = carouselRef;

    if (typeof externalRef !== 'function' && externalRef) {
      externalRef.current = carouselRef;
    }

    rerender(showScrollbar);
  }, [externalRef, internalRef, rerender, showScrollbar]);

  var renderContent = function renderContent() {
    return React.createElement(StyledWrapper, _extends({
      isGridLayout: isGridLayout,
      showArrowsOnHover: showArrowsOnHover
    }, props), React.createElement(Slider, {
      ref: setRefs,
      slideWidth: slideWidth,
      slidesPerPageSettings: slidesPerPageSettings,
      renderCustomArrow: renderCustomArrow,
      onScrollStart: onScrollStart,
      onScrollEnd: onScrollEnd,
      onSlidesVisibilityChange: onSlidesVisibilityChange,
      onSlideVisible: onSlideVisible
    }, children));
  };

  if (withGrid) {
    var _internalRef$current;

    return React.createElement(StyledOverflowWrapper, null, title ? React.createElement(StyledHeading, null, title) : null, renderContent(), showScrollbar && React.createElement(StyledGridScrollbar, null, React.createElement(Scrollbar, {
      sliderRef: (_internalRef$current = internalRef.current) === null || _internalRef$current === void 0 ? void 0 : _internalRef$current.sliderRef
    })));
  }

  return React.createElement(React.Fragment, null, title ? React.createElement(StyledHeadingNoGrid, null, title) : null, renderContent(), showScrollbar && React.createElement(Scrollbar, {
    sliderRef: (_internalRef$current2 = internalRef.current) === null || _internalRef$current2 === void 0 ? void 0 : _internalRef$current2.sliderRef
  }));
});
//# sourceMappingURL=ScrollSnapSlider.js.map