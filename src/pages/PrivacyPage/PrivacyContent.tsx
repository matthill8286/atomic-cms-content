import React, {FC} from 'react';
import {TextSection, CustomSection} from '../../components';
import CookieConsent from '@/components/CookieConsent/CookieConsent';

export const TYPE_RICH_TEXT = 'RichTextSection';

export const PrivacyContent: FC<{slices?: any[]; type?: string}> = ({
  slices,
  type,
}: {
  slices?: any[];
  type?: string;
}) => {
  return (
    <CustomSection>
      {slices?.map(({pageComponents: section}, index: number) => {
        const keyProp = `${section?.__typename}_${index}`;
        switch (section?.__typename) {
          case TYPE_RICH_TEXT:
            return (
              section.document.raw && (
                <TextSection
                  richText={section.document.raw}
                  title={section.title}
                  headingColor="black"
                  key={keyProp}
                  anchorId={section?.id}
                  headingsBold
                  type={type}
                />
              )
            );
          default:
            return null;
        }
      })}
      <CookieConsent />
    </CustomSection>
  );
};
