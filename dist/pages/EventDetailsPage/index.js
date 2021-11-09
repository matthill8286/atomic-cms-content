var _excluded = ["landingPageContent", "PageContent", "withPageHead", "overridePlaylistClickEvent"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Page } from "../../components";
import { EventsWithAssetMeta } from "./EventContent";
export var EventsDetailsPageWrapper = function EventsDetailsPageWrapper(_ref) {
  var landingPageContent = _ref.landingPageContent,
      PageContent = _ref.PageContent,
      withPageHead = _ref.withPageHead,
      overridePlaylistClickEvent = _ref.overridePlaylistClickEvent,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Page, _extends({
    landingPageContent: landingPageContent,
    PageContent: EventsWithAssetMeta,
    withPageHead: true,
    overridePlaylistClickEvent: true,
    dataTestId: "event-details-static-playlist",
    generator: "EVENT_DETAILS"
  }, props));
};
export default EventsDetailsPageWrapper;
//# sourceMappingURL=index.js.map