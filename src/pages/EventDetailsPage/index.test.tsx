import React from 'react';
import EventsDetailsPageWrapper from './index';
import {EventsWithAssetMeta} from './EventContent';
import {PageTemplateProps} from '../../components';

const props: PageTemplateProps = {
  landingPageContent: {
    slice: [],
    metaTitle: '',
    metaDescription: '',
    routeContext: 'events',
  },
  overridePlaylistClickEvent: false,
  withPageHead: true,
  PageContent: EventsWithAssetMeta,
  metaProps: {},
};

describe('EventDetailsPage', () => {
  it('renders correctly', () => {
    const wrapper = <EventsDetailsPageWrapper {...props} />;
    expect(wrapper).toMatchSnapshot();
  });
});
