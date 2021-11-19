function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { StyledScrollbar } from './ScrollSnapSlider.styled';
export var Scrollbar = function Scrollbar(_ref) {
  var sliderRef = _ref.sliderRef;

  var _React$useState = React.useState('0%'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      handlePositionLeft = _React$useState2[0],
      setHandlePositionLeft = _React$useState2[1];

  var _React$useState3 = React.useState('0%'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      handleWidth = _React$useState4[0],
      setHandleWidth = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isSliderScrollable = _React$useState6[0],
      setIsSliderScrollable = _React$useState6[1];

  var onSliderScroll = React.useCallback(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var _sliderRef$current, _sliderRef$current2, _sliderRef$current3;

    var scrollLeft, scrollWidth, clientWidth, newHandleWidth;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            scrollLeft = (sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.scrollLeft) || 0;
            scrollWidth = (sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current2 = sliderRef.current) === null || _sliderRef$current2 === void 0 ? void 0 : _sliderRef$current2.scrollWidth) || 0;
            setHandlePositionLeft("".concat(100 * (scrollLeft / (scrollWidth || 1)), "%"));
            clientWidth = (sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current3 = sliderRef.current) === null || _sliderRef$current3 === void 0 ? void 0 : _sliderRef$current3.clientWidth) || 0;
            newHandleWidth = "".concat(100 * (clientWidth / (scrollWidth || 1)), "%");
            setHandleWidth(function (current) {
              return newHandleWidth !== current ? newHandleWidth : current;
            });
            setIsSliderScrollable(function (current) {
              if (scrollWidth > clientWidth + 1) {
                if (!current) return true;
              } else if (current) {
                return false;
              }

              return current;
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [sliderRef]);
  React.useEffect(function () {
    var _sliderRef$current4, _sliderRef$current5;

    sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current4 = sliderRef.current) === null || _sliderRef$current4 === void 0 ? void 0 : _sliderRef$current4.removeEventListener('scroll', onSliderScroll);
    sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current5 = sliderRef.current) === null || _sliderRef$current5 === void 0 ? void 0 : _sliderRef$current5.addEventListener('scroll', onSliderScroll);
    onSliderScroll();
    return function () {
      var _sliderRef$current6;

      return sliderRef === null || sliderRef === void 0 ? void 0 : (_sliderRef$current6 = sliderRef.current) === null || _sliderRef$current6 === void 0 ? void 0 : _sliderRef$current6.removeEventListener('scroll', onSliderScroll);
    };
  }, [onSliderScroll, sliderRef]);
  if (!isSliderScrollable) return null;
  return React.createElement(StyledScrollbar, {
    isSliderScrollable: isSliderScrollable
  }, React.createElement("span", {
    style: {
      left: handlePositionLeft,
      width: handleWidth
    }
  }));
};
//# sourceMappingURL=Scrollbar.js.map