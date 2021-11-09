import React from 'react';
import { CopyText, Modal, Picture, styled } from '@matthill8286/atomic-ui';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setCookie, getCookie } from "../../../utils/localStorage";
import { getModalContext } from "../../../store/UI/ui.selectors";
var DescriptionWrapper = styled.div.withConfig({
  displayName: "ConfirmationModal__DescriptionWrapper",
  componentId: "sc-1jwsxb6-0"
})(["\n  padding: ", ";\n"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.base.md, " ").concat(theme.spacing.base.xxl);
});
var StyledPicture = styled(Picture).withConfig({
  displayName: "ConfirmationModal__StyledPicture",
  componentId: "sc-1jwsxb6-1"
})(["\n  display: flex;\n  margin: ", ";\n"], function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.spacing.base.md);
});
export var ConfirmationModal = function ConfirmationModal(_ref3) {
  var _image$altText;

  var confirmationTitle = _ref3.confirmationTitle,
      confirmationDescription = _ref3.confirmationDescription,
      confirmationCancelButtonLabel = _ref3.confirmationCancelButtonLabel,
      confirmationAcceptButtonLabel = _ref3.confirmationAcceptButtonLabel,
      onConfirmationClose = _ref3.onConfirmationClose,
      goToAssetPage = _ref3.goToAssetPage,
      image = _ref3.image;
  var context = useSelector(getModalContext);
  var history = useHistory();

  var handleCloseModal = function handleCloseModal() {
    return onConfirmationClose('');
  };

  var handleConfirmation = function handleConfirmation() {
    if (!getCookie('confirm')) {
      var _context$asset;

      setCookie('confirm', 'Healthcare professional');
      handleCloseModal();
      history.push({
        pathname: "/home/learning-asset/".concat(context === null || context === void 0 ? void 0 : (_context$asset = context.asset) === null || _context$asset === void 0 ? void 0 : _context$asset.niceName, "?pid_hint=").concat(context === null || context === void 0 ? void 0 : context.playlistId)
      });
    }
  };

  return React.createElement(Modal, {
    buttonAlignment: "center",
    onClose: handleCloseModal,
    showButtonSeparator: false,
    position: "top",
    animation: "fadeIn",
    title: confirmationTitle,
    secondaryButtonProps: {
      buttonLabel: confirmationAcceptButtonLabel,
      actionType: 'primary',
      curved: true,
      size: 'lg',
      onClick: handleConfirmation
    },
    primaryButtonProps: {
      buttonLabel: confirmationCancelButtonLabel,
      actionType: 'outlined',
      curved: true,
      size: 'lg',
      onClick: handleCloseModal
    }
  }, image && React.createElement(StyledPicture, {
    rounded: true,
    alt: (_image$altText = image === null || image === void 0 ? void 0 : image.altText) !== null && _image$altText !== void 0 ? _image$altText : '',
    width: "100%",
    height: "auto",
    src: image === null || image === void 0 ? void 0 : image.url
  }), confirmationDescription && React.createElement(DescriptionWrapper, null, React.createElement(CopyText, {
    textAlign: 'center',
    fontSize: 'md',
    margin: 0
  }, confirmationDescription)));
};
//# sourceMappingURL=ConfirmationModal.js.map