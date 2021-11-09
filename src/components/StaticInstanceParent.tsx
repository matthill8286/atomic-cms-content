import React, { useEffect, useState } from 'react';
import {
  useParams,
  useHistory,
  matchPath,
  useLocation,
} from 'react-router-dom';
import {
  StaticInstanceConnectionQuery,
  useStaticInstanceConnectionQuery,
  Host,
  StaticPage,
  Maybe,
} from '@lxp/webmobile-cms-graphql';
import { useSelector } from 'react-redux';
import { ErrorPage, ErrorPageType } from '@/components/Error';
import { useRenderMeasure, useDidMount } from '@/hooks';
import { reactiveFooter, logoVar } from '@/cache/cache';
import { getRoutesPaths } from '@/routes/routes.paths';
import {
  SET_HEADER_ID,
  useAppWrapperDispatch,
} from '@/components/AppWrapper/AppWrapper.context';
import { StaticSlicesRoutes } from '#/src/staticPages/routes/staticSlicesRoutes';
import { LandingPageWrapper } from './LandingPageWrapper';
import { useHost } from '@/helpers/getHostInstance';
import { isStaticRoute } from '@/routes/helpers';
import { GenericLoadingScreen } from '@/components/GenericLoadingScreen';
import { getStateUser } from '@/store/User/user.selectors';

export const StaticInstanceParent = ({ route, ...props }) => {
  useRenderMeasure(route.name);

  const [staticInstance, setStaticInstance] =
    useState<StaticInstanceConnectionQuery | null>(null);
  const paths = getRoutesPaths();
  const didMount = useDidMount();
  const { user } = useSelector(getStateUser);
  const params = useParams<{ details?: string }>();
  const contextDispatch = useAppWrapperDispatch();

  const history = useHistory();
  const location = useLocation();
  const environmentHost = useHost();

  const landingPages = isStaticRoute(location);

  const {
    data,
    loading: staticLoading,
    error: staticError,
  } = useStaticInstanceConnectionQuery({
    skip: !environmentHost || !landingPages,
    variables: {
      first: 1,
      where: {
        host: environmentHost as Host,
      },
    },
    context: {
      clientName: 'graphcms',
    },
  });

  const staticHomeRoute = matchPath(
    location.pathname,
    StaticSlicesRoutes.HOME.path
  )?.isExact;

  useEffect(() => {
    if (user?.loggedIn && staticHomeRoute) {
      history.push({
        pathname: paths.Dashboard,
      });
    }
  }, [user?.loggedIn]);

  useEffect(() => {
    if (data?.instance && !staticLoading) {
      setStaticInstance(data);
    }
  }, [data?.instance, staticLoading]);

  const slice = staticInstance?.instance?.edges?.[0]?.node;

  useEffect(() => {
    // @ts-ignore
    contextDispatch({
      type: SET_HEADER_ID,
      headerId: slice?.header?.id,
    });
  }, [slice?.header?.id]);

  useEffect(() => {
    if (didMount && slice?.footer && slice?.logo?.url) {
      reactiveFooter({ ...slice.footer });
      logoVar({ url: slice.logo.url });
    }
  }, [didMount, slice?.footer, slice?.logo?.url]);

  if (
    (staticLoading && !data) ||
    (staticLoading && !staticInstance?.instance)
  ) {
    return <GenericLoadingScreen />;
  }

  if (staticError && !staticLoading) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  const pageSlices = [...(slice?.staticPages || [])];

  const paramsWithoutSearch = params?.details
    ? params?.details.toString().replace(window.location.search, '')
    : null;

  const matchByType = type => type.type === route.name;
  const matchByParams = slice => slice.routeContext === paramsWithoutSearch;

  const reducePageSlicesToMatchRoute: ({
    __typename: 'StaticPage';
  } & Pick<StaticPage, 'name' | 'type'> & {
      entryId: string;
      routeContext: Maybe<string> | undefined;
    })[] = params?.details
    ? pageSlices.filter(matchByParams)
    : pageSlices.filter(matchByType);

  const pageEntryId = reducePageSlicesToMatchRoute[0];

  if (!pageEntryId?.entryId && !staticLoading && staticInstance) {
    return <ErrorPage errorType={ErrorPageType.NOT_FOUND} />;
  }

  return (
    <LandingPageWrapper
      pageTheme="Filtered"
      landingPageId={pageEntryId?.entryId}
      {...reducePageSlicesToMatchRoute}
      {...props}
    />
  );
};

// We need to export default here as it throws an error with the lazy loading
export default StaticInstanceParent;
