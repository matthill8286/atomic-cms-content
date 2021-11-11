import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ServicesItem, ServicesItemProps } from './index'
import { Cell, Grid, Row } from '@matthill8286/atomic-ui'

export default {
  title: 'Design System/Services Item',
  component: ServicesItem,
} as Meta

const ServicesItemWrapper = ({ children }) => (
  <Grid>
    <Row>
      <Cell columns={6}>{children}</Cell>
    </Row>
  </Grid>
)

const Template: Story<ServicesItemProps> = (args: ServicesItemProps) => (
  <ServicesItemWrapper>
    <ServicesItem {...args} />
  </ServicesItemWrapper>
)

export const ServicesItemStory = Template.bind({})

ServicesItemStory.args = {
  number: '#1',
  title: 'Carbon Fibre',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  backgroundImage: 'public/images/teasers/02.jpg',
  limitLines: 4,
  variant: 'light',
  fixedSize: 'sm',
}

ServicesItemStory.argTypes = {}
