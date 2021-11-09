import React from 'react';
import {PageConfigType} from '../../types';
import {LegalPage as LegalPageWithoutQuery} from './LegalPage';

export const LegalPageContent = (props: PageConfigType) => (
  <LegalPageWithoutQuery
    {...props}
    landingPageContent={props.landingPageContent}
  />
);

// We have to export default or @loadable/component throws
// hoist-non-react-statics.cjs.js:70 Uncaught TypeError: Cannot convert undefined or null to object
export default LegalPageContent;
