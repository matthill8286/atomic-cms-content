import { RichTextBlock } from '../../types/richtext';
export declare type RichTextRawDocument = {
    raw: RichTextBlock;
};
declare type ImageUrl = {
    url: string;
    altText?: string;
};
export interface ProfileSectionProps {
    profileAvatar?: ImageUrl;
    profileInformation?: RichTextRawDocument;
}
export interface ProfileSectionsProps {
    profileSections?: ProfileSectionProps[];
    title?: string;
    label?: string;
    sectionColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
}
export {};
//# sourceMappingURL=ProfileTileColumns.interface.d.ts.map