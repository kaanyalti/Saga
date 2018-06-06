import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Reactions from "../../modules/getVideoDataMethods";

// Reactions.retrieveVideoData(videoID)

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  // const video = videoIDs.get(props.match.params.video_id);
  render() {
    const video = "";
    if (!video) {
      return <div>Sorry, the video was not found</div>;
    } else {
      return (
        <div>
          <h1>Individual video page</h1>
          <h2>{video.title}</h2>
          <Link to="/videos">Back</Link>
        </div>
      );
    }
  }
}

export default VideoDetail;
