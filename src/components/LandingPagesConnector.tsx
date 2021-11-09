import React from 'react';
import { RouteComponentProps } from 'react-router';
import { DocumentNode, useQuery } from '@apollo/client';
import { Zone } from '@lxp/webmobile-cms-graphql';
import { ErrorPage } from '@/components/Error';
import { GenericLoadingScreenScrollToTop } from '@/components/GenericLoadingScreen';
import {
  GraphCmsInstanceContext,
  InstanceContextTypes,
} from '@/context/instance';
import { ErrorPageType } from '../types';

export type MatchParams = {
  pathname: string;
};

export type LandingConnectedPageProps = RouteComponentProps<MatchParams> & {
  landingPageContent: PageConnectorProps;
  pageId?: string;
};

export type PageConnectorProps = {
  pageId: string | null;
  getLandingPageQuery: DocumentNode;
  children(props: { pageContent: any }): JSX.Element;
};

export const LandingPagesConnector: React.FC<PageConnectorProps> = ({
  pageId,
  getLandingPageQuery,
  children,
}) => {
  const { localisation } = React.useContext<InstanceContextTypes>(
    GraphCmsInstanceContext
  );
  const { loading, data, error } = useQuery<Zone>(getLandingPageQuery, {
    variables: { id: pageId, locale: localisation },
    skip: !pageId,
    context: {
      clientName: 'graphcms',
    },
  });

  if (loading) {
    return <GenericLoadingScreenScrollToTop />;
  }

  if (error) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  if (!data?.staticPage) {
    return <ErrorPage errorType={ErrorPageType.NOT_FOUND} />;
  }

  const pageContent = data.staticPage;

  return children({ pageContent });
};
