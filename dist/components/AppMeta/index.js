function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Helmet } from 'react-helmet';
export * from './AppMeta.interface';
var MAX_LENGTH_OG_DESCRIPTION = 127;
export var AppMeta = function AppMeta(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'homepage' : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$generator = _ref.generator,
      generator = _ref$generator === void 0 ? 'webmobile-landing-pages' : _ref$generator,
      _ref$keywords = _ref.keywords,
      keywords = _ref$keywords === void 0 ? [] : _ref$keywords,
      _ref$canonical = _ref.canonical,
      canonical = _ref$canonical === void 0 ? '' : _ref$canonical,
      _ref$imageUrl = _ref.imageUrl,
      imageUrl = _ref$imageUrl === void 0 ? '' : _ref$imageUrl,
      prev = _ref.prev,
      next = _ref.next,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'webpage' : _ref$type,
      _ref$preconnectLinkLi = _ref.preconnectLinkList,
      preconnectLinkList = _ref$preconnectLinkLi === void 0 ? [] : _ref$preconnectLinkLi,
      _ref$prefetchLinkList = _ref.prefetchLinkList,
      prefetchLinkList = _ref$prefetchLinkList === void 0 ? [] : _ref$prefetchLinkList,
      _ref$additionalMetas = _ref.additionalMetas,
      additionalMetas = _ref$additionalMetas === void 0 ? [] : _ref$additionalMetas,
      _ref$includeProductIn = _ref.includeProductInTitle,
      includeProductInTitle = _ref$includeProductIn === void 0 ? true : _ref$includeProductIn,
      _ref$productName = _ref.productName,
      productName = _ref$productName === void 0 ? '' : _ref$productName,
      children = _ref.children;
  var additionalMeta = additionalMetas.map(function (meta, index) {
    return _objectSpread({
      key: index.toString()
    }, meta);
  });
  var isRobotsInAdditionalMeta = additionalMeta.find(function (item) {
    return item.name === 'robots';
  });
  !isRobotsInAdditionalMeta && additionalMeta.push({
    name: 'robots',
    content: 'follow'
  });
  var titleTemplate = includeProductInTitle ? "%s | ".concat(productName) : '%s';
  var meta = [{
    name: 'description',
    content: description || ''
  }, {
    name: 'keywords',
    content: keywords
  }, {
    name: 'generator',
    content: generator
  }, {
    property: 'og:title',
    content: title
  }, {
    property: 'og:description',
    content: (description || '').slice(0, MAX_LENGTH_OG_DESCRIPTION).trim()
  }, {
    property: 'og:type',
    content: type
  }, {
    property: 'og:image',
    content: imageUrl
  }, {
    property: 'og:site_name',
    content: productName
  }, {
    property: 'og:url',
    content: canonical
  }].concat(_toConsumableArray(additionalMeta));
  var links = [].concat(_toConsumableArray(canonical ? [{
    rel: 'canonical',
    href: canonical
  }] : []), _toConsumableArray(prev ? [{
    rel: 'prev',
    href: prev
  }] : []), _toConsumableArray(next ? [{
    rel: 'next',
    href: next
  }] : []), _toConsumableArray(preconnectLinkList.map(function (link) {
    return {
      rel: 'preconnect',
      href: link
    };
  })), _toConsumableArray(prefetchLinkList.map(function (link) {
    return {
      rel: 'preconnect dns-prefetch',
      href: link
    };
  })));
  return React.createElement(Helmet, {
    titleTemplate: titleTemplate,
    defaultTitle: title,
    htmlAttributes: {
      lang: 'en-GB'
    }
  }, meta.map(function (entry, index) {
    return React.createElement("meta", _extends({
      key: index
    }, entry));
  }), links.map(function (entry, index) {
    return React.createElement("link", _extends({
      key: index
    }, entry));
  }), React.createElement("title", null, title), children);
};
//# sourceMappingURL=index.js.map