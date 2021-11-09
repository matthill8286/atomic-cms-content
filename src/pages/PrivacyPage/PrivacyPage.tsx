import React from 'react'
import { Cell, Grid, Row, Spacer } from '@matthill8286/atomic-ui'
import { PrivacyContent } from './PrivacyContent'
import { AppMeta, AppMetaProps } from '../../components'
import { ErrorPageType, PageTemplateProps } from '../../types'
import ErrorPage from '../../components/Error'

export const PrivacyPage: React.FC<PageTemplateProps> = ({ landingPageContent }) => {
  const { slices, metaTitle, metaDescription } = landingPageContent

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'PRIVACY_PAGE',
    additionalMetas: [{ name: 'robots', content: 'follow' }],
  }

  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />
  }

  return (
    <>
      <AppMeta key="app-meta-privacy-page" {...appMetaProps} />
      <Grid>
        <Row>
          <Cell columns={12}>
            <Spacer size="md" />
            <PrivacyContent slices={slices} />
          </Cell>
        </Row>
      </Grid>
    </>
  )
}
