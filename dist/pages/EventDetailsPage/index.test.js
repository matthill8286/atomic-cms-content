var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/EventDetailsPage/index.test.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import EventsDetailsPageWrapper from "./index";
import { EventsWithAssetMeta } from "./EventContent";
var props = {
  landingPageContent: {
    slice: [],
    metaTitle: '',
    metaDescription: '',
    routeContext: 'events'
  },
  overridePlaylistClickEvent: false,
  withPageHead: true,
  PageContent: EventsWithAssetMeta,
  metaProps: {}
};
describe('EventDetailsPage', function () {
  it('renders correctly', function () {
    var wrapper = React.createElement(EventsDetailsPageWrapper, _extends({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=index.test.js.map