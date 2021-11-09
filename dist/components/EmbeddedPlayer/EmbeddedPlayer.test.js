var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/EmbeddedPlayer/EmbeddedPlayer.test.tsx",
    _this = this;

import React from 'react';
import { renderWithTheme } from '@matthill8286/atomic-ui';
import { EmbeddedPlayer } from "./EmbeddedPlayer";
describe('EmbeddedPlayer', function () {
  it('shows a youtube video', function () {
    var tree = renderWithTheme(React.createElement(EmbeddedPlayer, {
      embedUrl: "https://www.youtube.com/embed/TeQ_TTyLGMs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=EmbeddedPlayer.test.js.map