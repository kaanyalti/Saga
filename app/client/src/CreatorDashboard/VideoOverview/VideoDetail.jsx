import React from "react";
import { Link } from "react-router-dom";

const Video = props => {
  const video = videoIDs.get(props.match.params.video_id);
  if (!video) {
    return <div>Sorry, the video was not found</div>;
  }
  return (
    <div>
      <h1>Individual video page</h1>
      <h2>{video.title}</h2>
      <Link to="/videos">Back</Link>
    </div>
  );
};

export default Video;
