import { AnyStyledComponent } from 'styled-components';
import { ReactNode } from 'react';
export interface ScrollSnapSliderProps {
    children: ReactNode;
    slidesPerPageSettings?: SlidesPerPageSettings;
    withGrid?: boolean;
    title?: JSX.Element;
    showArrows?: boolean;
    isGridLayout?: boolean;
    showScrollbar?: boolean;
    fixedArrowPosition?: boolean;
    zeroArrowPosition?: boolean;
    overEdgePosition?: boolean;
    arrowPrevClass?: AnyStyledComponent;
    arrowNextClass?: AnyStyledComponent;
    showArrowsOnHover?: boolean;
    slideWidth?: number;
    arrowDataTest?: string;
    onScrollStart?: (slideIndex: number) => void;
    onScrollEnd?: (slideIndex: number) => void;
    onSlidesVisibilityChange?: (slideIndex: number) => void;
    onSlideVisible?: (slideIndex: number) => void;
}
export interface SlidesPerPageSettings {
    mobileSmall: number;
    mobileBig: number;
    tablet: number;
    desktop: number;
}
//# sourceMappingURL=ScrollSnapSlider.interface.d.ts.map