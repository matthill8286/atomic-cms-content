var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/ProfileTileColumns/index.tsx",
    _this = this;

import React, { useMemo } from 'react';
import { Row, Cell, Heading, Card } from '@matthill8286/atomic-ui';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from "../Serializer";
import { CustomSection } from "../CustomSection";
import { StyledAvatar, StyledPaddedSection, StyledProfileSection, StyledRelative } from "./ProfileTileColumns.styled";
import { StyledAvatarWrapper } from "../ProfileTileRows/ProfileTileRows.styled";
export var ProfileTileColumn = function ProfileTileColumn(_ref) {
  var profileAvatar = _ref.profileAvatar,
      profileInformation = _ref.profileInformation;
  return React.createElement(StyledProfileSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, React.createElement(StyledRelative, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, React.createElement(Card, {
    elevation: 1,
    elevationHover: 0,
    surface: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, React.createElement(StyledAvatarWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, React.createElement(StyledAvatar, {
    alt: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.altText,
    src: profileAvatar === null || profileAvatar === void 0 ? void 0 : profileAvatar.url,
    rounded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), React.createElement(StyledPaddedSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, Serializer(profileInformation === null || profileInformation === void 0 ? void 0 : profileInformation.raw, ConfigurableGraphCmsHtmlSerializer({
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
        key: "RichText-".concat(index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, React.createElement(ProfileTileColumn, {
        profileAvatar: profileAvatar,
        profileInformation: profileInformation,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }));
    });
  }, []);
  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, React.createElement(Cell, {
    columns: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, React.createElement(Heading, {
    scale: "level-2",
    textAlign: "center",
    margin: "xl 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, title))), React.createElement(CustomSection, {
    paddingTop: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, React.createElement(StyledPaddedSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, profileColumns))));
};
//# sourceMappingURL=index.js.map