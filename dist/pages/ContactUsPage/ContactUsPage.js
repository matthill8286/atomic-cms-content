var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/ContactUsPage/ContactUsPage.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Cell, Grid, Row, Spacer } from '@matthill8286/atomic-ui';
import { ErrorPage } from "../../components/Error";
import { AppMeta } from "../../components";
import { ContactUsContent } from "./ContactUsContent";
import { ErrorPageType } from "../../types";
export var ContactUsPage = function ContactUsPage(_ref) {
  var landingPageContent = _ref.landingPageContent;
  var slices = landingPageContent.slices,
      metaTitle = landingPageContent.metaTitle,
      metaDescription = landingPageContent.metaDescription;

  if (!Array.isArray(slices) || !slices.length) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 12
      }
    });
  }

  var appMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'CONTACT_US_PAGE',
    additionalMetas: [{
      name: 'robots',
      content: 'follow'
    }],
    keywords: [],
    includeProductInTitle: true
  };
  return React.createElement(React.Fragment, null, React.createElement(AppMeta, _extends({
    key: "app-meta-contact-us-page"
  }, appMetaProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })), React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, React.createElement(Spacer, {
    size: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), React.createElement(ContactUsContent, {
    slices: slices,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))));
};
//# sourceMappingURL=ContactUsPage.js.map