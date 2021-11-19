import React from 'react';
import { Elements } from '../../types/richtext';
import { AccordionSchemaType, AccordionSection } from './index';
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
            text: testText
          }]
        }]
      }
    }
  }]
};
export default {
  title: 'Design System/Accordion Section',
  component: AccordionSection
};

var Template = function Template(args) {
  return React.createElement(AccordionSection, args);
};

export var AccordionStory = Template.bind({});
AccordionStory.args = {
  title: 'STYLE IS EVERYTHING',
  entries: accordionEntries.entries,
  schemaType: AccordionSchemaType.None,
  customAccordionEntries: [],
  textColor: 'grey5',
  withIconsOnRight: false,
  isLarge: false
};
AccordionStory.argTypes = {};
//# sourceMappingURL=AccordionSection.story.js.map