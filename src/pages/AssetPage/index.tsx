import React from 'react';
import {AssetPageWithContext} from './StaticAssetPage';
import {PageTemplateProps} from '../../types';

export const AssetPageWrapper = (props: PageTemplateProps) => (
  <AssetPageWithContext
    landingPageContent={props.landingPageContent}
    {...props}
  />
);

export default AssetPageWrapper;
