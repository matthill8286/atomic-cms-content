function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AssetPageWithContext } from "./StaticAssetPage";
export var AssetPageWrapper = function AssetPageWrapper(props) {
  return React.createElement(AssetPageWithContext, _extends({
    landingPageContent: props.landingPageContent
  }, props));
};
export default AssetPageWrapper;
//# sourceMappingURL=index.js.map