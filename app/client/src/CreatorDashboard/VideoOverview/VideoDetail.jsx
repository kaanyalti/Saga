import React from "react";
import axios from "axios";
import SplineChart from "../VideoAnalytics/SplineChart.jsx";
import DonutChart from "../VideoAnalytics/DonutChart.jsx";
import LoadingAnimation from "../VideoAnalytics/LoadingAnimation.jsx";
// import VideoComponent from "./VideoComponent";
import NotFoundAnimation from "./NotFoundAnimation.jsx";
import Sidebar from "../../components/Layout/Sidebar.jsx";
// import * as Reactions from "../../modules/getVideoDataMethods";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: false
    };
  }
  componentDidMount() {
    const videoID = this.props.match.params.video_id;
    axios
      .get(`/api/videos/${videoID}/reactions`)
      .then(res => {
        console.log("Data from VideoDetails axios call :", res.data.length);
        if (res.data.length > 0) this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
         console.log("error: ", err);
        })

    
  }

  NotFoundStyle = {
    width: "20%",
    position: "fixed",
    left: "50%",
    top: "35%",
    fontSize: "2em",
    color: "grey"
  };

  // ContainerStyle = {
  //   position: "absolute",
  //   display: "flex",
  //   flexDirection: "column",
  //   width: "100%",
  //   left: "40%",
  //   top: "15%",
  //   flexDirection: "column"
  // };

  // VideoStyle = {
  //   width: "50%",
  //   height: "10%",
  //   padding: "10px",
  //   background: "#e0e0e0"
  // };

  PStyle = {
    fontFamily: "Lato",
    textAlign: "center",
    position: "absolute",
    top: "0px",
  };

  P2Style = {
    fontFamily: "Lato",
    color: "grey",
    left: "45%",
    textAlign: "center",
    position: "absolute",
    top: "20%",
    marginBottom: "0"

  }
  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  render() {
    console.log("state ", this.state);
    while (this.state.error === true) {
      return (
        <div style={this.NotFoundStyle}>
          <h1 style={this.PStyle}> Hmm...Check your server</h1>
          <NotFoundAnimation />
        </div>
      );
    }
    while (this.state.loading === true) {
      return (
        <div>
          <h1 style={this.P2Style}> Loading... </h1>
          <LoadingAnimation />
        </div>
      );
    }
    return (
      <div className="video-container" style={this.ContainerStyle}>
        <Sidebar />
        <iframe
          src={`https://www.youtube.com/embed/${
            this.props.match.params.video_id
          }`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <DonutChart
          data={this.state.data}
          videoData={this.props.videoData}
          youtubeVideoID={this.props.match.params.video_id}
        />
        <SplineChart data={this.state} />
        <button
          type="button"
          class="btn btn-info navbar-btn"
          onClick={this.toggleSidebar.bind(this)}
        >
          <span>Toggle Sidebar</span>
        </button>
      </div>
    );
  }
}

export default VideoDetail;
