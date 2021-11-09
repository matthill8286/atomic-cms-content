import * as React from 'react';
import {cleanup} from '@testing-library/react';
import {
  CopyText,
  Heading,
  LazyLoadImage,
  mountWithTheme,
  ImageAndText,
} from '@matthill8286/atomic-ui';
import {ImageAndTextSectionField} from './ImageTextSection.types';
import {ImageTextSection} from './index';

xdescribe('Landing:Components:ImageTextSection', () => {
  afterEach(cleanup);
  const props: ImageAndTextSectionField = {
    titleInternal: 'image and text title',
    image: {
      url: 'testUrl.png',
    },
    imageAlignment: 'right',
    text: [
      {
        type: 'heading3',
        children: [{text: 'This is the Header of ImageTextSection'}],
      },
      {
        type: 'paragraph',
        children: [{text: 'This is an ImageAndTextSection'}],
      },
    ],
    anchorId: 'imageTextAnchorId',
  };

  const imageTextWithoutImage: ImageAndTextSectionField = {
    titleInternal: 'image and text title',
    image: null,
    imageAlignment: 'right',
    text: [
      {
        children: [
          {
            type: 'heading3',
            children: [{text: 'This is the Header of ImageTextSection'}],
          },
          {
            type: 'paragraph',
            children: [{text: 'This is an ImageAndTextSection'}],
          },
        ],
      },
    ],
    anchorId: 'imageTextAnchorId',
  };

  it('renders section with image', () => {
    const imageAndTextSection = mountWithTheme(
      <ImageTextSection imageAndTextFields={[props]} />
    );
    const image = imageAndTextSection.find(LazyLoadImage).first();
    expect(image.props().src).toBe(props.image.url);
  });

  it('renders section with header and paragraph', () => {
    const imageAndTextSection = mountWithTheme(
      <ImageTextSection imageAndTextFields={[props]} />
    );
    const header = imageAndTextSection.find(Heading).first();
    const paragraph = imageAndTextSection.find(CopyText).first();
    expect(header.text()).toBe(props.text[0].text);
    expect(paragraph.text()).toBe(props.text[1].text);
  });

  it('renders section without image', () => {
    const imageAndTextSection = mountWithTheme(
      <ImageTextSection imageAndTextFields={[imageTextWithoutImage]} />
    );

    expect(imageAndTextSection.find(ImageAndText)).toHaveLength(0);
  });
});
