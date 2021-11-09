import {RichTextBlock} from '../../types';

export type Raw = {
  raw: RichTextBlock;
};

type ImageUrl = {
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
