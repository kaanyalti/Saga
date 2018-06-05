import React from "react";
import { Link } from "react-router-dom";
// import videoIDs from "../../fakeYouTubeRes.js";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <ul>
        {this.props.videoIDs.map(video => (
          <li key={video.id}>
            <Link to={`/admin/videos/${video.id}`}>{video.id}</Link>
            <iframe
              title={video.id}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </li>
        ))}
      </ul>
    </div>
  );
  }
}

export default VideoList;
