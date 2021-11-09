function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useState } from 'react';
import { useParams, useHistory, matchPath, useLocation } from 'react-router-dom';
import { useStaticInstanceConnectionQuery } from '@lxp/webmobile-cms-graphql';
import { useSelector } from 'react-redux';
import { ErrorPage, ErrorPageType } from "./Error";
import { useRenderMeasure, useDidMount } from "../hooks";
import { reactiveFooter, logoVar } from "../cache/cache";
import { getRoutesPaths } from "../routes/routes.paths";
import { SET_HEADER_ID, useAppWrapperDispatch } from "./AppWrapper/AppWrapper.context";
import { StaticSlicesRoutes } from '#/src/staticPages/routes/staticSlicesRoutes';
import { LandingPageWrapper } from "./LandingPageWrapper";
import { useHost } from "../helpers/getHostInstance";
import { isStaticRoute } from "../routes/helpers";
import { GenericLoadingScreen } from "./GenericLoadingScreen";
import { getStateUser } from "../store/User/user.selectors";
export var StaticInstanceParent = function StaticInstanceParent(_ref) {
  var _matchPath, _staticInstance$insta, _staticInstance$insta2, _staticInstance$insta3, _slice$header2, _slice$logo2;

  var route = _ref.route,
      props = _objectWithoutProperties(_ref, ["route"]);

  useRenderMeasure(route.name);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      staticInstance = _useState2[0],
      setStaticInstance = _useState2[1];

  var paths = getRoutesPaths();
  var didMount = useDidMount();

  var _useSelector = useSelector(getStateUser),
      user = _useSelector.user;

  var params = useParams();
  var contextDispatch = useAppWrapperDispatch();
  var history = useHistory();
  var location = useLocation();
  var environmentHost = useHost();
  var landingPages = isStaticRoute(location);

  var _useStaticInstanceCon = useStaticInstanceConnectionQuery({
    skip: !environmentHost || !landingPages,
    variables: {
      first: 1,
      where: {
        host: environmentHost
      }
    },
    context: {
      clientName: 'graphcms'
    }
  }),
      data = _useStaticInstanceCon.data,
      staticLoading = _useStaticInstanceCon.loading,
      staticError = _useStaticInstanceCon.error;

  var staticHomeRoute = (_matchPath = matchPath(location.pathname, StaticSlicesRoutes.HOME.path)) === null || _matchPath === void 0 ? void 0 : _matchPath.isExact;
  useEffect(function () {
    if (user !== null && user !== void 0 && user.loggedIn && staticHomeRoute) {
      history.push({
        pathname: paths.Dashboard
      });
    }
  }, [user === null || user === void 0 ? void 0 : user.loggedIn]);
  useEffect(function () {
    if (data !== null && data !== void 0 && data.instance && !staticLoading) {
      setStaticInstance(data);
    }
  }, [data === null || data === void 0 ? void 0 : data.instance, staticLoading]);
  var slice = staticInstance === null || staticInstance === void 0 ? void 0 : (_staticInstance$insta = staticInstance.instance) === null || _staticInstance$insta === void 0 ? void 0 : (_staticInstance$insta2 = _staticInstance$insta.edges) === null || _staticInstance$insta2 === void 0 ? void 0 : (_staticInstance$insta3 = _staticInstance$insta2[0]) === null || _staticInstance$insta3 === void 0 ? void 0 : _staticInstance$insta3.node;
  useEffect(function () {
    var _slice$header;

    contextDispatch({
      type: SET_HEADER_ID,
      headerId: slice === null || slice === void 0 ? void 0 : (_slice$header = slice.header) === null || _slice$header === void 0 ? void 0 : _slice$header.id
    });
  }, [slice === null || slice === void 0 ? void 0 : (_slice$header2 = slice.header) === null || _slice$header2 === void 0 ? void 0 : _slice$header2.id]);
  useEffect(function () {
    var _slice$logo;

    if (didMount && slice !== null && slice !== void 0 && slice.footer && slice !== null && slice !== void 0 && (_slice$logo = slice.logo) !== null && _slice$logo !== void 0 && _slice$logo.url) {
      reactiveFooter(_objectSpread({}, slice.footer));
      logoVar({
        url: slice.logo.url
      });
    }
  }, [didMount, slice === null || slice === void 0 ? void 0 : slice.footer, slice === null || slice === void 0 ? void 0 : (_slice$logo2 = slice.logo) === null || _slice$logo2 === void 0 ? void 0 : _slice$logo2.url]);

  if (staticLoading && !data || staticLoading && !(staticInstance !== null && staticInstance !== void 0 && staticInstance.instance)) {
    return React.createElement(GenericLoadingScreen, null);
  }

  if (staticError && !staticLoading) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.TECHNICAL_ERROR
    });
  }

  var pageSlices = _toConsumableArray((slice === null || slice === void 0 ? void 0 : slice.staticPages) || []);

  var paramsWithoutSearch = params !== null && params !== void 0 && params.details ? params === null || params === void 0 ? void 0 : params.details.toString().replace(window.location.search, '') : null;

  var matchByType = function matchByType(type) {
    return type.type === route.name;
  };

  var matchByParams = function matchByParams(slice) {
    return slice.routeContext === paramsWithoutSearch;
  };

  var reducePageSlicesToMatchRoute = params !== null && params !== void 0 && params.details ? pageSlices.filter(matchByParams) : pageSlices.filter(matchByType);
  var pageEntryId = reducePageSlicesToMatchRoute[0];

  if (!(pageEntryId !== null && pageEntryId !== void 0 && pageEntryId.entryId) && !staticLoading && staticInstance) {
    return React.createElement(ErrorPage, {
      errorType: ErrorPageType.NOT_FOUND
    });
  }

  return React.createElement(LandingPageWrapper, _extends({
    pageTheme: "Filtered",
    landingPageId: pageEntryId === null || pageEntryId === void 0 ? void 0 : pageEntryId.entryId
  }, reducePageSlicesToMatchRoute, props));
};
export default StaticInstanceParent;
//# sourceMappingURL=StaticInstanceParent.js.map