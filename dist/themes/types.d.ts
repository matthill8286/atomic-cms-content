import { Color, Theme } from '@matthill8286/atomic-ui';
export declare type ExtendedThemeColor = Color & {
    transparent: string;
    contrastColor?: string;
};
export declare type ExtendedThemeColorType = keyof ExtendedThemeColor;
export declare type ExtendedThemeType = Partial<Theme> & {
    color: ExtendedThemeColor;
    extended: {
        pageHead: {
            textColorWithImage: ExtendedThemeColorType;
            textColorWithoutImage: ExtendedThemeColorType;
        };
        content: {
            textColor: ExtendedThemeColorType;
            backgroundColor: ExtendedThemeColorType;
            borderColor?: ExtendedThemeColorType;
        };
        endOfPage: {
            textColor: ExtendedThemeColorType;
            backgroundColor: ExtendedThemeColorType;
        };
    };
};
//# sourceMappingURL=types.d.ts.map