import React from 'react'
import { Icon, css, media, styled } from '@matthill8286/atomic-ui'
import { IconArrow } from '@matthill8286/atomic-icon-library'

interface StyledNavArrowProps {
  direction: 'prev' | 'next'
  showArrows: boolean
  fixedArrowPosition: boolean
  zeroArrowPosition: boolean
}

export interface NavArrowProps {
  onClick: () => void
  direction: 'next' | 'prev'
  showArrows: boolean
  fixedArrowPosition: boolean
  zeroArrowPosition: boolean
}

export const StyledNavArrow = styled.div<StyledNavArrowProps>`
  position: absolute;
  background: ${({ theme }) => theme.color.white};
  fill: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.dimension.borderRadius7};
  box-shadow: ${({ theme }) => theme.dimension.elevationLevel3};
  ${props => props.direction === 'next' && `right: ${props.theme.spacing.base.lg};`}
  ${props =>
    props.direction === 'prev' && `left: ${props.theme.spacing.base.lg};`}

  cursor: pointer;
  z-index: 3;
  display: none;
  ${props => props.showArrows === false && 'display: none !important;'}
  ${media.maxMd} {
    display: none !important;
  }
  ${media.lg} {
    ${props => props.direction === 'next' && `right: ${props.theme.spacing.base.xl};`}
    ${props => props.direction === 'prev' && `left: ${props.theme.spacing.base.xl};`}
  }
  ${media.xl} {
    ${props => props.direction === 'next' && `right: ${props.theme.spacing.base.xxl};`}
    ${props => props.direction === 'prev' && `left: ${props.theme.spacing.base.xxl};`}
  }
  ${props =>
    props.fixedArrowPosition
      ? css<StyledNavArrowProps>`
          ${media.xxl} {
            /* Todo: calculate arrow margin dynamically */
            ${props => props.direction === 'next' && `right: calc(50% - ${250 * 2.5 + 67}px);`}
            ${props => props.direction === 'prev' && `left: calc(50% - ${250 * 2.5 + 67}px);`}
          }
        `
      : ''}
  ${props =>
    !props.fixedArrowPosition &&
    props.zeroArrowPosition &&
    css<StyledNavArrowProps>`
      ${props => props.direction === 'next' && 'right: 0 !important;'}
      ${props => props.direction === 'prev' && 'left: 0 !important;'}
    `}
`

export const NavArrow = React.forwardRef(
  (
    { direction, onClick, showArrows, fixedArrowPosition, zeroArrowPosition }: NavArrowProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const rotation = direction === 'prev' ? 180 : 0
    return (
      <StyledNavArrow
        direction={direction}
        ref={ref}
        onClick={onClick}
        showArrows={showArrows}
        fixedArrowPosition={fixedArrowPosition}
        zeroArrowPosition={zeroArrowPosition}>
        <Icon rotate={rotation} color="black" padding="sm">
          <IconArrow width={30} height={30} />
        </Icon>
      </StyledNavArrow>
    )
  }
)
