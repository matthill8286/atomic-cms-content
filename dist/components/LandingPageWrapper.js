function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect } from 'react';
import { getLandingPageQuery } from '@lxp/webmobile-cms-graphql';
import { useAnalytics } from "../hooks";
import { LandingPagesConnector } from "./LandingPagesConnector";
import { LandingPageRoutes } from "../routes/LandingPageRoutes";
export var LandingPageWrapper = function LandingPageWrapper(_ref) {
  var _document3, _window3;

  var landingPageId = _ref.landingPageId,
      pageTheme = _ref.pageTheme,
      props = _objectWithoutProperties(_ref, ["landingPageId", "pageTheme"]);

  var analytics = useAnalytics();
  useEffect(function () {
    var _document, _window, _window$location, _document2, _window2, _window2$location;

    analytics === null || analytics === void 0 ? void 0 : analytics.track('Client Landing Page Viewed', {
      referrer: (_document = document) === null || _document === void 0 ? void 0 : _document.referrer,
      path: (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.pathname,
      title: (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.title,
      url: (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$location = _window2.location) === null || _window2$location === void 0 ? void 0 : _window2$location.href,
      name: ''
    });
  }, [(_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.title, (_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.location]);

  if (!landingPageId) {
    return null;
  }

  return React.createElement(LandingPagesConnector, _extends({
    pageId: landingPageId,
    getLandingPageQuery: getLandingPageQuery
  }, props), function (_ref2) {
    var pageContent = _ref2.pageContent;
    return React.createElement(LandingPageRoutes, _extends({
      landingPageContent: pageContent
    }, props));
  });
};
//# sourceMappingURL=LandingPageWrapper.js.map