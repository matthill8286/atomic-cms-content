import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router';
import styled from 'styled-components';
import {
  Grid,
  Row,
  Cell,
  Breadcrumb,
  AssetMeta,
  Asset,
} from '@matthill8286/atomic-ui';
import {useDispatch} from 'react-redux';
import {EVENT_ASSET_OPEN, EVENT_ASSET_LAUNCH} from '@/constants/EventConstants';
import {SCENE_LEARNING_ASSET} from '@/constants/Scenes';
import {sendEvent} from '@/store/event';
import {formatDuration} from '@/utils/formatDuration/formatDuration';
import {setScene} from '@/store/UI/ui.actions';
import {useLearningAsset} from '@/app/asset/hooks';
import {isValidPrimative} from '@/utils/stringHelper/stringHelper';
import {CmsContext, GraphCmsInstanceContext} from '@/context/instance';
import {useRenderMeasure, useScrollToTop} from '@/hooks';
import {GenericLoadingScreen} from '@/components/GenericLoadingScreen';
import {ErrorPage} from '@/components/Error';
import {FocusedAsset} from '@/app/asset/components/FocusedAsset';
import {ErrorPageType} from '../../types';
import {
  AppMeta,
  AppMetaProps,
  PageTemplateProps,
  PlaylistHeader,
  StaticPlaylist,
} from '../../components';
import ErrorBoundary from '@/components/ErrorBoundaryPage/ErrorBoundaryPage';

const STATIC_LEARNING_ASSET_AREA = 'Static Learning Asset';

const AssetPageContainer = styled.div`
  background-color: ${({theme}) => theme.color.grey1};
`;

export const AssetPageWithContext = React.memo<
  PageTemplateProps['landingPageContent']
>(({landingPageContent}: PageTemplateProps['landingPageContent']) => {
  return (
    <ErrorBoundary>
      <StaticAssetPageV2 landingPageContent={landingPageContent} />
    </ErrorBoundary>
  );
});

export default AssetPageWithContext;

