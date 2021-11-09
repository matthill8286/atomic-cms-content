import React from "react";

export interface EmptyProps {}

export interface ErrorState {
  error?: Error;
  errorInfo?: React.ErrorInfo;
  errorTrackingObj?: any
}

export interface ErrorProps {
  children?: React.ReactNode;
  Fallback?: React.ElementType;
  requestedId?: string;
  pageType?: string;
}
