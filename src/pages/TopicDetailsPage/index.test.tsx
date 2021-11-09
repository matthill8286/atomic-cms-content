import React from 'react';
import TopicDetailsPageWrapper from './index';
import {PageTemplateProps} from '../../components';

const props: PageTemplateProps = {
  landingPageContent: {
    slice: [],
    metaTitle: '',
    metaDescription: '',
    routeContext: 'events',
  },
  withPageHead: true,
  PageContent: TopicDetailsPageWrapper,
  metaProps: {},
};

describe('TopicDetailsPage', () => {
  it('renders correctly', () => {
    const wrapper = <TopicDetailsPageWrapper {...props} />;
    expect(wrapper).toMatchSnapshot();
  });
});
