import React from 'react';
import {PageConfigType} from '../../types';
import {TermsPage as CookiePageWithoutQuery} from './TermsPage';

export const CookiePageContent = (props: PageConfigType) => (
  <CookiePageWithoutQuery
    {...props}
    landingPageContent={props.landingPageContent}
  />
);

// We have to export default or @loadable/component throws
// hoist-non-react-statics.cjs.js:70 Uncaught TypeError: Cannot convert undefined or null to object
export default CookiePageContent;
