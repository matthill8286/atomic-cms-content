var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/Modals/LoginModal/LoginModal.tsx",
    _this = this;

import React from 'react';
import { CopyText, Modal, Picture, styled } from '@matthill8286/atomic-ui';
var DescriptionWrapper = styled.div.withConfig({
  displayName: "LoginModal__DescriptionWrapper",
  componentId: "sc-4srlzf-0"
})(["\n  padding: ", ";\n"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.base.md, " ").concat(theme.spacing.base.xxl);
});
var StyledPicture = styled(Picture).withConfig({
  displayName: "LoginModal__StyledPicture",
  componentId: "sc-4srlzf-1"
})(["\n  display: flex;\n  margin: ", ";\n"], function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.spacing.base.md);
});
export var LoginModal = function LoginModal(_ref3) {
  var _image$altText;

  var loginTitle = _ref3.loginTitle,
      loginDescription = _ref3.loginDescription,
      loginButtonLabel = _ref3.loginButtonLabel,
      onLoginClose = _ref3.onLoginClose,
      loginUrl = _ref3.loginUrl,
      image = _ref3.image;

  var handleCloseModal = function handleCloseModal() {
    return onLoginClose('');
  };

  var goToLoginPage = function goToLoginPage() {
    handleCloseModal();
    window.location.href = loginUrl;
  };

  return React.createElement(Modal, {
    buttonAlignment: "center",
    size: "lg",
    animation: "fadeIn",
    onClose: handleCloseModal,
    showButtonSeparator: false,
    position: "top",
    title: loginTitle,
    secondaryButtonProps: {
      buttonLabel: loginButtonLabel,
      actionType: 'primary',
      curved: true,
      size: 'lg',
      onClick: goToLoginPage
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, image && React.createElement(StyledPicture, {
    rounded: true,
    alt: (_image$altText = image === null || image === void 0 ? void 0 : image.altText) !== null && _image$altText !== void 0 ? _image$altText : '',
    width: "100%",
    height: "auto",
    src: image === null || image === void 0 ? void 0 : image.url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), React.createElement(DescriptionWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, React.createElement(CopyText, {
    textAlign: "center",
    fontSize: "md",
    margin: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, loginDescription)));
};
//# sourceMappingURL=LoginModal.js.map