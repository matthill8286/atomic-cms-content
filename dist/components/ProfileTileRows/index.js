var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/ProfileTileRows/index.tsx",
    _this = this;

import React, { useMemo } from 'react';
import { Cell, styled, CopyText, Heading, MediaStyleSwitch, media } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledAvatar, StyledAvatarWrapper, StyledPaddedSection, StyledProfileSection, StyledCard, StyledProfileDetailsColumn } from "./ProfileTileRows.styled";
import { ProfileTileColumn } from "../ProfileTileColumns";
var StyledWrapper = styled.div.withConfig({
  displayName: "ProfileTileRows__StyledWrapper",
  componentId: "sc-1yo6m6i-0"
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
    marginTop: marginTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, React.createElement(CopyText, {
    limitLines: 1,
    fontSize: "sm",
    as: "div",
    toUpperCase: true,
    weight: "bold",
    display: "inline-flex",
    margin: "0 sm xs 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, title), React.createElement(Heading, {
    color: "primary",
    scale: "level-2",
    tag: "h2",
    lineHeight: "sm",
    fontFamily: "default",
    weight: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, name));
};
export var ProfileTileRow = function ProfileTileRow(_ref3) {
  var profileAvatar = _ref3.profileAvatar,
      profileInformation = _ref3.profileInformation;
  return React.createElement(StyledProfileSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, React.createElement(StyledCard, {
    elevation: 0,
    elevationHover: 0,
    noBorder: 'none',
    display: "flex",
    surface: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, React.createElement(StyledAvatarWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, React.createElement(StyledAvatar, {
    alt: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.altText,
    src: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.url,
    rounded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })), React.createElement(StyledProfileDetailsColumn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, React.createElement(StyledPaddedSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, Serializer(profileInformation === null || profileInformation === void 0 ? void 0 : profileInformation.raw, ConfigurableGraphCmsHtmlSerializer({
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
  componentId: "sc-1yo6m6i-1"
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
        key: "RichText-".concat(index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }, React.createElement(ProfileTileRow, {
        profileAvatar: profileAvatar,
        profileInformation: profileInformation,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }
      }));
    });
  }, [profileSections]);
  var mobileProfiles = useMemo(function () {
    return profileSections === null || profileSections === void 0 ? void 0 : profileSections.map(function (_ref8, index) {
      var profileAvatar = _ref8.profileAvatar,
          profileInformation = _ref8.profileInformation;
      return React.createElement(Cell, {
        columns: 12,
        key: "RichText-".concat(index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }
      }, React.createElement(ProfileTileColumn, {
        profileAvatar: profileAvatar,
        profileInformation: profileInformation,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }
      }));
    });
  }, [profileSections]);
  var mobileViewWithDefault = React.createElement(React.Fragment, null, React.createElement(MediaStyleSwitch, {
    query: media.maxSm,
    activeDisplay: "block",
    inactiveDisplay: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, mobileProfiles), React.createElement(MediaStyleSwitch, {
    query: "desktop",
    activeDisplay: "block",
    inactiveDisplay: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, profiles));
  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, React.createElement(BrandedHeadingWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, React.createElement(SpeakerHeader, {
    title: title,
    name: label,
    marginTop: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  })), mobileViewWithDefault);
};
//# sourceMappingURL=index.js.map