import * as React from 'react';
import { NamedExoticComponent } from 'react';
import { AppMetaProps } from '../AppMeta';
export declare type PageConfigType = {
    landingPageContent: any;
    metaProps?: AppMetaProps;
};
export declare type PageComponents = {
    pageHead: JSX.Element | React.ReactElement | undefined;
    pageContent: JSX.Element | React.ReactElement | undefined;
};
export declare type PageContent<T> = NamedExoticComponent<T> | JSX.Element | React.ReactElement | undefined;
export interface PageTemplateProps {
    metaProps?: AppMetaProps;
    key?: string;
    PageContent: PageContent<any>;
    withPageHead: boolean;
    generator?: string;
    landingPageContent: any;
    overridePlaylistClickEvent: boolean;
    errorPage?: any;
}
//# sourceMappingURL=Page.interface.d.ts.map