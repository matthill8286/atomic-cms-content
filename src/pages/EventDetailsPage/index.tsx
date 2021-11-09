import React from 'react';
import {Page, PageTemplateProps} from '../../components';
import {EventsWithAssetMeta} from './EventContent';

export const EventsDetailsPageWrapper = ({
  landingPageContent,
  PageContent,
  withPageHead,
  overridePlaylistClickEvent,
  ...props
}: PageTemplateProps) => {
  return (
    <Page
      landingPageContent={landingPageContent}
      PageContent={EventsWithAssetMeta}
      withPageHead
      overridePlaylistClickEvent
      dataTestId="event-details-static-playlist"
      generator="EVENT_DETAILS"
      {...props}
    />
  );
};

export default EventsDetailsPageWrapper;
