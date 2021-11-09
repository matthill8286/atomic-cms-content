import { cloneElement, isValidElement } from 'react';
export function appendKeyToValidElement(element, key) {
  if (isValidElement(element) && element.key === null) {
    return cloneElement(element, {
      key: key
    });
  }

  return element;
}
//# sourceMappingURL=appendKeyToValidElement.js.map