var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/PolicyPage/PolicyPage.tsx",
    _this = this;

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
      errorType: ErrorPageType.TECHNICAL_ERROR,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
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
  return React.createElement(CustomSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, React.createElement(AppMeta, _extends({
    key: "app-meta-policy-page"
  }, appMetaProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  })), React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, React.createElement(Spacer, {
    size: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), React.createElement(MultiViewModalProvider, {
    homeViewId: "cookie-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, React.createElement(PrivacyContent, {
    slices: slices,
    type: type,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }))))));
};
//# sourceMappingURL=PolicyPage.js.map