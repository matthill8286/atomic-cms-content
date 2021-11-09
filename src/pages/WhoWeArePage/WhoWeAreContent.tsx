import React from 'react';
import {CustomSection, TextSection} from '../../components';
import {EmbeddedSection} from '../../components/EmbeddedSection';
import {GenericSection} from '../../components/GenericSection';
import {ProfileTileColumns} from '../../components';
import {ContactSection} from '../../components/ContactSection';

export const RICH_TEXT_SECTION = 'RichTextSection';
export const GENERIC_SECTION = 'GenericSection';
export const EMBEDDED_SECTION = 'EmbeddedSection';
export const PROFILE_SECTION = 'ProfileGrid';
export const CONTACT_SECTION = 'ContactSection';

export const WhoWeAreContent = ({slices}: {slices: any[]}) => {
  return (
    <CustomSection paddingTop={'xl'} color={'white'}>
      {slices?.map(({pageComponents}: any, index: number) => {
        const keyProp = `${pageComponents?.__typename}_${index}`;
        switch (pageComponents?.__typename) {
          case RICH_TEXT_SECTION:
            return (
              pageComponents.document && (
                <TextSection
                  sectionColor="white"
                  richText={pageComponents.document.raw}
                  key={keyProp}
                  branded={pageComponents.branded}
                  anchorId={pageComponents?.id}
                  paddingBottom="xxl"
                />
              )
            );
          case GENERIC_SECTION:
            return (
              pageComponents.richTextSections && (
                <GenericSection
                  featureImage={
                    pageComponents.image ? pageComponents.image.url : null
                  }
                  topTitle={pageComponents.topTitle}
                  description={pageComponents.description}
                  richTextSections={pageComponents.richTextSections}
                  paddingTop="sm"
                  key={keyProp}
                />
              )
            );
          case EMBEDDED_SECTION:
            return (
              pageComponents.mediaEmbed && (
                <EmbeddedSection
                  sectionColor="white"
                  title={pageComponents.sectionTitle}
                  embeddedSection={pageComponents.mediaEmbed}
                  sectionHeight="100%"
                  key={keyProp}
                />
              )
            );
          case PROFILE_SECTION:
            return (
              pageComponents.profileSections && (
                <ProfileTileColumns
                  paddingTop="xl"
                  paddingBottom="xl"
                  key={keyProp}
                  profileSections={pageComponents.profileSections}
                  title={pageComponents.title}
                />
              )
            );
          case CONTACT_SECTION:
            return (
              pageComponents.contactInformation && (
                <ContactSection
                  paddingTop="md"
                  paddingBottom="xl"
                  sectionColor="clear"
                  key={keyProp}
                  contactHeading={pageComponents.contactHeading}
                  contactImage={pageComponents.contactImage}
                  richTextContactSection={pageComponents.contactInformation}
                />
              )
            );
          default:
            return null;
        }
      })}
    </CustomSection>
  );
};
