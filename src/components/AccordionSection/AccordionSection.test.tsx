import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { mountWithTheme, Accordion, CopyText, Heading } from '@matthill8286/atomic-ui'
import router from 'react-router'
import { AccordionSection } from './index'
import { AccordionSectionProps, AccordionSchemaType } from './AccordionSection.types'
import { Elements } from '../../types/richtext'

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
        raw: { children: [{ type: Elements.heading3, children: [{ text: "It's a headline" }] }] },
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
        raw: { children: [{ type: Elements.heading3, children: [{ text: "It's a headline" }] }] },
      },
      entryContent: {
        raw: {
          children: [{ type: Elements.paragraph, children: [{ text: testText }] }],
        },
      },
    },
  ],
}

afterEach(cleanup)

xdescribe('Content:Common:Components:AccordionSection', () => {
  describe('closed accordion', () => {
    beforeEach(() => {
      jest.spyOn(router, 'useLocation').mockReturnValue({
        pathname: '/let/me/be/your/pathName',
        hash: '',
        search: '',
        state: {},
        key: '',
      })
    })

    it('renders closed accordion', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection
          entries={accordionEntries.entries}
          sectionColor="primary"
          textColor="grey3"
          isLarge={false}
          withIconsOnRight
        />
      )
      const accordion = accordionSection.find(Accordion)
      expect(accordion.prop('openedIndex')).toBeUndefined()
    })
  })

  describe('open accordion', () => {
    beforeAll(() => {
      jest.spyOn(router, 'useLocation').mockReturnValue({
        pathname: '/let/me/be/your/pathName',
        hash: '#letmeanchoryou',
        search: '',
        state: {},
        key: '',
      })
    })

    it('renders open accordion', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection
          entries={accordionEntries.entries}
          sectionColor="primary"
          textColor="grey3"
          isLarge={false}
          withIconsOnRight
        />
      )
      const accordion = accordionSection.find(Accordion)
      expect(accordion.prop('openedIndex')).toBe(0)
    })

    it('renders section with accordion and content', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection
          entries={accordionEntries.entries}
          sectionColor="primary"
          textColor="grey3"
          isLarge={false}
          withIconsOnRight
        />
      )
      const title = accordionSection.find(Heading).first()
      expect(title.text()).toBe("It's a headline")
      const content = accordionSection.find(CopyText).first()
      expect(content.text()).toBe(testText)
    })
  })
})
