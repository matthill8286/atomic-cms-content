import React from 'react';
import {Cell, Grid, Row, Spacer} from '@matthill8286/atomic-ui';
import {AppMeta, AppMetaProps} from '../../components';
import {PrivacyContent} from '../PrivacyPage/PrivacyContent';
import {ErrorPageType, PageConfigType} from '../../types';
import {ErrorPage} from '@/components/Error';

export const TermsPage: React.FC<PageConfigType> = ({landingPageContent}) => {
  const {slices, metaTitle, metaDescription} = landingPageContent;

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'TERMS_PAGE',
    additionalMetas: [{name: 'robots', content: 'follow'}],
  };

  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  return (
    <>
      <AppMeta key="app-meta-terms-page" {...appMetaProps} />
      <Grid>
        <Row>
          <Cell columns={12}>
            <Spacer size="md" />
            <PrivacyContent slices={slices} />
          </Cell>
        </Row>
      </Grid>
    </>
  );
};
