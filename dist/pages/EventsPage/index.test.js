var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/EventsPage/index.test.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import EventsPageWrapper from "./index";
var props = {
  landingPageContent: {
    slice: [],
    metaTitle: '',
    metaDescription: '',
    routeContext: 'events'
  },
  metaProps: {},
  withPageHead: false,
  PageContent: undefined
};
describe('EventsPage', function () {
  it('renders correctly', function () {
    var wrapper = React.createElement(EventsPageWrapper, _extends({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=index.test.js.map