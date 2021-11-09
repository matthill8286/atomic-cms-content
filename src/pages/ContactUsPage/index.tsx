import React from 'react';
import {PageConfigType} from '../../types';
import {ContactUsPage as ContactUsPageWithoutQuery} from './ContactUsPage';

export const ContactUsPageContent = (props: PageConfigType) => (
  <ContactUsPageWithoutQuery
    {...props}
    landingPageContent={props.landingPageContent}
  />
);

// We have to export default or @loadable/component throws
// hoist-non-react-statics.cjs.js:70 Uncaught TypeError: Cannot convert undefined or null to object
export default ContactUsPageContent;
