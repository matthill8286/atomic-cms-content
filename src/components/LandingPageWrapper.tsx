import React, { useEffect } from 'react';
import { getLandingPageQuery } from '@lxp/webmobile-cms-graphql';
import { useAnalytics } from '@/hooks';
import { LandingPagesConnector } from './LandingPagesConnector';
import { LandingPageRoutes } from '../routes/LandingPageRoutes';

export const LandingPageWrapper = ({
  landingPageId,
  pageTheme,
  ...props
}): JSX.Element | null => {
  const analytics = useAnalytics();
  useEffect(() => {
    analytics?.track('Client Landing Page Viewed', {
      referrer: document?.referrer,
      path: window?.location?.pathname,
      title: document?.title,
      url: window?.location?.href,
      name: '',
    });
  }, [document?.title, window?.location]);

  if (!landingPageId) {
    return null;
  }

  return (
    <LandingPagesConnector
      pageId={landingPageId}
      getLandingPageQuery={getLandingPageQuery}
      {...props}
    >
      {({ pageContent }) => (
        <LandingPageRoutes landingPageContent={pageContent} {...props} />
      )}
    </LandingPagesConnector>
  );
};
