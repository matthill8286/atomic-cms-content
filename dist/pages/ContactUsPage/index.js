function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { ContactUsPage as ContactUsPageWithoutQuery } from "./ContactUsPage";
export var ContactUsPageContent = function ContactUsPageContent(props) {
  return React.createElement(ContactUsPageWithoutQuery, _extends({}, props, {
    landingPageContent: props.landingPageContent
  }));
};
export default ContactUsPageContent;
//# sourceMappingURL=index.js.map