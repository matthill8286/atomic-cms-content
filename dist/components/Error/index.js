function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useEffect } from 'react';
import { Button, Heading, Grid, Cell, Row } from '@matthill8286/atomic-ui';
import { Illustration05, IllustrationDataMaintenance, IllustrationJavascript } from '@matthill8286/atomic-icon-library';
import { useLocation } from 'react-router-dom';
import { StyledErrorPageContainer, StyledErrorCopyText, StyledErrorHeadingWrapper, StyledErrorImage, StyledErrorCode } from './ErrorPage.styled';
import { ErrorPageType } from './ErrorPage.interface';
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer';
export var IS_BROWSER = typeof window !== 'undefined';
export var ErrorPage = function ErrorPage(_ref) {
  var _navigator, _errorHeadline, _errorSubLabel, _errorCodeLabel, _buttonLabel, _svgImage;

  var _ref$errorType = _ref.errorType,
      errorType = _ref$errorType === void 0 ? ErrorPageType.TECHNICAL_ERROR : _ref$errorType,
      errorMessage = _ref.errorMessage;
  var location = useLocation();
  var isOffline = IS_BROWSER && ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.onLine) === false;

  if (isOffline) {
    errorType = ErrorPageType.OFFLINE_ERROR;
  }

  var isRedirected = location.pathname.includes('/error/500');
  useEffect(function () {
    if (isOffline) {
      window.addEventListener('online', function () {
        window.location.reload();
      }, false);
    }
  });
  var errorHeadline = (_errorHeadline = {}, _defineProperty(_errorHeadline, ErrorPageType.NOT_FOUND, 'Not found'), _defineProperty(_errorHeadline, ErrorPageType.TECHNICAL_ERROR, 'Something went wrong'), _defineProperty(_errorHeadline, ErrorPageType.OFFLINE_ERROR, 'You are Offline'), _errorHeadline);
  var errorSubLabel = (_errorSubLabel = {}, _defineProperty(_errorSubLabel, ErrorPageType.NOT_FOUND, 'This page has either been removed or is broken'), _defineProperty(_errorSubLabel, ErrorPageType.TECHNICAL_ERROR, 'We are currently experiencing technical issues'), _defineProperty(_errorSubLabel, ErrorPageType.OFFLINE_ERROR, 'Please connect to the internet'), _errorSubLabel);
  var errorCodeLabel = (_errorCodeLabel = {}, _defineProperty(_errorCodeLabel, ErrorPageType.NOT_FOUND, 'Error 404'), _defineProperty(_errorCodeLabel, ErrorPageType.TECHNICAL_ERROR, 'Error 500'), _defineProperty(_errorCodeLabel, ErrorPageType.OFFLINE_ERROR, 'Offline'), _errorCodeLabel);
  var buttonLabel = (_buttonLabel = {}, _defineProperty(_buttonLabel, ErrorPageType.NOT_FOUND, 'Dashboard'), _defineProperty(_buttonLabel, ErrorPageType.TECHNICAL_ERROR, 'Reload'), _defineProperty(_buttonLabel, ErrorPageType.OFFLINE_ERROR, 'Offline Reload'), _buttonLabel);
  var svgImage = (_svgImage = {}, _defineProperty(_svgImage, ErrorPageType.NOT_FOUND, React.createElement(IllustrationJavascript, null)), _defineProperty(_svgImage, ErrorPageType.TECHNICAL_ERROR, React.createElement(IllustrationDataMaintenance, null)), _defineProperty(_svgImage, ErrorPageType.OFFLINE_ERROR, React.createElement(Illustration05, null)), _svgImage);
  var isTechnicalError = errorType === ErrorPageType.TECHNICAL_ERROR;
  var buttonProps = {};

  if (errorType === ErrorPageType.NOT_FOUND || isRedirected) {
    buttonProps = {
      to: '/'
    };
  } else if (isTechnicalError) {
    buttonProps = {
      onClick: function onClick(event) {
        event.preventDefault();
        window.location.reload();
      }
    };
  }

  var testLabels = {
    image: "error-page-image-".concat(errorType),
    text: "error-page-text-".concat(errorType)
  };
  var componentHeadings = React.createElement(React.Fragment, null, React.createElement(StyledErrorHeadingWrapper, null, React.createElement(Heading, {
    scale: "level-2"
  }, errorHeadline[errorType])), React.createElement(StyledErrorCopyText, {
    fontSize: "sm",
    "data-test": testLabels.text
  }, errorSubLabel[errorType]));
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(StyledErrorPageContainer, null, React.createElement(StyledErrorImage, {
    marginLeft: errorType === ErrorPageType.TECHNICAL_ERROR || errorType === ErrorPageType.OFFLINE_ERROR,
    "data-test": testLabels.image
  }, svgImage[errorType]), errorMessage !== null && errorMessage !== void 0 && errorMessage.message ? React.createElement(StyledErrorHeadingWrapper, {
    "data-test": testLabels.text
  }, Serializer(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.message, ConfigurableGraphCmsHtmlSerializer({}))) : componentHeadings, React.createElement(Button, _extends({
    size: "lg",
    actionType: "secondary"
  }, buttonProps), isRedirected ? 'Back to Home' : buttonLabel[errorType]), React.createElement(StyledErrorCode, {
    scale: "small"
  }, errorCodeLabel[errorType])))));
};
export default ErrorPage;
export * from './ErrorPage.interface';
//# sourceMappingURL=index.js.map