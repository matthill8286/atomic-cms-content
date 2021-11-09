import React from 'react'
import { Cell, Grid, Row, Spacer } from '@matthill8286/atomic-ui'
import { AppMeta, AppMetaProps } from '../../components'
import { LegalContent } from './LegalContent'
import { PageConfigType, ErrorPageType } from '../../types'
import ErrorPage from '../../components/Error'

export const LegalPage: React.FC<PageConfigType> = ({ landingPageContent }) => {
  const { slices, metaTitle, metaDescription } = landingPageContent

  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />
  }

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'LEGAL_PAGE',
    additionalMetas: [{ name: 'robots', content: 'follow' }],
    keywords: [],
    includeProductInTitle: true,
  }

  return (
    <>
      <AppMeta key="app-meta-legal-page" {...appMetaProps} />
      <Grid>
        <Row>
          <Cell columns={12}>
            <Spacer size="md" />
            <LegalContent slices={slices} />
          </Cell>
        </Row>
      </Grid>
    </>
  )
}
