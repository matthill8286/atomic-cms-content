import React from 'react';
import { CallToActionWithPlaylist } from "../../combinations";
import { Page } from "../../components";
export var EventsPageWrapper = function EventsPageWrapper(props) {
  return React.createElement(Page, {
    landingPageContent: props.landingPageContent,
    PageContent: CallToActionWithPlaylist,
    overridePlaylistClickEvent: true,
    withPageHead: true,
    dataTestId: "events-static-playlist",
    generator: "EVENT_DETAILS"
  });
};
export default EventsPageWrapper;
//# sourceMappingURL=index.js.map