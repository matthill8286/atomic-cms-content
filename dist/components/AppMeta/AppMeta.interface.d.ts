export interface AdditionalMeta {
    name?: string;
    content?: string | string[];
    property?: string;
    [key: string]: string | string[] | undefined;
}
export interface AppMetaProps {
    title?: string | null;
    key?: string | null;
    description?: string | null;
    generator?: string;
    keywords?: string | string[] | undefined;
    canonical?: string;
    imageUrl?: string;
    prev?: string;
    next?: string;
    type?: string;
    fontList?: string[];
    preconnectLinkList?: string[];
    prefetchLinkList?: string[];
    additionalMetas?: AdditionalMeta[];
    includeProductInTitle?: boolean;
    productName?: string;
}
//# sourceMappingURL=AppMeta.interface.d.ts.map