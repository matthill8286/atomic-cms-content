import React from 'react';
import {
  Cell,
  CopyText,
  Heading,
  AssetCarousel,
  styled,
  Asset,
  Divider,
  Grid,
  Row,
} from '@matthill8286/atomic-ui';
import { useHistory } from 'react-router';

import { getCookie } from '@/utils/localStorage';
import { MODALS } from '@/constants';

import { StaticAssetCarouselProps } from './StaticPlaylist.types';
import { CustomSection } from '../CustomSection';
import { formatToStaticAsset } from '../../helpers';

export const StyledWrapper = styled.div<{ marginTop: string }>`
  margin-top: ${({ theme, marginTop }) => theme.spacing.base[marginTop] ?? 0};
`;

export const PlaylistHeader = ({ title, name, marginTop }) => (
  <StyledWrapper marginTop={marginTop}>
    <CopyText
      limitLines={1}
      fontSize="sm"
      as="div"
      toUpperCase
      weight="bold"
      display="inline-flex"
      margin="0 sm xs 0"
    >
      {title}
    </CopyText>
    <Heading
      color="primary"
      scale="level-2"
      tag="h2"
      lineHeight="sm"
      fontFamily="default"
      weight="semibold"
    >
      {name}
    </Heading>
  </StyledWrapper>
);

export const StaticPlaylist: React.FC<StaticAssetCarouselProps> = ({
  name = 'Static Playlist',
  playlistId = 0,
  showDivider = false,
  title,
  desktop,
  showLock,
  onSlideChange,
  overridePlaylistClickEvent,
  paddingTop,
  showScrollbar,
  staticPlaylists,
  playlistBackground,
  openModal,
}): JSX.Element => {
  const history = useHistory();

  const staticAssets = staticPlaylists?.[0]?.staticAssetTiles
    ? [...staticPlaylists[0]?.staticAssetTiles]
    : [];

  const assetsToStatic = staticAssets
    ? formatToStaticAsset(staticAssets as [])
    : [];

  const showOrHideModal = (asset: Asset) => {
    if (!getCookie('confirm')) {
      openModal?.(MODALS.CONFIRMATION, { asset, playlistId });
    } else {
      history.push({
        pathname: `/home/learning-asset/${asset.niceName}?pid_hint=${playlistId}`,
        // @ts-ignore
        state: { embeddedAsset: asset.embeddedAsset },
      });
    }
  };

  const onAssetClick = (asset: Asset) => {
    if (asset?.to) {
      history.push({
        pathname: `${asset?.to}?pid_hint=${playlistId}`,
        // @ts-ignore
        state: { embeddedAsset: asset.embeddedAsset },
      });
      return;
    }

    if (asset?.niceName) {
      history.push({
        pathname: `/home/learning-asset/${asset.niceName}?pid_hint=${playlistId}`,
        // @ts-ignore
        state: { embeddedAsset: asset.embeddedAsset },
      });
      return;
    }

    return null;
  };

  const withAssetClickOverride = overridePlaylistClickEvent
    ? onAssetClick
    : showOrHideModal;

  return (
    <CustomSection
      color={playlistBackground}
      paddingTop={paddingTop ?? 'md'}
      paddingBottom={paddingTop ?? 'md'}
      key={playlistId}
    >
      {showDivider && (
        <Grid>
          <Row noMargin>
            <Cell colsXl={12} colsLg={12} colsMd={8} colsSm={8} colsXs={4}>
              <Divider color="primary" height={2} />
            </Cell>
          </Row>
        </Grid>
      )}
      <Cell colsXl={12} colsLg={12} colsMd={8} colsSm={8} colsXs={4}>
        <AssetCarousel
          NoAssetsComponent={<></>}
          data-test="landing-page-playlist"
          title={<PlaylistHeader marginTop="md" title={title} name={name} />}
          loading={false}
          assets={[...assetsToStatic]}
          withGrid
          showSkills={false}
          showLock={showLock}
          tileWidth={400}
          onSlideChange={context => onSlideChange?.(context)}
          onLockClick={({ asset }) =>
            openModal?.(MODALS.LOGIN, { asset, playlistId })
          }
          onAssetClick={({ asset }) => withAssetClickOverride(asset)}
          context={name}
          lazyLoad
          showArrows
          withLQIP
          withScrollbar={showScrollbar}
          tileMargin="md"
          slidesPerPageSettings={{
            desktop: desktop ?? 4,
            mobileBig: 1,
            mobileSmall: 1,
            tablet: 2,
          }}
        />
      </Cell>
    </CustomSection>
  );
};
