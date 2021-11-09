import React from 'react';
import loadable from '@loadable/component';
import { GenericLoadingScreenScrollToTop } from '@/components/GenericLoadingScreen';

const PageSlice = loadable(() => import('../components/StaticInstanceParent'), {
  fallback: <GenericLoadingScreenScrollToTop />,
});

export interface StaticRoutes {
  POLICY: { path: string; name: string };
  ASSET: { path: string; name: string };
  PRIVACY: { path: string; name: string };
  TOPICS: { path: string; name: string };
  LEGAL: { path: string; name: string };
  FAQ: { path: string; name: string };
  TERMS: { path: string; name: string };
  WHO: { path: string; name: string };
  HOME: { path: string; name: string };
  CONTACT: { path: string; name: string };
  ABOUT: { path: string; name: string };
  EVENTS: { path: string; name: string };
  EVENT_DETAILS: { path: string; name: string };
}

/**
 * @desc Static routes configuration
 * @type {{ABOUT: {path: string; name: string}, POLICY: {path: string, name: string}, ASSET: {path: string, name: string}, PRIVACY: {path: string, name: string}, LEGAL: {path: string, name: string}, FAQ: {path: string, name: string}, TERMS: {path: string, name: string}, WHO: {path: string, name: string}, HOME: {path: string, name: string}}}
 */
export const StaticSlicesRoutes: StaticRoutes = {
  HOME: {
    path: '/home',
    name: 'Home',
  },
  ASSET: {
    path: '/home/learning-asset/:id',
    name: 'Asset',
  },
  FAQ: {
    path: '/faq',
    name: 'FAQ',
  },
  LEGAL: {
    path: '/legal',
    name: 'Legal',
  },
  CONTACT: {
    path: '/contact-us',
    name: 'Contact',
  },
  WHO: {
    path: '/who-we-are',
    name: 'Who',
  },
  ABOUT: {
    path: '/about-us',
    name: 'AboutUs',
  },
  PRIVACY: {
    path: '/privacy-statement',
    name: 'Privacy',
  },
  POLICY: {
    path: '/cookie-statement',
    name: 'Policy',
  },
  TERMS: {
    path: '/terms-of-use',
    name: 'Terms',
  },
  EVENTS: {
    path: '/events',
    name: 'Events',
  },
  EVENT_DETAILS: {
    path: '/events/:details',
    name: 'EventDetails',
  },
  TOPICS: {
    path: '/topics/:details',
    name: 'TopicDetails',
  },
};

export default [
  {
    exact: true,
    ...StaticSlicesRoutes.HOME,
    component: PageSlice,
  },
  {
    exact: false,
    ...StaticSlicesRoutes.ASSET,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.FAQ,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.LEGAL,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.CONTACT,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.WHO,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.ABOUT,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.POLICY,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.PRIVACY,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.TERMS,
    component: PageSlice,
  },
  {
    exact: true,
    ...StaticSlicesRoutes.EVENTS,
    component: PageSlice,
  },
  {
    exact: false,
    ...StaticSlicesRoutes.EVENT_DETAILS,
    component: PageSlice,
  },
  {
    exact: false,
    ...StaticSlicesRoutes.TOPICS,
    component: PageSlice,
  },
];
