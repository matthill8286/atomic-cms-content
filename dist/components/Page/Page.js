var _excluded = ["landingPageContent", "PageContent", "generator", "dataTestId", "errorPage"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { ErrorPageType } from '../../types';
import { AppMeta } from '../AppMeta';
import ErrorPage from '../Error';
import { AppFooter, AppHeaderComponent as AppHeader } from '@matthill8286/atomic-ui';
export var Page = function Page(_ref) {
  var landingPageContent = _ref.landingPageContent,
      PageContent = _ref.PageContent,
      generator = _ref.generator,
      dataTestId = _ref.dataTestId,
      errorPage = _ref.errorPage,
      props = _objectWithoutProperties(_ref, _excluded);

  var slices = landingPageContent.slices,
      metaTitle = landingPageContent.metaTitle,
      metaDescription = landingPageContent.metaDescription,
      routeContext = landingPageContent.routeContext,
      modalLocked = landingPageContent.modalLocked,
      modalBlock = landingPageContent.modalBlock;

  if (!Array.isArray(slices) || !slices.length) {
    return React.createElement(ErrorPage, {
      errorMessage: errorPage === null || errorPage === void 0 ? void 0 : errorPage.errorMessage,
      errorType: ErrorPageType.NOT_FOUND,
      product: "Landing"
    });
  }

  var appMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: window.location.href,
    generator: generator,
    additionalMetas: [{
      name: 'robots',
      content: 'follow'
    }]
  };
  return React.createElement(React.Fragment, null, React.createElement(AppMeta, appMetaProps), React.createElement(AppHeader, null), React.createElement(PageContent, _extends({
    modalLocked: modalLocked,
    modalBlock: modalBlock,
    routeContext: routeContext,
    slices: slices,
    "data-test": dataTestId
  }, props)), React.createElement(AppFooter, {
    logoUrl: "",
    links: []
  }));
};
//# sourceMappingURL=Page.js.map