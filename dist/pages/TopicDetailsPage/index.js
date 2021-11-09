import React from 'react';
import { Page } from "../../components";
import { CallToActionWithPlaylist } from "../../combinations";
export var TopicDetailsPageWrapper = function TopicDetailsPageWrapper(props) {
  return React.createElement(Page, {
    landingPageContent: props.landingPageContent,
    PageContent: CallToActionWithPlaylist,
    overridePlaylistClickEvent: false,
    withPageHead: true,
    dataTestId: "topics-static-playlist",
    generator: "TOPICS"
  });
};
export default TopicDetailsPageWrapper;
//# sourceMappingURL=index.js.map