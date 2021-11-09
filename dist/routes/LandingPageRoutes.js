var _excluded = ["landingPageContent"];

var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/routes/LandingPageRoutes.tsx",
    _this = this;

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
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })
});
var PrivacyPageWrapper = loadable(function () {
  return import("../pages/PrivacyPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })
});
var TermsPageWrapper = loadable(function () {
  return import("../pages/TermsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })
});
var PolicyPageWrapper = loadable(function () {
  return import("../pages/PolicyPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })
});
var HomePageWrapper = loadable(function () {
  return import("../pages/HomePage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })
});
var FaqPageWrapper = loadable(function () {
  return import("../pages/FaqPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })
});
var WhoWeArePageWrapper = loadable(function () {
  return import("../pages/WhoWeArePage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })
});
var StaticAssetPageWrapper = loadable(function () {
  return import("../pages/AssetPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })
});
var ContactUsPageWrapper = loadable(function () {
  return import("../pages/ContactUsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })
});
var EventsPageWrapper = loadable(function () {
  return import("../pages/EventsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })
});
var EventsDetailsPageWrapper = loadable(function () {
  return import("../pages/EventDetailsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })
});
var TopicDetailsPageWrapper = loadable(function () {
  return import("../pages/TopicDetailsPage");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  })
});
export var LandingPageRoutes = function LandingPageRoutes(_ref) {
  var landingPageContent = _ref.landingPageContent,
      props = _objectWithoutProperties(_ref, _excluded);

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
  return React.createElement(Switch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, React.createElement(Route, {
    path: HOME.path,
    exact: true,
    render: function render() {
      return React.createElement(HomePageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: LEGAL.path,
    exact: true,
    render: function render() {
      return React.createElement(LegalPageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: PRIVACY.path,
    exact: true,
    render: function render() {
      return React.createElement(PrivacyPageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: POLICY.path,
    exact: true,
    render: function render() {
      return React.createElement(PolicyPageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: FAQ.path,
    exact: true,
    render: function render() {
      return React.createElement(FaqPageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: WHO.path,
    exact: true,
    render: function render() {
      return React.createElement(WhoWeArePageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: ABOUT.path,
    exact: true,
    render: function render() {
      return React.createElement(WhoWeArePageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: TERMS.path,
    exact: true,
    render: function render() {
      return React.createElement(TermsPageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: ASSET.path,
    render: function render() {
      return React.createElement(StaticAssetPageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: CONTACT.path,
    exact: true,
    render: function render() {
      return React.createElement(ContactUsPageWrapper, {
        landingPageContent: landingPageContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: TOPICS.path,
    exact: true,
    render: function render() {
      return React.createElement(TopicDetailsPageWrapper, _extends({
        landingPageContent: landingPageContent
      }, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: EVENTS.path,
    exact: true,
    render: function render() {
      return React.createElement(EventsPageWrapper, _extends({
        landingPageContent: landingPageContent
      }, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }), React.createElement(Route, {
    path: EVENT_DETAILS.path,
    exact: true,
    render: function render() {
      return React.createElement(EventsDetailsPageWrapper, _extends({
        landingPageContent: landingPageContent
      }, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }));
};
//# sourceMappingURL=LandingPageRoutes.js.map