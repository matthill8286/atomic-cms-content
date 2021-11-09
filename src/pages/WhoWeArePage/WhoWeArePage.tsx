import React from 'react'
import { WhoWeAreContent } from './WhoWeAreContent'
import { AppMeta, PageHead, AppMetaProps } from '../../components'
import { ErrorPageType, PageTemplateProps } from '../../types'
import ErrorPage from '../../components/Error'

export const WhoWeArePage: React.FC<PageTemplateProps> = ({ landingPageContent }) => {
  const { slices, metaTitle, metaDescription } = landingPageContent
  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />
  }

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'WHO_PAGE',
    metaKey: 'Who we are',
    additionalMetas: [{ name: 'robots', content: 'follow' }],
  }

  return (
    <>
      <AppMeta {...appMetaProps} />
      <PageHead slices={slices} />
      <WhoWeAreContent slices={slices} />
    </>
  )
}
