var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/combinations/CallToActionWithPlaylist/CallToActionWithPlaylist.tsx",
    _this = this;

import React from 'react';
import { useModals } from "../../app/asset/hooks";
import { MODALS } from "../../constants";
import { CmsCallToActionPanel, CustomSection, StaticPlaylist } from "../../components";
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '#/src/staticPages/components';
import { ConfirmationModalWrapper } from '#/src/staticPages/components/Modals/ConfirmationModal';
import { LoginModalWrapper } from '#/src/staticPages/components/Modals/LoginModal';
export var CallToActionWithPlaylist = React.memo(function (_ref) {
  var slices = _ref.slices,
      dataTestId = _ref.dataTestId,
      sectionColor = _ref.sectionColor,
      overridePlaylistClickEvent = _ref.overridePlaylistClickEvent,
      routeContext = _ref.routeContext,
      modalLocked = _ref.modalLocked,
      modalBlock = _ref.modalBlock;

  var _useModals = useModals(),
      openModal = _useModals.openModal,
      openModalName = _useModals.openModalName;

  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: 0,
    paddingBottom: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var _ref2$pageComponents = _ref2.pageComponents,
        button = _ref2$pageComponents.button,
        heading = _ref2$pageComponents.heading,
        image = _ref2$pageComponents.image,
        staticAssetTile = _ref2$pageComponents.staticAssetTile,
        rightOrientation = _ref2$pageComponents.rightOrientation,
        staticPlaylists = _ref2$pageComponents.staticPlaylists,
        id = _ref2$pageComponents.id,
        name = _ref2$pageComponents.name,
        __typename = _ref2$pageComponents.__typename,
        richTextCopy = _ref2$pageComponents.richTextCopy,
        size = _ref2.size,
        showScrollbar = _ref2.showScrollbar;
    var keyProp = "".concat(__typename, "_").concat(index);

    switch (__typename) {
      case 'CallToActionPanel':
        return React.createElement(CmsCallToActionPanel, {
          key: keyProp,
          sectionColor: "white",
          element: {
            buttonLabel: button === null || button === void 0 ? void 0 : button.text,
            headline: heading,
            href: button === null || button === void 0 ? void 0 : button.href,
            route: button === null || button === void 0 ? void 0 : button.to
          },
          richTextCopy: Serializer(richTextCopy === null || richTextCopy === void 0 ? void 0 : richTextCopy.raw, ConfigurableGraphCmsHtmlSerializer({
            textAlign: 'left',
            contentAlign: 'left'
          })),
          showReadMore: false,
          showFeatured: true,
          isOpenAsset: true,
          asset: staticAssetTile,
          routeContext: routeContext,
          rightOrientation: rightOrientation,
          image: image,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 19
          }
        });

      case 'StaticPlaylistSection':
        if (!staticPlaylists.length) {
          return null;
        }

        return React.createElement(StaticPlaylist, {
          key: keyProp,
          playlistId: id,
          dataTest: dataTestId,
          staticPlaylists: staticPlaylists,
          name: staticPlaylists === null || staticPlaylists === void 0 ? void 0 : staticPlaylists[0].playlistName,
          overridePlaylistClickEvent: overridePlaylistClickEvent,
          routeContext: routeContext,
          title: name,
          showScrollbar: showScrollbar,
          modalLocked: modalLocked,
          modalBlock: modalBlock,
          playlistBackground: sectionColor !== null && sectionColor !== void 0 ? sectionColor : 'grey1',
          context: "StaticPlaylist",
          showLock: true,
          desktop: size !== null && size !== void 0 ? size : 4,
          paddingTop: "xxxl",
          openModal: openModal,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }
        });

      default:
        return null;
    }
  }), openModalName === MODALS.CONFIRMATION && React.createElement(ConfirmationModalWrapper, {
    modalBlock: modalBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }), openModalName === MODALS.LOGIN && React.createElement(LoginModalWrapper, {
    modalLocked: modalLocked,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }));
});
//# sourceMappingURL=CallToActionWithPlaylist.js.map