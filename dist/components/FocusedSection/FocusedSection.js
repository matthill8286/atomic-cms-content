var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/FocusedSection/FocusedSection.tsx",
    _this = this;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Cell, styled, AssetMeta, Heading, Grid } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { ProfileTileRows } from "../ProfileTileRows";
export var DescriptionWrapper = styled.div.withConfig({
  displayName: "FocusedSection__DescriptionWrapper",
  componentId: "sc-1hpi1zv-0"
})(["\n  margin: ", ";\n"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.base.md, " 0 ").concat(theme.spacing.base.lg, " 0");
});
export var FocusedSection = function FocusedSection(_ref2) {
  var _location$state$embed, _location$state;

  var title = _ref2.title,
      description = _ref2.description,
      profileSections = _ref2.profileSections,
      profileTitle = _ref2.profileTitle,
      profileBrandedLabel = _ref2.profileBrandedLabel,
      learningAssetMeta = _ref2.learningAssetMeta,
      sectionColor = _ref2.sectionColor,
      paddingTop = _ref2.paddingTop,
      paddingBottom = _ref2.paddingBottom;
  var eventDateLabel = learningAssetMeta.eventDateLabel,
      typeLabel = learningAssetMeta.typeLabel,
      lengthLabel = learningAssetMeta.lengthLabel,
      providerLabel = learningAssetMeta.providerLabel,
      staticEventDateValue = learningAssetMeta.staticEventDateValue,
      staticTypeValue = learningAssetMeta.staticTypeValue,
      staticProviderValue = learningAssetMeta.staticProviderValue,
      staticLengthValue = learningAssetMeta.staticLengthValue,
      staticCompetencyValue = learningAssetMeta.staticCompetencyValue,
      launchButtonLabel = learningAssetMeta.launchButtonLabel,
      customExternalUrl = learningAssetMeta.customExternalUrl;

  var _useHistory = useHistory(),
      location = _useHistory.location;

  var handleLaunching = function handleLaunching() {
    if (!customExternalUrl) {
      return null;
    }

    window.open(customExternalUrl, '_blank');
  };

  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, React.createElement(Heading, {
    scale: "level-2",
    bold: true,
    textAlign: "left",
    margin: "xxl 0 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, title))), React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, React.createElement(Cell, {
    columns: 8,
    colsSm: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, React.createElement(DescriptionWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, Serializer(description === null || description === void 0 ? void 0 : description.raw, ConfigurableGraphCmsHtmlSerializer({}))), React.createElement(ProfileTileRows, {
    profileSections: profileSections,
    sectionColor: "clear",
    title: profileTitle,
    label: profileBrandedLabel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  })), React.createElement(Cell, {
    columns: 4,
    colsSm: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, React.createElement(AssetMeta, {
    list: [{
      label: providerLabel,
      value: staticProviderValue
    }, {
      label: eventDateLabel,
      value: staticEventDateValue
    }, {
      label: typeLabel,
      value: staticTypeValue
    }, {
      label: lengthLabel,
      value: staticLengthValue
    }],
    buttonTextLaunch: launchButtonLabel,
    hideLaunched: (_location$state$embed = location === null || location === void 0 ? void 0 : (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.embeddedAsset) !== null && _location$state$embed !== void 0 ? _location$state$embed : false,
    isLandingPage: true,
    launchHandler: handleLaunching,
    competencyCopy: staticCompetencyValue,
    isCreatePlaylistInteraction: false,
    isBookmarkInteraction: false,
    isShareInteraction: false,
    tags: [],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  })))));
};
//# sourceMappingURL=FocusedSection.js.map