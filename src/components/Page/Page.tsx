import React from 'react';
import {ErrorPage} from '@/components/Error';
import {ErrorPageType, PageTemplateProps} from '../../types';
import {AppMeta, PageHead, AppMetaProps} from '../../components';

export const Page: React.FC<PageTemplateProps> = ({
  landingPageContent,
  PageContent,
  withPageHead,
  generator,
  dataTestId,
  errorPage,
  ...props
}) => {
  const {
    slices,
    metaTitle,
    metaDescription,
    routeContext,
    modalLocked,
    modalBlock,
  } = landingPageContent;

  if (!Array.isArray(slices) || !slices.length) {
    return (
      <ErrorPage
        errorMessage={errorPage?.errorMessage}
        errorType={ErrorPageType.NOT_FOUND}
        product="Landing"
      />
    );
  }

  const appMetaProps: AppMetaProps = {
    key: `${metaTitle}--${generator}`,
    title: metaTitle,
    description: metaDescription,
    canonical: window.location.href,
    generator,
    additionalMetas: [{name: 'robots', content: 'follow'}],
  };

  return (
    <>
      <AppMeta {...appMetaProps} />
      {withPageHead && <PageHead slices={slices} />}
      {/* @ts-ignore */}
      <PageContent
        modalLocked={modalLocked}
        modalBlock={modalBlock}
        routeContext={routeContext}
        slices={slices}
        {...props}
      />
    </>
  );
};
