var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/EventDetailsPage/EventContent.tsx",
    _this = this;

import React from 'react';
import { CustomSection, FocusedSection, StaticPlaylist } from "../../components";
export var FOCUSED_SECTION = 'FocusedSection';
export var EventsWithAssetMeta = React.memo(function (_ref) {
  var slices = _ref.slices,
      dataTestId = _ref.dataTestId,
      sectionColor = _ref.sectionColor,
      overridePlaylistClickEvent = _ref.overridePlaylistClickEvent,
      routeContext = _ref.routeContext;
  return React.createElement(CustomSection, {
    color: sectionColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var _ref2$pageComponents = _ref2.pageComponents,
        description = _ref2$pageComponents.description,
        staticAssetTile = _ref2$pageComponents.staticAssetTile,
        rightOrientation = _ref2$pageComponents.rightOrientation,
        staticPlaylists = _ref2$pageComponents.staticPlaylists,
        profileSections = _ref2$pageComponents.profileSections,
        learningAssetMeta = _ref2$pageComponents.learningAssetMeta,
        richTextSection = _ref2$pageComponents.richTextSection,
        heading = _ref2$pageComponents.heading,
        subHeading = _ref2$pageComponents.subHeading,
        id = _ref2$pageComponents.id,
        name = _ref2$pageComponents.name,
        __typename = _ref2$pageComponents.__typename,
        size = _ref2.size;
    var keyProp = "".concat(__typename, "_").concat(index, "|").concat(id);

    switch (__typename) {
      case 'EventFocusedArea':
        return React.createElement(FocusedSection, {
          key: keyProp,
          title: richTextSection === null || richTextSection === void 0 ? void 0 : richTextSection.title,
          description: richTextSection === null || richTextSection === void 0 ? void 0 : richTextSection.document,
          profileBrandedLabel: subHeading,
          profileTitle: heading,
          learningAssetMeta: learningAssetMeta,
          profileSections: profileSections,
          sectionColor: "grey1",
          paddingTop: "sm",
          paddingBottom: "sm",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
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
          playlistBackground: sectionColor !== null && sectionColor !== void 0 ? sectionColor : 'grey1',
          context: "StaticPlaylist",
          showLock: true,
          desktop: size !== null && size !== void 0 ? size : 4,
          paddingTop: "xxxl",
          showDivider: true,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 19
          }
        });

      default:
        return null;
    }
  }));
});
//# sourceMappingURL=EventContent.js.map