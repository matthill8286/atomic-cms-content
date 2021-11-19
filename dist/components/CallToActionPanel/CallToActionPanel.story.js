function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { CallToActionPanel } from '@matthill8286/atomic-ui';
var testText = 'Never gonna give you up Never gonna let you down Never gonna run around and desert you';
export default {
  title: 'Design System/Call to action panel',
  component: CallToActionPanel
};

var Template = function Template(args) {
  return React.createElement(CallToActionPanel, _extends({
    alignment: "left"
  }, args));
};

export var SingleCallToActionPanel = Template.bind({});
export var MultipleCallToActionPanels = Template.bind({});
SingleCallToActionPanel.args = {
  image: {
    url: 'https://images.freeimages.com/images/large-previews/b0b/american-flag-1547938.jpg',
    altText: 'free image download'
  },
  rightOrientation: true,
  textColor: 'grey5',
  richTextCopy: testText
};
SingleCallToActionPanel.argTypes = {};
//# sourceMappingURL=CallToActionPanel.story.js.map