function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import loadable from '@loadable/component';
import { GenericLoadingScreenScrollToTop } from "../components/GenericLoadingScreen";
var PageSlice = loadable(function () {
  return import("../components/StaticInstanceParent");
}, {
  fallback: React.createElement(GenericLoadingScreenScrollToTop, null)
});
export var StaticSlicesRoutes = {
  HOME: {
    path: '/home',
    name: 'Home'
  },
  ASSET: {
    path: '/home/learning-asset/:id',
    name: 'Asset'
  },
  FAQ: {
    path: '/faq',
    name: 'FAQ'
  },
  LEGAL: {
    path: '/legal',
    name: 'Legal'
  },
  CONTACT: {
    path: '/contact-us',
    name: 'Contact'
  },
  WHO: {
    path: '/who-we-are',
    name: 'Who'
  },
  ABOUT: {
    path: '/about-us',
    name: 'AboutUs'
  },
  PRIVACY: {
    path: '/privacy-statement',
    name: 'Privacy'
  },
  POLICY: {
    path: '/cookie-statement',
    name: 'Policy'
  },
  TERMS: {
    path: '/terms-of-use',
    name: 'Terms'
  },
  EVENTS: {
    path: '/events',
    name: 'Events'
  },
  EVENT_DETAILS: {
    path: '/events/:details',
    name: 'EventDetails'
  },
  TOPICS: {
    path: '/topics/:details',
    name: 'TopicDetails'
  }
};
export default [_objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.HOME), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: false
}, StaticSlicesRoutes.ASSET), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.FAQ), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.LEGAL), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.CONTACT), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.WHO), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.ABOUT), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.POLICY), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.PRIVACY), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.TERMS), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: true
}, StaticSlicesRoutes.EVENTS), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: false
}, StaticSlicesRoutes.EVENT_DETAILS), {}, {
  component: PageSlice
}), _objectSpread(_objectSpread({
  exact: false
}, StaticSlicesRoutes.TOPICS), {}, {
  component: PageSlice
})];
//# sourceMappingURL=staticSlicesRoutes.js.map