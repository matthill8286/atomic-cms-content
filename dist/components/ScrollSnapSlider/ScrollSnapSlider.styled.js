import { StyledNavArrow } from './NavArrow';
import { css, handleGridPadding, styled, media } from '@matthill8286/atomic-ui';
export var gridCss = css(["box-sizing:border-box;margin:0 auto;max-width:1472px;", ""], handleGridPadding(false));
export var StyledOverflowWrapper = styled.div.withConfig({
  displayName: "ScrollSnapSliderstyled__StyledOverflowWrapper",
  componentId: "sc-4yfmln-0"
})(["ul{", ";}"], gridCss);
export var StyledHeading = styled.div.withConfig({
  displayName: "ScrollSnapSliderstyled__StyledHeading",
  componentId: "sc-4yfmln-1"
})(["", " h1,h2,h3,h4{margin-left:0;margin-right:0;color:", ";}"], gridCss, function (_ref) {
  var theme = _ref.theme;
  return theme.color.primary;
});
export var StyledGridScrollbar = styled.div.withConfig({
  displayName: "ScrollSnapSliderstyled__StyledGridScrollbar",
  componentId: "sc-4yfmln-2"
})(["", ""], gridCss);
export var StyledHeadingNoGrid = styled.div.withConfig({
  displayName: "ScrollSnapSliderstyled__StyledHeadingNoGrid",
  componentId: "sc-4yfmln-3"
})(["h1,h2,h3,h4{margin-left:0;margin-right:0;color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.primary;
});
export var StyledWrapper = styled.div.withConfig({
  displayName: "ScrollSnapSliderstyled__StyledWrapper",
  componentId: "sc-4yfmln-4"
})(function (_ref3) {
  var showArrowsOnHover = _ref3.showArrowsOnHover,
      isGridLayout = _ref3.isGridLayout;
  return css(["position:relative;", " ", ""], !isGridLayout && "height: 100%", showArrowsOnHover && "\n    ".concat(StyledNavArrow, " {\n      visibility: hidden;\n    }\n    ").concat(media.xl, " {\n      &:hover ").concat(StyledNavArrow, " {\n        visibility: visible;\n      }\n    }\n  "));
});
export var StyledScrollbar = styled.div.withConfig({
  displayName: "ScrollSnapSliderstyled__StyledScrollbar",
  componentId: "sc-4yfmln-5"
})(function (_ref4) {
  var isSliderScrollable = _ref4.isSliderScrollable,
      theme = _ref4.theme;
  return css(["background-color:", ";height:2px;margin-top:", ";opacity:", ";overflow:hidden;position:relative;width:100%;span{background-color:", ";height:100%;position:absolute;}"], theme.color.grey2, theme.spacing.base.sm, isSliderScrollable ? 1 : 0, theme.color.primary);
});
//# sourceMappingURL=ScrollSnapSlider.styled.js.map