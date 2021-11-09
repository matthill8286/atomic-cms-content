import { Asset } from '@matthill8286/atomic-ui';
export interface ExtendedAsset extends Omit<Asset, 'image'> {
    embeddedAsset: boolean;
    competency: string;
    image: {
        url: string;
    };
}
export declare const prepareEntries: (pageComponents: any) => any;
export declare const prepareHeroContentProps: (heroBanner: any, name?: string | undefined) => {
    primary: any;
    secondary: any;
    images: {
        xl: any;
        lg: any;
        md: any;
        sm: any;
    } | undefined;
    heroImages: {
        xl: any;
        lg: any;
        md: any;
        sm: any;
    } | undefined;
    name: string | undefined;
};
export declare const formatToStaticAsset: (assets: ExtendedAsset[]) => {
    id: any;
    title: any;
    disabled: any;
    niceName: string;
    provider: {
        id: number;
        name: any;
    };
    type: {
        id: number;
        name: any;
    };
    embeddedAsset: boolean;
    duration: any;
    to: any;
    image: string;
    locked: any;
    competency: string;
    featureLabel: any;
    eventDate: any;
}[];
//# sourceMappingURL=index.d.ts.map