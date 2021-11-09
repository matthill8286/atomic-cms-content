import React from 'react';
import {Cell, Grid, Row, Spacer} from '@matthill8286/atomic-ui';
import {ErrorPage} from '@/components/Error';
import {AppMeta, CustomSection} from '../../components';
import {ErrorPageType, PageTemplateProps} from '../../types';
import {AppMetaProps} from '#/src/staticPages/components';
import {PrivacyContent} from '../PrivacyPage/PrivacyContent';

export const PolicyPage: React.FC<PageTemplateProps> = ({
  landingPageContent,
}) => {
  const {slices} = landingPageContent;

  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  const appMetaProps: AppMetaProps = {
    title: 'Policy Page',
    description: 'Danone Policy page',
    canonical: '',
    generator: 'POLICY_PAGE',
    additionalMetas: [{name: 'robots', content: 'follow'}],
  };

  return (
    <CustomSection>
      <AppMeta key="app-meta-policy-page" {...appMetaProps} />
      <Grid>
        <Row>
          <Cell columns={12}>
            <Spacer size="md" />
            <PrivacyContent slices={slices} />
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
