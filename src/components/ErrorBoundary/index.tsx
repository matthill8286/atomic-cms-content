import React, { Component, ErrorInfo } from 'react'
import { ErrorPage as Error, ErrorPageType } from '../Error'
import { ErrorProps, ErrorState } from './ErrorBoundary.interface'

// Error boundaries need to be classes, therefore no FC
class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props)
    this.state = {
      error: undefined,
      errorInfo: undefined,
      errorTrackingObj: undefined,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorTrackingObj = {
      errorTitle: error.message,
      errorCode: 500,
      requestUrl: window.location.pathname,
      requestedId: this.props.requestedId,
      pageType: this.props.pageType,
    }

    this.setState({ error, errorInfo, errorTrackingObj })
  }

  render() {
    const { Fallback } = this.props

    if (this.state.error) {
      if (Fallback) {
        return <Fallback />
      } else {
        return <Error errorType={ErrorPageType.TECHNICAL_ERROR} />
      }
    }

    return this.props.children
  }
}

export { ErrorBoundary }
