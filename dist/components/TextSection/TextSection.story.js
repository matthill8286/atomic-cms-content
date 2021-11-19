import React from 'react';
import { TextSection } from './index';
import { Elements } from '../../types/richtext';
export default {
  title: 'Design System/Text Section',
  component: TextSection
};

var Template = function Template(args) {
  return React.createElement(TextSection, args);
};

export var TextSectionStory = Template.bind({});
TextSectionStory.args = {
  title: 'STYLE IS EVERYTHING',
  richText: {
    raw: {
      children: [{
        type: Elements.paragraph,
        children: [{
          text: 'At Alternate we are committed to protecting your right to privacy. We aim to protect any personal data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us. We have therefore committed ourselves to the following basic principle'
        }]
      }, {
        type: Elements.heading3,
        children: [{
          text: 'A heading mid component.',
          italic: true
        }]
      }]
    }
  },
  active: false,
  sectionColor: 'clear',
  headingColor: 'primary',
  headingsBold: true,
  textColor: 'grey5',
  paddingTop: 'lg',
  paddingBottom: 'lg'
};
TextSectionStory.argTypes = {};
//# sourceMappingURL=TextSection.story.js.map