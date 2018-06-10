import React from "react";
import { Link } from "react-router-dom";
// import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  ListStyle = {
    backgroundCollor: "#D7ECEF",
    position: "absolute",
    top: "15%",
    left: "30%"
  };

  CheatStyle = {
    backgroundColor: "white",
    zIndex: "5",
    top: "0",
    position: "fixed",
    width: "100%",
    left: "30%",
    height: "10%"
  };

  LinkStyle = {
    fontSize: "1.5em",
    textAlign: "center",
    display: "block",
    color: "white",
    fontSize: "1.5em",
    background: "#00dfff",
    width: "100%",
    height: "45px",
    lineHeight: "2",
    marginBottom: "20px"
  };

  VideoStyle = {
    width: "100%",
    height: "20%",
    verticalAlign: "middle",
    background: "black",
    padding: "12px",
    border: "0"
  };

  BulletStyle = {
    listStyle: "none"
  };

  render() {
    return (
      <div style={this.ListStyle} className="video-list">
        <ul style={this.BulletStyle}>
          {this.props.videoData.map(video => (
            <li key={video.id}>
              <iframe
                title={video.title}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={this.VideoStyle}
              />
              <Link to={`/admin/videos/${video.id}`} style={this.LinkStyle}>
                {video.title}
              </Link>
              <div className="chart"> hold mini chart here </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default VideoList;
