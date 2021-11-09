var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/Modals/LoginModal/LoginModalWrapper.tsx",
    _this = this;

import React, { useContext } from 'react';
import { LOGIN } from "../../../constants/modalConstants";
import { useModal } from "../../../app/asset/hooks";
import { GraphCmsInstanceContext } from "../../../context/instance";
import { head } from "../../../utils/FP/FP";
import { LoginModal } from "./LoginModal";
export var LoginModalWrapper = function LoginModalWrapper(_ref) {
  var _head$node, _staticInstance$insta;

  var modalLocked = _ref.modalLocked;

  var _useContext = useContext(GraphCmsInstanceContext),
      staticInstance = _useContext.staticInstance;

  var _useModal = useModal(LOGIN),
      hideLoginModal = _useModal.hide,
      RenderModal = _useModal.RenderModal;

  return React.createElement(RenderModal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, React.createElement(LoginModal, {
    loginTitle: modalLocked === null || modalLocked === void 0 ? void 0 : modalLocked.title,
    loginDescription: modalLocked === null || modalLocked === void 0 ? void 0 : modalLocked.description,
    loginButtonLabel: modalLocked === null || modalLocked === void 0 ? void 0 : modalLocked.buttonLabel,
    image: modalLocked === null || modalLocked === void 0 ? void 0 : modalLocked.image,
    onLoginClose: hideLoginModal,
    loginUrl: (_head$node = head(staticInstance === null || staticInstance === void 0 ? void 0 : (_staticInstance$insta = staticInstance.instance) === null || _staticInstance$insta === void 0 ? void 0 : _staticInstance$insta.edges).node) === null || _head$node === void 0 ? void 0 : _head$node.registrationUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};
//# sourceMappingURL=LoginModalWrapper.js.map