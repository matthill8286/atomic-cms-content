import { css, media, Picture, styled } from '@matthill8286/atomic-ui';
import { CustomSection } from "../CustomSection";
export var StyledPaddedSection = styled.div.withConfig({
  displayName: "ProfileTileColumnsstyled__StyledPaddedSection",
  componentId: "gq651v-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["\n      padding: ", " ", "\n        ", " ", ";\n\n      > p {\n        margin-bottom: ", ";\n      }\n    "], theme.spacing.base.xl, theme.spacing.base.md, theme.spacing.base.xxl, theme.spacing.base.xl, theme.spacing.base.xs);
});
export var StyledAvatar = styled(Picture).withConfig({
  displayName: "ProfileTileColumnsstyled__StyledAvatar",
  componentId: "gq651v-1"
})(["\n  position: absolute;\n  top: -42px;\n  width: 90px;\n  height: 90px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"]);
export var StyledRelative = styled.div.withConfig({
  displayName: "ProfileTileColumnsstyled__StyledRelative",
  componentId: "gq651v-2"
})(["\n  position: relative;\n"]);
export var StyledProfileSection = styled(CustomSection).withConfig({
  displayName: "ProfileTileColumnsstyled__StyledProfileSection",
  componentId: "gq651v-3"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["\n      ", " {\n        margin-bottom: ", ";\n      }\n    "], media.maxSm, theme.spacing.base.xxl);
});
//# sourceMappingURL=ProfileTileColumns.styled.js.map