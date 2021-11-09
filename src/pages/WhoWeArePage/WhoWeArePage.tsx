import React from 'react';
import {ErrorPage} from '@/components/Error';
import {WhoWeAreContent} from './WhoWeAreContent';
import {AppMeta, PageHead, AppMetaProps} from '../../components';
import {ErrorPageType, PageTemplateProps} from '../../types';

export const WhoWeArePage: React.FC<PageTemplateProps> = ({
  landingPageContent,
}) => {
  const {slices, metaTitle, metaDescription} = landingPageContent;
  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'WHO_PAGE',
    additionalMetas: [{name: 'robots', content: 'follow'}],
  };

  return (
    <>
      <AppMeta key="app-meta-content-special" {...appMetaProps} />
      <PageHead slices={slices} />
      <WhoWeAreContent slices={slices} />
    </>
  );
};
