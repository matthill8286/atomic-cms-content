import React, { useMemo } from 'react';
import { Row, Cell, Heading, Card } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledAvatar, StyledPaddedSection, StyledProfileSection, StyledRelative } from "./ProfileTileColumns.styled";
import { StyledAvatarWrapper } from "../ProfileTileRows/ProfileTileRows.styled";
export var ProfileTileColumn = function ProfileTileColumn(_ref) {
  var profileAvatar = _ref.profileAvatar,
      profileInformation = _ref.profileInformation;
  return React.createElement(StyledProfileSection, null, React.createElement(StyledRelative, null, React.createElement(Card, {
    elevation: 1,
    elevationHover: 0,
    surface: "white"
  }, React.createElement(StyledAvatarWrapper, null, React.createElement(StyledAvatar, {
    alt: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.altText,
    src: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.url,
    rounded: true
  })), React.createElement(StyledPaddedSection, null, Serializer(profileInformation === null || profileInformation === void 0 ? void 0 : profileInformation.raw, ConfigurableGraphCmsHtmlSerializer({
    textAlign: 'center',
    contentAlign: 'center'
  }))))));
};
export var ProfileTileColumns = function ProfileTileColumns(_ref2) {
  var profileSections = _ref2.profileSections,
      title = _ref2.title,
      sectionColor = _ref2.sectionColor,
      paddingTop = _ref2.paddingTop,
      paddingBottom = _ref2.paddingBottom;
  var profileColumns = useMemo(function () {
    return profileSections === null || profileSections === void 0 ? void 0 : profileSections.map(function (_ref3, index) {
      var profileAvatar = _ref3.profileAvatar,
          profileInformation = _ref3.profileInformation;
      return React.createElement(Cell, {
        columns: 12 / profileSections.length,
        key: "RichText-".concat(index)
      }, React.createElement(ProfileTileColumn, {
        profileAvatar: profileAvatar,
        profileInformation: profileInformation
      }));
    });
  }, []);
  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
  }, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Heading, {
    scale: "level-2",
    textAlign: "center",
    margin: "xl 0"
  }, title))), React.createElement(CustomSection, {
    paddingTop: "sm"
  }, React.createElement(StyledPaddedSection, null, React.createElement(Row, {
    noMargin: true
  }, profileColumns))));
};
//# sourceMappingURL=index.js.map