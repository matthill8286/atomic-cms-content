import {Padding, SectionProps} from '@matthill8286/atomic-ui';

export type CustomSectionProps = {
  children: React.ReactNode;
  id?: string | null;
  overrideOver?: boolean;
  padding?: Padding;
} & Partial<SectionProps>;
