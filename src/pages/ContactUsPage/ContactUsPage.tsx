import React from 'react';
import {Cell, Grid, Row, Spacer} from '@matthill8286/atomic-ui';
import {ErrorPage} from '@/components/Error';
import {AppMeta, AppMetaProps} from '../../components';
import {ContactUsContent} from './ContactUsContent';
import {ErrorPageType, PageTemplateProps} from '../../types';

export const ContactUsPage: React.FC<PageTemplateProps> = ({
  landingPageContent,
}) => {
  const {slices, metaTitle, metaDescription} = landingPageContent;

  if (!Array.isArray(slices) || !slices.length) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'CONTACT_US_PAGE',
    additionalMetas: [{name: 'robots', content: 'follow'}],
    keywords: [],
    includeProductInTitle: true,
  };

  return (
    <>
      <AppMeta key="app-meta-contact-us-page" {...appMetaProps} />
      <Grid>
        <Row>
          <Cell columns={12}>
            <Spacer size="md" />
            <ContactUsContent slices={slices} />
          </Cell>
        </Row>
      </Grid>
    </>
  );
};
