import React from 'react';
import EventsPageWrapper from './index';
import {PageTemplateProps} from '../../components';

const props: PageTemplateProps = {
  landingPageContent: {
    slice: [],
    metaTitle: '',
    metaDescription: '',
    routeContext: 'events',
  },
  metaProps: {},
  withPageHead: false,
  PageContent: undefined,
};

describe('EventsPage', () => {
  it('renders correctly', () => {
    const wrapper = <EventsPageWrapper {...props} />;
    expect(wrapper).toMatchSnapshot();
  });
});
