import React from 'react';
import { styled } from '@matthill8286/atomic-ui';
import { WorkItem } from './WorkItem';
import { StorybookWrapper } from '@matthill8286/atomic-ui/dist/utils/StorybookWrapper';
var WorkWrapper = styled.div.withConfig({
  displayName: "WorkItemstory__WorkWrapper",
  componentId: "sc-19jg8hh-0"
})(["max-width:1000px;"]);
export default {
  title: 'Design System/WorkItem',
  component: WorkItem
};

var Template = function Template(args) {
  return React.createElement(WorkWrapper, null, React.createElement(StorybookWrapper, null, React.createElement(WorkItem, args)));
};

export var WorkItemStory = Template.bind({});
WorkItemStory.args = {
  title: 'STYLE IS EVERYTHING',
  intro: 'THE STYLE, SIR.',
  description: 'Simplicity is not a style, it is more a philosophy about how to design something more effectively.',
  workText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonLink: '/project-id',
  buttonLabel: 'View Project'
};
WorkItemStory.argTypes = {};
//# sourceMappingURL=WorkItem.story.js.map