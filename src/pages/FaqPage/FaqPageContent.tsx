import React from 'react';
import {AccordionSection, CustomSection} from '../../components';

export const FaqPageContent = ({slices}: {slices: any[]}) => {
  return (
    <CustomSection color="transparent">
      {slices?.map(({pageComponents}, index: number) => {
        const keyProp = `${pageComponents?.__typename}_${index}`;
        switch (pageComponents?.__typename) {
          case 'Accordion':
            return (
              <AccordionSection
                key={keyProp}
                entries={pageComponents.richTextEntries}
                isLarge
                withIconsOnRight
              />
            );
          default:
            return null;
        }
      })}
    </CustomSection>
  );
};
