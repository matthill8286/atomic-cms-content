import React from 'react';
import { renderWithTheme } from '@matthill8286/atomic-ui';
import { EmbeddedSection } from './index';
xdescribe('EmbeddedSection', function () {
  it.skip('shows an embedded section', function () {
    var tree = renderWithTheme(React.createElement(EmbeddedSection, {
      embeddedSection: {
        raw: {
          type: 'heading-one',
          children: []
        }
      },
      sectionColor: "primary"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=EmbeddedSection.test.js.map