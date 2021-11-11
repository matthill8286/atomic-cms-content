export interface ErrorPageProps {
  errorType?: ErrorPageType | any
  errorMessage?: { message: string }
  product?: 'Atomic' | 'Landing'
}

export enum ErrorPageType {
  TECHNICAL_ERROR = 'technical-error',
  NOT_FOUND = 'not-found',
  OFFLINE_ERROR = 'offline-error',
}
