import React from 'react';
import { RouteComponentProps } from 'react-router';
import { DocumentNode } from '@apollo/client';
export declare type MatchParams = {
    pathname: string;
};
export declare type LandingConnectedPageProps = RouteComponentProps<MatchParams> & {
    landingPageContent: PageConnectorProps;
    pageId?: string;
};
export declare type PageConnectorProps = {
    pageId: string | null;
    getLandingPageQuery: DocumentNode;
    children(props: {
        pageContent: any;
    }): JSX.Element;
};
export declare const LandingPagesConnector: React.FC<PageConnectorProps>;
//# sourceMappingURL=LandingPagesConnector.d.ts.map