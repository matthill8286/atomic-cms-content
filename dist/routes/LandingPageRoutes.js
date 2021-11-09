function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import { GenericLoadingScreenScrollToTop } from "../components/GenericLoadingScreen";
import { StaticSlicesRoutes } from "./staticSlicesRoutes";
var LegalPageWrapper = loadable(function () {
  return import("../pages/LegalPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var PrivacyPageWrapper = loadable(function () {
  return import("../pages/PrivacyPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var TermsPageWrapper = loadable(function () {
  return import("../pages/TermsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var PolicyPageWrapper = loadable(function () {
  return import("../pages/PolicyPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var HomePageWrapper = loadable(function () {
  return import("../pages/HomePage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var FaqPageWrapper = loadable(function () {
  return import("../pages/FaqPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var WhoWeArePageWrapper = loadable(function () {
  return import("../pages/WhoWeArePage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var StaticAssetPageWrapper = loadable(function () {
  return import("../pages/AssetPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var ContactUsPageWrapper = loadable(function () {
  return import("../pages/ContactUsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var EventsPageWrapper = loadable(function () {
  return import("../pages/EventsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var EventsDetailsPageWrapper = loadable(function () {
  return import("../pages/EventDetailsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
var TopicDetailsPageWrapper = loadable(function () {
  return import("../pages/TopicDetailsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
export var LandingPageRoutes = function LandingPageRoutes(_ref) {
  var landingPageContent = _ref.landingPageContent,
      props = _objectWithoutProperties(_ref, ["landingPageContent"]);

  var HOME = StaticSlicesRoutes.HOME,
      FAQ = StaticSlicesRoutes.FAQ,
      LEGAL = StaticSlicesRoutes.LEGAL,
      POLICY = StaticSlicesRoutes.POLICY,
      PRIVACY = StaticSlicesRoutes.PRIVACY,
      TERMS = StaticSlicesRoutes.TERMS,
      WHO = StaticSlicesRoutes.WHO,
      ASSET = StaticSlicesRoutes.ASSET,
      CONTACT = StaticSlicesRoutes.CONTACT,
      ABOUT = StaticSlicesRoutes.ABOUT,
      TOPICS = StaticSlicesRoutes.TOPICS,
      EVENTS = StaticSlicesRoutes.EVENTS,
      EVENT_DETAILS = StaticSlicesRoutes.EVENT_DETAILS;
  return React.createElement(Switch, null, React.createElement(Route, {
    path: HOME.path,
    exact: true,
    render: function render() {
      return React.createElement(HomePageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: LEGAL.path,
    exact: true,
    render: function render() {
      return React.createElement(LegalPageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: PRIVACY.path,
    exact: true,
    render: function render() {
      return React.createElement(PrivacyPageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: POLICY.path,
    exact: true,
    render: function render() {
      return React.createElement(PolicyPageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: FAQ.path,
    exact: true,
    render: function render() {
      return React.createElement(FaqPageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: WHO.path,
    exact: true,
    render: function render() {
      return React.createElement(WhoWeArePageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: ABOUT.path,
    exact: true,
    render: function render() {
      return React.createElement(WhoWeArePageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: TERMS.path,
    exact: true,
    render: function render() {
      return React.createElement(TermsPageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: ASSET.path,
    render: function render() {
      return React.createElement(StaticAssetPageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: CONTACT.path,
    exact: true,
    render: function render() {
      return React.createElement(ContactUsPageWrapper, {
        landingPageContent: landingPageContent
      });
    }
  }), React.createElement(Route, {
    path: TOPICS.path,
    exact: true,
    render: function render() {
      return React.createElement(TopicDetailsPageWrapper, _extends({
        landingPageContent: landingPageContent
      }, props));
    }
  }), React.createElement(Route, {
    path: EVENTS.path,
    exact: true,
    render: function render() {
      return React.createElement(EventsPageWrapper, _extends({
        landingPageContent: landingPageContent
      }, props));
    }
  }), React.createElement(Route, {
    path: EVENT_DETAILS.path,
    exact: true,
    render: function render() {
      return React.createElement(EventsDetailsPageWrapper, _extends({
        landingPageContent: landingPageContent
      }, props));
    }
  }));
};
//# sourceMappingURL=LandingPageRoutes.js.map