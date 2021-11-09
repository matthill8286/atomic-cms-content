function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { TopTeaser } from '@matthill8286/atomic-ui';
import { prepareHeroContentProps } from "../../helpers";
export var PageHead = function PageHead(_ref) {
  var slices = _ref.slices;
  return React.createElement(React.Fragment, null, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var pageComponents = _ref2.pageComponents;
    var keyProp = "".concat(pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename, "_").concat(index);

    switch (pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename) {
      case 'HeroBanner':
        var heroProps = pageComponents && prepareHeroContentProps(pageComponents);
        return heroProps && React.createElement(TopTeaser, {
          key: keyProp,
          link: null,
          color: !(heroProps !== null && heroProps !== void 0 && heroProps.heroImages) && 'primary',
          heroImages: heroProps === null || heroProps === void 0 ? void 0 : heroProps.heroImages,
          images: heroProps === null || heroProps === void 0 ? void 0 : heroProps.images,
          height: {
            mobile: 300,
            tablet: 350,
            desktop: 400
          },
          content: _objectSpread({}, heroProps)
        });

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=PageHead.js.map