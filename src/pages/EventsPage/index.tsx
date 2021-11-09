import React from 'react';
import {CallToActionWithPlaylist} from '../../combinations';
import {Page, PageTemplateProps} from '../../components';

export const EventsPageWrapper = (props: PageTemplateProps) => {
  return (
    <Page
      landingPageContent={props.landingPageContent}
      PageContent={CallToActionWithPlaylist}
      overridePlaylistClickEvent
      withPageHead
      dataTestId="events-static-playlist"
      generator="EVENT_DETAILS"
    />
  );
};

export default EventsPageWrapper;
