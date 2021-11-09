import React, { useMemo } from 'react';
import { Cell, styled, CopyText, Heading, MediaStyleSwitch, media } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledAvatar, StyledAvatarWrapper, StyledPaddedSection, StyledProfileSection, StyledCard, StyledProfileDetailsColumn } from "./ProfileTileRows.styled";
import { ProfileTileColumn } from "../ProfileTileColumns";
var StyledWrapper = styled.div.withConfig({
  displayName: "ProfileTileRows__StyledWrapper",
  componentId: "sc-19rfp1d-0"
})(["\n  margin-top: ", ";\n"], function (_ref) {
  var _theme$spacing$base$m;

  var theme = _ref.theme,
      marginTop = _ref.marginTop;
  return (_theme$spacing$base$m = theme.spacing.base[marginTop]) !== null && _theme$spacing$base$m !== void 0 ? _theme$spacing$base$m : 0;
});
export var SpeakerHeader = function SpeakerHeader(_ref2) {
  var title = _ref2.title,
      name = _ref2.name,
      marginTop = _ref2.marginTop;
  return React.createElement(StyledWrapper, {
    marginTop: marginTop
  }, React.createElement(CopyText, {
    limitLines: 1,
    fontSize: "sm",
    as: "div",
    toUpperCase: true,
    weight: "bold",
    display: "inline-flex",
    margin: "0 sm xs 0"
  }, title), React.createElement(Heading, {
    color: "primary",
    scale: "level-2",
    tag: "h2",
    lineHeight: "sm",
    fontFamily: "default",
    weight: "bold"
  }, name));
};
export var ProfileTileRow = function ProfileTileRow(_ref3) {
  var profileAvatar = _ref3.profileAvatar,
      profileInformation = _ref3.profileInformation;
  return React.createElement(StyledProfileSection, null, React.createElement(StyledCard, {
    elevation: 0,
    elevationHover: 0,
    noBorder: 'none',
    display: "flex",
    surface: "clear"
  }, React.createElement(StyledAvatarWrapper, null, React.createElement(StyledAvatar, {
    alt: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.altText,
    src: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.url,
    rounded: true
  })), React.createElement(StyledProfileDetailsColumn, null, React.createElement(StyledPaddedSection, null, Serializer(profileInformation === null || profileInformation === void 0 ? void 0 : profileInformation.raw, ConfigurableGraphCmsHtmlSerializer({
    textAlign: 'left',
    inline: true,
    withIconOnLink: true,
    linkPadding: 'sm 0',
    linkColor: 'primary',
    linkScale: 'small',
    margins: 'xs 0'
  }))))));
};
export var BrandedHeadingWrapper = styled.div.withConfig({
  displayName: "ProfileTileRows__BrandedHeadingWrapper",
  componentId: "sc-19rfp1d-1"
})(["\n  margin: ", ";\n\n  ", " {\n    margin-bottom: ", ";\n  }\n"], function (_ref4) {
  var theme = _ref4.theme;
  return "".concat(theme.spacing.base.md, " 0 ").concat(theme.spacing.base.lg, " 0");
}, media.maxSm, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.xxxl;
});
export var ProfileTileRows = function ProfileTileRows(_ref6) {
  var profileSections = _ref6.profileSections,
      label = _ref6.label,
      title = _ref6.title,
      sectionColor = _ref6.sectionColor,
      paddingTop = _ref6.paddingTop,
      paddingBottom = _ref6.paddingBottom;
  var profiles = useMemo(function () {
    return profileSections === null || profileSections === void 0 ? void 0 : profileSections.map(function (_ref7, index) {
      var profileAvatar = _ref7.profileAvatar,
          profileInformation = _ref7.profileInformation;
      return React.createElement(Cell, {
        columns: 12,
        key: "RichText-".concat(index)
      }, React.createElement(ProfileTileRow, {
        profileAvatar: profileAvatar,
        profileInformation: profileInformation
      }));
    });
  }, [profileSections]);
  var mobileProfiles = useMemo(function () {
    return profileSections === null || profileSections === void 0 ? void 0 : profileSections.map(function (_ref8, index) {
      var profileAvatar = _ref8.profileAvatar,
          profileInformation = _ref8.profileInformation;
      return React.createElement(Cell, {
        columns: 12,
        key: "RichText-".concat(index)
      }, React.createElement(ProfileTileColumn, {
        profileAvatar: profileAvatar,
        profileInformation: profileInformation
      }));
    });
  }, [profileSections]);
  var mobileViewWithDefault = React.createElement(React.Fragment, null, React.createElement(MediaStyleSwitch, {
    query: media.maxSm,
    activeDisplay: "block",
    inactiveDisplay: "none"
  }, mobileProfiles), React.createElement(MediaStyleSwitch, {
    query: "desktop",
    activeDisplay: "block",
    inactiveDisplay: "none"
  }, profiles));
  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
  }, React.createElement(BrandedHeadingWrapper, null, React.createElement(SpeakerHeader, {
    title: title,
    name: label,
    marginTop: null
  })), mobileViewWithDefault);
};
//# sourceMappingURL=index.js.map