import React, { useEffect } from 'react'
import { Slider } from '@lifarl/react-scroll-snap-slider'
import { ScrollSnapSliderProps } from './ScrollSnapSlider.interface'
import { NavArrow } from './NavArrow'
import { Scrollbar } from './Scrollbar'
import {
  StyledHeading,
  StyledOverflowWrapper,
  StyledWrapper,
  StyledHeadingNoGrid,
  StyledGridScrollbar,
} from './ScrollSnapSlider.styled'

const scrollSnapPolyfill =
  typeof window !== 'undefined' ? require('css-scroll-snap-polyfill') : null

export {
  StyledCarousel as StyledScrollSnapSliderCarousel,
  StyledSlider as StyledScrollSnapSliderSlider,
  StyledUl as StyledScrollSnapSliderList,
  StyledSlide as StyledScrollSnapSliderSlide,
  StyledNavWrapper as StyledScrollSnapSliderNavWrapper,
  StyledArrow as StyledScrollSnapSliderArrow,
} from '@lifarl/react-scroll-snap-slider'
export { StyledScrollbar as StyledScrollSnapSliderScrollbar } from './ScrollSnapSlider.styled'

export interface ScrollSnapSliderRef {
  scrollToSlide: () => void
  sliderRef: React.RefObject<HTMLDivElement>
}

export const ScrollSnapSlider: React.FC<ScrollSnapSliderProps> = React.forwardRef<
  ScrollSnapSliderRef,
  ScrollSnapSliderProps
>(
  (
    {
      slidesPerPageSettings,
      title,
      withGrid = false,
      isGridLayout = true,
      showArrows = true,
      showScrollbar = false,
      fixedArrowPosition = true,
      zeroArrowPosition = false,
      overEdgePosition = false,
      arrowPrevClass,
      arrowNextClass,
      arrowDataTest,
      showArrowsOnHover = true,
      slideWidth,
      onScrollStart,
      onScrollEnd,
      onSlidesVisibilityChange,
      onSlideVisible,
      children,
      ...props
    },
    externalRef
  ) => {
    useEffect(() => {
      scrollSnapPolyfill()
    }, [])

    const [, rerender] = React.useState(false)

    const internalRef = React.useRef<ScrollSnapSliderRef | null>(null)

    const renderCustomArrow = ({ direction, ref, onClick }) => (
      <NavArrow
        direction={direction}
        ref={ref}
        onClick={() => onClick(direction)}
        showArrows={showArrows}
        fixedArrowPosition={fixedArrowPosition}
        zeroArrowPosition={zeroArrowPosition}
      />
    )

    const setRefs = React.useCallback(
      carouselRef => {
        internalRef.current = carouselRef as ScrollSnapSliderRef

        if (typeof externalRef !== 'function' && externalRef) {
          externalRef.current = carouselRef as ScrollSnapSliderRef
        }
        rerender(showScrollbar)
      },
      [externalRef, internalRef, rerender, showScrollbar]
    )

    const renderContent = () => (
      <StyledWrapper isGridLayout={isGridLayout} showArrowsOnHover={showArrowsOnHover} {...props}>
        <Slider
          ref={setRefs}
          slideWidth={slideWidth}
          slidesPerPageSettings={slidesPerPageSettings}
          renderCustomArrow={renderCustomArrow}
          onScrollStart={onScrollStart}
          onScrollEnd={onScrollEnd}
          onSlidesVisibilityChange={onSlidesVisibilityChange}
          onSlideVisible={onSlideVisible}>
          {children}
        </Slider>
      </StyledWrapper>
    )

    if (withGrid) {
      return (
        <StyledOverflowWrapper>
          {title ? <StyledHeading>{title}</StyledHeading> : null}
          {renderContent()}
          {showScrollbar && (
            <StyledGridScrollbar>
              <Scrollbar sliderRef={internalRef.current?.sliderRef} />
            </StyledGridScrollbar>
          )}
        </StyledOverflowWrapper>
      )
    }

    return (
      <>
        {title ? <StyledHeadingNoGrid>{title}</StyledHeadingNoGrid> : null}
        {renderContent()}
        {showScrollbar && <Scrollbar sliderRef={internalRef.current?.sliderRef} />}
      </>
    )
  }
)
