import React, {FC} from 'react';
import {
  CmsCallToActionPanel,
  CustomSection,
  MultiColumnTextSection,
} from '../../components';
import {
  ConfigurableGraphCmsHtmlSerializer,
  Serializer,
} from '#/src/staticPages/components';

export const LegalContent: FC<{slices: any[]}> = ({slices}) => {
  return (
    <CustomSection>
      {slices?.map(({pageComponents}, index: number) => {
        const keyProp = `${pageComponents?.__typename}_${index}`;
        switch (pageComponents.__typename) {
          case 'CallToActionPanel':
            return (
              <CmsCallToActionPanel
                key={keyProp}
                sectionColor="white"
                element={pageComponents}
                showReadMore={false}
                asset={null}
                rightOrientation={pageComponents?.rightOrientation}
                image={pageComponents?.image}
                richTextCopy={Serializer(
                  pageComponents?.richTextCopy?.raw,
                  ConfigurableGraphCmsHtmlSerializer({
                    textAlign: 'left',
                    contentAlign: 'left',
                  })
                )}
              />
            );
          case 'RichTextSection':
            return (
              <MultiColumnTextSection
                textColor={'grey5'}
                richTextColumns={pageComponents.document.raw}
                key={keyProp}
                active
              />
            );
          default:
            return null;
        }
      })}
    </CustomSection>
  );
};
