export interface ErrorPageProps {
    errorType?: ErrorPageType | any;
    errorMessage?: {
        message: string;
    };
    product?: 'Atomic' | 'Landing';
}
export declare enum ErrorPageType {
    TECHNICAL_ERROR = "technical-error",
    NOT_FOUND = "not-found",
    OFFLINE_ERROR = "offline-error"
}
//# sourceMappingURL=ErrorPage.interface.d.ts.map