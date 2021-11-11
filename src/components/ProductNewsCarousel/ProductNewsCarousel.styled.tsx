import { CarouselWrapperProps, StyledTileWrapperProps } from './ProductNewsCarousel.interface'
import { css, media, styled } from '@matthill8286/atomic-ui'

export const ProductTileLink = styled.div`
  text-decoration: none;
`

export const TileWrapper = styled.article<StyledTileWrapperProps>`
  outline: none;
  padding: ${({ theme }) => `${theme.spacing.base.sm} 0 ${theme.spacing.base.sm};`};
  padding-top: ${({ theme, withLabels }) =>
    withLabels ? theme.spacing.base.sm : theme.spacing.base.xs};
  width: 100%;

  ${({ hideDummy }) =>
    hideDummy &&
    css`
      visibility: hidden;
    `}
`

export const TileFragment = styled.div<StyledTileWrapperProps>`
  width: 100%;
`

export const CarouselWrapper = styled.div<
  CarouselWrapperProps & { isGridLayout?: boolean; setFixedWidth?: boolean }
>`

  & li {
    margin: 0 !important;
    padding: ${({ theme, tileMargin }) =>
      `${Number(theme.spacing.base[tileMargin].replace('px', '')) / 2}px`} !important;

    ${({ setFixedWidth, tileWidth, isGridLayout }) =>
      setFixedWidth &&
      css`
    ${media.xl}, ${media.lg} {
        min-width: ${
          isGridLayout && setFixedWidth && tileWidth
            ? `${tileWidth}px !important;`
            : !isGridLayout
            ? `50%`
            : `360px !important`
        };
        width: ${
          isGridLayout && setFixedWidth && tileWidth
            ? `${tileWidth}px !important;`
            : !isGridLayout
            ? `inherit`
            : `360px !important`
        };
        min-height: ${!isGridLayout && ` min-height: ${tileWidth}px;`};
    }
}`}
  & li:first-child {
    padding-left: 0 !important;
  }
  & li:last-child {
    min-width: 0;
    padding-right: calc((100vw - 100%) / 2 - 32px) !important;
  }
`
