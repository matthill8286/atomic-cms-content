import * as React from 'react';
import { mountWithTheme } from '@matthill8286/atomic-ui';
import { FAQSection } from './index';
import { AccordionSection, AccordionSchemaType } from '../AccordionSection';
import { Elements } from '../../types/richtext';
var testQuestion = 'Who is the fastest of them all?';
var testAnswer = 'mirror mirror on the wall ...';
var testFaqHeadline = 'Queens in modern times';
var faqHeadline = {
  raw: {
    children: [{
      type: 'heading1',
      children: [{
        text: testFaqHeadline
      }]
    }]
  }
};
var faqAccordionEntries = {
  entries: [{
    anchorId: 'letmeanchoryou',
    entryHeadline: {
      raw: {
        children: [{
          type: Elements.heading3,
          children: [{
            text: "It's a headline"
          }]
        }]
      }
    },
    entryContent: {
      raw: {
        children: [{
          type: Elements.paragraph,
          children: [{
            text: 'Testing can be tested in the most testing of tests'
          }]
        }]
      }
    }
  }, {
    anchorId: 'second',
    entryHeadline: {
      raw: {
        children: [{
          type: Elements.heading3,
          children: [{
            text: "It's a second headline"
          }]
        }]
      }
    },
    entryContent: {
      raw: {
        children: [{
          type: Elements.paragraph,
          children: [{
            text: 'Testing can be tested in the most testing of tests'.repeat(2)
          }]
        }]
      }
    }
  }, {
    anchorId: 'third',
    entryHeadline: {
      raw: {
        children: [{
          type: Elements.heading3,
          children: [{
            text: "It's a third headline"
          }]
        }]
      }
    },
    entryContent: {
      raw: {
        children: [{
          type: Elements.paragraph,
          children: [{
            text: 'Testing can be tested in the most testing of tests'.repeat(11)
          }]
        }]
      }
    }
  }]
};
var faqEntries = [];
jest.mock('react-router', function () {
  return {
    useLocation: function useLocation() {
      return 'http://localhost:4000';
    }
  };
});
xdescribe('Content:Common:FAQSection', function () {
  it('renders FAQSection with Headline, Question and Answer', function () {
    var renderedFAQ = mountWithTheme(React.createElement(FAQSection, {
      entries: faqAccordionEntries.entries,
      headline: faqHeadline
    }));
    var findRichText = renderedFAQ.find('RichText');
    console.log('findRichText', {
      findRichText: findRichText
    });
    expect(findRichText).toHaveLength(3);
    expect(findRichText.at(0).text()).toBe(testFaqHeadline);
    expect(findRichText.at(1).text()).toBe(testQuestion);
    expect(findRichText.at(2).text()).toBe(testAnswer);
  });
  it('renders Accordion section with FAQ schema type prop', function () {
    var renderedFAQ = mountWithTheme(React.createElement(FAQSection, {
      entries: faqAccordionEntries.entries,
      headline: faqHeadline
    }));
    var accordionSection = renderedFAQ.find(AccordionSection);
    expect(accordionSection).toHaveLength(1);
    expect(accordionSection.prop('schemaType')).toBe(AccordionSchemaType.Faq);
  });
});
//# sourceMappingURL=FaqSection.test.js.map