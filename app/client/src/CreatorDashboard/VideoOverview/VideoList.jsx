import React from "react";
import { Link } from "react-router-dom";
import videoIDs from "../../fakeYouTubeRes.js";

const ListStyle = {
  backgroundCollor: "#D7ECEF",
  margin: "auto",
  position: "absolute",
  left: "40%",
};

const SingleStyle = {
  margin: "auto",
  padding: "10px"
};

  

const AdminMain = () => (
  <div style = {ListStyle} className = "video-list">
    <ul>
      {videoIDs.all().map(video => (
        <li key = {video.id} style = {SingleStyle}>
          <Link to = {`/admin/videos/${video.id}`} style = {SingleStyle}>{video.title}</Link>
          <iframe
            title = {video.title}
            width = "15%"
            height = "15%"
            src = {`https://www.youtube.com/embed/${video.id}`}
            frameBorder = "0"
            allow = "autoplay; encrypted-media"
            allowFullScreen
          />
        </li>
      ))}
    </ul>
  </div>
);

export default AdminMain;
