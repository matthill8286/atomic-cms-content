import React from 'react'
import { ErrorPageType, PageTemplateProps } from '../../types'
import { AppMeta, AppMetaProps } from '../AppMeta'
import ErrorPage from '../Error'
import { AppFooter, AppHeaderComponent as AppHeader } from '@matthill8286/atomic-ui'

export const Page: React.FC<PageTemplateProps> = ({
  landingPageContent,
  PageContent,
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
  } = landingPageContent

  if (!Array.isArray(slices) || !slices.length) {
    return (
      <ErrorPage
        errorMessage={errorPage?.errorMessage}
        errorType={ErrorPageType.NOT_FOUND}
        product="Landing"
      />
    )
  }

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: window.location.href,
    generator,
    additionalMetas: [{ name: 'robots', content: 'follow' }],
  }

  return (
    <>
      <AppMeta {...appMetaProps} />

      {/* Add static header */}
      <AppHeader />

      {/* @ts-ignore */}
      <PageContent
        modalLocked={modalLocked}
        modalBlock={modalBlock}
        routeContext={routeContext}
        slices={slices}
        data-test={dataTestId}
        {...props}
      />

      {/*  Add static footer */}
      <AppFooter logoUrl="" links={[]} />
    </>
  )
}
