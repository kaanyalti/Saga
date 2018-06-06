import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    const ListStyle = {
      backgroundCollor: "#D7ECEF",
      margin: "auto",
      position: "absolute",
      top: "10%",
      left: "30%"
    };

    const CheatStyle = {
      backgroundColor: "white",
      zIndex: "5",
      top: "0",
      position: "fixed",
      width: "100%",
      left: "30%",
      height: "10%"
    };

    const LinkStyle = {
      padding: "0 10px",
      fontSize: "1.5em",
      textAlign: "center",
      display: "block",
      color: "white",
      fontSize: "1.5em",
      background: "#00dfff",
      width: "100%",
      height: "45px",
      marginBottom: "10px",
      lineHeight: "2"
    };

    const VideoStyle = {
      width: "100%",
      height: "20%",
      verticalAlign: "middle",
      background: "black",
      padding: "12px",
      border: "0"
    };

    const BulletStyle = {
      listStyle: "none"
    };
  }

  render() {
    return (
      <div style={this.ListStyle} className="video-list">
        <div id="cheat" style={this.CheatStyle} />
        <Row>
          <Col>
            <ul style={this.BulletStyle}>
              {this.props.videoData.map(video => (
                <li key={video.id}>
                  <iframe
                    title={video.title}
                    width="15%"
                    height="15%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={this.VideoStyle}
                  />
                  <Link to={`/admin/videos/${video.id}`} style={this.LinkStyle}>
                    {video.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default VideoList;
