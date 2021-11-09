import React from 'react';
import {PageTemplateProps} from '../../types';
import {PrivacyPage as PrivacyPageWithoutQuery} from './PrivacyPage';

export const PrivacyPageContent = (props: PageTemplateProps) => (
  <PrivacyPageWithoutQuery
    {...props}
    landingPageContent={props.landingPageContent}
  />
);

// We have to export default or @loadable/component throws
// hoist-non-react-statics.cjs.js:70 Uncaught TypeError: Cannot convert undefined or null to object
export default PrivacyPageContent;
