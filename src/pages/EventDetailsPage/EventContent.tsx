import React from 'react';
import {CustomSection, FocusedSection, StaticPlaylist} from '../../components';

export const FOCUSED_SECTION = 'FocusedSection';

export const EventsWithAssetMeta = React.memo<any>(
  ({
    slices,
    dataTestId,
    sectionColor,
    overridePlaylistClickEvent,
    routeContext,
  }) => {
    return (
      <CustomSection color={sectionColor}>
        {slices?.map(
          (
            {
              pageComponents: {
                description,
                staticAssetTile,
                rightOrientation,
                staticPlaylists,
                profileSections,
                learningAssetMeta,
                richTextSection,
                heading,
                subHeading,
                id,
                name,
                __typename,
              },
              size,
            },
            index: number
          ) => {
            const keyProp = `${__typename}_${index}|${id}`;
            switch (__typename) {
              case 'EventFocusedArea':
                return (
                  <FocusedSection
                    key={keyProp}
                    title={richTextSection?.title}
                    description={richTextSection?.document}
                    profileBrandedLabel={subHeading}
                    profileTitle={heading}
                    learningAssetMeta={learningAssetMeta}
                    profileSections={profileSections}
                    sectionColor="grey1"
                    paddingTop="sm"
                    paddingBottom="sm"
                  />
                );
              case 'StaticPlaylistSection':
                if (!staticPlaylists.length) {
                  return null;
                }

                return (
                  <StaticPlaylist
                    key={keyProp}
                    playlistId={id}
                    dataTest={dataTestId}
                    staticPlaylists={staticPlaylists}
                    name={staticPlaylists?.[0].playlistName}
                    overridePlaylistClickEvent={overridePlaylistClickEvent}
                    routeContext={routeContext}
                    title={name}
                    playlistBackground={sectionColor ?? 'grey1'}
                    context="StaticPlaylist"
                    showLock
                    desktop={size ?? 4}
                    paddingTop="xxxl"
                    showDivider
                  />
                );
              default:
                return null;
            }
          }
        )}
      </CustomSection>
    );
  }
);
