var _excluded = ["color", "id", "children", "paddingTop", "paddingBottom", "overrideOver"];

var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/CustomSection/index.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyledCustomSection } from "./CustomSection.styled";
export * from "./CustomSection.types";
export var CustomSection = function CustomSection(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'transparent' : _ref$color,
      id = _ref.id,
      children = _ref.children,
      paddingTop = _ref.paddingTop,
      paddingBottom = _ref.paddingBottom,
      overrideOver = _ref.overrideOver,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(StyledCustomSection, _extends({
    id: id !== null && id !== void 0 ? id : undefined,
    color: color,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    overrideOver: overrideOver
  }, otherProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), children);
};
//# sourceMappingURL=index.js.map