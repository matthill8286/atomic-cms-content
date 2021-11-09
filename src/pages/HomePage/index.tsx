import React from 'react';
import {PageTemplateProps} from '../../types';
import {Page} from '../../components/Page';
import {CallToActionWithPlaylist} from '../../combinations';

export const HomePageWrapper = ({
  landingPageContent,
  PageContent,
  withPageHead,
  overridePlaylistClickEvent,
  ...props
}: PageTemplateProps) => (
  <Page
    {...props}
    landingPageContent={landingPageContent}
    PageContent={CallToActionWithPlaylist}
    withPageHead
    overridePlaylistClickEvent={false}
    generator="HOME_PAGE"
  />
);

export default HomePageWrapper;
