import React from 'react'
import {
  fadeIn,
  fadeOut,
  fadeScaleKeyframe,
  newspaperKeyframe,
  shake,
  slideFromBottomKeyframe,
  slideFromRightKeyframe,
  superScaledKeyframe,
  Button,
} from '@matthill8286/atomic-ui'
import { AnimationProps, KeyframesDefinition } from './AnimationOverview.interface'
import { AnimationBox, AnimationContainer } from './AnimationOverview.styled'

const animations: KeyframesDefinition[] = [
  { keyframes: fadeIn, name: 'fadeIn' },
  { keyframes: fadeOut, name: 'fadeOut' },
  { keyframes: shake, name: 'shake' },
  { keyframes: fadeScaleKeyframe, name: 'fadeScale' },
  { keyframes: slideFromRightKeyframe, name: 'slideFromRight' },
  { keyframes: slideFromBottomKeyframe, name: 'slideFromBottom' },
  { keyframes: superScaledKeyframe, name: 'superScaled' },
  { keyframes: newspaperKeyframe, name: 'newspaper' },
]

export const AnimationOverview: React.FC<Partial<AnimationProps>> = ({
  transition = 'defaultEasing',
  infinite = false,
  fillMode = 'none',
  easing = 'ease-in',
}) => {
  const [count, setCount] = React.useState(0)
  const inc = React.useCallback(() => setCount(count + 1), [count, setCount])
  return (
    <>
      {!infinite && (
        <Button size="sm" actionType="outlined" onClick={inc}>
          Replay Animation
        </Button>
      )}
      {animations.map(({ keyframes, name }) => (
        <AnimationContainer key={name}>
          {name}
          <AnimationBox
            key={name}
            infinite={infinite}
            keyframes={keyframes}
            transition={transition}
            fillMode={fillMode}
            easing={easing}
          />
        </AnimationContainer>
      ))}
    </>
  )
}
