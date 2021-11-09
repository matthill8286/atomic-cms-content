var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/CustomSection/CustomSection.test.tsx",
    _this = this;

import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { CustomSection } from "./index";
import { mountWithTheme } from '@matthill8286/atomic-ui';
describe('Landing:Components:CustomSection', function () {
  afterEach(cleanup);
  it('renders a section', function () {
    var component = mountWithTheme(React.createElement(CustomSection, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 38
      }
    }, "Test"));
    var section = component.find('section');
    expect(section).toHaveLength(1);
  });
});
//# sourceMappingURL=CustomSection.test.js.map