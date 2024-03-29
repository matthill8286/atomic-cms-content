var _excluded = ["landingPageContent", "PageContent", "withPageHead", "overridePlaylistClickEvent"];

var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/HomePage/index.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Page } from "../../components/Page";
import { CallToActionWithPlaylist } from "../../combinations";
export var HomePageWrapper = function HomePageWrapper(_ref) {
  var landingPageContent = _ref.landingPageContent,
      PageContent = _ref.PageContent,
      withPageHead = _ref.withPageHead,
      overridePlaylistClickEvent = _ref.overridePlaylistClickEvent,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Page, _extends({}, props, {
    landingPageContent: landingPageContent,
    PageContent: CallToActionWithPlaylist,
    withPageHead: true,
    overridePlaylistClickEvent: false,
    generator: "HOME_PAGE",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }));
};
export default HomePageWrapper;
//# sourceMappingURL=index.js.map