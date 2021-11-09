import React from 'react';
import { CONFIRMATION } from "../../../constants/modalConstants";
import { useModal } from "../../../app/asset/hooks";
import { ConfirmationModal } from "./ConfirmationModal";
export var ConfirmationModalWrapper = function ConfirmationModalWrapper(_ref) {
  var modalBlock = _ref.modalBlock;

  var _useModal = useModal(CONFIRMATION),
      hideConfirmationModal = _useModal.hide,
      RenderModal = _useModal.RenderModal;

  return React.createElement(RenderModal, null, React.createElement(ConfirmationModal, {
    confirmationTitle: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.title,
    confirmationDescription: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.description,
    onConfirmationClose: hideConfirmationModal,
    confirmationCancelButtonLabel: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.cancelButtonLabel,
    confirmationAcceptButtonLabel: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.acceptButtonLabel,
    image: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.image
  }));
};
//# sourceMappingURL=ConfirmationModalWrapper.js.map