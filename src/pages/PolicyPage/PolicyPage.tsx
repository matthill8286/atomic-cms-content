import React from 'react';
import {
  Cell,
  Grid,
  Row,
  Spacer,
  MultiViewModalProvider,
} from '@matthill8286/atomic-ui';
import {ErrorPage} from '@/components/Error';
import {AppMeta, CustomSection, AppMetaProps} from '../../components';
import {ErrorPageType, PageTemplateProps} from '../../types';
import {PrivacyContent} from '../PrivacyPage/PrivacyContent';

export const PolicyPage: React.FC<PageTemplateProps> = ({
  landingPageContent,
}) => {
  const {slices, metaTitle, metaDescription, type} = landingPageContent;

  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
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
            <MultiViewModalProvider homeViewId="cookie-1">
              <PrivacyContent slices={slices} type={type} />
            </MultiViewModalProvider>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
