declare const mockAsset: {
    __typename: string;
    id: number;
    image: string;
    niceName: string;
    url: string;
    title: string;
    duration: string;
    language: string;
    partOfSession: string;
    provider: {
        __typename: string;
        id: number;
        name: string;
        logoUrl: string;
    };
    interaction: {
        __typename: string;
        launched: boolean;
        bookmarked: boolean;
    };
    type: {
        __typename: string;
        id: number;
        name: string;
    };
    timebox: {
        __typename: string;
        start: string;
        end: string;
    };
    competencies: {
        __typename: string;
        id: number;
        text: string;
    }[];
    author: string;
    description: string;
    embedVideoURL: string;
    sponsored: boolean;
};
declare const mockAssets: {
    __typename: string;
    id: number;
    image: string;
    niceName: string;
    url: string;
    title: string;
    duration: string;
    language: string;
    partOfSession: string;
    provider: {
        __typename: string;
        id: number;
        name: string;
        logoUrl: string;
    };
    interaction: {
        __typename: string;
        launched: boolean;
        bookmarked: boolean;
    };
    type: {
        __typename: string;
        id: number;
        name: string;
    };
    timebox: {
        __typename: string;
        start: string;
        end: string;
    };
    competencies: {
        __typename: string;
        id: number;
        text: string;
    }[];
    author: string;
    description: string;
    embedVideoURL: string;
    sponsored: boolean;
}[];
declare const graphQlResponse: {
    data: {
        pageContent: {
            id: string;
            name: string;
            type: string;
            __typename: string;
            slices: ({
                id: string;
                stage: string;
                updatedAt: string;
                name: string;
                __typename: string;
                type: string;
                pageComponents: {
                    __typename: string;
                    id: string;
                    heroImages: {
                        id: string;
                        url: string;
                        __typename: string;
                    }[];
                    image: null;
                    primaryLabel: string;
                    secondaryLabel: string;
                    entryId?: undefined;
                    title?: undefined;
                    rightOrientation?: undefined;
                    heading?: undefined;
                    description?: undefined;
                    name?: undefined;
                    staticPlaylists?: undefined;
                };
            } | {
                id: string;
                stage: string;
                updatedAt: string;
                name: string;
                __typename: string;
                type: string;
                pageComponents: {
                    __typename: string;
                    entryId: string;
                    title: string;
                    rightOrientation: boolean;
                    image: {
                        url: string;
                        __typename: string;
                    };
                    heading: string;
                    description: string;
                    id?: undefined;
                    heroImages?: undefined;
                    primaryLabel?: undefined;
                    secondaryLabel?: undefined;
                    name?: undefined;
                    staticPlaylists?: undefined;
                };
            } | {
                id: string;
                stage: string;
                updatedAt: string;
                name: string;
                __typename: string;
                type: string;
                pageComponents: {
                    __typename: string;
                    id: string;
                    name: string;
                    staticPlaylists: {
                        size: number;
                        staticAssetTiles: ({
                            description: string;
                            id: number;
                            type: string;
                            duration: string;
                            provider: string;
                            competency: string;
                            image: {
                                url: string;
                                __typename: string;
                            };
                            __typename: string;
                        } | {
                            description: string;
                            id: number;
                            type: string;
                            duration: string;
                            provider: string;
                            competency: string;
                            image: null;
                            __typename: string;
                        })[];
                        __typename: string;
                    }[];
                    heroImages?: undefined;
                    image?: undefined;
                    primaryLabel?: undefined;
                    secondaryLabel?: undefined;
                    entryId?: undefined;
                    title?: undefined;
                    rightOrientation?: undefined;
                    heading?: undefined;
                    description?: undefined;
                };
            })[];
        };
    };
};
declare const staticPlaylist: {
    id: string;
    stage: string;
    updatedAt: string;
    name: string;
    __typename: string;
    type: string;
    pageComponents: {
        __typename: string;
        id: string;
        name: string;
        staticPlaylists: {
            size: number;
            staticAssetTiles: ({
                description: string;
                id: number;
                type: string;
                duration: string;
                provider: string;
                competency: string;
                image: {
                    url: string;
                    __typename: string;
                };
                __typename: string;
            } | {
                description: string;
                id: number;
                type: string;
                duration: string;
                provider: string;
                competency: string;
                image: null;
                __typename: string;
            })[];
            __typename: string;
        }[];
    };
};
//# sourceMappingURL=index.d.ts.map