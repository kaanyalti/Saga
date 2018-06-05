import React from "react";
import { Link } from "react-router-dom";
import videoIDs from "../../fakeYouTubeRes.js";
import {Jumbotron, Grid, Row, Col} from "react-bootstrap"


const ListStyle = {
  backgroundCollor: "#D7ECEF",
  margin: "auto",
  position: "absolute",
  left: "40%"
};

const CheatStyle = {
  backgroundColor: "white",
  zIndex: "5",
  top: "0",
  position: "fixed",
  width: "100%",
  left: "30%",
  height: "10%"
}

const LinkStyle = {
  padding: "10px 0",
  fontSize: "1.5em",
  textAlign: "start",
  display: "block",
  color: "#8d848"
};

const AdminMain = () => (
  <div style = {ListStyle} className = "video-list">
    <div id="cheat" style={CheatStyle}></div>
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <ul>
            {videoIDs.all().map(video => (
              <li key = {video.id}>
                <iframe
                  title = {video.title}
                  width = "15%"
                  height = "15%"
                  src = {`https://www.youtube.com/embed/${video.id}`}
                  frameBorder = "0"
                  allow = "autoplay; encrypted-media"
                  allowFullScreen
                 />
                <Link to = {`/admin/videos/${video.id}`} style = {LinkStyle}>{video.title}</Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} md={4}>
            <ul>
              <li>
                include in loop for matching details
              </li>
            </ul>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default AdminMain;