export const StaticAssetPageV2 = ({
  landingPageContent,
}: PageTemplateProps['landingPageContent']) => {
  useRenderMeasure(STATIC_LEARNING_ASSET_AREA);
  useScrollToTop();

  const {slices, metaTitle, metaDescription} = landingPageContent;

  const appMetaProps: AppMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'ASSET_PAGE',
    additionalMetas: [{name: 'robots', content: 'follow'}],
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams<{id: string}>();

  const {instance, staticInstance, basePath} = React.useContext<CmsContext>(
    GraphCmsInstanceContext
  );
  // @ts-ignore
  const slice = staticInstance?.instance?.edges?.[0]?.node;
  const staticPlaylistSection = {...(slice?.staticPlaylistSection || {})};
  const sliceHead = slices?.[0]?.pageComponents;

  const assetId = parseInt(id.split('-')[0], 0);

  useEffect(() => {
    if (assetId) {
      dispatch(setScene(SCENE_LEARNING_ASSET)); // FIXME: remove once events get updated
      dispatch(sendEvent(EVENT_ASSET_OPEN, {asset: {id: assetId}}));
    }
  }, [assetId]);

  const {
    assetCache: learningAssetData,
    assetLoading,
    assetError,
  } = useLearningAsset(assetId);

  if (assetLoading && !learningAssetData) {
    return <GenericLoadingScreen />;
  }

  if ((!assetLoading && !slices.length) || (!assetLoading && assetError)) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  const learningAssetMeta = sliceHead?.learningAssetMeta;
  const competencies = learningAssetData?.competencies;
  const providerName = learningAssetData?.provider?.name;
  const primaryCompetency = competencies && competencies[0]?.text;

  const handleLaunching = () => {
    const {url, id} = learningAssetData;
    if (!isValidPrimative(url)) {
      return;
    }
    dispatch(sendEvent(EVENT_ASSET_LAUNCH, {asset: learningAssetData}));
    window?.open(url, 'StaticAssetLaunchWindow')?.focus();
  };

  const addEmbed = () => {
    if (!learningAssetData) {
      return '';
    }
    const {embedVideoURL, image} = learningAssetData;
    const url = isVideo() ? embedVideoURL : image;

    // Youtube come as youtube.com/watch?v= and need to be youtube.com/embed/
    if (/youtube\.com/i.test(url)) {
      return url.split(/watch\?v=/i).join('embed/');
    }
    // Youtube come as youtu.be/ and need to be youtube.com/embed/
    if (/youtu\.be/i.test(url)) {
      return `https://www.youtube.com/embed/${url.split('/')[3]}`;
    }
    // Vimeo links need to be player.vimeo.com/video/
    // but avoid changing 'event' links as these are streams
    if (/vimeo\.com\/(?!video|event)/i.test(url)) {
      return `https://player.vimeo.com/video/${url.split('/')[3]}`;
    }
    // Ted links come as www.ted.com and need to be embed.ted.com
    if (/ted\.com/i.test(url)) {
      return url.split(/www/i).join('embed');
    }
    // Preventing http:// being served with https://
    if (/http:\/\//i.test(url)) {
      return url.split(/http:\/\//i).join('https://');
    }
    if (!/http/i.test(url)) {
      return 'https://'.concat(url);
    }

    return url;
  };

  const isVideo = () => {
    return isValidPrimative(learningAssetData?.embedVideoURL);
  };

  return (
    <AssetPageContainer>
      <AppMeta key="app-meta-content-special" {...appMetaProps} />
      <Grid>
        <Row>
          <Cell columns={12} justify="flex-start">
            <Breadcrumb
              margin="lg 0 0 0"
              homeLink={basePath}
              paths={[
                {
                  to: `/learning-asset/${learningAssetData?.id}`,
                  key: 'learning-asset',
                  isRouterLink: true,
                  name: learningAssetData?.title,
                },
              ]}
            />
          </Cell>
        </Row>
        <Row>
          <Cell columns={8} colsLg={8} colsMd={8}>
            <FocusedAsset
              loading={false}
              description={learningAssetData?.description}
              src={addEmbed()}
              title={learningAssetData?.title}
              videoText={sliceHead?.videoLoadingError}
              video={isVideo()}
            />
          </Cell>
          <Cell columns={4} colsLg={4} colsMd={8} colsSm={8} colsXs={4}>
            <AssetMeta
              buttonTextLaunch={learningAssetMeta?.launchButtonLabel}
              launchHandler={handleLaunching}
              competencyCopy={learningAssetMeta?.competencyInfo}
              isLandingPage
              hideLaunched={history?.location?.state?.embeddedAsset ?? false}
              isBookmarkInteraction={false}
              isCreatePlaylistInteraction={false}
              isShareInteraction={false}
              list={[
                {
                  label: learningAssetMeta?.providerLabel,
                  value: providerName,
                },
                {
                  label: learningAssetMeta?.primaryCompetencyLabel,
                  value: primaryCompetency,
                },
                {
                  label: learningAssetMeta?.typeLabel,
                  value: learningAssetData?.type?.name ?? '',
                },
                {
                  label: learningAssetMeta?.lengthLabel,
                  value: formatDuration(
                    learningAssetData?.duration,
                    learningAssetData?.language
                  ),
                },
              ]}
              tags={competencies}
            />
          </Cell>
        </Row>
      </Grid>
      {staticPlaylistSection && (
        <StaticPlaylist
          playlistId={sliceHead?.id}
          staticPlaylists={staticPlaylistSection?.staticPlaylists}
          tooltip={undefined}
          showLock={false}
          title={
            <PlaylistHeader
              marginTop="xl"
              title={staticPlaylistSection?.name}
              name={staticPlaylistSection?.staticPlaylists?.[0]?.playlistName}
              key="Header"
            />
          }
          paddingTop="0"
          desktop={4}
          strategyType="static"
          context="StaticPlaylist"
          // @ts-ignore
          onAssetClick={(asset: Asset) => {
            history.push({
              pathname: `/home/learning-asset/${asset?.id}?pid_hint=${sliceHead?.id}`,
              // @ts-ignore
              state: {embeddedAsset: asset?.embeddedAsset},
            });
          }}
          slidesPerPageSettings={{
            desktop: staticPlaylistSection?.size ?? 4,
            tablet: 2,
            mobileBig: 2,
            mobile: 1,
          }}
          loading={false}
          key={`AssetPagePlaylist-${sliceHead?.id}`}
        />
      )}
    </AssetPageContainer>
  );
};
