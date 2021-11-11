import * as React from 'react'
import { mountWithTheme } from '@matthill8286/atomic-ui'
import { FAQSection, FAQSectionProps } from './index'
import {
  AccordionSection,
  AccordionSchemaType,
  AccordionSectionHeadline,
  AccordionSectionProps,
} from '../AccordionSection'
import { FaqEntryType } from './FaqSection.types'
import { Elements } from '../../types/richtext'

const testQuestion = 'Who is the fastest of them all?'
const testAnswer = 'mirror mirror on the wall ...'
const testFaqHeadline = 'Queens in modern times'

const faqHeadline: AccordionSectionHeadline = {
  raw: {
    children: [{ type: 'heading1', children: [{ text: testFaqHeadline }] }],
  },
}

const faqAccordionEntries: FAQSectionProps = {
  entries: [
    {
      anchorId: 'letmeanchoryou',
      entryHeadline: {
        raw: { children: [{ type: Elements.heading3, children: [{ text: "It's a headline" }] }] },
      },
      entryContent: {
        raw: {
          children: [
            {
              type: Elements.paragraph,
              children: [{ text: 'Testing can be tested in the most testing of tests' }],
            },
          ],
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
          children: [
            {
              type: Elements.paragraph,
              children: [{ text: 'Testing can be tested in the most testing of tests'.repeat(2) }],
            },
          ],
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
          children: [
            {
              type: Elements.paragraph,
              children: [{ text: 'Testing can be tested in the most testing of tests'.repeat(11) }],
            },
          ],
        },
      },
    },
  ],
}

const faqEntries: FaqEntryType[] = []

jest.mock('react-router', () => ({
  useLocation: () => 'http://localhost:4000',
}))

xdescribe('Content:Common:FAQSection', () => {
  it('renders FAQSection with Headline, Question and Answer', () => {
    const renderedFAQ = mountWithTheme(
      <FAQSection entries={faqAccordionEntries.entries} headline={faqHeadline} />
    )
    const findRichText = renderedFAQ.find('RichText')

    console.log('findRichText', { findRichText })

    expect(findRichText).toHaveLength(3)
    expect(findRichText.at(0).text()).toBe(testFaqHeadline)
    expect(findRichText.at(1).text()).toBe(testQuestion)
    expect(findRichText.at(2).text()).toBe(testAnswer)
  })

  it('renders Accordion section with FAQ schema type prop', () => {
    const renderedFAQ = mountWithTheme(
      <FAQSection entries={faqAccordionEntries.entries} headline={faqHeadline} />
    )

    const accordionSection = renderedFAQ.find(AccordionSection)

    expect(accordionSection).toHaveLength(1)
    expect(accordionSection.prop('schemaType')).toBe(AccordionSchemaType.Faq)
  })
})
