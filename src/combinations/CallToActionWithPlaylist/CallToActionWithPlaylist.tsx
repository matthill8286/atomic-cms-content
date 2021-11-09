import React from 'react';
import {useModals} from '@/app/asset/hooks';
import {MODALS} from '@/constants';
import {
  CmsCallToActionPanel,
  CustomSection,
  StaticPlaylist,
} from '../../components';
import {CallToActionPlaylistProps} from '#/src/staticPages/combinations';
import {
  ConfigurableGraphCmsHtmlSerializer,
  Serializer,
} from '#/src/staticPages/components';
import {ConfirmationModalWrapper} from '#/src/staticPages/components/Modals/ConfirmationModal';
import {LoginModalWrapper} from '#/src/staticPages/components/Modals/LoginModal';

export const CallToActionWithPlaylist = React.memo<CallToActionPlaylistProps>(
  ({
    slices,
    dataTestId,
    sectionColor,
    overridePlaylistClickEvent,
    routeContext,
    modalLocked,
    modalBlock,
  }) => {
    const {openModal, openModalName} = useModals();

    return (
      <CustomSection color={sectionColor} paddingTop={0} paddingBottom={0}>
        {slices?.map(
          (
            {
              pageComponents: {
                button,
                heading,
                image,
                staticAssetTile,
                rightOrientation,
                staticPlaylists,
                id,
                name,
                __typename,
                richTextCopy,
              },
              size,
              showScrollbar,
            },
            index: number
          ) => {
            const keyProp = `${__typename}_${index}`;
            switch (__typename) {
              case 'CallToActionPanel':
                return (
                  <CmsCallToActionPanel
                    key={keyProp}
                    sectionColor="white"
                    element={{
                      buttonLabel: button?.text,
                      headline: heading,
                      href: button?.href,
                      route: button?.to,
                    }}
                    richTextCopy={Serializer(
                      richTextCopy?.raw,
                      ConfigurableGraphCmsHtmlSerializer({
                        textAlign: 'left',
                        contentAlign: 'left',
                      })
                    )}
                    showReadMore={false}
                    showFeatured
                    isOpenAsset
                    asset={staticAssetTile}
                    routeContext={routeContext}
                    rightOrientation={rightOrientation}
                    image={image}
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
                    showScrollbar={showScrollbar}
                    modalLocked={modalLocked}
                    modalBlock={modalBlock}
                    playlistBackground={sectionColor ?? 'grey1'}
                    context="StaticPlaylist"
                    showLock
                    desktop={size ?? 4}
                    paddingTop="xxxl"
                    openModal={openModal}
                  />
                );
              default:
                return null;
            }
          }
        )}
        {openModalName === MODALS.CONFIRMATION && (
          <ConfirmationModalWrapper modalBlock={modalBlock} />
        )}
        {openModalName === MODALS.LOGIN && (
          <LoginModalWrapper modalLocked={modalLocked} />
        )}
      </CustomSection>
    );
  }
);
