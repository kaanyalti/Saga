import React from "react";
import { Link } from "react-router-dom";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = videoIDs.get(props.match.params.video_id);

    if (!video) {
      return (<div>Sorry, the video was not found</div>);
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

export default Video;
