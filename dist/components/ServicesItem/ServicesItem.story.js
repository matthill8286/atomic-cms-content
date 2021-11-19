import React from 'react';
import { ServicesItem } from './index';
import { Cell, Grid, Row } from '@matthill8286/atomic-ui';
export default {
  title: 'Design System/Services Item',
  component: ServicesItem
};

var ServicesItemWrapper = function ServicesItemWrapper(_ref) {
  var children = _ref.children;
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 6
  }, children)));
};

var Template = function Template(args) {
  return React.createElement(ServicesItemWrapper, null, React.createElement(ServicesItem, args));
};

export var ServicesItemStory = Template.bind({});
ServicesItemStory.args = {
  number: '#1',
  title: 'Carbon Fibre',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  backgroundImage: 'public/images/teasers/02.jpg',
  limitLines: 4,
  variant: 'light',
  fixedSize: 'sm'
};
ServicesItemStory.argTypes = {};
//# sourceMappingURL=ServicesItem.story.js.map