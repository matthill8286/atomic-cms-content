import React from 'react';
import { useQuery } from '@apollo/client';
import { ErrorPage } from "./Error";
import { GenericLoadingScreenScrollToTop } from "./GenericLoadingScreen";
import { GraphCmsInstanceContext } from "../context/instance";
import { ErrorPageType } from "../types";
export var LandingPagesConnector = function LandingPagesConnector(_ref) {
  var pageId = _ref.pageId,
      getLandingPageQuery = _ref.getLandingPageQuery,
      children = _ref.children;

  var _React$useContext = React.useContext(GraphCmsInstanceContext),
      localisation = _React$useContext.localisation;

  var _useQuery = useQuery(getLandingPageQuery, {
    variables: {
      id: pageId,
      locale: localisation
    },
    skip: !pageId,
    context: {
      clientName: 'graphcms'
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data,
      error = _useQuery.error;

  if (loading) {
    return React.createElement(GenericLoadingScreenScrollToTop, null);
  }

  if (error) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR
    });
  }

  if (!(data !== null && data !== void 0 && data.staticPage)) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.NOT_FOUND
    });
  }

  var pageContent = data.staticPage;
  return children({
    pageContent: pageContent
  });
};
//# sourceMappingURL=LandingPagesConnector.js.map