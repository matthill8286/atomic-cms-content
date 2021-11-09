function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Cell, Grid, Row, Spacer } from '@matthill8286/atomic-ui';
import { PrivacyContent } from "./PrivacyContent";
import { AppMeta } from "../../components";
import { ErrorPageType } from "../../types";
import { ErrorPage } from "../../components/Error";
export var PrivacyPage = function PrivacyPage(_ref) {
  var landingPageContent = _ref.landingPageContent;
  var slices = landingPageContent.slices,
      metaTitle = landingPageContent.metaTitle,
      metaDescription = landingPageContent.metaDescription;
  var appMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'PRIVACY_PAGE',
    additionalMetas: [{
      name: 'robots',
      content: 'follow'
    }]
  };

  if (!Array.isArray(slices) || !slices.length) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR
    });
  }

  return React.createElement(React.Fragment, null, React.createElement(AppMeta, _extends({
    key: "app-meta-privacy-page"
  }, appMetaProps)), React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Spacer, {
    size: "md"
  }), React.createElement(PrivacyContent, {
    slices: slices
  })))));
};
//# sourceMappingURL=PrivacyPage.js.map