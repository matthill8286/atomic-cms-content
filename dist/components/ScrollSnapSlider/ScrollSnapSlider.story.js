import React from 'react';
import { Badge, Picture } from '@matthill8286/atomic-ui';
import { ScrollSnapSlider } from './ScrollSnapSlider';
import { pictureEntries, withVideoEntries } from './ScrollSnapSlider.data';
var badges = [{
  id: 1,
  name: 'Sponsored'
}, {
  id: 2,
  name: 'Featured'
}];

var renderWithPictureComponent = function renderWithPictureComponent(item, index) {
  return React.createElement("article", {
    key: item.assetID + index
  }, React.createElement(Picture, {
    height: "100%",
    width: "100%",
    src: item.url,
    alt: item.assetID
  }));
};

var renderWithPictureOrVideoComponent = function renderWithPictureOrVideoComponent(item, index) {
  if (item.usageType === 'Product Video') {
    return "Investigate Video Player";
  }

  return renderWithPictureComponent(item, index);
};

var SlideSettings = {
  mobileSmall: 1,
  mobileBig: 2,
  tablet: 2,
  desktop: 3
};
export default {
  title: 'Design System/ScrollSnapSlider',
  component: ScrollSnapSlider,
  argTypes: {
    slidesPerPageSettings: SlideSettings
  }
};

var Template = function Template(args) {
  return React.createElement(ScrollSnapSlider, args, args.children);
};

var TemplateWithBadge = function TemplateWithBadge(args) {
  return React.createElement("div", null, React.createElement(Badge, {
    badges: badges
  }), React.createElement(ScrollSnapSlider, args, args.children));
};

export var Default = Template.bind({});
Default.args = {
  slidesPerPageSettings: {
    mobileSmall: 1,
    mobileBig: 2,
    tablet: 2,
    desktop: 3
  },
  children: pictureEntries.map(function (item, index) {
    return renderWithPictureComponent(item, index);
  })
};
export var withVideo = Template.bind({});
withVideo.args = {
  slidesPerPageSettings: {
    mobileSmall: 1,
    mobileBig: 2,
    tablet: 2,
    desktop: 3
  },
  children: withVideoEntries.map(function (item, index) {
    return renderWithPictureOrVideoComponent(item, index);
  })
};
export var withBadges = TemplateWithBadge.bind({});
withBadges.args = {
  slidesPerPageSettings: {
    mobileSmall: 1,
    mobileBig: 2,
    tablet: 2,
    desktop: 3
  },
  children: withVideoEntries.map(function (item, index) {
    return renderWithPictureOrVideoComponent(item, index);
  })
};
//# sourceMappingURL=ScrollSnapSlider.story.js.map