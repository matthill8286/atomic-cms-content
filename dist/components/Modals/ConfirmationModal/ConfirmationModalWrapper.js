var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/Modals/ConfirmationModal/ConfirmationModalWrapper.tsx",
    _this = this;

import React from 'react';
import { CONFIRMATION } from "../../../constants/modalConstants";
import { useModal } from "../../../app/asset/hooks";
import { ConfirmationModal } from "./ConfirmationModal";
export var ConfirmationModalWrapper = function ConfirmationModalWrapper(_ref) {
  var modalBlock = _ref.modalBlock;

  var _useModal = useModal(CONFIRMATION),
      hideConfirmationModal = _useModal.hide,
      RenderModal = _useModal.RenderModal;

  return React.createElement(RenderModal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, React.createElement(ConfirmationModal, {
    confirmationTitle: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.title,
    confirmationDescription: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.description,
    onConfirmationClose: hideConfirmationModal,
    confirmationCancelButtonLabel: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.cancelButtonLabel,
    confirmationAcceptButtonLabel: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.acceptButtonLabel,
    image: modalBlock === null || modalBlock === void 0 ? void 0 : modalBlock.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};
//# sourceMappingURL=ConfirmationModalWrapper.js.map