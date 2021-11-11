import { Keyframes } from 'styled-components'
import { Transition } from '@matthill8286/atomic-ui'

type FillMode = 'forwards' | 'backwards' | 'none'

export interface AnimationBoxProps extends AnimationProps {
  keyframes: Keyframes
}

export interface AnimationProps {
  infinite: boolean
  fillMode: FillMode
  transition: keyof Transition
  easing: string
}

export interface KeyframesDefinition {
  keyframes: Keyframes
  name: string
}
