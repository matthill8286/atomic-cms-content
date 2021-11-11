import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AnimationOverview } from './AnimationOverview'
import { AnimationProps } from './AnimationOverview.interface'

export default {
  title: 'General/Overviews',
  component: AnimationOverview,
} as Meta

const Template: Story<Partial<AnimationProps>> = (args: Partial<AnimationProps>) => (
  <AnimationOverview {...args} />
)

export const Animations = Template.bind({})

Animations.args = {
  fillMode: 'backwards',
  easing: 'ease-out',
  infinite: false,
  transition: 'long',
}

Animations.argTypes = {}
