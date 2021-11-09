import { RichTextBlock } from '../../types';
export declare type Raw = {
    raw: RichTextBlock;
};
declare type ImageUrl = {
    url: string;
    altText?: string;
};
export interface ProfileSectionProps {
    profileAvatar?: ImageUrl;
    profileInformation?: Raw;
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