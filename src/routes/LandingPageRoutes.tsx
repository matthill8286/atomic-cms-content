import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

import { GenericLoadingScreenScrollToTop } from '@/components/GenericLoadingScreen';
import { StaticSlicesRoutes } from './staticSlicesRoutes';

// Pages
const LegalPageWrapper = loadable(() => import('../pages/LegalPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const PrivacyPageWrapper = loadable(() => import('../pages/PrivacyPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const TermsPageWrapper = loadable(() => import('../pages/TermsPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const PolicyPageWrapper = loadable(() => import('../pages/PolicyPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const HomePageWrapper = loadable(() => import('../pages/HomePage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const FaqPageWrapper = loadable(() => import('../pages/FaqPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const WhoWeArePageWrapper = loadable(() => import('../pages/WhoWeArePage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const StaticAssetPageWrapper = loadable(() => import('../pages/AssetPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const ContactUsPageWrapper = loadable(() => import('../pages/ContactUsPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const EventsPageWrapper = loadable(() => import('../pages/EventsPage'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

const EventsDetailsPageWrapper = loadable(
  () => import('../pages/EventDetailsPage'),
  {
    fallback: <GenericLoadingScreenScrollToTop />,
  }
);

const TopicDetailsPageWrapper = loadable(
  () => import('../pages/TopicDetailsPage'),
  {
    fallback: <GenericLoadingScreenScrollToTop />,
  }
);

export const LandingPageRoutes = ({ landingPageContent, ...props }) => {
  const {
    HOME,
    FAQ,
    LEGAL,
    POLICY,
    PRIVACY,
    TERMS,
    WHO,
    ASSET,
    CONTACT,
    ABOUT,
    TOPICS,
    EVENTS,
    EVENT_DETAILS,
  } = StaticSlicesRoutes;

  return (
    <Switch>
      <Route
        path={HOME.path}
        exact
        render={() => (
          <HomePageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={LEGAL.path}
        exact
        render={() => (
          <LegalPageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={PRIVACY.path}
        exact
        render={() => (
          <PrivacyPageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={POLICY.path}
        exact
        render={() => (
          <PolicyPageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={FAQ.path}
        exact
        render={() => (
          <FaqPageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={WHO.path}
        exact
        render={() => (
          <WhoWeArePageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={ABOUT.path}
        exact
        render={() => (
          <WhoWeArePageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={TERMS.path}
        exact
        render={() => (
          <TermsPageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={ASSET.path}
        render={() => (
          <StaticAssetPageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={CONTACT.path}
        exact
        render={() => (
          <ContactUsPageWrapper landingPageContent={landingPageContent} />
        )}
      />
      <Route
        path={TOPICS.path}
        exact
        render={() => (
          <TopicDetailsPageWrapper
            landingPageContent={landingPageContent}
            {...props}
          />
        )}
      />
      <Route
        path={EVENTS.path}
        exact
        render={() => (
          <EventsPageWrapper
            landingPageContent={landingPageContent}
            {...props}
          />
        )}
      />
      <Route
        path={EVENT_DETAILS.path}
        exact
        render={() => (
          <EventsDetailsPageWrapper
            landingPageContent={landingPageContent}
            {...props}
          />
        )}
      />
    </Switch>
  );
};
