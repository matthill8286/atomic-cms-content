import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CallToActionPanel } from '@matthill8286/atomic-ui'
import { PublicCallToActionPanelProps } from './CallToActionPanel'

const testText =
  'Never gonna give you up Never gonna let you down Never gonna run around and desert you'

export default {
  title: 'Design System/Call to action panel',
  component: CallToActionPanel,
} as Meta

const Template: Story<PublicCallToActionPanelProps> = (args: PublicCallToActionPanelProps) => (
  // @ts-ignore
  <CallToActionPanel {...args} />
)

export const SingleCallToActionPanel = Template.bind({})
export const MultipleCallToActionPanels = Template.bind({})

SingleCallToActionPanel.args = {
  image: {
    url: 'https://images.freeimages.com/images/large-previews/b0b/american-flag-1547938.jpg',
    altText: 'free image download',
  },
  rightOrientation: true,
  textColor: 'grey5',
  richTextCopy: testText,
}

SingleCallToActionPanel.argTypes = {}
