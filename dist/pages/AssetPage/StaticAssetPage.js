function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Grid, Row, Cell, Breadcrumb, AssetMeta } from '@matthill8286/atomic-ui';
import { useDispatch } from 'react-redux';
import { EVENT_ASSET_OPEN, EVENT_ASSET_LAUNCH } from "../../constants/EventConstants";
import { SCENE_LEARNING_ASSET } from "../../constants/Scenes";
import { sendEvent } from "../../store/event";
import { formatDuration } from "../../utils/formatDuration/formatDuration";
import { setScene } from "../../store/UI/ui.actions";
import { useLearningAsset } from "../../app/asset/hooks";
import { isValidPrimative } from "../../utils/stringHelper/stringHelper";
import { GraphCmsInstanceContext } from "../../context/instance";
import { useRenderMeasure, useScrollToTop } from "../../hooks";
import { GenericLoadingScreen } from "../../components/GenericLoadingScreen";
import { ErrorPage } from "../../components/Error";
import { FocusedAsset } from "../../app/asset/components/FocusedAsset";
import { ErrorPageType } from "../../types";
import { AppMeta, PlaylistHeader, StaticPlaylist } from "../../components";
import ErrorBoundary from "../../components/ErrorBoundaryPage/ErrorBoundaryPage";
var STATIC_LEARNING_ASSET_AREA = 'Static Learning Asset';
var AssetPageContainer = styled.div.withConfig({
  displayName: "StaticAssetPage__AssetPageContainer",
  componentId: "k1cq9z-0"
})(["\n  background-color: ", ";\n"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.grey1;
});
export var AssetPageWithContext = React.memo(function (_ref2) {
  var landingPageContent = _ref2.landingPageContent;
  return React.createElement(ErrorBoundary, null, React.createElement(StaticAssetPageV2, {
    landingPageContent: landingPageContent
  }));
});
export default AssetPageWithContext;
export var StaticAssetPageV2 = function StaticAssetPageV2(_ref3) {
  var _staticInstance$insta, _staticInstance$insta2, _staticInstance$insta3, _slices$, _learningAssetData$pr, _competencies$, _history$location$sta, _history$location, _history$location$sta2, _learningAssetData$ty, _learningAssetData$ty2, _staticPlaylistSectio, _staticPlaylistSectio2, _staticPlaylistSectio3;

  var landingPageContent = _ref3.landingPageContent;
  useRenderMeasure(STATIC_LEARNING_ASSET_AREA);
  useScrollToTop();
  var slices = landingPageContent.slices,
      metaTitle = landingPageContent.metaTitle,
      metaDescription = landingPageContent.metaDescription;
  var appMetaProps = {
    title: metaTitle,
    description: metaDescription,
    canonical: '',
    generator: 'ASSET_PAGE',
    additionalMetas: [{
      name: 'robots',
      content: 'follow'
    }]
  };
  var dispatch = useDispatch();
  var history = useHistory();

  var _useParams = useParams(),
      id = _useParams.id;

  var _React$useContext = React.useContext(GraphCmsInstanceContext),
      instance = _React$useContext.instance,
      staticInstance = _React$useContext.staticInstance,
      basePath = _React$useContext.basePath;

  var slice = staticInstance === null || staticInstance === void 0 ? void 0 : (_staticInstance$insta = staticInstance.instance) === null || _staticInstance$insta === void 0 ? void 0 : (_staticInstance$insta2 = _staticInstance$insta.edges) === null || _staticInstance$insta2 === void 0 ? void 0 : (_staticInstance$insta3 = _staticInstance$insta2[0]) === null || _staticInstance$insta3 === void 0 ? void 0 : _staticInstance$insta3.node;

  var staticPlaylistSection = _objectSpread({}, (slice === null || slice === void 0 ? void 0 : slice.staticPlaylistSection) || {});

  var sliceHead = slices === null || slices === void 0 ? void 0 : (_slices$ = slices[0]) === null || _slices$ === void 0 ? void 0 : _slices$.pageComponents;
  var assetId = parseInt(id.split('-')[0], 0);
  useEffect(function () {
    if (assetId) {
      dispatch(setScene(SCENE_LEARNING_ASSET));
      dispatch(sendEvent(EVENT_ASSET_OPEN, {
        asset: {
          id: assetId
        }
      }));
    }
  }, [assetId]);

  var _useLearningAsset = useLearningAsset(assetId),
      learningAssetData = _useLearningAsset.assetCache,
      assetLoading = _useLearningAsset.assetLoading,
      assetError = _useLearningAsset.assetError;

  if (assetLoading && !learningAssetData) {
    return React.createElement(GenericLoadingScreen, null);
  }

  if (!assetLoading && !slices.length || !assetLoading && assetError) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR
    });
  }

  var learningAssetMeta = sliceHead === null || sliceHead === void 0 ? void 0 : sliceHead.learningAssetMeta;
  var competencies = learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.competencies;
  var providerName = learningAssetData === null || learningAssetData === void 0 ? void 0 : (_learningAssetData$pr = learningAssetData.provider) === null || _learningAssetData$pr === void 0 ? void 0 : _learningAssetData$pr.name;
  var primaryCompetency = competencies && ((_competencies$ = competencies[0]) === null || _competencies$ === void 0 ? void 0 : _competencies$.text);

  var handleLaunching = function handleLaunching() {
    var _window, _window$open;

    var url = learningAssetData.url,
        id = learningAssetData.id;

    if (!isValidPrimative(url)) {
      return;
    }

    dispatch(sendEvent(EVENT_ASSET_LAUNCH, {
      asset: learningAssetData
    }));
    (_window = window) === null || _window === void 0 ? void 0 : (_window$open = _window.open(url, 'StaticAssetLaunchWindow')) === null || _window$open === void 0 ? void 0 : _window$open.focus();
  };

  var addEmbed = function addEmbed() {
    if (!learningAssetData) {
      return '';
    }

    var embedVideoURL = learningAssetData.embedVideoURL,
        image = learningAssetData.image;
    var url = isVideo() ? embedVideoURL : image;

    if (/youtube\.com/i.test(url)) {
      return url.split(/watch\?v=/i).join('embed/');
    }

    if (/youtu\.be/i.test(url)) {
      return "https://www.youtube.com/embed/".concat(url.split('/')[3]);
    }

    if (/vimeo\.com\/(?!video|event)/i.test(url)) {
      return "https://player.vimeo.com/video/".concat(url.split('/')[3]);
    }

    if (/ted\.com/i.test(url)) {
      return url.split(/www/i).join('embed');
    }

    if (/http:\/\//i.test(url)) {
      return url.split(/http:\/\//i).join('https://');
    }

    if (!/http/i.test(url)) {
      return 'https://'.concat(url);
    }

    return url;
  };

  var isVideo = function isVideo() {
    return isValidPrimative(learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.embedVideoURL);
  };

  return React.createElement(AssetPageContainer, null, React.createElement(AppMeta, _extends({
    key: "app-meta-content-special"
  }, appMetaProps)), React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12,
    justify: "flex-start"
  }, React.createElement(Breadcrumb, {
    margin: "lg 0 0 0",
    homeLink: basePath,
    paths: [{
      to: "/learning-asset/".concat(learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.id),
      key: 'learning-asset',
      isRouterLink: true,
      name: learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.title
    }]
  }))), React.createElement(Row, null, React.createElement(Cell, {
    columns: 8,
    colsLg: 8,
    colsMd: 8
  }, React.createElement(FocusedAsset, {
    loading: false,
    description: learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.description,
    src: addEmbed(),
    title: learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.title,
    videoText: sliceHead === null || sliceHead === void 0 ? void 0 : sliceHead.videoLoadingError,
    video: isVideo()
  })), React.createElement(Cell, {
    columns: 4,
    colsLg: 4,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4
  }, React.createElement(AssetMeta, {
    buttonTextLaunch: learningAssetMeta === null || learningAssetMeta === void 0 ? void 0 : learningAssetMeta.launchButtonLabel,
    launchHandler: handleLaunching,
    competencyCopy: learningAssetMeta === null || learningAssetMeta === void 0 ? void 0 : learningAssetMeta.competencyInfo,
    isLandingPage: true,
    hideLaunched: (_history$location$sta = history === null || history === void 0 ? void 0 : (_history$location = history.location) === null || _history$location === void 0 ? void 0 : (_history$location$sta2 = _history$location.state) === null || _history$location$sta2 === void 0 ? void 0 : _history$location$sta2.embeddedAsset) !== null && _history$location$sta !== void 0 ? _history$location$sta : false,
    isBookmarkInteraction: false,
    isCreatePlaylistInteraction: false,
    isShareInteraction: false,
    list: [{
      label: learningAssetMeta === null || learningAssetMeta === void 0 ? void 0 : learningAssetMeta.providerLabel,
      value: providerName
    }, {
      label: learningAssetMeta === null || learningAssetMeta === void 0 ? void 0 : learningAssetMeta.primaryCompetencyLabel,
      value: primaryCompetency
    }, {
      label: learningAssetMeta === null || learningAssetMeta === void 0 ? void 0 : learningAssetMeta.typeLabel,
      value: (_learningAssetData$ty = learningAssetData === null || learningAssetData === void 0 ? void 0 : (_learningAssetData$ty2 = learningAssetData.type) === null || _learningAssetData$ty2 === void 0 ? void 0 : _learningAssetData$ty2.name) !== null && _learningAssetData$ty !== void 0 ? _learningAssetData$ty : ''
    }, {
      label: learningAssetMeta === null || learningAssetMeta === void 0 ? void 0 : learningAssetMeta.lengthLabel,
      value: formatDuration(learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.duration, learningAssetData === null || learningAssetData === void 0 ? void 0 : learningAssetData.language)
    }],
    tags: competencies
  })))), staticPlaylistSection && React.createElement(StaticPlaylist, {
    playlistId: sliceHead === null || sliceHead === void 0 ? void 0 : sliceHead.id,
    staticPlaylists: staticPlaylistSection === null || staticPlaylistSection === void 0 ? void 0 : staticPlaylistSection.staticPlaylists,
    tooltip: undefined,
    showLock: false,
    title: React.createElement(PlaylistHeader, {
      marginTop: "xl",
      title: staticPlaylistSection === null || staticPlaylistSection === void 0 ? void 0 : staticPlaylistSection.name,
      name: staticPlaylistSection === null || staticPlaylistSection === void 0 ? void 0 : (_staticPlaylistSectio = staticPlaylistSection.staticPlaylists) === null || _staticPlaylistSectio === void 0 ? void 0 : (_staticPlaylistSectio2 = _staticPlaylistSectio[0]) === null || _staticPlaylistSectio2 === void 0 ? void 0 : _staticPlaylistSectio2.playlistName,
      key: "Header"
    }),
    paddingTop: "0",
    desktop: 4,
    strategyType: "static",
    context: "StaticPlaylist",
    onAssetClick: function onAssetClick(asset) {
      history.push({
        pathname: "/home/learning-asset/".concat(asset === null || asset === void 0 ? void 0 : asset.id, "?pid_hint=").concat(sliceHead === null || sliceHead === void 0 ? void 0 : sliceHead.id),
        state: {
          embeddedAsset: asset === null || asset === void 0 ? void 0 : asset.embeddedAsset
        }
      });
    },
    slidesPerPageSettings: {
      desktop: (_staticPlaylistSectio3 = staticPlaylistSection === null || staticPlaylistSection === void 0 ? void 0 : staticPlaylistSection.size) !== null && _staticPlaylistSectio3 !== void 0 ? _staticPlaylistSectio3 : 4,
      tablet: 2,
      mobileBig: 2,
      mobile: 1
    },
    loading: false,
    key: "AssetPagePlaylist-".concat(sliceHead === null || sliceHead === void 0 ? void 0 : sliceHead.id)
  }));
};
//# sourceMappingURL=StaticAssetPage.js.map