var _excluded = ["title", "width", "height", "embedUrl", "frameBorder", "features", "allowfullscreen"];

var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/EmbeddedPlayer/EmbeddedPlayer.tsx",
    _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
export var EmbeddedPlayer = function EmbeddedPlayer(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '100%' : _ref$height,
      embedUrl = _ref.embedUrl,
      _ref$frameBorder = _ref.frameBorder,
      frameBorder = _ref$frameBorder === void 0 ? '0' : _ref$frameBorder,
      _ref$features = _ref.features,
      features = _ref$features === void 0 ? ['picture-in-picture', 'showinfo=0'] : _ref$features,
      allowfullscreen = _ref.allowfullscreen,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("iframe", _extends({
    title: title,
    width: width,
    height: height,
    src: embedUrl,
    frameBorder: frameBorder,
    allow: features.join(),
    allowFullScreen: allowfullscreen
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }));
};
//# sourceMappingURL=EmbeddedPlayer.js.map