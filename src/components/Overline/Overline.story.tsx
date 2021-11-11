import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Overline, IDivider } from './Overline'

export default {
  title: 'Design System/Overline',
  component: Overline,
} as Meta

const Template: Story<IDivider> = (args: IDivider) => <Overline {...args} />

export const OverlineStory = Template.bind({})

OverlineStory.args = {
  type: 'news',
}

OverlineStory.argTypes = {
  type: {
    options: ['services', 'home', 'news', 'testimonials', 'featured', 'contact'],
    control: { type: 'select' },
  },
}
