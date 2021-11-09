import * as React from 'react';
import { ThemeColors } from '@matthill8286/atomic-ui';
import { ExtendedThemeColorType } from '../../themes';
import { Raw } from '../../types/richtext/graphcms-richtext';
export declare enum AccordionSchemaType {
    None = "none",
    Faq = "FAQPage"
}
export declare type AccordionSectionFieldType = {
    entryHeadline: Raw | null;
    entryContent: Raw | null;
    anchorId?: string | null;
};
export interface AccordionEntryObject {
    details: React.ReactNode;
    title: React.ReactNode;
}
export declare type AccordionSectionProps = {
    entries?: AccordionSectionFieldType[];
    sectionColor?: ExtendedThemeColorType;
    textColor?: ThemeColors;
    customAccordionEntries?: AccordionEntryObject[];
    schemaType?: AccordionSchemaType;
    withIconsOnRight?: boolean;
    isLarge?: boolean;
};
export declare type AccordionSectionHeadline = {
    type: string;
    children: [{
        text: string;
    }];
};
export declare type StyledAccordionWrapperProps = {
    textColor?: ExtendedThemeColorType;
};
//# sourceMappingURL=AccordionSection.types.d.ts.map