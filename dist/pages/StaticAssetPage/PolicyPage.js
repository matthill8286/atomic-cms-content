var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/StaticAssetPage/PolicyPage.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Cell, Grid, Row, Spacer } from '@matthill8286/atomic-ui';
import { ErrorPage } from "../../components/Error";
import { AppMeta, CustomSection } from "../../components";
import { ErrorPageType } from "../../types";
import { PrivacyContent } from "../PrivacyPage/PrivacyContent";
export var PolicyPage = function PolicyPage(_ref) {
  var landingPageContent = _ref.landingPageContent;
  var slices = landingPageContent.slices;

  if (!Array.isArray(slices) || !slices.length) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    });
  }

  var appMetaProps = {
    title: 'Policy Page',
    description: 'Danone Policy page',
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
      lineNumber: 27,
      columnNumber: 5
    }
  }, React.createElement(AppMeta, _extends({
    key: "app-meta-policy-page"
  }, appMetaProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  })), React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, React.createElement(Spacer, {
    size: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), React.createElement(PrivacyContent, {
    slices: slices,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))));
};
//# sourceMappingURL=PolicyPage.js.map