import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Elements } from '../../types/richtext'
import { AccordionSchemaType, AccordionSection, AccordionSectionProps } from './index'

const testText =
  'Never gonna give you up Never gonna let you down Never gonna run around and desert you'
const accordionEntries: AccordionSectionProps = {
  entries: [
    {
      anchorId: 'letmeanchoryou',
      entryHeadline: {
        raw: { children: [{ type: Elements.heading3, children: [{ text: "It's a headline" }] }] },
      },
      entryContent: {
        raw: {
          children: [{ type: Elements.paragraph, children: [{ text: testText }] }],
        },
      },
    },
    {
      anchorId: 'second',
      entryHeadline: {
        raw: {
          children: [{ type: Elements.heading3, children: [{ text: "It's a second headline" }] }],
        },
      },
      entryContent: {
        raw: {
          children: [{ type: Elements.paragraph, children: [{ text: testText }] }],
        },
      },
    },
    {
      anchorId: 'third',
      entryHeadline: {
        raw: {
          children: [{ type: Elements.heading3, children: [{ text: "It's a third headline" }] }],
        },
      },
      entryContent: {
        raw: {
          children: [{ type: Elements.paragraph, children: [{ text: testText }] }],
        },
      },
    },
  ],
}

export default {
  title: 'Design System/Accordion Section',
  component: AccordionSection,
} as Meta

const Template: Story<AccordionSectionProps> = (args: AccordionSectionProps) => (
  <AccordionSection {...args} />
)

export const AccordionStory = Template.bind({})

AccordionStory.args = {
  title: 'STYLE IS EVERYTHING',
  entries: accordionEntries.entries,
  schemaType: AccordionSchemaType.None,
  customAccordionEntries: [],
  textColor: 'grey5',
  withIconsOnRight: false,
  isLarge: false,
}

AccordionStory.argTypes = {}
