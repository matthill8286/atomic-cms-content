import React from 'react';
import {Page, PageTemplateProps} from '../../components';
import {CallToActionWithPlaylist} from '../../combinations';

export const TopicDetailsPageWrapper = (props: PageTemplateProps) => {
  return (
    <Page
      landingPageContent={props.landingPageContent}
      PageContent={CallToActionWithPlaylist}
      overridePlaylistClickEvent={false}
      withPageHead
      dataTestId="topics-static-playlist"
      generator="TOPICS"
    />
  );
};

export default TopicDetailsPageWrapper;
