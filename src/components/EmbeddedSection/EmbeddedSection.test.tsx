import React from 'react';
import {renderWithTheme} from '@matthill8286/atomic-ui';
import {EmbeddedSection} from '../EmbeddedSection';

xdescribe('EmbeddedSection', () => {
  it.skip('shows an embedded section', () => {
    const tree = renderWithTheme(
      <EmbeddedSection
        embeddedSection={{raw: {type: 'heading-one', children: []}}}
        sectionColor="primary"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
