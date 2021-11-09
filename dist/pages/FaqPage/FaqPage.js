var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/FaqPage/FaqPage.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { ErrorPage } from "../../components/Error";
import { FaqPageContent } from "./FaqPageContent";
import { ErrorPageType } from "../../types";
import { AppMeta, PageHead } from "../../components";
export var FaqPage = function FaqPage(_ref) {
  var landingPageContent = _ref.landingPageContent;
  var slices = landingPageContent.slices,
      metaTitle = landingPageContent.metaTitle,
      metaDescription = landingPageContent.metaDescription;

  if (!Array.isArray(slices) || !slices.length || !slices) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 12
      }
    });
  }

  var appMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'FAQ_PAGE',
    additionalMetas: [{
      name: 'robots',
      content: 'follow'
    }]
  };
  return React.createElement(React.Fragment, null, React.createElement(AppMeta, _extends({
    key: "app-meta-content-special"
  }, appMetaProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  })), React.createElement(PageHead, {
    slices: slices,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), React.createElement(FaqPageContent, {
    slices: slices,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};
//# sourceMappingURL=FaqPage.js.map