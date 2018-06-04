import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import videoIDs from "../../fakeYouTubeRes.js";
import ZiggeoRecorder from "./ZiggeoRecorder"

// The VideoList component matches one of two different routes
// depending on the full pathname

const PublicVideo = props => {
  const video = videoIDs.get(props.match.params.video_id);

    return (
      <ZiggeoRecorder />
    );
}

export default PublicVideo;
