import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Cell, styled, AssetMeta, Heading, Grid } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { ProfileTileRows } from "../ProfileTileRows";
export var DescriptionWrapper = styled.div.withConfig({
  displayName: "FocusedSection__DescriptionWrapper",
  componentId: "iinnwo-0"
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
    paddingBottom: paddingBottom
  }, React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Heading, {
    scale: "level-2",
    bold: true,
    textAlign: "left",
    margin: "xxl 0 0"
  }, title))), React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 8,
    colsSm: 8
  }, React.createElement(DescriptionWrapper, null, Serializer(description === null || description === void 0 ? void 0 : description.raw, ConfigurableGraphCmsHtmlSerializer({}))), React.createElement(ProfileTileRows, {
    profileSections: profileSections,
    sectionColor: "clear",
    title: profileTitle,
    label: profileBrandedLabel
  })), React.createElement(Cell, {
    columns: 4,
    colsSm: 8
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
    tags: []
  })))));
};
//# sourceMappingURL=FocusedSection.js.map