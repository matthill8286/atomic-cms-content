import { Meta, Story } from '@storybook/react'
import React from 'react'
import { styled } from '@matthill8286/atomic-ui'
import { WorkItem } from './WorkItem'
import { WorkItemProps } from './WorkItem.interface'
import { StorybookWrapper } from '@matthill8286/atomic-ui/dist/utils/StorybookWrapper'

const WorkWrapper = styled.div`
  max-width: 1000px;
`

export default {
  title: 'Design System/WorkItem',
  component: WorkItem,
} as Meta

const Template: Story<WorkItemProps> = (args: WorkItemProps) => (
  <WorkWrapper>
    <StorybookWrapper>
      <WorkItem {...args} />
    </StorybookWrapper>
  </WorkWrapper>
)

export const WorkItemStory = Template.bind({})

WorkItemStory.args = {
  title: 'STYLE IS EVERYTHING',
  intro: 'THE STYLE, SIR.',
  description:
    'Simplicity is not a style, it is more a philosophy about how to design something more effectively.',
  workText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonLink: '/project-id',
  buttonLabel: 'View Project',
}

WorkItemStory.argTypes = {}
