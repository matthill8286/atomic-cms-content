import { styled, media, CopyText, InfoText } from '@matthill8286/atomic-ui';
export var StyledErrorPageContainer = styled.div.withConfig({
  displayName: "ErrorPagestyled__StyledErrorPageContainer",
  componentId: "rrtgyi-0"
})(["width:100%;display:flex;flex-flow:column;justify-content:flex-start;align-items:center;margin:", " 0;text-align:center;", "{margin:150px 0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.xl;
}, media.md);
export var StyledErrorImage = styled.div.attrs(function () {
  return {
    className: 'svg-error'
  };
}).withConfig({
  displayName: "ErrorPagestyled__StyledErrorImage",
  componentId: "rrtgyi-1"
})(["height:200px;width:auto;margin-bottom:", ";", " ", "{height:250px;margin-bottom:", ";}> svg{height:250px;width:100%;margin:0 auto;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.md;
}, function (_ref3) {
  var marginLeft = _ref3.marginLeft;
  return marginLeft ? "\n    margin-left: 50px;\n    ".concat(media.md, " {\n      margin-left: 64px;\n    }\n  ") : '';
}, media.md, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.base.lg;
});
export var StyledErrorHeadingWrapper = styled.div.withConfig({
  displayName: "ErrorPagestyled__StyledErrorHeadingWrapper",
  componentId: "rrtgyi-2"
})(["margin-bottom:", ";max-width:350px;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.base.xs;
});
export var StyledErrorCopyText = styled(CopyText).withConfig({
  displayName: "ErrorPagestyled__StyledErrorCopyText",
  componentId: "rrtgyi-3"
})(["margin-bottom:", ";", "{margin-bottom:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.base.lg;
}, media.md, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.base.xl;
});
export var StyledErrorCode = styled(InfoText).withConfig({
  displayName: "ErrorPagestyled__StyledErrorCode",
  componentId: "rrtgyi-4"
})(["margin-top:", ";color:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.base.lg;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.grey4;
});
//# sourceMappingURL=ErrorPage.styled.js.map