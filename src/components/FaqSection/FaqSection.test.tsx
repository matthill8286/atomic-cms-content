import * as React from 'react';
import {mountWithTheme} from '@matthill8286/atomic-ui';
import {FAQSection} from './index';
import {
  AccordionSection,
  AccordionSchemaType,
  AccordionSectionHeadline,
} from '../AccordionSection';
import {FaqEntryType} from './FaqSection.types';

const testQuestion = 'Who is the fastest of them all?';
const testAnswer = 'mirror mirror on the wall ...';
const testFaqHeadline = 'Queens in modern times';

const faqHeadline: AccordionSectionHeadline[] = [
  {type: 'heading1', children: [{text: testFaqHeadline}]},
];

const faqEntries: FaqEntryType[] = [];

jest.mock('react-router', () => ({
  useLocation: () => 'http://localhost:4000',
}));

xdescribe('Content:Common:FAQSection', () => {
  it.skip('renders FAQSection with Headline, Question and Answer', () => {
    const renderedFAQ = mountWithTheme(
      <FAQSection entries={faqEntries} headline={faqHeadline} />
    );
    const findRichText = renderedFAQ.find('RichText');

    expect(findRichText).toHaveLength(3);
    expect(findRichText.at(0).text()).toBe(testFaqHeadline);
    expect(findRichText.at(1).text()).toBe(testQuestion);
    expect(findRichText.at(2).text()).toBe(testAnswer);
  });

  it.skip('renders Accordion section with FAQ schema type prop', () => {
    const renderedFAQ = mountWithTheme(
      <FAQSection entries={faqEntries} headline={faqHeadline} />
    );

    const accordionSection = renderedFAQ.find(AccordionSection);

    expect(accordionSection).toHaveLength(1);
    expect(accordionSection.prop('schemaType')).toBe(AccordionSchemaType.Faq);
  });
});
