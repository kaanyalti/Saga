import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import videoIDs from "../../fakeYouTubeRes.js";
import ZiggeoRecorder from "./ZiggeoRecorder";
import VideoComponent from "../../CreatorDashboard/VideoOverview/VideoComponent"

// The VideoList component matches one of two different routes
// depending on the full pathname

class PublicVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeVideoID: this.props.match.params.video_id,
      videoState: null
    }
    this.changeVideoState = this.changeVideoState.bind(this);
  }

  // const youtubeVideoID = props.match.params.video_id;
  // console.log(youtubeVideoID);
  // const video = videoIDs.get(props.match.params.video_id);
  changeVideoState(newVideoState) {
    this.setState((newVideoState) => {
      return {videoState: newVideoState};
    });
  }

  render() {
    return (
      <div>
        <VideoComponent  />
        <ZiggeoRecorder handleVideoState={this.changeVideoState} youtubeVideoID={this.state.youtubeVideoID} />;
      </div>
    );
  };
};

export default PublicVideo;
