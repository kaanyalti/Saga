import React from "react";
import { Link } from "react-router-dom";
// import videoIDs from "../../fakeYouTubeRes.js";
import VideoComponent from './VideoComponent'

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.videoData.map(video => (
            <li key={video.id}>
              <Link to={`/admin/videos/${video.id}`}>{video.title}</Link>
              <iframe
                title={video.title}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </li>
          ))}
          <VideoComponent videoId = {"TKMj7eZ_rD0"}/>
        </ul>
      </div>
    );
  }
}

export default VideoList;
