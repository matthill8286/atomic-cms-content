import React from 'react';
import { ScrollSnapSliderProps } from './ScrollSnapSlider.interface';
export { StyledCarousel as StyledScrollSnapSliderCarousel, StyledSlider as StyledScrollSnapSliderSlider, StyledUl as StyledScrollSnapSliderList, StyledSlide as StyledScrollSnapSliderSlide, StyledNavWrapper as StyledScrollSnapSliderNavWrapper, StyledArrow as StyledScrollSnapSliderArrow, } from '@lifarl/react-scroll-snap-slider';
export { StyledScrollbar as StyledScrollSnapSliderScrollbar } from './ScrollSnapSlider.styled';
export interface ScrollSnapSliderRef {
    scrollToSlide: () => void;
    sliderRef: React.RefObject<HTMLDivElement>;
}
export declare const ScrollSnapSlider: React.FC<ScrollSnapSliderProps>;
//# sourceMappingURL=ScrollSnapSlider.d.ts.map