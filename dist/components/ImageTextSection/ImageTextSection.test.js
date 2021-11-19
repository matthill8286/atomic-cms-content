import * as React from 'react';
import { cleanup } from '@testing-library/react';
import { CopyText, Heading, LazyLoadImage, mountWithTheme, ImageAndText } from '@matthill8286/atomic-ui';
import { ImageTextSection } from './index';
xdescribe('Landing:Components:ImageTextSection', function () {
  afterEach(cleanup);
  var props = {
    titleInternal: 'image and text title',
    image: {
      url: 'testUrl.png'
    },
    imageAlignment: 'right',
    text: [{
      type: 'heading3',
      children: [{
        text: 'This is the Header of ImageTextSection'
      }]
    }, {
      type: 'paragraph',
      children: [{
        text: 'This is an ImageAndTextSection'
      }]
    }],
    anchorId: 'imageTextAnchorId'
  };
  var imageTextWithoutImage = {
    titleInternal: 'image and text title',
    image: null,
    imageAlignment: 'right',
    text: [{
      children: [{
        type: 'heading3',
        children: [{
          text: 'This is the Header of ImageTextSection'
        }]
      }, {
        type: 'paragraph',
        children: [{
          text: 'This is an ImageAndTextSection'
        }]
      }]
    }],
    anchorId: 'imageTextAnchorId'
  };
  it('renders section with image', function () {
    var imageAndTextSection = mountWithTheme(React.createElement(ImageTextSection, {
      imageAndTextFields: [props]
    }));
    var image = imageAndTextSection.find(LazyLoadImage).first();
    expect(image.props().src).toBe(props.image.url);
  });
  it('renders section with header and paragraph', function () {
    var imageAndTextSection = mountWithTheme(React.createElement(ImageTextSection, {
      imageAndTextFields: [props]
    }));
    var header = imageAndTextSection.find(Heading).first();
    var paragraph = imageAndTextSection.find(CopyText).first();
    expect(header.text()).toBe(props.text[0].text);
    expect(paragraph.text()).toBe(props.text[1].text);
  });
  it('renders section without image', function () {
    var imageAndTextSection = mountWithTheme(React.createElement(ImageTextSection, {
      imageAndTextFields: [imageTextWithoutImage]
    }));
    expect(imageAndTextSection.find(ImageAndText)).toHaveLength(0);
  });
});
//# sourceMappingURL=ImageTextSection.test.js.map