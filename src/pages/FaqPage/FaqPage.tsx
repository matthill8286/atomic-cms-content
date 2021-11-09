import React from 'react';
import {ErrorPage} from '@/components/Error';
import {FaqPageContent} from './FaqPageContent';
import {ErrorPageType, PageConfigType} from '../../types';
import {AppMeta, PageHead, AppMetaProps} from '../../components';

export const FaqPage: React.FC<PageConfigType> = ({landingPageContent}) => {
  const {slices, metaTitle, metaDescription} = landingPageContent;

  if (!Array.isArray(slices) || !slices.length || !slices) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'FAQ_PAGE',
    additionalMetas: [{name: 'robots', content: 'follow'}],
  };

  return (
    <>
      <AppMeta key="app-meta-content-special" {...appMetaProps} />
      <PageHead slices={slices} />
      <FaqPageContent slices={slices} />
    </>
  );
};
