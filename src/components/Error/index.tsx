import React, { FC, useEffect } from 'react'
import { Button, Heading, Grid, Cell, Row } from '@matthill8286/atomic-ui'
import { useLocation } from 'react-router-dom'
import {
  StyledErrorPageContainer,
  StyledErrorCopyText,
  StyledErrorHeadingWrapper,
  StyledErrorImage,
  StyledErrorCode,
} from './ErrorPage.styled'
import { ErrorPageProps, ErrorPageType } from './ErrorPage.interface'
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer'

export const IS_BROWSER = typeof window !== 'undefined'

export const ErrorPage: FC<ErrorPageProps> = ({
  errorType = ErrorPageType.TECHNICAL_ERROR,
  errorMessage,
}): JSX.Element => {
  const location = useLocation()
  const isOffline = IS_BROWSER && navigator?.onLine === false

  if (isOffline) {
    errorType = ErrorPageType.OFFLINE_ERROR
  }

  const isRedirected = location.pathname.includes('/error/500')

  useEffect(() => {
    if (isOffline) {
      window.addEventListener(
        'online',
        function() {
          window.location.reload()
        },
        false
      )
    }
  })

  interface ErrorMap {
    [key: string]: string | JSX.Element | undefined
  }

  const errorHeadline: ErrorMap = {
    [ErrorPageType.NOT_FOUND]: 'Not found',
    [ErrorPageType.TECHNICAL_ERROR]: 'Something went wrong',
    [ErrorPageType.OFFLINE_ERROR]: 'You are Offline',
  }

  const errorSubLabel: ErrorMap = {
    [ErrorPageType.NOT_FOUND]: 'This page has either been removed or is broken',
    [ErrorPageType.TECHNICAL_ERROR]: 'We are currently experiencing technical issues',
    [ErrorPageType.OFFLINE_ERROR]: 'Please connect to the internet',
  }

  const errorCodeLabel: ErrorMap = {
    [ErrorPageType.NOT_FOUND]: 'Error 404',
    [ErrorPageType.TECHNICAL_ERROR]: 'Error 500',
    [ErrorPageType.OFFLINE_ERROR]: 'Offline',
  }

  const buttonLabel: ErrorMap = {
    [ErrorPageType.NOT_FOUND]: 'Dashboard',
    [ErrorPageType.TECHNICAL_ERROR]: 'Reload',
    [ErrorPageType.OFFLINE_ERROR]: 'Offline Reload',
  }

  const svgImage: ErrorMap = {
    [ErrorPageType.NOT_FOUND]: null,
    [ErrorPageType.TECHNICAL_ERROR]: null,
    [ErrorPageType.OFFLINE_ERROR]: null,
  }

  const isTechnicalError = errorType === ErrorPageType.TECHNICAL_ERROR

  let buttonProps = {}
  if (errorType === ErrorPageType.NOT_FOUND || isRedirected) {
    buttonProps = {
      to: '/',
    }
  } else if (isTechnicalError) {
    buttonProps = {
      onClick: (event: any) => {
        event.preventDefault()
        window.location.reload()
      },
    }
  }

  const testLabels = {
    image: `error-page-image-${errorType}`,
    text: `error-page-text-${errorType}`,
  }

  const componentHeadings = (
    <>
      <StyledErrorHeadingWrapper>
        <Heading scale="level-2">{errorHeadline[errorType]}</Heading>
      </StyledErrorHeadingWrapper>
      <StyledErrorCopyText fontSize="sm" data-test={testLabels.text}>
        {errorSubLabel[errorType]}
      </StyledErrorCopyText>
    </>
  )

  return (
    <Grid>
      <Row>
        <Cell columns={12}>
          <StyledErrorPageContainer>
            <StyledErrorImage
              marginLeft={
                errorType === ErrorPageType.TECHNICAL_ERROR ||
                errorType === ErrorPageType.OFFLINE_ERROR
              }
              data-test={testLabels.image}>
              {svgImage[errorType]}
            </StyledErrorImage>
            {errorMessage?.message ? (
              <StyledErrorHeadingWrapper data-test={testLabels.text}>
                {Serializer(
                  errorMessage?.message,
                  // @ts-ignore
                  ConfigurableGraphCmsHtmlSerializer({})
                )}
              </StyledErrorHeadingWrapper>
            ) : (
              componentHeadings
            )}
            <Button size="lg" actionType="secondary" {...buttonProps}>
              {isRedirected ? 'Back to Home' : buttonLabel[errorType]}
            </Button>
            <StyledErrorCode scale="small">{errorCodeLabel[errorType]}</StyledErrorCode>
          </StyledErrorPageContainer>
        </Cell>
      </Row>
    </Grid>
  )
}

export default ErrorPage
export * from './ErrorPage.interface'
