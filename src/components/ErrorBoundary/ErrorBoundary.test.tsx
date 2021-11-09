import { mount, shallow } from 'enzyme'
import * as React from 'react'
import { EmptyProps } from './ErrorBoundary.interface'
import { ErrorBoundary } from './'

jest.mock('react-router', () => ({
  useLocation: () => null,
}))

const ProblemChild: React.FC<EmptyProps> = (): JSX.Element => {
  throw new Error('ProblemChild is throwing things')
}

const WellBehavedChild: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <div className="well-behaved-child">
      <h1 className="well-behaved-child__title">I am well behaved</h1>
    </div>
  )
}

const FallbackContent: React.FC<EmptyProps> = (): JSX.Element => {
  return (
    <div className="fallback-content">
      <h1 className="fallback-content">An error occured</h1>
    </div>
  )
}

describe('<ErrorBoundary />', () => {
  test('Renders without crashing', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <WellBehavedChild />
      </ErrorBoundary>
    )
    expect(wrapper).toHaveLength(1)
  })

  test('Renders children if no error', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <WellBehavedChild />
      </ErrorBoundary>
    )
    expect(wrapper.find(WellBehavedChild)).toHaveLength(1)
    expect(wrapper.find('ErrorBoundary').state('error')).toBe(undefined)
  })

  test('Displays the fallback component upon error if provided', () => {
    const wrapper = mount(
      <ErrorBoundary Fallback={FallbackContent}>
        <ProblemChild />
      </ErrorBoundary>
    )

    expect(wrapper.find(FallbackContent)).toHaveLength(1)
    expect(wrapper.find('ErrorBoundary').state('error')).not.toBe(undefined)
  })
})
