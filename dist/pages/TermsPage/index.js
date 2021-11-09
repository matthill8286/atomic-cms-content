function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { TermsPage as CookiePageWithoutQuery } from "./TermsPage";
export var CookiePageContent = function CookiePageContent(props) {
  return React.createElement(CookiePageWithoutQuery, _extends({}, props, {
    landingPageContent: props.landingPageContent
  }));
};
export default CookiePageContent;
//# sourceMappingURL=index.js.map