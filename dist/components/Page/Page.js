var _excluded = ["landingPageContent", "PageContent", "withPageHead", "generator", "dataTestId", "errorPage"];

var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/Page/Page.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { ErrorPage } from "../Error";
import { ErrorPageType } from "../../types";
import { AppMeta, PageHead } from "../../components";
export var Page = function Page(_ref) {
  var landingPageContent = _ref.landingPageContent,
      PageContent = _ref.PageContent,
      withPageHead = _ref.withPageHead,
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
      product: "Landing",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    });
  }

  var appMetaProps = {
    key: "".concat(metaTitle, "--").concat(generator),
    title: metaTitle,
    description: metaDescription,
    canonical: window.location.href,
    generator: generator,
    additionalMetas: [{
      name: 'robots',
      content: 'follow'
    }]
  };
  return React.createElement(React.Fragment, null, React.createElement(AppMeta, _extends({}, appMetaProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  })), withPageHead && React.createElement(PageHead, {
    slices: slices,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 24
    }
  }), React.createElement(PageContent, _extends({
    modalLocked: modalLocked,
    modalBlock: modalBlock,
    routeContext: routeContext,
    slices: slices
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  })));
};
//# sourceMappingURL=Page.js.map