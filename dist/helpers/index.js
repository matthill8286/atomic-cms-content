function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var prepareEntries = function prepareEntries(pageComponents) {
  return pageComponents.entries.map(function (_ref) {
    var title = _ref.title,
        description = _ref.description;
    return {
      title: title,
      details: description
    };
  }).map(function (e, i) {
    return i === 0 ? _objectSpread(_objectSpread({}, e), {}, {
      isOpenInitially: true,
      noBorderTop: true
    }) : e;
  });
};
export var prepareHeroContentProps = function prepareHeroContentProps(heroBanner, name) {
  return {
    primary: heroBanner.primaryLabel,
    secondary: heroBanner.secondaryLabel,
    images: heroBanner.image ? {
      xl: heroBanner.image.url,
      lg: heroBanner.image.url,
      md: heroBanner.image.url,
      sm: heroBanner.image.url
    } : undefined,
    heroImages: heroBanner.heroImages ? {
      xl: heroBanner.heroImages[0].url,
      lg: heroBanner.heroImages[0].url,
      md: heroBanner.heroImages[0].url,
      sm: heroBanner.heroImages[0].url
    } : undefined,
    name: name
  };
};

var formatNiceName = function formatNiceName(id, title) {
  return "".concat(id, "-").concat(title.toLowerCase().split(' ').join('-'));
};

export var formatToStaticProduct = function formatToStaticProduct(products) {
  var staticProducts = _toConsumableArray(products || []);

  return staticProducts === null || staticProducts === void 0 ? void 0 : staticProducts.map(function (_ref2) {
    var _ref2$id = _ref2.id,
        id = _ref2$id === void 0 ? 0 : _ref2$id,
        title = _ref2.title,
        provider = _ref2.provider,
        image = _ref2.image,
        locked = _ref2.locked,
        type = _ref2.type,
        __typename = _ref2.__typename,
        duration = _ref2.duration,
        to = _ref2.to,
        _ref2$embeddedProduct = _ref2.embeddedProduct,
        embeddedProduct = _ref2$embeddedProduct === void 0 ? false : _ref2$embeddedProduct,
        competency = _ref2.competency,
        eventDate = _ref2.eventDate,
        featureLabel = _ref2.featureLabel;
    return {
      id: id,
      title: title,
      disabled: locked,
      niceName: formatNiceName(id, title),
      provider: {
        id: 0,
        name: provider
      },
      type: {
        id: 0,
        name: type || __typename
      },
      embeddedProduct: embeddedProduct,
      duration: duration,
      to: to,
      image: image === null || image === void 0 ? void 0 : image.url,
      locked: locked,
      competency: competency,
      featureLabel: featureLabel,
      eventDate: eventDate
    };
  });
};
//# sourceMappingURL=index.js.map