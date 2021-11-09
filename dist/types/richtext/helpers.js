import { INLINES, BLOCKS } from "../index";
export function isInline(node) {
  return Object.values(INLINES).includes(node);
}
export function isMark(node) {
  var keysOf = Object.keys(node);
  var valuesOf = Object.values(INLINES);
  var intersection = keysOf.filter(function (element) {
    return valuesOf.includes(element);
  });
  return intersection.length >= 0;
}
export function isBlock(node) {
  return Object.values(BLOCKS).includes(node.type);
}
export function isText(node) {
  return node.type === 'text';
}
export function hasValue(node) {
  return node.text !== undefined || typeof node.text === 'string';
}
//# sourceMappingURL=helpers.js.map