import React from 'react';
import {PageConfigType} from '../../types';
import {FaqPage as FaqPageWithoutQuery} from './FaqPage';

export const FaqPageWrapper = (props: PageConfigType) => (
  <FaqPageWithoutQuery
    {...props}
    landingPageContent={props.landingPageContent}
  />
);

export default FaqPageWrapper;
