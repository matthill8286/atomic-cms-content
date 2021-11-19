import { Component, ErrorInfo } from 'react';
import { ErrorProps, ErrorState } from './ErrorBoundary.interface';
declare class ErrorBoundary extends Component<ErrorProps, ErrorState> {
    constructor(props: ErrorProps);
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): {};
}
export { ErrorBoundary };
//# sourceMappingURL=index.d.ts.map