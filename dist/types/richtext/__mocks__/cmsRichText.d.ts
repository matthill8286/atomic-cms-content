export namespace rawMockBulletedListWithChildren {
    export const children: ({
        type: string;
        children: {
            text: string;
        }[];
    } | {
        type: string;
        children: {
            type: string;
            children: {
                type: string;
                children: {
                    text: string;
                }[];
            }[];
        }[];
    })[];
}
export namespace mockRawWithBoldAndUnderline {
    export namespace raw {
        const children_1: ({
            type: string;
            children: ({
                text: string;
                bold?: undefined;
                underline?: undefined;
            } | {
                bold: boolean;
                text: string;
                underline?: undefined;
            } | {
                text: string;
                underline: boolean;
                bold?: undefined;
            })[];
        } | {
            type: string;
            children: {
                type: string;
                children: {
                    type: string;
                    children: {
                        text: string;
                    }[];
                }[];
            }[];
        })[];
        export { children_1 as children };
    }
}
export namespace rawMockWithHeadingsCodeQuotesAssetIframes {
    export namespace raw_1 {
        const children_2: ({
            type: string;
            children: ({
                code: boolean;
                text: string;
                id?: undefined;
                href?: undefined;
                type?: undefined;
                title?: undefined;
                children?: undefined;
                className?: undefined;
                openInNewTab?: undefined;
            } | {
                id: string;
                href: string;
                type: string;
                title: string;
                children: {
                    text: string;
                }[];
                className: string;
                openInNewTab: boolean;
                code?: undefined;
                text?: undefined;
            } | {
                text: string;
                code?: undefined;
                id?: undefined;
                href?: undefined;
                type?: undefined;
                title?: undefined;
                children?: undefined;
                className?: undefined;
                openInNewTab?: undefined;
            })[];
            url?: undefined;
            src?: undefined;
            title?: undefined;
            width?: undefined;
            handle?: undefined;
            height?: undefined;
            mimeType?: undefined;
        } | {
            url: string;
            type: string;
            children: {
                text: string;
            }[];
            src?: undefined;
            title?: undefined;
            width?: undefined;
            handle?: undefined;
            height?: undefined;
            mimeType?: undefined;
        } | {
            src: string;
            type: string;
            title: string;
            width: number;
            handle: string;
            height: number;
            children: {
                text: string;
            }[];
            mimeType: string;
            url?: undefined;
        })[];
        export { children_2 as children };
    }
    export { raw_1 as raw };
}
export namespace fullResponse {
    export namespace heading {
        export namespace raw_2 {
            const children_3: ({
                type: string;
                children: {
                    text: string;
                }[];
            } | {
                type: string;
                children: {
                    type: string;
                    children: {
                        type: string;
                        children: {
                            text: string;
                        }[];
                    }[];
                }[];
            })[];
            export { children_3 as children };
        }
        export { raw_2 as raw };
    }
}
export namespace embeddedMedia {
    export const id: string;
    export const __typename: string;
    export namespace mediaEmbed {
        export namespace raw_3 {
            const children_4: ({
                type: string;
                children: {
                    text: string;
                }[];
                url?: undefined;
            } | {
                url: string;
                type: string;
                children: {
                    text: string;
                }[];
            })[];
            export { children_4 as children };
        }
        export { raw_3 as raw };
    }
}
//# sourceMappingURL=cmsRichText.d.ts.map