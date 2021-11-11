import { StyledNavArrow } from './NavArrow'
import { css, handleGridPadding, styled, media } from '@matthill8286/atomic-ui'

export const gridCss = css`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1472px;
  ${handleGridPadding(false)}
`
// Some wacky workaround for our grid system
export const StyledOverflowWrapper = styled.div`
  ul {
    ${gridCss};
  }
`

export const StyledHeading = styled.div`
  ${gridCss}
  h1, h2, h3, h4 {
    margin-left: 0;
    margin-right: 0;
    color: ${({ theme }) => theme.color.primary};
  }
`

export const StyledGridScrollbar = styled.div`
  ${gridCss}
`

export const StyledHeadingNoGrid = styled.div`
  h1,
  h2,
  h3,
  h4 {
    margin-left: 0;
    margin-right: 0;
    color: ${({ theme }) => theme.color.primary};
  }
`

export const StyledWrapper = styled.div<{ showArrowsOnHover: boolean; isGridLayout?: boolean }>(
  ({ showArrowsOnHover, isGridLayout }) => css`
    position: relative;
    ${!isGridLayout && `height: 100%`}
    ${showArrowsOnHover &&
      `
    ${StyledNavArrow} {
      visibility: hidden;
    }
    ${media.xl} {
      &:hover ${StyledNavArrow} {
        visibility: visible;
      }
    }
  `}
  `
)

export const StyledScrollbar = styled.div<{ isSliderScrollable?: boolean }>(
  ({ isSliderScrollable, theme }) => css`
    background-color: ${theme.color.grey2};
    height: 2px;
    margin-top: ${theme.spacing.base.sm};
    opacity: ${isSliderScrollable ? 1 : 0};
    overflow: hidden;
    position: relative;
    width: 100%;

    span {
      background-color: ${theme.color.primary};
      height: 100%;
      position: absolute;
    }
  `
)
