import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { mountWithTheme, Accordion, CopyText, Heading } from '@matthill8286/atomic-ui';
import router from 'react-router';
import { AccordionSection } from './index';
import { Elements } from '../../types/richtext';
var testText = 'Never gonna give you up Never gonna let you down Never gonna run around and desert you';
var accordionEntries = {
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
            text: testText
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
            text: testText
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
            text: testText
          }]
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
        entries: accordionEntries.entries,
        sectionColor: "primary",
        textColor: "grey3",
        isLarge: false,
        withIconsOnRight: true
      }));
      var accordion = accordionSection.find(Accordion);
      expect(accordion.prop('openedIndex')).toBeUndefined();
    });
  });
  describe('open accordion', function () {
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
        entries: accordionEntries.entries,
        sectionColor: "primary",
        textColor: "grey3",
        isLarge: false,
        withIconsOnRight: true
      }));
      var accordion = accordionSection.find(Accordion);
      expect(accordion.prop('openedIndex')).toBe(0);
    });
    it('renders section with accordion and content', function () {
      var accordionSection = mountWithTheme(React.createElement(AccordionSection, {
        entries: accordionEntries.entries,
        sectionColor: "primary",
        textColor: "grey3",
        isLarge: false,
        withIconsOnRight: true
      }));
      var title = accordionSection.find(Heading).first();
      expect(title.text()).toBe("It's a headline");
      var content = accordionSection.find(CopyText).first();
      expect(content.text()).toBe(testText);
    });
  });
});
//# sourceMappingURL=AccordionSection.test.js.map