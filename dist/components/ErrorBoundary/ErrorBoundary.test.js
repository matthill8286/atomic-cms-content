import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { ErrorBoundary } from './';
jest.mock('react-router', function () {
  return {
    useLocation: function useLocation() {
      return null;
    }
  };
});

var ProblemChild = function ProblemChild() {
  throw new Error('ProblemChild is throwing things');
};

var WellBehavedChild = function WellBehavedChild() {
  return React.createElement("div", {
    className: "well-behaved-child"
  }, React.createElement("h1", {
    className: "well-behaved-child__title"
  }, "I am well behaved"));
};

var FallbackContent = function FallbackContent() {
  return React.createElement("div", {
    className: "fallback-content"
  }, React.createElement("h1", {
    className: "fallback-content"
  }, "An error occured"));
};

describe('<ErrorBoundary />', function () {
  test('Renders without crashing', function () {
    var wrapper = shallow(React.createElement(ErrorBoundary, null, React.createElement(WellBehavedChild, null)));
    expect(wrapper).toHaveLength(1);
  });
  test('Renders children if no error', function () {
    var wrapper = mount(React.createElement(ErrorBoundary, null, React.createElement(WellBehavedChild, null)));
    expect(wrapper.find(WellBehavedChild)).toHaveLength(1);
    expect(wrapper.find('ErrorBoundary').state('error')).toBe(undefined);
  });
  test('Displays the fallback component upon error if provided', function () {
    var wrapper = mount(React.createElement(ErrorBoundary, {
      Fallback: FallbackContent
    }, React.createElement(ProblemChild, null)));
    expect(wrapper.find(FallbackContent)).toHaveLength(1);
    expect(wrapper.find('ErrorBoundary').state('error')).not.toBe(undefined);
  });
});
//# sourceMappingURL=ErrorBoundary.test.js.map