import { Product } from '@matthill8286/atomic-ui';
export interface ExtendedProduct extends Omit<Product, 'image'> {
    embeddedProduct: boolean;
    competency: string;
    image: {
        url: string;
    };
}
export declare const prepareEntries: (pageComponents: any) => any;
export declare const prepareHeroContentProps: (heroBanner: any, name?: string) => {
    primary: any;
    secondary: any;
    images: {
        xl: any;
        lg: any;
        md: any;
        sm: any;
    };
    heroImages: {
        xl: any;
        lg: any;
        md: any;
        sm: any;
    };
    name: string;
};
export declare const formatToStaticProduct: (products: ExtendedProduct[]) => {
    id: number;
    title: string;
    disabled: boolean;
    niceName: string;
    provider: {
        id: number;
        name: any;
    };
    type: {
        id: number;
        name: string | import("@matthill8286/atomic-ui").ProductType;
    };
    embeddedProduct: boolean;
    duration: string;
    to: string;
    image: string;
    locked: boolean;
    competency: string;
    featureLabel: string;
    eventDate: string;
}[];
//# sourceMappingURL=index.d.ts.map