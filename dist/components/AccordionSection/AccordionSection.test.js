var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/AccordionSection/AccordionSection.test.tsx",
    _this = this;

import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { mountWithTheme, Accordion, CopyText, Heading } from '@matthill8286/atomic-ui';
import router from 'react-router';
import { AccordionSection } from "./index";
import { AccordionSchemaType } from "./AccordionSection.types";
var testText = 'Never gonna give you up Never gonna let you down Never gonna run around and desert you';
var accordionEntries = {
  entries: [{
    anchorId: 'letmeanchoryou',
    entryHeadline: {
      raw: {
        type: 'heading3',
        children: [{
          text: "It's a headline"
        }]
      }
    },
    entryContent: {
      raw: {
        type: 'paragraph',
        children: [{
          text: testText
        }]
      }
    }
  }]
};
afterEach(cleanup);
xdescribe('Content:Common:Components:AccordionSection', function () {
  describe('closed accordion', function () {
    beforeEach(function () {
      jest.spyOn(router, 'useLocation').mockReturnValue({
        pathname: '/let/me/be/your/pathName',
        hash: '',
        search: '',
        state: {},
        key: ''
      });
    });
    it('renders closed accordion', function () {
      var accordionSection = mountWithTheme(React.createElement(AccordionSection, {
        schemaType: AccordionSchemaType.Faq,
        entries: accordionEntries.entries,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }));
      var accordion = accordionSection.find(Accordion);
      expect(accordion.prop('openedIndex')).toBeUndefined();
    });
  });
  xdescribe('open accordion', function () {
    beforeAll(function () {
      jest.spyOn(router, 'useLocation').mockReturnValue({
        pathname: '/let/me/be/your/pathName',
        hash: '#letmeanchoryou',
        search: '',
        state: {},
        key: ''
      });
    });
    it('renders open accordion', function () {
      var accordionSection = mountWithTheme(React.createElement(AccordionSection, {
        schemaType: AccordionSchemaType.Faq,
        entries: accordionEntries.entries,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }));
      var accordion = accordionSection.find(Accordion);
      expect(accordion.prop('openedIndex')).toBe(0);
    });
    it('renders section with accordion and content', function () {
      var accordionSection = mountWithTheme(React.createElement(AccordionSection, {
        entries: accordionEntries.entries,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }));
      var title = accordionSection.find(Heading).first();
      expect(title.text()).toBe("It's a headline");
      var content = accordionSection.find(CopyText).first();
      expect(content.text()).toBe(testText);
    });
    it('renders accordion with a default none schemaType', function () {
      var accordionSection = mountWithTheme(React.createElement(AccordionSection, {
        entries: accordionEntries.entries,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }));
      var accordion = accordionSection.find(Accordion);
      expect(accordion.prop('schemaType')).toBe(AccordionSchemaType.None);
    });
    it('renders accordion with a FAQ schemaType', function () {
      var accordionSection = mountWithTheme(React.createElement(AccordionSection, {
        schemaType: AccordionSchemaType.Faq,
        entries: accordionEntries.entries,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }));
      var accordion = accordionSection.find(Accordion);
      expect(accordion.prop('schemaType')).toBe(AccordionSchemaType.Faq);
    });
  });
});
//# sourceMappingURL=AccordionSection.test.js.map