import {GraphCmsHtmlSerializer} from './GraphCmsHtmlSerializer';

export const Serializer = (
  children: any,
  contentfulSerializer: typeof GraphCmsHtmlSerializer = GraphCmsHtmlSerializer
) => {
  return contentfulSerializer(children);
};
