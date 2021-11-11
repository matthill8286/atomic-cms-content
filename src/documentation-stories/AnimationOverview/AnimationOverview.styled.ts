import { css, styled } from '@matthill8286/atomic-ui'
import { AnimationBoxProps } from './AnimationOverview.interface'

export const AnimationBox = styled.div<AnimationBoxProps>`
  animation: ${({ keyframes, infinite, fillMode, transition, easing, theme }) =>
    css`${keyframes} ${theme.transition[transition]} ${
      infinite ? 'infinite' : ''
    } ${easing} ${fillMode}`};
  width: 100px;
  height: 100px;
  margin: 18px;
  background-color: ${({ theme }) => theme.color.grey3};
`

export const AnimationContainer = styled.div`
  font-family: ${({ theme }) => theme.font.family.default};
  margin-top: 12px;
  display: inline-flex;
  flex: 1;
`
