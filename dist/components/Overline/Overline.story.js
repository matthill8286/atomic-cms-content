import React from 'react';
import { Overline } from './Overline';
export default {
  title: 'Design System/Overline',
  component: Overline
};

var Template = function Template(args) {
  return React.createElement(Overline, args);
};

export var OverlineStory = Template.bind({});
OverlineStory.args = {
  type: 'news'
};
OverlineStory.argTypes = {
  type: {
    options: ['services', 'home', 'news', 'testimonials', 'featured', 'contact'],
    control: {
      type: 'select'
    }
  }
};
//# sourceMappingURL=Overline.story.js.map