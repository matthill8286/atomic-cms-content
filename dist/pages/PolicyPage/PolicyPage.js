function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Cell, Grid, Row, Spacer, MultiViewModalProvider } from '@matthill8286/atomic-ui';
import { ErrorPage } from "../../components/Error";
import { AppMeta, CustomSection } from "../../components";
import { ErrorPageType } from "../../types";
import { PrivacyContent } from "../PrivacyPage/PrivacyContent";
export var PolicyPage = function PolicyPage(_ref) {
  var landingPageContent = _ref.landingPageContent;
  var slices = landingPageContent.slices,
      metaTitle = landingPageContent.metaTitle,
      metaDescription = landingPageContent.metaDescription,
      type = landingPageContent.type;

  if (!Array.isArray(slices) || !slices.length) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR
    });
  }

  var appMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'POLICY_PAGE',
    additionalMetas: [{
      name: 'robots',
      content: 'follow'
    }]
  };
  return React.createElement(CustomSection, null, React.createElement(AppMeta, _extends({
    key: "app-meta-policy-page"
  }, appMetaProps)), React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Spacer, {
    size: "md"
  }), React.createElement(MultiViewModalProvider, {
    homeViewId: "cookie-1"
  }, React.createElement(PrivacyContent, {
    slices: slices,
    type: type
  }))))));
};
//# sourceMappingURL=PolicyPage.js.map