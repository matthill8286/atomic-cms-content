import { GraphCmsHtmlSerializer } from "./GraphCmsHtmlSerializer";
export var Serializer = function Serializer(children) {
  var contentfulSerializer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GraphCmsHtmlSerializer;
  return contentfulSerializer(children);
};
//# sourceMappingURL=HtmlSerializer.js.map