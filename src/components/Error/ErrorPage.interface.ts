export interface ErrorPageProps {
  errorType?: ErrorPageType | string
  product?: 'Atomic' | 'Landing'
  errorMessage?: string | null | undefined | { message: string }
}

export enum ErrorPageType {
  TECHNICAL_ERROR = 'technical-error',
  NOT_FOUND = 'not-found',
  OFFLINE_ERROR = 'offline-error',
}
