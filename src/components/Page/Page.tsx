import React from 'react'
import { ErrorPageType, PageTemplateProps } from '../../types'
import { AppMeta, PageHead, AppMetaProps } from '../../components'
import ErrorPage from '../Error'

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
      {/* // @ts-ignore*/}
      <AppMeta {...appMetaProps} />

      {/* Add static header */}

      {/* // @ts-ignore */}
      <PageContent
        modalLocked={modalLocked}
        modalBlock={modalBlock}
        routeContext={routeContext}
        slices={slices}
        {...props}
      />

      {/*  Add static footer */}
    </>
  )
}
