var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/FaqSection/FaqSection.test.tsx",
    _this = this;

import * as React from 'react';
import { mountWithTheme } from '@matthill8286/atomic-ui';
import { FAQSection } from "./index";
import { AccordionSection, AccordionSchemaType } from "../AccordionSection";
var testQuestion = 'Who is the fastest of them all?';
var testAnswer = 'mirror mirror on the wall ...';
var testFaqHeadline = 'Queens in modern times';
var faqHeadline = [{
  type: 'heading1',
  children: [{
    text: testFaqHeadline
  }]
}];
var faqEntries = [];
jest.mock('react-router', function () {
  return {
    useLocation: function useLocation() {
      return 'http://localhost:4000';
    }
  };
});
xdescribe('Content:Common:FAQSection', function () {
  it.skip('renders FAQSection with Headline, Question and Answer', function () {
    var renderedFAQ = mountWithTheme(React.createElement(FAQSection, {
      entries: faqEntries,
      headline: faqHeadline,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }));
    var findRichText = renderedFAQ.find('RichText');
    expect(findRichText).toHaveLength(3);
    expect(findRichText.at(0).text()).toBe(testFaqHeadline);
    expect(findRichText.at(1).text()).toBe(testQuestion);
    expect(findRichText.at(2).text()).toBe(testAnswer);
  });
  it.skip('renders Accordion section with FAQ schema type prop', function () {
    var renderedFAQ = mountWithTheme(React.createElement(FAQSection, {
      entries: faqEntries,
      headline: faqHeadline,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }));
    var accordionSection = renderedFAQ.find(AccordionSection);
    expect(accordionSection).toHaveLength(1);
    expect(accordionSection.prop('schemaType')).toBe(AccordionSchemaType.Faq);
  });
});
//# sourceMappingURL=FaqSection.test.js.map