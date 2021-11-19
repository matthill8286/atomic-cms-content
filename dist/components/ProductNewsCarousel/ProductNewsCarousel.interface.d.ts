import React from 'react';
import { AnyStyledComponent } from 'styled-components';
import { Product, ProductType, Provider, SponsoringDetails } from '@matthill8286/atomic-ui';
export interface ConfigProps {
    withOverflow?: boolean;
    withPadding?: boolean;
    hideLeftOverflow?: boolean;
}
export declare type ClickHandlerAvailableParams = {
    asset: Product | Partial<Product>;
    index: number;
    productsPerSlide: number;
    pageNumber: number;
    context: string;
};
export declare type ProductNewsCarouselProps = {
    NoProductsComponent: JSX.Element | null;
    onProductClick?: ({ asset, index, productsPerSlide, pageNumber, context, }: {
        asset: Product | Partial<Product>;
        index: number;
        productsPerSlide: number;
        pageNumber: number;
        context: string;
    }) => void;
    onSlideChange: ({ products, direction, assetAmount, pageNumber, context, }: {
        products: (Product | Partial<Product>)[];
        direction: string;
        assetAmount: number;
        pageNumber: number;
        context: string;
    }) => void;
    onInView?: ({ context }: {
        context: string;
    }) => void;
    onLockClick?: ({ asset, index, productsPerSlide, pageNumber, context, }: {
        asset: Product | Partial<Product>;
        index: number;
        productsPerSlide: number;
        pageNumber: number;
        context: string;
    }) => void;
    headline?: string;
    dataTest?: string;
    redirectPath?: string;
    withScrollbar?: boolean;
} & ProductNewsCarouselDefaultProps;
export interface ProductNewsCarouselDefaultProps {
    loading: boolean;
    loadingOperation?: boolean;
    promoted?: JSX.Element | boolean;
    promotedIndex?: number;
    products: (Product | Partial<Product>)[];
    sponsoringDetails?: SponsoringDetails | undefined;
    withOverflow?: boolean;
    withPadding?: boolean;
    hideLeftOverflow?: boolean;
    arrowPrevClass?: AnyStyledComponent;
    arrowNextClass?: AnyStyledComponent;
    context?: string;
    title?: JSX.Element;
    tileMargin?: string;
    lazyLoad?: boolean;
    withLQIP?: boolean;
    withNativeLoading?: boolean;
    showBadges?: boolean;
    showBookmark?: boolean;
    showSkills?: boolean;
    showLock?: boolean;
    showProvider?: boolean;
    videoFallbackImage?: string;
    withGrid?: boolean;
    showArrows?: boolean;
    fixedArrowPosition?: boolean;
    zeroArrowPosition?: boolean;
    tileWidth?: number;
    hideDummies?: boolean;
    disabledProductIndexes?: number[];
    renderAddToBookmarkButton?: (ProductForBookmarking: {
        id?: number | undefined;
        bookmarked?: boolean;
        title?: string;
        provider?: Provider | undefined;
        duration?: string | undefined;
        type?: ProductType;
        completed?: any;
        assetIndex?: number;
        playlistId?: string | undefined;
    }) => JSX.Element | React.ReactNode;
    customSliderSettings?: Record<string, unknown>;
}
export interface CarouselWrapperProps {
    tileMargin: string;
    setFixedWidth?: boolean;
    tileWidth?: number;
}
export interface StyledTileWrapperProps {
    withLabels?: boolean;
    hideDummy?: boolean;
}
//# sourceMappingURL=ProductNewsCarousel.interface.d.ts.map